import React, { useState, useEffect } from 'react';
import './Insure.css';
import { Link } from 'react-router-dom';
import { projectLinks, packagelist, insuranceDetails, financePackage, financeDetails } from '../doshdata';
import Flyer from './Flyer';

const flyerPath = "/smallflyer.png";

const Insure = ({ onClose }) => {

    const [activePackage, setActivePackage] = useState('');
    const [activeLinks, setActiveLinks] = useState('Insurance'); // Set 'insurance' as the active link initially
    const [currentPackageList, setCurrentPackageList] = useState([]);
    const [currentDetailList, setCurrentDetailList] = useState([]);

    const [showFlyerModal, setShowFlyerModal] = useState(false)

    useEffect(() => {
        if (activeLinks === 'Financial') {
            setCurrentPackageList(financePackage);
            setCurrentDetailList(financeDetails);
            setActivePackage(financePackage[0].name);
        } else if (activeLinks === 'Insurance') {
            setCurrentPackageList(packagelist);
            setCurrentDetailList(insuranceDetails);
            setActivePackage(packagelist[0].name); // Set 'DOSH 365' as active initially
        } else {
            setCurrentPackageList([]);
            setCurrentDetailList([]);
        }
    }, [activeLinks]);

    const activeDetail = currentDetailList.find(detail => detail.category === activePackage);

    const handleFlyerClick = () => {
        if (window.innerWidth < 768) {
            const link = document.createElement('a');
            link.href = flyerPath;
            link.download = "flyer2.png";
            link.click();
        } else {
            setShowFlyerModal(true);
        }
    };


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
                            <Link
                                onClick={() => setActiveLinks(link.name)}
                            >
                                <li key={index} className={`top_link ${link.name === activeLinks ? 'activator' : ''}`}>
                                    {link.name}

                                </li>
                            </Link>
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
                            <Link onClick={handleFlyerClick} className='flyer-link-insure'>Click here to View full flyer</Link>
                            <small>
                                <Link to={activeDetail.link} target="_blank" rel="noopener noreferrer">Sign up</Link>
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
                            {showFlyerModal && <Flyer onClose={() => setShowFlyerModal(false)} />}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Insure;
