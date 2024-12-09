import React, { useState } from 'react';
import logo from "../images/dashboard/dash_logo.png";
import { ChevronRight, ChevronLeft } from 'lucide-react';

const MenuLinks = ({ onMenuClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null); // Track the active menu

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // Set the clicked menu as active
        onMenuClick(menu); // Call the parent function
    };

    return (
        <div className="relative">
            <div
                className={`flex items-center bg-black text-white rounded-lg overflow-hidden transition-all duration-300 mx-4`}
                style={{ width: isExpanded ? '760px' : '180px', height: '40px' }}
            >
                <div className="flex items-center p-2" style={{ width: isExpanded ? '720px' : '140px' }}>
                    <img src={logo} alt="DOSH Logo" className="lg:w-5 w-2 h-2 lg:h-5 mr-2" />
                    <span className="text-white text-[12px] w-[100px]">DOSH Menu</span>

                    {isExpanded && (
                        <div className="flex space-x-4 ml-4 whitespace-nowrap lg:text-[12px] text-[8px]">
                            <button
                                onClick={() => handleMenuClick("DOSH Insurance")}
                                className={`text-white text-[12px] hover:bg-[#A2865F] p-1 rounded ${activeMenu === "DOSH Insurance" ? 'bg-[#A2865F]' : ''
                                    }`}
                            >
                                DOSH Insurance
                            </button>
                            <button
                                onClick={() => handleMenuClick("DOSH Financial")}
                                className={`text-white text-[12px] hover:bg-[#A2865F] p-1 rounded ${activeMenu === "DOSH Financial" ? 'bg-[#A2865F]' : ''
                                    }`}
                            >
                                DOSH Financial
                            </button>
                            <button
                                onClick={() => handleMenuClick("DOSH Risk")}
                                className={`text-white text-[12px] hover:bg-[#A2865F] p-1 rounded ${activeMenu === "DOSH Risk" ? 'bg-[#A2865F]' : ''
                                    }`}
                            >
                                DOSH Risk
                            </button>
                            <button
                                onClick={() => handleMenuClick("DOSH Ride")}
                                className={`text-white text-[12px] hover:bg-[#A2865F] p-1 rounded ${activeMenu === "DOSH Ride" ? 'bg-[#A2865F]' : ''
                                    }`}
                            >
                                DOSH Ride
                            </button>
                            <button
                                onClick={() => handleMenuClick("DOSH Commerce")}
                                className={`text-white text-[12px] hover:bg-[#A2865F] p-1 rounded ${activeMenu === "DOSH Commerce" ? 'bg-[#A2865F]' : ''
                                    }`}
                            >
                                DOSH Commerce
                            </button>
                        </div>
                    )}
                </div>

                <div
                    onClick={toggleMenu}
                    className="absolute top-[15%] bg-[#A2875F] w-[30px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer"
                    style={{
                        background: 'linear-gradient(230.04deg, #A2875F 2.11%, #462D0B 102.63%)',
                        left: isExpanded ? '750px' : '180px',
                        transition: 'left 0.3s ease-in-out'
                    }}
                >
                    {isExpanded ? <ChevronLeft size={16} className="text-white" /> : <ChevronRight size={16} className="text-white" />}
                </div>
            </div>
        </div>
    );
};

export default MenuLinks;
