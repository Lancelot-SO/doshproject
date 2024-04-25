// VideoPopup.jsx
import React from 'react';
import doshvideo from '../images/dosh.mp4';
import './VideoPopup.css';
// import { FaTimes } from 'react-icons/fa';

const VideoPopup = () => {

    // const handleClose = () => {
    //     // Remove the query parameter from the URL
    //     window.history.replaceState({}, document.title, window.location.pathname);
    // };
    return (
        <div className='video-modal'>
            <div className='video__modal-content'>
                <video
                    className='popupvid'
                    src={doshvideo}
                    autoPlay={true}
                    loop
                    muted
                    controls
                    loading='lazy'
                />
                {/*<FaTimes size={30} className='closetimes' onClick={handleClose} />*/}
            </div>
        </div>
    );
};

export default VideoPopup;
