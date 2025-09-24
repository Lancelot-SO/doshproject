import React, { useEffect, useState } from "react";

const Privacy = ({ onClose }) => {
    const [privacyStatement, setPrivacyStatement] = useState(null);

    // Fetch privacy statement
    useEffect(() => {
        const fetchPrivacyData = async () => {
            try {
                const response = await fetch(
                    "https://doshcms.interactivedigital.com.gh/api/privacy-statement"
                );
                const data = await response.json();
                setPrivacyStatement(data.privacy_statement);
            } catch (error) {
                console.error("Error fetching privacy data:", error);
                setPrivacyStatement(
                    "<p>Unable to load privacy policy at this time.</p>"
                );
            }
        };
        fetchPrivacyData();
    }, []);

    if (privacyStatement === null) {
        return <div>Loading...</div>;
    }

    // Prevent clicks inside modal from closing
    const handleContentClick = (e) => e.stopPropagation();

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="no-scrollbar relative bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto"
                onClick={handleContentClick}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl focus:outline-none"
                    aria-label="Close privacy policy"
                >
                    &times;
                </button>

                <div dangerouslySetInnerHTML={{ __html: privacyStatement }} />
            </div>
        </div>
    );
};

export default Privacy;
