import axios from 'axios';

/**
 * Global Axios instance configured for the DOSH API.
 * Uses environment variables for the base URL.
 */
const currentUrl = process.env.REACT_APP_BASE_URL || '/api/v3';

const api = axios.create({
    baseURL: currentUrl,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true,
});

/**
 * Axios interceptor for global error handling.
 * Log errors to the console for easier debugging in development.
 */
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('[API Global Error]:', error.response || error);
        return Promise.reject(error);
    }
);

export default api;
