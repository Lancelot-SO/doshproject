import React, { useState, useEffect } from 'react';
import './Insure.css';
import { Link } from 'react-router-dom';
import { packagelist, enhancelist, insuranceDetails, enhanceDetails } from '../doshdata'; // Import insurance data
import Flyer from './Flyer'; // Import Flyer component

const Insure = ({ onClose }) => {
    const [activePackage, setActivePackage] = useState('DOSH 365'); // Default to DOSH 365
    const [currentPackageList, setCurrentPackageList] = useState([]);
    const [currentDetailList, setCurrentDetailList] = useState([]);
    const [activeLabel, setActiveLabel] = useState('Standard'); // Default to Standard
    const [showFlyerModal, setShowFlyerModal] = useState(false); // State for controlling Flyer modal

    useEffect(() => {
        // Set the default package list to 'Standard' and the active package to 'DOSH 365'
        setCurrentPackageList(packagelist);
        setCurrentDetailList(insuranceDetails);
        setActivePackage('DOSH 365');
        setActiveLabel('Standard');
    }, []);

    // Handle label change (Standard / Enhanced)
    const handleLabelChange = (label) => {
        setActiveLabel(label);
        if (label === 'Standard') {
            setCurrentPackageList(packagelist);
            setCurrentDetailList(insuranceDetails);
            setActivePackage('DOSH 365'); // Reset to default when switching back to Standard
        } else {
            setCurrentPackageList(enhancelist);
            setCurrentDetailList(enhanceDetails);
            setActivePackage(enhancelist[0].name); // Set first enhanced package by default
        }
    };

    // Find active package details
    const activeDetail = currentDetailList.find(detail => detail.category === activePackage);

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className='top__section'>
                    <h2 className='text-[32px] text-[#A2865F]'>DOSH Health Insurance</h2>
                    <div>
                        <button onClick={onClose} className='top__section-close'>X</button>
                    </div>
                </div>

                {/* List of labels (Standard / Enhanced) */}
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

                {/* List of packages */}
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

                {/* Details of active package */}
                {activeDetail && (
                    <div className='main_package'>
                        <div className='package_left'>
                            {activeDetail.img && <img src={activeDetail.img} alt='avatar' />}
                        </div>
                        <div className='package_right'>
                            {activeDetail.number && <h2 className='package_number'>{activeDetail.number}</h2>}
                            <p className='package_details'>{activeDetail.details}</p>
                            <Link
                                onClick={() => setShowFlyerModal(true)} // Trigger Flyer modal
                                className='flyer-link-insure'
                            >
                                Click here to view full flyer
                            </Link>
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
                            {showFlyerModal && <Flyer onClose={() => setShowFlyerModal(false)} />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Insure;
