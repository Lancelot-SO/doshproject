import axios from 'axios';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TrackPageVisit = () => {
    const location = useLocation();

    useEffect(() => {
        const fullUrl = window.location.origin + location.pathname + location.search;

        // 1. Custom page-visit tracking
        axios.post('/api/page-visit', {
            page_url: fullUrl
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: false
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

        // 2. Google Analytics page_view on route change
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'page_view', {
                page_path: location.pathname + location.search,
                page_location: fullUrl,
                page_title: document.title
            });
        }

    }, [location.pathname, location.search]);

    return null;
};

export default TrackPageVisit;