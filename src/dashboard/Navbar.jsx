import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { ChevronRight, ChevronLeft } from 'lucide-react';
import logo from "../images/dashboard/dash_logo.png";

const Navbar = ({ onNavigate, activeLink }) => {
    const [isExpanded, setIsExpanded] = useState(false);


    const toggleMenu = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <div className='flex flex-col bg-[#2d2d2d] lg:bg-transparent'>
            <div className="w-full text-white lg:h-12 h-[150px] flex items-center justify-between p-4 lg:p-6 lg:overflow-hidden relative">
                {/* Hamburger Icon for Mobile */}
                <FaBars size={24} className='lg:hidden block text-white' />

                {/* Breadcrumb Section */}
                <div className="hidden lg:flex items-center space-x-2">
                    <Home size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">/</span>
                    <span className="text-sm text-gray-400">Pages</span>
                    <span className="text-sm text-gray-400">/</span>
                    <span className="text-sm text-white">
                        {activeLink.sub ? activeLink.sub : activeLink.main}
                    </span>
                </div>

                {/* Simplified Breadcrumb as Title for Mobile */}
                <h1 className="lg:hidden text-xl font-semibold text-center absolute top-4 left-0 right-0">
                    {activeLink.sub ? activeLink.sub : activeLink.main}
                </h1>

                {/* Search, Settings, and Notification Icons on Large Screens */}
                <div className="lg:flex items-center space-x-4 hidden">
                    <div className="relative">
                        <FaSearch className="absolute left-3 top-2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search for something"
                            className="w-full bg-[#ffffff] bg-opacity-[13%] text-white rounded-full py-1.5 pl-10 pr-4 placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <IoMdSettings size={20} className="text-gray-400 cursor-pointer" />
                    <div className="relative cursor-pointer">
                        <FaBell size={20} className="text-white" />
                        <span className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            11
                        </span>
                    </div>
                </div>

                {/* Search bar and Notification Bell for smaller screens */}
                <div className="relative flex-grow mx-4 my-4 lg:hidden flex items-center space-x-4">
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-3 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-[#ffffff] bg-opacity-[13%] text-white rounded-full py-2 pl-10 pr-4 placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                    <div className="relative cursor-pointer">
                        <FaBell size={20} className="text-white" />
                        <span className="absolute top-[-4px] right-[-4px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            11
                        </span>
                    </div>
                </div>
            </div>

            {/* DOSH Menu */}
            <div
                className={`relative flex items-center bg-black text-white rounded-lg overflow-hidden lg:mx-6 mx-4 my-2 transition-all duration-300`}
                style={{ width: isExpanded ? '760px' : '180px', height: '40px' }}
            >
                <div className="flex items-center p-2" style={{ width: isExpanded ? '720px' : '140px' }}>
                    <img src={logo} alt="DOSH Logo" className="w-5 h-5 mr-2" />
                    <span className="text-white text-[12px]">DOSH Menu</span>

                    {isExpanded && (
                        <div className="flex space-x-4 ml-4 whitespace-nowrap text-[12px]">
                            <a
                                href="#"
                                className="text-white text-[12px] hover:bg-[#A2865F] p-1 rounded"
                                onClick={() => onNavigate('InsurancePage')}>     </a>                       <a href="/" className="hover:bg-[#A2865F] p-1 rounded">Financial Insurance</a>
                            <a href="/" className="hover:bg-[#A2865F] p-1 rounded">DOSH Risk</a>
                            <a href="/" className="hover:bg-[#A2865F] p-1 rounded">DOSH Ride</a>
                            <a href="/" className="hover:bg-[#A2865F] p-1 rounded">DOSH Commerce</a>
                        </div>
                    )}
                </div>

                {/* Expand/Collapse Button */}
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
