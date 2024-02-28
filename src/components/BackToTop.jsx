import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from "react-icons/io";
import "../App.css";

const BackToTopBtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => (window.scrollY > 600 ? setShow(true)
            : setShow(false)));
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        show && (
            <button
                type="button"
                onClick={() => scrollToTop()}
                className="back-to-top"
            >
                <IoIosArrowUp size={30} />
            </button>
        )
    );
};

export default BackToTopBtn;