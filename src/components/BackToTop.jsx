import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from "react-icons/io";
import whatsapp from "../images/whatsapp.png";
import { useLocation } from 'react-router-dom';
import "../App.css";

const BackToTopBtn = () => {
    const [show, setShow] = useState(false);
    const [showWhatsapp, setShowWhatsapp] = useState(true);
    const location = useLocation();
    const mobileBreakpoint = 768; // Define mobile screen width

    // Back-to-top button logic
    useEffect(() => {
        let timeoutId;
        const handleScroll = () => {
            if (window.innerWidth < mobileBreakpoint) {
                // On mobile devices, show button immediately when scrolling
                setShow(true);
                if (timeoutId) clearTimeout(timeoutId);
                // Then hide after 2 seconds of inactivity
                timeoutId = setTimeout(() => {
                    setShow(false);
                }, 2000);
            } else {
                // On larger devices, show back-to-top if scrolled more than 600 pixels.
                setShow(window.scrollY > 600);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    // WhatsApp icon logic: apply hide/show behavior only on mobile devices.
    useEffect(() => {
        let whatsappTimeout;
        const handleScrollWhatsapp = () => {
            if (window.innerWidth < mobileBreakpoint) {
                // Hide WhatsApp icon immediately on scroll
                setShowWhatsapp(false);
                if (whatsappTimeout) clearTimeout(whatsappTimeout);
                // After 2 seconds of inactivity, show the icon again
                whatsappTimeout = setTimeout(() => {
                    setShowWhatsapp(true);
                }, 2000);
            }
        };

        if (window.innerWidth < mobileBreakpoint) {
            window.addEventListener('scroll', handleScrollWhatsapp);
        } else {
            // For larger screens, ensure WhatsApp icon is always visible.
            setShowWhatsapp(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScrollWhatsapp);
            if (whatsappTimeout) clearTimeout(whatsappTimeout);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    // Render the WhatsApp icon only when not on the /dashboard route.
    const isDashboard = location.pathname === '/dashboard';

    return (
        <>
            {show && (
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="back-to-top"
                >
                    <IoIosArrowUp size={30} />
                </button>
            )}
            {(!isDashboard && showWhatsapp) && (
                <a
                    href="https://wa.me/+12032939850"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp_float"
                >
                    <img src={whatsapp} alt='WhatsApp' className='cursor-pointer' />
                </a>
            )}
        </>
    );
};

export default BackToTopBtn;
