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
        'DOSH 500': 'DOSH-500',
        'DOSH 750': 'DOSH 750 premium',
        'DOSH 900': 'DOSH-900',
        'DOSH 1000': 'DOSH 1000 premium',
        'DOSH 1200': 'DOSH-1200',
        'DOSH 2500': 'DOSH 2500 premium',
        'DOSH 2800': 'DOSH-2800',
        'DOSH 5000': 'DOSH 5000 premium',
        'DOSH 5500': 'DOSH-5500',
        'DOSH 10000': 'DOSH 10000 premium',
        'DOSH 11000': 'DOSH-11000',
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
        above60,
        productType,
    } = formData;

    const isElderly = above60 === 'yes';

    const cleanFirstName = firstName?.trim() || '';
    const cleanLastName = lastName?.trim() || '';

    // Combine country code and digits (Drop leading zero if it exists)
    const code = formData.country.replace(/\+/g, '');
    let digits = phoneNumber.replace(/\D/g, '');
    if (digits.startsWith('0')) {
        digits = digits.substring(1);
    }
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
        renewalPlan: (paymentMethod?.toLowerCase() || (paymentFor === 'financial' ? 'daily' : 'yearly')),
        paymentFor: paymentFor,
        username: cleanPhone,
        currency: formData.currency || 'GHS', // Use selected currency or default to GHS
        // Add default names to avoid API errors if validation is strict
        firstname: cleanFirstName || 'Guest',
        lastname: cleanLastName || 'User',
    };

    if (formData.email) {
        payload.email = formData.email.trim();
    }

    // INSURANCE ONLY or COMBO
    if (paymentFor === 'insurance' || paymentFor === 'financial-insurance') {
        payload.firstname = cleanFirstName || 'Guest';
        payload.lastname = cleanLastName || 'User';

        // PRODUCT MAPPING LOGIC
        const mappedProduct = MAPPINGS.insuranceProduct[insuranceType];
        payload.insuranceProduct = mappedProduct || insuranceType;

        console.log('[Transformer Debug] Product Selection:', {
            input: insuranceType,
            mapped: mappedProduct,
            final: payload.insuranceProduct
        });

        // nameToDebit fallback: Ensure it's a string name, not a number, as API might validate format
        const fullName = `${cleanFirstName} ${cleanLastName}`.trim();
        payload.nameToDebit = fullName || 'Guest User';

        // Mapping categories precisely to API expectations
        const categoryMap = { 'Individual': 'personal', 'Family': 'family', 'Group': 'group' };
        payload.insuranceCategory = categoryMap[insuranceCategory] || insuranceCategory?.toLowerCase() || 'personal';

        payload.insuranceMetadata = {
            medicalConditions: medicalCondition === 'yes' ? ['pre-existing'] : [],
            isElderly: !!isElderly,
            above60: above60 === 'yes',
            medicalCondition: medicalCondition === 'yes'
        };
        // For the fee endpoint and registration
        payload.medicalConditions = medicalCondition === 'yes';
        payload.above60 = above60 === 'yes';
        payload.isElderly = above60 === 'yes';
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

    console.log('[Transformer Debug] Final Resulting Payload:', JSON.stringify(payload, null, 2));

    return payload;
};
