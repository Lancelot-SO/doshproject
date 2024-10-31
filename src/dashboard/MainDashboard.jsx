import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component
import Navbar from './Navbar';   // Import Navbar component
import InsurancePage from './insurance/InsurancePage';
import PendingClaims from './claims/PendingClaims';
import AllClaims from './claims/AllClaims';
import Dependent from './dependent/Dependent';
import Referral from './referral/Referral';
import UserProfile from './profile/UserProfile';


const MainDashboard = () => {
    const [activePage, setActivePage] = useState('InsurancePage'); // Default page
    const [activeLink, setActiveLink] = useState({ main: 'pages', sub: 'InsurancePage' });

    // Handle page change
    const handlePageChange = (page) => {
        setActivePage(page);

        // Update the active link state based on the page
        setActiveLink(prev => ({
            ...prev,
            sub: page,
            main: page === 'PendingClaims' || page === 'AllClaims' ? 'claims' : 'pages' // Set main based on page
        }));
    };

    return (
        <div className="flex h-screen bg-[#333333] overflow-hidden">
            <Sidebar onPageChange={handlePageChange} activeLink={activeLink} /> {/* Pass function and active link to Sidebar */}
            <div className="flex flex-col flex-grow overflow-hidden">
                <Navbar onNavigate={handlePageChange} activePage={activePage} activeLink={activeLink} /> {/* Pass function and active page to Navbar */}
                <div className="flex-grow overflow-y-auto no-scrollbar">
                    {activePage === 'InsurancePage' && <InsurancePage />}
                    {activePage === 'PendingClaims' && <PendingClaims />}
                    {activePage === 'AllClaims' && <AllClaims />}
                    {activePage === 'Dependent' && <Dependent />}
                    {activePage === 'Referral' && <Referral />}
                    {activePage === 'UserProfile' && <UserProfile />}

                    {/* Add other pages as needed */}
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
