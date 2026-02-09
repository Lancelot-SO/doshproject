/**
 * Validates the signup form data based on the current step in the multi-step form.
 * 
 * @function validateSignupForm
 * @param {Object} formData - Current form state containing all user inputs.
 * @param {number} step - The current step of the multi-step form (0, 1, or 2).
 * @returns {Object} An object containing { isValid: boolean, errors: Object }
 */
export const validateSignupForm = (formData, step) => {
    const errors = {};
    const {
        insuranceCategory,
        insuranceType,
        paymentMethod,
        paymentMode,
        phoneNumber,
        country,
        firstName,
        lastName,
        password,
        confirmPassword,
    } = formData;

    // Step 0: Registration Type & Insurance Details
    if (step === 0) {
        if (!formData.insuranceOption) {
            errors.insuranceOption = 'Required';
        } else {
            const isInsurance = ['insuranceOnly', 'plan', 'account'].includes(formData.insuranceOption);
            if (isInsurance) {
                if (!insuranceCategory) errors.insuranceCategory = 'Required';
                if (!insuranceType) errors.insuranceType = 'Required';
            }
            if (formData.insuranceOption === 'financial' && !formData.productType) {
                errors.productType = 'Required';
            }
        }
    }

    // Step 1: Payment Frequency
    if (step === 1) {
        if (!paymentMethod) {
            errors.paymentMethod = 'Required';
        }
    }

    // Step 2: Payment Mode, Health & Account Details
    if (step === 2) {
        if (!paymentMode) errors.paymentMode = 'Required';
        if (paymentMode === 'Debit and Credit Cards' && !formData.currency) {
            errors.currency = 'Required';
        }

        if (formData.insuranceOption === 'account' && !formData.doshNumber) {
            errors.doshNumber = 'Required';
        }

        if (formData.insuranceOption === 'insuranceOnly') {
            if (!formData.accountOption) {
                errors.accountOption = 'Required';
            }
            if (formData.accountOption === 'existingAccount' && !formData.doshNumber) {
                errors.doshNumber = 'Required';
            }
            if (!formData.above60) {
                errors.above60 = 'Required';
            }
        }

        if (!country) errors.country = 'Required';
        if (!phoneNumber) errors.phoneNumber = 'Required';
        else if (phoneNumber.length < 7) {
            errors.phoneNumber = 'Phone number is too short';
        }
    }

    // Step 3: Personal Details
    if (step === 3) {
        if (!firstName) errors.firstName = 'Required';
        if (!lastName) errors.lastName = 'Required';
        if (!password) {
            errors.password = 'Required';
        } else if (password.length < 6) {
            errors.password = 'Minimum 6 characters';
        }
        if (password && password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};
