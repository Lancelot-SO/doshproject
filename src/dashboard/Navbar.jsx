import React from 'react';
import { Home } from 'lucide-react';
import { FaSearch, FaBell, FaBars } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Navbar = ({ onHomeClick, onBreadcrumbClick, activeSubmenuItem, activeMenu }) => {
    return (
        <div className="flex flex-col bg-[#2d2d2d] lg:bg-transparent">
            <div className="w-full text-white lg:h-12 h-[150px] flex items-center justify-between p-4 lg:p-6 lg:overflow-hidden relative">
                {/* Hamburger Icon for Mobile */}
                <FaBars size={24} className="lg:hidden block text-white" />

                {/* Breadcrumb Section */}
                <div className="hidden lg:flex items-center space-x-2">
                    <Home size={16} className="text-gray-400 cursor-pointer" onClick={onHomeClick} />
                    <span className="text-sm text-gray-400">/</span>
                    <span
                        className="text-sm text-gray-400 cursor-pointer"
                        onClick={() => onBreadcrumbClick("Pages")}
                    >
                        Pages
                    </span>
                    <span className="text-sm text-gray-400">/</span>
                    <span className="text-sm text-white">
                        {activeSubmenuItem || activeMenu || "Home"}
                    </span>
                </div>

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
        </div>
    );
};

export default Navbar;
