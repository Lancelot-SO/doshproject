import React, { useState, useEffect } from 'react';
import './Insure.css';
import { Link } from 'react-router-dom';
import Flyer from './Flyer';
import Terms from './Terms';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import {
    insuranceDetails as staticInsuranceDetails,
    enhanceDetails as staticEnhanceDetails,
    packagelist,
    enhancelist
} from '../doshdata';

import standard from '../images/ph1.png';
import enhanced from '../images/mainenhanced.jpg';

const BASE_URL = 'https://doshcms.interactivedigital.com.gh/';

const Insure = ({ onClose }) => {
    // UI state
    const [activeLabel, setActiveLabel] = useState('Standard');
    const [currentPackageList, setCurrentPackageList] = useState(packagelist);
    const [currentDetailList, setCurrentDetailList] = useState(staticInsuranceDetails);
    const [activePackage, setActivePackage] = useState(null);
    const [showFlyerModal, setShowFlyerModal] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    // merged data from CMS
    const [mergedInsuranceDetails, setMergedInsuranceDetails] = useState(staticInsuranceDetails);
    const [mergedEnhanceDetails, setMergedEnhanceDetails] = useState(staticEnhanceDetails);

    // 1️⃣ On mount: fetch both Standard & Enhanced from separate endpoints
    useEffect(() => {
        async function fetchPackages() {
            try {
                const [stdRes, enhRes] = await Promise.all([
                    fetch(`${BASE_URL}api/fetch-insurance-packages`),
                    fetch(`${BASE_URL}api/fetch-insurance-packages-enhanced`)
                ]);
                const [stdData, enhData] = await Promise.all([
                    stdRes.json(),
                    enhRes.json()
                ]);

                // merge Standard
                const updatedStandard = staticInsuranceDetails.map(item => {
                    const cms = stdData.find(d => d.id === Number(item.id));
                    return cms
                        ? { ...item, img: `${BASE_URL}${cms.image}`, details: cms.details }
                        : item;
                });

                // merge Enhanced
                const updatedEnhanced = staticEnhanceDetails.map(item => {
                    const cms = enhData.find(d => d.id === Number(item.id));
                    return cms
                        ? { ...item, img: `${BASE_URL}${cms.image}`, details: cms.details }
                        : item;
                });

                setMergedInsuranceDetails(updatedStandard);
                setMergedEnhanceDetails(updatedEnhanced);
            } catch (err) {
                console.error('Error fetching insurance packages:', err);
            }
        }

        fetchPackages();
    }, []);

    // 2️⃣ Swap lists whenever label or merged data changes
    useEffect(() => {
        if (activeLabel === 'Standard') {
            setCurrentPackageList(packagelist);
            setCurrentDetailList(mergedInsuranceDetails);
        } else {
            setCurrentPackageList(enhancelist);
            setCurrentDetailList(mergedEnhanceDetails);
        }
        setActivePackage(null);
    }, [activeLabel, mergedInsuranceDetails, mergedEnhanceDetails]);

    // 3️⃣ Determine which detail to render
    const activeDetail = activePackage
        ? currentDetailList.find(d => d.category === activePackage)
        : null;

    // 4️⃣ Static “intro” cards remain untouched
    const introDetail = activeLabel === 'Standard'
        ? {
            img: standard,
            number: 'Standard Packages',
            details: `For health insurance that covers life basics, DOSH’s Standard Packages are a no-brainer! Cover essentials like eyecare, mental health, and more, with plans that make healthcare affordable, accessible and available, and get back to living your best life—worry-free!`,
            flyer: 'View Flyer'
        }
        : {
            img: enhanced,
            number: 'Enhanced Packages',
            details: `It pays to be prepared, no matter what life throws your way. And with DOSH’s Enhanced Packages, you get policies that cover you from every angle and guarantee your peace of mind. Built on the foundation of our Standard Packages, these policies go the extra mile in providing comprehensive coverage in cases of partial and permanent disability, critical illness, and even death.`,
            flyer: 'View Flyer'
        };

    const detailToShow = activeDetail || introDetail;

    // 5️⃣ Navigation helpers
    const goToNextPackage = () => {
        const idx = currentPackageList.findIndex(i => i.name === activePackage);
        const next = currentPackageList[(idx + 1) % currentPackageList.length].name;
        setActivePackage(next);
    };
    const goToPreviousPackage = () => {
        const idx = currentPackageList.findIndex(i => i.name === activePackage);
        const prev = currentPackageList[(idx - 1 + currentPackageList.length) % currentPackageList.length].name;
        setActivePackage(prev);
    };

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className="top__section">
                    <h2 className="text-[32px] text-[#A2865F]">DOSH Health Insurance</h2>
                    <button onClick={onClose} className="top__section-close">X</button>
                </div>

                {/* Label tabs */}
                <div className="package_list">
                    <ul className="package_lists">
                        {['Standard', 'Enhanced'].map(label => (
                            <li
                                key={label}
                                className={`package_link ${activeLabel === label ? 'link_underline' : ''}`}
                                onClick={() => setActiveLabel(label)}
                            >
                                {label}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Package names */}
                <ul className="package_lists">
                    {currentPackageList.map((pkg, i) => (
                        <li key={i}>
                            <Link
                                className={`package_link ${activePackage === pkg.name ? 'link_underline' : ''}`}
                                onClick={() => setActivePackage(pkg.name)}
                            >
                                {pkg.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Detail pane */}
                <div className="main_package no-scrollbar">
                    <div className="package_left">
                        <img src={detailToShow.img} alt={detailToShow.number} loading="lazy" />
                    </div>
                    <div className="package_right no-scrollbar">
                        <h2 className="package_number">{detailToShow.number}</h2>
                        <p
                            className="package_details w-[600px]"
                            dangerouslySetInnerHTML={{ __html: detailToShow.details }}
                        />

                        <div className="flex lg:flex-row flex-col gap-3 lg:w-[590px] lg:justify-between">
                            <Link onClick={() => setShowFlyerModal(true)} className="flyer-link-insure">
                                {detailToShow.flyer}
                            </Link>
                            <button
                                className="terms-link-insure"
                                onClick={() => setShowTermsModal(true)}
                            >
                                Terms, Conditions and Exclusions
                            </button>
                        </div>

                        {detailToShow.link && (
                            <Link
                                to="/register"
                                state={{
                                    plan: activePackage?.startsWith('DOSH ')
                                        ? activePackage.split('DOSH ')[1]
                                        : activePackage,
                                    fromFlow: true
                                }}
                            >
                                <small>
                                    <h6 className="text-white">Sign up</h6>
                                    <FaArrowRight color="#fff" />
                                </small>
                            </Link>
                        )}

                        {activePackage && (
                            <div className="flex gap-6 h-[40px] items-center justify-center">
                                <div className="flex items-center gap-2">
                                    <p className="text-white">Previous product</p>
                                    <div
                                        onClick={goToPreviousPackage}
                                        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-[#987C55] border text-white"
                                    >
                                        <FaArrowLeft />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div
                                        onClick={goToNextPackage}
                                        className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-[#987C55] border text-white"
                                    >
                                        <FaArrowRight />
                                    </div>
                                    <p className="text-white">Next product</p>
                                </div>
                            </div>
                        )}

                        {showFlyerModal && <Flyer onClose={() => setShowFlyerModal(false)} />}
                        {showTermsModal && <Terms onClose={() => setShowTermsModal(false)} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Insure;
