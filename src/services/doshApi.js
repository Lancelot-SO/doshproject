import api from './api';

const doshApi = {
    /**
     * Fetches the CSRF token required for state-changing requests.
     * Includes a defensive check to ensure the response is JSON and not an HTML redirect.
     * 
     * @async
     * @function getCsrfToken
     * @returns {Promise<string>} The fresh CSRF token.
     * @throws {Error} If the response is invalid or the token is missing.
     */
    getCsrfToken: async () => {
        try {

            const response = await api.get('csrf-token', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            // Defensive check: Ensure response is valid JSON
            if (typeof response.data === 'string' && response.data.trim().toLowerCase().startsWith('<!doctype html')) {
                const snippet = response.data.substring(0, 1000);
                const title = snippet.match(/<title>(.*?)<\/title>/)?.[1] || 'Unknown';
                throw new Error(`Server returned HTML instead of JSON. Possible redirect or storage quota error. Title: ${title}`);
            }

            const token = response.data?.csrfToken;
            if (!token) {

                throw new Error('CSRF token not found in server response.');
            }


            return token;
        } catch (error) {

            throw error;
        }
    },

    /**
     * Performs the signup registration.
     * Handles Insurance, Financial, and Combo registration types.
     * Automatically fetches a fresh CSRF token before performing the POST request.
     * 
     * @async
     * @function signup
     * @param {Object} data - The transformed registration payload.
     * @returns {Promise<Object>} The API response data.
     * @throws {Error|Object} The error object or error response data.
     */
    signup: async (data) => {
        try {
            // 1. Fetch a fresh CSRF token
            const csrfToken = await doshApi.getCsrfToken();

            // 2. Perform the signup with the token in headers
            // NOTE: We rely on the browser to set the 'Origin' header automatically.
            const response = await api.post('transactions/signup', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'x-csrf-token': csrfToken,
                },
            });

            // 3. Defensive check: Ensure response is JSON and not HTML
            if (typeof response.data === 'string' && response.data.trim().toLowerCase().startsWith('<!doctype html')) {
                throw new Error('Server returned an invalid response (HTML). Please contact support.');
            }


            return response.data;
        } catch (error) {
            const errorDetail = error.response?.data || error;

            // Return error data for UI handling
            throw errorDetail;
        }
    },
};

export default doshApi;
