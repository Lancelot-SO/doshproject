import React, { useState, useEffect } from 'react';
import './FinanceSideModal.css';
import { Link } from 'react-router-dom';
import { financelink, financePackage, financeDetails } from '../doshdata';

const FinanceSideModal = ({ onClose }) => {
    const [activePackage, setActivePackage] = useState(financePackage[0].name); // Set the initial package to the first finance package
    const [activeLinks, setActiveLinks] = useState('Financial'); // Set 'financial' as the active link initially
    const [currentPackageList, setCurrentPackageList] = useState(financePackage);
    const [currentDetailList, setCurrentDetailList] = useState(financeDetails);

    useEffect(() => {
        if (activeLinks === 'Financial') {
            setCurrentPackageList(financePackage);
            setCurrentDetailList(financeDetails);
            setActivePackage(financePackage[0].name);
        }
    }, [activeLinks]);

    const activeDetail = currentDetailList.find(detail => detail.category === activePackage);

    return (
        <div className="insure-modal">
            <div className="insure-content">
                <div className='top__section'>
                    <h2 className='text-[32px] text-[#A2865F]'>DOSH Financial</h2>
                    <div>
                        <button onClick={onClose} className='top__section-close'>X</button>
                    </div>
                </div>

                {/* List of links (financelink) */}
                <div className='package_list'>
                    <ul className='package_lists'>
                        {financelink.map((link, index) => (
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
