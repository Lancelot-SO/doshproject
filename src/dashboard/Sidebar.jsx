import React, { useState } from 'react';
import { ChevronDown, Grid, FileText, Users, Share2 } from 'lucide-react';
import { MdGroups } from "react-icons/md";
import logo from "../images/dashboard/dash_logo.png";
import profile from "../images/dashboard/profile_pic.png";
import './Sidebar.css';
import referprofile from "../images/dashboard/referprofile.png"
import referbg from "../images/dashboard/referbg.png"

const Sidebar = ({ onPageChange, activeLink }) => {
    const [isOpen, setIsOpen] = useState({ dashboards: false, pages: true, claims: false });
    const [showReferralPopup, setShowReferralPopup] = useState(false); // State for referral popup

    const toggleDropdown = (key) => {
        setIsOpen(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleMainClick = (main) => {
        onPageChange(main);
    };

    const handleSubClick = (main, sub) => {
        onPageChange(sub);
    };

    // Function to toggle the referral popup
    const toggleReferralPopup = () => {
        setShowReferralPopup(!showReferralPopup);
    };

    return (
        <div className="w-[220px] h-screen text-white flex flex-col" style={{ background: 'linear-gradient(180deg, #3E3D45 0%, #202020 100%)' }}>
            {/* Dashboard Logo Section */}
            <div className="p-4">
                <div className="flex items-center gap-4 mb-3 pb-2 border-b border-white">
                    <img src={logo} alt='logo' className='object-cover w-5 h-5' />
                    <h1 className="text-[16px] font-bold">DOSH Dashboard</h1>
                </div>
                {/* User Section */}
                <div className="flex items-center mt-8 pb-2 border-b border-white">
                    <img src={profile} alt="User avatar" className="w-8 h-8 rounded-full mr-2" />
                    <span>Alex Jerry Sam</span>
                    <ChevronDown className="ml-auto" size={16} />
                </div>
            </div>

            {/* Menu Items */}
            <div className="flex-grow overflow-y-auto">
                <div className="p-4">
                    {/* Dashboards Button */}
                    <button
                        className={`flex items-center justify-between w-full p-2 rounded 
                        ${activeLink.main === 'dashboards' ? 'bg-[#A2865F]' : 'hover:bg-gray-700'} transition-colors duration-200`}
                        onClick={() => handleMainClick('dashboards')}
                    >
                        <div className="flex items-center">
                            <Grid size={16} className="mr-2" />
                            <span className={activeLink.main === 'dashboards' ? 'text-white' : 'text-gray-300'}>Dashboards</span>
                        </div>
                        <ChevronDown size={16} className={`transform transition-transform duration-500 ${isOpen.dashboards ? 'rotate-180' : ''}`} />
                    </button>
                </div>

                {/* Pages Section */}
                <div className="p-4">
                    <button
                        className={`flex items-center justify-between w-full p-2 rounded 
                        ${activeLink.main === 'pages' ? '' : 'hover:bg-gray-700'} transition-colors duration-200`}
                        onClick={() => toggleDropdown('pages')}
                    >
                        <span className={activeLink.main === 'pages' ? 'text-white' : 'text-gray-300'}>Pages</span>
                        <ChevronDown size={16} className={`transform transition-transform duration-500 ${isOpen.pages ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`ml-4 overflow-hidden no-scrollbar transition-all delay-75 duration-500 ease-in-out-cubic ${isOpen.pages ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <button
                            className={`flex items-center justify-between w-full p-2 rounded 
                            ${activeLink.main === 'claims' ? 'bg-[#A2865F]' : 'hover:bg-gray-700'} transition-colors duration-200`}
                            onClick={() => {
                                toggleDropdown('claims');
                                handleMainClick('claims');
                            }}
                        >
                            <div className="flex items-center">
                                <FileText size={16} className="mr-2" />
                                <span className={activeLink.main === 'claims' ? 'text-white' : 'text-gray-300'}>Claims</span>
                            </div>
                            <ChevronDown size={16} className={`transform transition-transform duration-500 ${isOpen.claims ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Subfields for Claims */}
                        <div className={`ml-4 overflow-hidden no-scrollbar transition-all duration-500 ${isOpen.claims ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <button
                                className={`flex items-center w-full p-2 rounded hover:bg-gray-700 transition-colors duration-200 mb-1 
                                ${activeLink.sub === 'PendingClaims' ? 'text-[#A2865F]' : 'text-gray-300'}`}
                                onClick={() => handleSubClick('claims', 'PendingClaims')}
                            >
                                <FileText size={16} className="mr-2" />
                                <span className='text-[12px]'>Pending Claims</span>
                            </button>
                            <button
                                className={`flex items-center w-full p-2 rounded hover:bg-gray-700 transition-colors duration-200 
                                ${activeLink.sub === 'AllClaims' ? 'text-[#A2865F]' : 'text-gray-300'}`}
                                onClick={() => handleSubClick('claims', 'AllClaims')}
                            >
                                <FileText size={16} className="mr-2" />
                                <span className='text-[12px]'>All Claims</span>
                            </button>
                        </div>

                        <button className="flex items-center w-full p-2 rounded hover:bg-gray-700 transition-colors duration-200 mb-1">
                            <Users size={16} className="mr-2" />
                            <span className='text-gray-300'>Dependent</span>
                        </button>
                        <button className="flex items-center w-full p-2 rounded hover:bg-gray-700 transition-colors duration-200">
                            <Share2 size={16} className="mr-2" />
                            <span className='text-gray-300'>Referral</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="p-2 border-t border-gray-700 w-[180px] h-[200px]">
                <button
                    className="flex flex-col items-start justify-center cursor-pointer shadow-md w-full h-[179px] text-white py-2 px-4 rounded-[30px] transition-colors duration-200"
                    style={{ background: 'linear-gradient(230.04deg, #A2875F 2.11%, #462D0B 102.63%)' }}
                    onClick={toggleReferralPopup} // Open popup when clicked
                >
                    <MdGroups size={24} className="mr-2" />
                    <span>Refer a Friend</span>
                    <span className='text-[11px] w-[138px] h-[32px] leading-4 font-semibold text-left'>Increase your speed with more referrals</span>
                </button>
            </div>

            {/* Referral Popup */}
            {showReferralPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div
                        className="relative bg-cover bg-center w-[386px] h-[440px] p-6 rounded-lg"
                        style={{
                            backgroundImage: `url(${referbg})`,
                            borderImageSource: 'linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%)'
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-800 text-[32px] font-bold"
                            onClick={toggleReferralPopup} // Close popup
                        >
                            &times;
                        </button>

                        <div className="relative z-10">
                            <div className='mt-16'>
                                <img src={referprofile} alt="Referral" className="mx-auto mb-4 w-[120px] h-[120px]" />
                                <p className="text-center text-gray-100 mb-4">Ask your friends to sign up with your referral code and make an initial payment. Once done, both you and your friends each earn.</p>
                                <div className="flex gap-1 justify-center items-center">
                                    <div className="newglass py-2 px-4 rounded-lg flex gap-1 items-center justify-between w-full">
                                        <span className="text-white">DOSH7689004</span>
                                        <div className="flex items-center space-x-2">
                                            <button className=" text-white px-2 py-1 rounded-lg">Copy</button>

                                        </div>
                                    </div>
                                    <button className="bg-[#A2865F] text-white px-2 py-1 rounded-lg flex items-center space-x-1">
                                        <Share2 size={16} />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Sidebar;
