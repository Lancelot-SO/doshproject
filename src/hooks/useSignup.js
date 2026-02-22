import { useCallback, useState } from 'react';
import { executeSignup, getSignupFee } from '../services/signupService';
import { transformToSignupPayload } from '../utils/transformers';

export function useSignup() {
    const [loading, setLoading] = useState(false);
    const [successData, setSuccessData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorData, setErrorData] = useState(null);
    const [feeData, setFeeData] = useState(null);
    const [feeLoading, setFeeLoading] = useState(false);

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
            setErrorData(null);

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
                    setErrorData(result.data || null);
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

    /**
     * getFee: Fetches the pricing breakdown from the API.
     */
    const getFee = useCallback(
        async (formData) => {
            setFeeLoading(true);
            try {
                const payload = transformToSignupPayload(formData);
                const result = await getSignupFee(payload);
                if (result.ok) {
                    setFeeData(result.data);
                    return result.data;
                } else {
                    console.error('[Fee Fetch Error]', result);
                    setFeeData(null);
                }
            } catch (err) {
                console.error('[Fee Exception]', err);
                setFeeData(null);
            } finally {
                setFeeLoading(false);
            }
        },
        []
    );

    return {
        signup,
        getFee,
        loading,
        feeLoading,
        successData,
        feeData,
        errorMessage,
        errorData,
        setErrorMessage,
        setSuccessData
    };
}
