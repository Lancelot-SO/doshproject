import React, { useState, useEffect } from 'react';
import './FinanceSideModal.css';
import { Link } from 'react-router-dom';
import { projectLinks, packagelist, insuranceDetails, financePackage, financeDetails } from '../doshdata';
import Flyer from './Flyer';

const FinanceSideModal = ({ onClose }) => {
    const [activePackage, setActivePackage] = useState(financePackage[0].name); // Set the initial package to the first finance package
    const [activeLinks, setActiveLinks] = useState('financial'); // Set 'financial' as the active link initially
    const [currentPackageList, setCurrentPackageList] = useState(financePackage);
    const [currentDetailList, setCurrentDetailList] = useState(financeDetails);

    const [showFlyerModal, setShowFlyerModal] = useState(false);

    useEffect(() => {
        if (activeLinks === 'financial') {
            setCurrentPackageList(financePackage);
            setCurrentDetailList(financeDetails);
            setActivePackage(financePackage[0].name);
        } else if (activeLinks === 'insurance') {
            setCurrentPackageList(packagelist);
            setCurrentDetailList(insuranceDetails);
            setActivePackage(packagelist[0].name); // Set 'DOSH 365' as active initially
        } else {
            setCurrentPackageList([]);
            setCurrentDetailList([]);
        }
    }, [activeLinks]);

    const activeDetail = currentDetailList.find(detail => detail.category === activePackage);

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className='top__section'>
                    <select className='selector'>
                        <option value="">Select an option</option>
                        <option value="option1">Finance</option>
                        <option value="option2">Insurance</option>
                        <option value="option3">Loan</option>
                    </select>
                    <div>
                        <button onClick={onClose} className='top__section-close'>X</button>
                    </div>
                </div>

                {/* List of products */}
                <div className='top_list'>
                    <ul className='top_lists'>
                        {projectLinks.map((link, index) => (
                            <li key={index} className={`top_link ${link.name === activeLinks ? 'activator' : ''}`}>
                                <Link
                                    onClick={() => setActiveLinks(link.name)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* List of packages */}
                <div className='package_list'>
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
                </div>

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
                            <Link onClick={() => { setShowFlyerModal(true) }} className='flyer-link'>Click here to View full flyer</Link>
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
                            {showFlyerModal && <Flyer onClose={() => setShowFlyerModal(false)} />}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FinanceSideModal;
