import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';
import MenuLinks from './MenuLinks';

const MainDashboard = () => {
    const [activeMenu, setActiveMenu] = useState("DOSH Insurance");
    const [activeSubmenuItem, setActiveSubmenuItem] = useState("");

    // Update active menu
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        setActiveSubmenuItem("");
    };

    // Update active submenu item
    const handleSubmenuClick = (submenu) => {
        setActiveSubmenuItem(submenu);
    };

    // Handle profile section click to show user profile
    const handleProfileClick = () => {
        setActiveSubmenuItem("UserProfile");
    };

    // Handle Home breadcrumb click
    const handleHomeClick = () => {
        setActiveMenu("Home");
        setActiveSubmenuItem("");
    };

    // Handle breadcrumb clicks for specific sections
    const handleBreadcrumbClick = (section) => {
        setActiveMenu("DOSH Insurance");
        setActiveSubmenuItem(section);
    };

    return (
        <div className="flex h-screen bg-[#333333] overflow-hidden">
            <Sidebar activeMenu={activeMenu} onSubmenuClick={handleSubmenuClick} onProfileClick={handleProfileClick} />
            <div className="flex flex-col flex-grow overflow-hidden">
                <Navbar
                    onHomeClick={handleHomeClick}
                    onBreadcrumbClick={handleBreadcrumbClick}
                    activeSubmenuItem={activeSubmenuItem}
                    activeMenu={activeMenu}

                />
                <MenuLinks onMenuClick={handleMenuClick} />
                <MainContent activeMenu={activeMenu} activeSubmenuItem={activeSubmenuItem} />
            </div>
        </div>
    );
};

export default MainDashboard;
