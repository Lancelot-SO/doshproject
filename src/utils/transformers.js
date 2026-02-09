/**
 * Maps readable form labels/values to API-specific identifiers.
 */
const MAPPINGS = {
    paymentMode: {
        'MTN Mobile Money': 'mtn',
        'AirtelTigo Money': 'atm',
        'Telecel Cash': 'vfcash',
        'Debit and Credit Cards': 'CARD',
        'DOSH': 'dosh',
    },
    paymentFor: {
        'insuranceOnly': 'insurance',
        'financial': 'financial',
        'combo': 'financial-insurance',
        'account': 'insurance',
        'plan': 'financial-insurance',
    },
    insuranceProduct: {
        'DOSH 365': 'DOSH 365 premium',
        'DOSH 750': 'DOSH 750 premium',
        'DOSH 1000': 'DOSH 1000 premium',
        'DOSH 2500': 'DOSH 2500 premium',
        'DOSH 5000': 'DOSH 5000 premium',
        'DOSH 10000': 'DOSH 10000 premium',
    },
    insuranceCategory: {
        'Family': 'family',
        'Group': 'group',
    },
};

/**
 * Transforms the React form state into the specific JSON payload structure
 * expected by the DOSH-MT Registration API.
 * 
 * API Payload Requirements (from Postman collection):
 * 
 * INSURANCE ONLY:
 * - paymentMode, accountNumber, phone, paymentMethod, insuranceProduct,
 *   nameToDebit, paymentFor, insuranceCategory, insuranceMetadata, 
 *   firstname, lastname, currency
 * 
 * FINANCIAL ONLY:
 * - paymentMode, accountNumber, phone, paymentMethod, nameToDebit,
 *   paymentFor, productType
 * 
 * COMBO (financial-insurance):
 * - All insurance fields + productType
 */
export const transformToSignupPayload = (formData) => {
    const {
        paymentMethod,
        paymentMode,
        phoneNumber,
        insuranceCategory,
        insuranceType,
        insuranceOption,
        firstName,
        lastName,
        medicalCondition,
        isElderly,
        productType,
    } = formData;

    const cleanFirstName = firstName?.trim() || '';
    const cleanLastName = lastName?.trim() || '';

    // Combine country code and digits
    const code = formData.country.replace(/\+/g, '');
    const digits = phoneNumber.replace(/\D/g, '');
    const cleanPhone = `${code}${digits}`;

    // Calculate paymentFor based on insuranceOption and accountOption (for insuranceOnly sub-paths)
    let paymentFor = MAPPINGS.paymentFor[insuranceOption] || 'insurance';

    // Handle accountOption sub-paths when insuranceOnly (both daily and yearly)
    if (insuranceOption === 'insuranceOnly' && formData.accountOption) {
        if (formData.accountOption === 'existingAccount') {
            paymentFor = 'insurance'; // Insurance add-on to existing account
        } else if (formData.accountOption === 'createPlan') {
            paymentFor = 'financial-insurance'; // Combo: create new financial + insurance
        } else if (formData.accountOption === 'insuranceOnly') {
            paymentFor = 'insurance'; // Pure insurance-only (only for yearly)
        }
    }

    // Base payload - common to all types
    const payload = {
        paymentMode: MAPPINGS.paymentMode[paymentMode] || (paymentMode?.toLowerCase()),
        accountNumber: cleanPhone,
        phone: cleanPhone,
        // Postman Check: 'financial' can be 'daily' or 'yearly'. Default to 'daily' if not set for financial.
        paymentMethod: (paymentMethod?.toLowerCase() || (paymentFor === 'financial' ? 'daily' : 'yearly')),
        paymentFor: paymentFor,
        currency: formData.currency || 'GHS', // Use selected currency or default to GHS
    };

    if (formData.email) {
        payload.email = formData.email.trim();
    }

    // INSURANCE ONLY or COMBO
    if (paymentFor === 'insurance' || paymentFor === 'financial-insurance') {
        payload.firstname = cleanFirstName;
        payload.lastname = cleanLastName;
        payload.insuranceProduct = MAPPINGS.insuranceProduct[insuranceType] || insuranceType;

        // Ensure no double spaces in nameToDebit
        payload.nameToDebit = `${cleanFirstName} ${cleanLastName}`.replace(/\s+/g, ' ').trim();

        // Postman file confirms 'family' is used. 'personal' is used for productType, 
        // so we'll stick to 'personal' for category as well (reverting from 'individual').
        payload.insuranceCategory = MAPPINGS.insuranceCategory[insuranceCategory] || insuranceCategory?.toLowerCase() || 'personal';

        payload.insuranceMetadata = {
            medicalConditions: medicalCondition === 'yes' ? ['pre-existing'] : [],
            isElderly: !!isElderly,
        };
    }

    // FINANCIAL ONLY
    if (paymentFor === 'financial') {
        payload.nameToDebit = cleanPhone;
        payload.productType = productType?.toLowerCase() || 'personal';
    }

    // COMBO
    if (paymentFor === 'financial-insurance') {
        payload.productType = productType?.toLowerCase() || 'personal';
    }

    return payload;
};
