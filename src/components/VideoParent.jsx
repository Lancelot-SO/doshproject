import React, { useState } from 'react';
import VideoPopup from './VideoPopup';

const VideoParent = () => {
    const [showPopup, setShowPopup] = useState(true);

    return (
        <div>
            {showPopup && <VideoPopup onClose={() => setShowPopup(false)} />}
            {/* Other content */}
        </div>
    );
};

export default VideoParent;
