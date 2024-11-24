import React, { useState } from 'react';
import { ChevronDown, FileText, UserPlus, Grid } from 'lucide-react';
import { MdPrivacyTip } from "react-icons/md";
import { FaLink, FaBars, FaExchangeAlt, FaCoins, FaUserFriends } from 'react-icons/fa';
import { MdLock, MdGroups, MdAssignment, MdAccountBalance, MdSavings, MdAttachMoney, MdPerson } from 'react-icons/md';
import logo from "../images/dashboard/dash_logo.png";
import profilepic from "../images/dashboard/profile/profilepic.png";
import './Sidebar.css';
import ReferralPopup from './ReferralPopup';
import PrivacyPolicy from './PrivacyPolicy';



const Sidebar = ({ activeMenu, onSubmenuClick, onProfileClick }) => {
    const [showClaimsSubmenu, setShowClaimsSubmenu] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null); // Track the active submenu item
    const [showReferralPopup, setShowReferralPopup] = useState(false);
    const [showPrivacyPopup, setShowPrivacyPopup] = useState(false);






    const toggleClaimsSubmenu = () => {
        setShowClaimsSubmenu(!showClaimsSubmenu);
    };

    const handleSubmenuClick = (submenu) => {
        setActiveSubmenu(submenu);
        onSubmenuClick(submenu);
    };

    const toggleReferralPopup = () => {
        setShowReferralPopup(!showReferralPopup);
    };

    const togglePrivacyPopup = () => {
        setShowPrivacyPopup(!showPrivacyPopup);
    };


    const renderSidebarContent = () => {
        if (activeMenu === "DOSH Financial") {
            return (
                <div className='flex flex-col gap-2'>
                    <h2 className="text-sm font-bold text-white my-1">PAGES</h2>
                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Link Account' ? 'bg-[#A2865F]' : ''}`}
                        onClick={() => handleSubmenuClick('Link Account')}
                    >
                        <FaLink className="text-xl" />
                        <span className="text-sm">Link Account</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Transactions' ? 'bg-[#A2865F]' : ''}`}
                        onClick={() => handleSubmenuClick('Transactions')}
                    >
                        <FaExchangeAlt className="text-xl" />
                        <span className="text-sm">Transactions</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Investments' ? 'bg-[#A2865F]' : ''}`}
                        onClick={() => handleSubmenuClick('Investments')}
                    >
                        <FaCoins className="text-xl" />
                        <span className="text-sm">Investments</span>
                    </div>

                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Referral' ? 'bg-[#A2865F]' : ''}`}
                        onClick={() => handleSubmenuClick('Referral')}
                    >
                        <FaUserFriends className="text-xl" />
                        <span className="text-sm">Referral</span>
                    </div>
                    <h2 className="text-sm font-bold text-white mt-4 mb-2">OTHERS</h2>
                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Auth Code' ? 'bg-[#A2865F]' : ''}`} onClick={() => handleSubmenuClick('Auth Code')}>
                        <MdLock className="text-xl" />
                        <span className="text-sm">Auth Code</span>
                    </div>
                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Standing Orders' ? 'bg-[#A2865F]' : ''}`} onClick={() => handleSubmenuClick('Standing Orders')}>
                        <MdAssignment className="text-xl" />
                        <span className="text-sm">Standing Orders</span>
                    </div>
                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Saved Template' ? 'bg-[#A2865F]' : ''}`} onClick={() => handleSubmenuClick('Saved Template')}>
                        <MdSavings className="text-xl" />
                        <span className="text-sm">Saved Template</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700">
                        <MdAccountBalance className="text-xl" />
                        <span className="text-sm">Vouchers</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700">
                        <MdAttachMoney className="text-xl" />
                        <span className="text-sm">Dosh Till</span>
                    </div>
                    <div
                        className={`flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700 ${activeSubmenu === 'Child Account' ? 'bg-[#A2865F]' : ''}`} onClick={() => handleSubmenuClick('Child Account')}>
                        <MdPerson className="text-xl" />
                        <span className="text-sm">Child Account</span>
                    </div>
                    <div
                        onClick={togglePrivacyPopup}
                        className="flex items-center gap-2 p-2 text-white cursor-pointer rounded-md hover:bg-gray-700">
                        <MdPrivacyTip className="text-xl" />
                        <span className="text-sm">Privacy Policy</span>
                    </div>

                    {showPrivacyPopup && <PrivacyPolicy onClose={togglePrivacyPopup} />}

                </div>

            );
        }
        // Default content for other menus
        return (
            <div className='flex flex-col justify-between h-full'>
                <div>
                    <h2 className="text-[14px] font-bold mb-2">PAGES</h2>
                    <div
                        className={`flex items-center gap-2 p-2 rounded cursor-pointer 
                            ${activeSubmenu === 'Claims' ? 'bg-[#A2865F]' : ''}`} // Active background for Claims menu item
                        onClick={toggleClaimsSubmenu}
                    >
                        <FileText size={16} />
                        <span>Claims</span>
                        <ChevronDown className={`ml-auto transition-transform ${showClaimsSubmenu ? 'rotate-180' : ''}`} size={16} />
                    </div>
                    {showClaimsSubmenu && (
                        <div className="ml-8">
                            <div
                                className={`flex items-center gap-2 mt-2 p-2 rounded cursor-pointer 
                                    ${activeSubmenu === "Pending Claims" ? 'text-[#A2865F]' : ''}`}
                                onClick={() => handleSubmenuClick("Pending Claims")}
                            >
                                <FileText size={14} />
                                <span>Pending Claims</span>
                            </div>
                            <div
                                className={`flex items-center gap-2 mt-2 p-2 rounded cursor-pointer 
                                    ${activeSubmenu === "All Claims" ? 'text-[#A2865F]' : ''}`}
                                onClick={() => handleSubmenuClick("All Claims")}
                            >
                                <FileText size={14} />
                                <span>All Claims</span>
                            </div>
                        </div>
                    )}
                    <div
                        className={`flex items-center gap-2 mt-2 p-2 rounded cursor-pointer 
                            ${activeSubmenu === "Dependent" ? 'bg-[#A2865F]' : ''}`} // Active state styling
                        onClick={() => handleSubmenuClick("Dependent")}
                    >
                        <UserPlus size={16} />
                        <span>Dependent</span>
                    </div>
                    <div
                        className={`flex items-center gap-2 mt-2 p-2 rounded cursor-pointer 
                            ${activeSubmenu === "Referral" ? 'bg-[#A2865F]' : ''}`} // Active state styling
                        onClick={() => handleSubmenuClick("Referral")}
                    >
                        <FaBars size={16} />
                        <span>Referral</span>
                    </div>

                    <div
                        onClick={togglePrivacyPopup}
                        className={`flex items-center gap-2 mt-2 p-2 rounded cursor-pointer`}
                    >
                        <MdPrivacyTip size={16} />
                        <span>Privacy Policy</span>
                    </div>
                </div>

                <div className="p-2 border-t border-gray-700 w-[180px] h-[200px] mt-4">
                    <button
                        onClick={toggleReferralPopup}
                        className="flex flex-col items-start justify-center cursor-pointer shadow-md w-full h-[179px] text-white py-2 px-4 rounded-[30px] transition-colors duration-200"
                        style={{ background: 'linear-gradient(230.04deg, #A2875F 2.11%, #462D0B 102.63%)' }}
                    >
                        <MdGroups size={24} className="mr-2" />
                        <span>Refer a Friend</span>
                        <span className='text-[11px] w-[138px] h-[32px] leading-4 font-semibold text-left'>Increase your earnings with more referrals</span>
                    </button>
                </div>

                {showPrivacyPopup && <PrivacyPolicy onClose={togglePrivacyPopup} />}
                {showReferralPopup && <ReferralPopup onClose={toggleReferralPopup} />}
            </div>
        );
    };

    return (
        <div className="lg:w-[250px] hidden px-4 h-screen text-white lg:flex flex-col no-scrollbar" style={{ background: 'linear-gradient(180deg, #3E3D45 0%, #202020 100%)' }}>
            <div className="p-2">
                <div className="flex items-center gap-4 mb-3 pb-2 border-b border-white">
                    <img src={logo} alt="logo" className="object-cover w-5 h-5" />
                    <span className="text-[12px] font-semibold">DOSH Dashboard</span>
                </div>
            </div>

            {/*profile section */}
            <div
                onClick={onProfileClick} // Trigger profile section click

                className={`flex mb-4 items-center pb-2 border-b border-white cursor-pointer transition-colors duration-200`}
            >
                <img src={profilepic} alt="User avatar" className="w-8 h-8 rounded-full mr-2" />
                <span>Alex Jerry Sam</span>
                <ChevronDown className="ml-auto" size={16} />
            </div>

            <div className="">
                {/* Dashboards Button */}
                <button
                    className={`flex items-center justify-between w-full p-2 rounded 
                         transition-colors duration-200 bg-[#A2865F]`}

                >
                    <div className="flex items-center">
                        <Grid size={16} className="mr-2" />
                        <span className="">Dashboards</span>
                    </div>
                    <ChevronDown size={16} className={`transform transition-transform duration-500`} />
                </button>
            </div>


            {renderSidebarContent()}
        </div >
    );
};

export default Sidebar;
