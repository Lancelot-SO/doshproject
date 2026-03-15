import axios from 'axios';
import { useEffect } from 'react';

const TrackPageVisit = ({ pageUrl }) => {
    useEffect(() => {
        axios.post('/api/page-visit', {
            page_url: pageUrl
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false // optional if CORS configured
        })
            .then(response => {
                // Optionally log or ignore

            })
            .catch(error => {
                // Graceful error handling
                if (error.response) {
                    // Request made, server responded with error code

                } else if (error.request) {
                    // Request made, no response received

                } else {
                    // Something else went wrong

                }
            });
    }, [pageUrl]);

    return null;
};

export default TrackPageVisit;