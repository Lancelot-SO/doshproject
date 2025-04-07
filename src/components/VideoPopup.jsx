import React from 'react';
import { useNavigate } from 'react-router-dom';
import doshvideo from '../images/dosh.mp4';
import './VideoPopup.css';
import { FaTimes } from 'react-icons/fa';

const VideoPopup = ({ onClose }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        // Call the onClose prop to update state in the parent
        onClose();
        // Navigate to the homepage ("/")
        navigate('/');
    };

    return (
        <div className="video-modal" onClick={handleClose}>
            <div className="video__modal-content" onClick={(e) => e.stopPropagation()}>
                <video
                    className="popupvid"
                    src={doshvideo}
                    autoPlay
                    loop
                    muted
                    controls
                    loading="lazy"
                />
            </div>
            <FaTimes size={30} className="closetimes" onClick={handleClose} />
        </div>
    );
};

export default VideoPopup;
