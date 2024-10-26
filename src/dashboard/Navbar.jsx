import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { FaSearch, FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import logo from "../images/dashboard/dash_logo.png";

const Navbar = ({ onNavigate, activeLink }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className='flex flex-col'>
            <div className="w-full text-white h-12 flex items-center justify-between p-6">
                {/* Breadcrumb Navigation */}
                <div className="flex items-center space-x-2">
                    <Home size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">/</span>
                    <span className="text-sm text-gray-400">Pages</span>
                    <span className="text-sm text-gray-400">/</span>
                    <span className="text-sm text-white">
                        {activeLink.sub ? activeLink.sub : activeLink.main}
                    </span>
                </div>
                <div className='flex'>
                    {/* Search Bar */}
                    <div className="relative flex-grow mx-8">
                        <FaSearch className="absolute left-3 top-3 text-white" size={16} />
                        <input
                            type="text"
                            placeholder="Search for something"
                            className="w-full bg-[#ffffff] bg-opacity-[13%] text-white rounded-full py-1.5 pl-10 pr-4 placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Settings and Notification Icons */}
                    <div className="flex items-center space-x-4">
                        <IoMdSettings size={18} className="text-gray-400 cursor-pointer" />
                        <div className="relative cursor-pointer">
                            <FaBell size={18} className="text-gray-400" />
                            <span className="absolute top-[-6px] right-[-6px] bg-pink-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                11
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`relative z-20 flex items-center bg-black text-white rounded-lg overflow-hidden mx-6 transition-all duration-300`}
                style={{ width: isExpanded ? '760px' : '180px', height: '40px' }}
            >
                <div className="flex items-center bg-black p-2" style={{ width: isExpanded ? '720px' : '140px' }}>
                    <img src={logo} alt="DOSH Logo" className="w-5 h-5 mr-2" />
                    <span className="text-white w-[100px] text-[12px]">DOSH Menu</span>

                    {isExpanded && (
                        <div className="flex space-x-4 ml-4 whitespace-nowrap">
                            <a
                                href="#"
                                className="text-white text-[12px] hover:bg-[#A2865F] p-1 rounded"
                                onClick={() => onNavigate('InsurancePage')}
                            >
                                DOSH Insurance
                            </a>
                            <a href="/" className="text-white text-[12px] hover:bg-[#A2865F] p-1 rounded">Financial Insurance</a>
                            <a href="/" className="text-white text-[12px] hover:bg-[#A2865F] p-1 rounded">DOSH Ride</a>
                            <a href="/" className="text-white text-[12px] hover:bg-[#A2865F] p-1 rounded">DOSH Commerce</a>
                            <a href="/" className="text-white text-[12px] hover:bg-[#A2865F] p-1 rounded">POS Inventory</a>
                        </div>
                    )}
                </div>

                <div
                    onClick={toggleMenu}
                    className="absolute top-[15%] right-0 bg-[#A2875F] w-[30px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer"
                    style={{ background: 'linear-gradient(230.04deg, #A2875F 2.11%, #462D0B 102.63%)' }}
                >
                    {isExpanded ? <ChevronLeft size={16} className="text-white" /> : <ChevronRight size={16} className="text-white" />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
