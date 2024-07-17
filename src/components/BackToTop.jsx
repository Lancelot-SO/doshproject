import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from "react-icons/io";
import whatsapp from "../images/whatsapp.png"
import "../App.css";

const BackToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

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
            <a
                href="https:/wa.me/+12032939850"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp_float"
            >
                <img src={whatsapp} alt='app' className='cursor-pointer ' />
            </a>
        </>
    );
};

export default BackToTopBtn;
