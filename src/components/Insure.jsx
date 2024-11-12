import React, { useState, useEffect } from 'react';
import './Insure.css';
import { Link } from 'react-router-dom';
import { packagelist, enhancelist, insuranceDetails, enhanceDetails } from '../doshdata';
import Flyer from './Flyer';

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";


import standard from "../images/ph1.png";
import enhanced from "../images/ph2.png";

const Insure = ({ onClose }) => {
    const [activePackage, setActivePackage] = useState(null); // Start with no specific package
    const [currentPackageList, setCurrentPackageList] = useState([]);
    const [currentDetailList, setCurrentDetailList] = useState([]);
    const [activeLabel, setActiveLabel] = useState('Standard'); // Default to Standard
    const [showFlyerModal, setShowFlyerModal] = useState(false);

    useEffect(() => {
        // Default to 'Standard' label with standard details
        setCurrentPackageList(packagelist);
        setCurrentDetailList(insuranceDetails);
        setActiveLabel('Standard');
        setActivePackage(null); // No specific package selected by default
    }, []);

    const handleLabelChange = (label) => {
        setActiveLabel(label);
        if (label === 'Standard') {
            setCurrentPackageList(packagelist);
            setCurrentDetailList(insuranceDetails);
            setActivePackage(null); // No active package, show default
        } else {
            setCurrentPackageList(enhancelist);
            setCurrentDetailList(enhanceDetails);
            setActivePackage(null); // No active package, show default
        }
    };

    // Determine details to display based on active package and label
    const activeDetail = activePackage
        ? currentDetailList.find(detail => detail.category === activePackage)
        : activeLabel === 'Standard'
            ? {
                img: standard,
                number: "Standard Packages",
                details: "For health insurance that covers life basics, DOSH’s Standard Packages are a no-brainer! Cover essentials like eyecare, mental health, and more, with plans that make healthcare affordable, accessible and available, and get back to living your best life—worry-free! "
            }
            : {
                img: enhanced,
                number: "Enhanced Packages",
                details: "It pays to be prepared, no matter what life throws your way. And with DOSH’s Enhanced Packages, you get policies that cover you from every angle and guarantee your peace of mind. Built on the foundation of our Standard Packages, these policies go the extra mile in providing comprehensive coverage in cases of partial and permanent disability, critical illness, and even death."
            };

    // Functions to navigate between packages
    const goToNextPackage = () => {
        const currentIndex = currentPackageList.findIndex(item => item.name === activePackage);
        const nextIndex = (currentIndex + 1) % currentPackageList.length;
        setActivePackage(currentPackageList[nextIndex].name);
    };

    const goToPreviousPackage = () => {
        const currentIndex = currentPackageList.findIndex(item => item.name === activePackage);
        const previousIndex = (currentIndex - 1 + currentPackageList.length) % currentPackageList.length;
        setActivePackage(currentPackageList[previousIndex].name);
    };

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className='top__section'>
                    <h2 className='text-[32px] text-[#A2865F]'>DOSH Health Insurance</h2>
                    <button onClick={onClose} className='top__section-close'>X</button>
                </div>

                <div className='package_list'>
                    <ul className='package_lists'>
                        <li
                            className={`package_link ${activeLabel === 'Standard' ? 'link_underline' : ''}`}
                            onClick={() => handleLabelChange('Standard')}
                        >
                            Standard
                        </li>
                        <li
                            className={`package_link ${activeLabel === 'Enhanced' ? 'link_underline' : ''}`}
                            onClick={() => handleLabelChange('Enhanced')}
                        >
                            Enhanced
                        </li>
                    </ul>
                </div>

                <ul className='package_lists'>
                    {currentPackageList.map((packageItem, index) => (
                        <li key={index}>
                            <Link
                                className={`package_link ${packageItem.name === activePackage ? 'link_underline' : ''}`}
                                onClick={() => setActivePackage(packageItem.name)}
                            >
                                {packageItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className='main_package'>
                    <div className='package_left'>
                        <img src={activeDetail.img} alt={activeDetail.title} loading='lazy' />
                    </div>
                    <div className='package_right'>
                        {activeDetail.number && <h2 className='package_number'>{activeDetail.number}</h2>}
                        <p className='package_details w-[600px]'>{activeDetail.details}</p>
                        <Link
                            onClick={() => setShowFlyerModal(true)}
                            className='flyer-link-insure'
                        >
                            {activeDetail.flyer}
                        </Link>
                        {activeDetail.link && (
                            <Link to={activeDetail.link} target="_blank" rel="noopener noreferrer">
                                <small>
                                    <h6 className='text-white'>Sign up</h6>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="#fff"
                                        className="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                        />
                                    </svg>
                                </small>
                            </Link>
                        )}

                        {/* Navigation arrows - show only if a specific package is selected */}
                        {activePackage && (
                            <div className="flex gap-6 h-[40px] items-center justify-center">
                                <div className='flex items-center gap-2'>
                                    <h5>Click here to see previous product</h5>
                                    <div onClick={goToPreviousPackage} className='cursor-pointer w-8 h-8 flex items-center justify-center rounded-full
                                 bg-transparent hover:bg-[#987C55] border'><FaArrowLeft /></div>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <div onClick={goToNextPackage} className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full
                                 bg-transparent hover:bg-[#987C55] border"><FaArrowRight /></div>
                                    <h5>Click here to see next product</h5>
                                </div>

                            </div>
                        )}

                        {showFlyerModal && <Flyer onClose={() => setShowFlyerModal(false)} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insure;
