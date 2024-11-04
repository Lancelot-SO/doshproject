import React, { useState, useEffect } from 'react';
import './FinanceSideModal.css';
import { Link } from 'react-router-dom';
import { personalPackages, businessPackages, personalDetails, businessDetails } from '../doshdata';

const FinanceSideModal = ({ onClose }) => {
    const [activePackage, setActivePackage] = useState('Individual'); // Default to Individual
    const [currentPackageList, setCurrentPackageList] = useState(personalPackages);
    const [currentDetailList, setCurrentDetailList] = useState(personalDetails);
    const [activeLabel, setActiveLabel] = useState('Personal'); // Default to Personal

    useEffect(() => {
        // Set the default package list and details based on the active label
        if (activeLabel === 'Personal') {
            setCurrentPackageList(personalPackages);
            setCurrentDetailList(personalDetails);
            setActivePackage('Individual'); // Set default to Individual for Personal
        } else {
            setCurrentPackageList(businessPackages);
            setCurrentDetailList(businessDetails);
            setActivePackage('SOHO'); // Set the first business package by default
        }
    }, [activeLabel]);

    // Handle label change between Personal and Business
    const handleLabelChange = (label) => {
        setActiveLabel(label);
    };

    // Find active package details
    const activeDetail = currentDetailList.find(detail => detail.category === activePackage);

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className='top__section'>
                    <h2 className='text-[32px] text-[#A2865F]'>DOSH Financial Services</h2>
                    <button onClick={onClose} className='top__section-close'>X</button>
                </div>

                {/* List of labels (Personal / Business) */}
                <div className='package_list'>
                    <ul className='package_lists'>
                        <li
                            className={`package_link ${activeLabel === 'Personal' ? 'link_underline' : ''}`}
                            onClick={() => handleLabelChange('Personal')}
                        >
                            Personal
                        </li>
                        <li
                            className={`package_link ${activeLabel === 'Business' ? 'link_underline' : ''}`}
                            onClick={() => handleLabelChange('Business')}
                        >
                            Business
                        </li>
                    </ul>
                </div>

                {/* List of packages */}
                <ul className='package_lists'>
                    {currentPackageList.map((packageItem, index) => (
                        <li key={index}>
                            <Link
                                className={`package_linker ${packageItem.name === activePackage ? 'link_underline' : ''}`}
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
                            <h1 className='package_title'>{activeDetail.title}</h1>
                            {activeDetail.number && <h2 className='package_number'>{activeDetail.number}</h2>}
                            <span className='package_desc'>{activeDetail.desc}</span>
                            <p className='package_details'>{activeDetail.details}</p>
                            <small>
                                <Link to={activeDetail.link}>Sign up</Link>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="28"
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinanceSideModal;
