import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import "../App.css";

const SectionMove = ({ nextSectionRef }) => {

    const scrollToNextSection = () => {
        if (nextSectionRef.current) {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (

        <button
            type="button"

            className="section-to-top"
            onClick={scrollToNextSection}

        >
            <IoIosArrowDown size={30} />
        </button>
    )

};

export default SectionMove;