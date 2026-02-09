import axios from 'axios';

// FORCED PRODUCTION CONFIG: Ignore environment variables to prevent local overrides.
const FINAL_BASE_URL = 'https://dsp.onenet.xyz:50443/api/v3';

// Adjust this to match your CSRF endpoint from Postman:
const CSRF_ENDPOINT = '/csrf-token';

// ------------- CSRF TOKEN FETCHER -------------

// Helper to clean and join URLs
const joinUrl = (base, path) => {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${cleanBase}${cleanPath}`;
};

/**
 * Fetches a CSRF token from the server.
 * This token is required for all state-changing requests (POST, PUT, DELETE).
 * 
 * @async
 * @function fetchCsrfToken
 * @returns {Promise<string>} The CSRF token.
 * @throws {Error} If the token cannot be found or the request fails.
 */
async function fetchCsrfToken() {
    const url = joinUrl(FINAL_BASE_URL, CSRF_ENDPOINT);
    console.log('[Signup Debug] Fetching CSRF from:', url);

    try {
        const response = await axios.get(url, {
            withCredentials: true,
            headers: {
            }
        });

        // Defensive check: If server returns HTML instead of JSON, the proxy is misconfigured
        const contentType = response.headers['content-type'];
        if (contentType && contentType.includes('text/html')) {
            console.error('[Signup Error] Received HTML instead of JSON. Check your server proxy configuration.');
            throw new Error('Server configuration error: The API proxy is returning HTML instead of JSON. Please check your .htaccess or Nginx config.');
        }

        const token =
            response.data?.csrfToken ||
            response.data?.token ||
            response.headers['x-csrf-token'];

        if (!token) {
            console.error('CSRF response:', response.data, response.headers);
            throw new Error('CSRF token not found in response');
        }

        return token;
    } catch (error) {
        console.error('Failed to fetch CSRF token:', {
            message: error.message,
            url: url,
            status: error.response?.status,
            data: error.response?.data
        });
        throw new Error('Unable to connect to the server (CORS or Network Error). Please ensure you are on a whitelisted domain.');
    }
}

// ------------- SIGNUP REQUEST -------------

/**
 * Performs a signup transaction.
 * @param {Object} payload - The transformed payload for the API.
 */
/**
 * Executes a signup transaction.
 * First fetches a fresh CSRF token, then sends the signup payload.
 * Handles specific HTTP status codes and maps them to user-friendly messages.
 * 
 * @async
 * @function executeSignup
 * @param {Object} payload - The registration data to be sent to the API.
 * @returns {Promise<{ok: boolean, status: number, data?: any, errorCode?: string, message?: string}>}
 */
export async function executeSignup(payload) {
    const url = joinUrl(FINAL_BASE_URL, '/transactions/signup');
    console.log('[Signup Debug] Posting to:', url);

    try {
        // 1. Get CSRF token
        const csrfToken = await fetchCsrfToken();

        // 2. Prepare request
        const response = await axios.post(url, payload, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'x-csrf-token': csrfToken,
            },
            withCredentials: true
        });

        return {
            ok: true,
            status: response.status,
            data: response.data
        };
    } catch (error) {
        if (error.response) {
            const { status, data } = error.response;

            // Custom handling for known cases
            if (status === 422) {
                return {
                    ok: false,
                    status,
                    errorCode: 'UNPROCESSABLE_ENTITY',
                    message:
                        data?.message ||
                        'Signup failed: there is an existing unpaid transaction or invalid data.'
                };
            }

            if (status === 400) {
                return {
                    ok: false,
                    status,
                    errorCode: 'BAD_REQUEST',
                    message: data?.message || 'Invalid input. Please check your details.'
                };
            }

            if (status === 401 || status === 403) {
                return {
                    ok: false,
                    status,
                    errorCode: 'UNAUTHORIZED',
                    message: 'You are not authorized. Please log in and try again.'
                };
            }

            return {
                ok: false,
                status,
                errorCode: 'SERVER_ERROR',
                message:
                    data?.message ||
                    'An error occurred while processing your signup. Please try again.'
            };
        }

        // Network / timeout / other errors
        console.error('Network or unknown error', error);
        return {
            ok: false,
            status: 0,
            errorCode: 'NETWORK_ERROR',
            message: 'Network error. Please check your connection and try again.'
        };
    }
}
