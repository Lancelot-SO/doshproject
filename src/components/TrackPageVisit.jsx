import axios from 'axios';
import { useEffect } from 'react';

const TrackPageVisit = ({ pageUrl }) => {
    useEffect(() => {
        axios.post('https://doshcms.interactivedigital.com.gh/api/page-visit', {
            page_url: pageUrl
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false // optional if CORS configured
        })
            .then(response => {
                // Optionally log or ignore
                console.log('Visit tracked:', response.data.message);
            })
            .catch(error => {
                // Graceful error handling
                if (error.response) {
                    // Request made, server responded with error code
                    console.warn('Track visit failed:', error.response.status, error.response.data?.error);
                } else if (error.request) {
                    // Request made, no response received
                    console.warn('Track visit error: No response from server');
                } else {
                    // Something else went wrong
                    console.warn('Unexpected error:', error.message);
                }
            });
    }, [pageUrl]);

    return null;
};

export default TrackPageVisit;