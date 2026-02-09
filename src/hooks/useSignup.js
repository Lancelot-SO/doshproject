import { useState, useCallback } from 'react';
import { executeSignup } from '../services/signupService';
import { transformToSignupPayload } from '../utils/transformers';

export function useSignup() {
    const [loading, setLoading] = useState(false);
    const [successData, setSuccessData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    /**
     * The primary signup function provided by the hook.
     * It handles data transformation, loading states, and error reporting.
     * 
     * @async
     * @function signup
     * @param {Object} formData - The raw form data from the UI.
     * @returns {Promise<Object>} The API response data on success.
     * @throws {Object} The error result on failure.
     */
    const signup = useCallback(
        async (formData) => {
            setLoading(true);
            setSuccessData(null);
            setErrorMessage('');

            try {
                const payload = transformToSignupPayload(formData);
                console.log('[Signup Debug] Sending Payload:', payload);

                const result = await executeSignup(payload);

                if (result.ok) {
                    console.log('[Signup Success]', result.data);
                    setSuccessData(result.data);
                    return result.data;
                } else {
                    console.error('[Signup Error]', result);
                    setErrorMessage(result.message || 'Signup failed.');
                    throw result;
                }
            } catch (err) {
                // If it was already set by the result.ok block, it's fine.
                // If it's a raw axios error (rarely should happen here), set generic.
                if (!errorMessage) {
                    setErrorMessage(err.message || 'An unexpected error occurred.');
                }
                throw err;
            } finally {
                setLoading(false);
            }
        },
        [errorMessage]
    );

    return {
        signup,
        loading,
        successData,
        errorMessage,
        setErrorMessage,
        setSuccessData
    };
}
