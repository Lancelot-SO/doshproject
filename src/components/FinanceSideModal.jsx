import React, { useState, useEffect } from 'react';
import './FinanceSideModal.css';
import { Link } from 'react-router-dom';
import {
    personalPackages,
    businessPackages,
    personalDetails as staticPersonalDetails,
    businessDetails as staticBusinessDetails
} from '../doshdata';

const BASE_URL = 'https://doshcms.interactivedigital.com.gh/';

const FinanceSideModal = ({ onClose }) => {
    // UI state
    const [activeLabel, setActiveLabel] = useState('Personal');
    const [activePackage, setActivePackage] = useState('Individual');
    const [currentPackageList, setCurrentPackageList] = useState(personalPackages);
    const [currentDetailList, setCurrentDetailList] = useState(staticPersonalDetails);

    // merged data from CMS
    const [mergedPersonalDetails, setMergedPersonalDetails] = useState(staticPersonalDetails);
    const [mergedBusinessDetails, setMergedBusinessDetails] = useState(staticBusinessDetails);

    // 1️⃣ On mount: fetch both Personal and Business package data
    useEffect(() => {
        async function fetchData() {
            try {
                const [personalRes, businessRes] = await Promise.all([
                    fetch(`${BASE_URL}api/fetch-financial-personal`),
                    fetch(`${BASE_URL}api/fetch-financial-business`)
                ]);
                const [personalData, businessData] = await Promise.all([
                    personalRes.json(),
                    businessRes.json()
                ]);

                // merge Personal
                const updatedPersonal = staticPersonalDetails.map(item => {
                    const cms = personalData.find(d => d.id === Number(item.id));
                    return cms
                        ? {
                            ...item,
                            img: `${BASE_URL}${cms.image}`,
                            details: cms.details
                        }
                        : item;
                });

                // merge Business
                const updatedBusiness = staticBusinessDetails.map(item => {
                    const cms = businessData.find(d => d.id === Number(item.id));
                    return cms
                        ? {
                            ...item,
                            img: `${BASE_URL}${cms.image}`,
                            details: cms.details
                        }
                        : item;
                });

                setMergedPersonalDetails(updatedPersonal);
                setMergedBusinessDetails(updatedBusiness);
            } catch (err) {
                console.error('Error fetching finance packages:', err);
            }
        }

        fetchData();
    }, []);

    // 2️⃣ Whenever the label or merged data changes, swap lists
    useEffect(() => {
        if (activeLabel === 'Personal') {
            setCurrentPackageList(personalPackages);
            setCurrentDetailList(mergedPersonalDetails);
            setActivePackage(personalPackages[0].name);
        } else {
            setCurrentPackageList(businessPackages);
            setCurrentDetailList(mergedBusinessDetails);
            setActivePackage(businessPackages[0].name);
        }
    }, [activeLabel, mergedPersonalDetails, mergedBusinessDetails]);

    // switch label
    const handleLabelChange = (label) => {
        setActiveLabel(label);
    };

    // Find the detail object for the active package
    const activeDetail = currentDetailList.find(d => d.category === activePackage);

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className="top__section">
                    <h2 className="text-[32px] text-[#A2865F]">DOSH Financial Services</h2>
                    <button onClick={onClose} className="top__section-close">X</button>
                </div>

                {/* Labels */}
                <div className="package_list">
                    <ul className="package_lists">
                        {['Personal', 'Business'].map(label => (
                            <li
                                key={label}
                                className={`package_link ${activeLabel === label ? 'link_underline' : ''}`}
                                onClick={() => handleLabelChange(label)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Package names */}
                <ul className="package_lists">
                    {currentPackageList.map((pkg, idx) => (
                        <li key={idx}>
                            <Link
                                className={`package_link ${activePackage === pkg.name ? 'link_underline' : ''}`}
                                onClick={() => setActivePackage(pkg.name)}
                            >
                                {pkg.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Active package details */}
                {activeDetail && (
                    <div className="main_package">
                        <div className="package_left">
                            {activeDetail.img && (
                                <img src={activeDetail.img} alt={activeDetail.number || activeDetail.category} />
                            )}
                        </div>
                        <div className="package_right">
                            {activeDetail.title && (
                                <h1 className="package_title">{activeDetail.title}</h1>
                            )}
                            {activeDetail.number && (
                                <h2 className="package_number">{activeDetail.number}</h2>
                            )}
                            {activeDetail.desc && (
                                <span className="package_desc">{activeDetail.desc}</span>
                            )}
                            {activeDetail.details && (
                                <p
                                    className="package_details"
                                    dangerouslySetInnerHTML={{ __html: activeDetail.details }}
                                />
                            )}
                            <small>
                                <Link
                                    to="/register"
                                    state={{ plan: activePackage, fromFlow: true }}
                                >
                                    Sign up
                                </Link>
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
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 
0 0 1 .708-.708l4 4a.5.5 0 0 1 
0.708l-4 4a.5.5 0 0 1-.708-.708L13.293 
8.5H1.5A.5.5 0 0 1 1 8"
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
