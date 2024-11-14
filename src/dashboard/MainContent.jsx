import React from 'react';
import InsurancePage from './insurance/InsurancePage';
import FinancePortal from './finaceportal/FinancePortal';
import PendingClaims from './claims/PendingClaims';
import AllClaims from './claims/AllClaims';
import Dependent from "./dependent/Dependent"
import Referral from "./referral/Referral"
import UserProfile from './profile/UserProfile';

const MainContent = ({ activeMenu, activeSubmenuItem }) => {

    if (activeSubmenuItem === "UserProfile") {
        return <UserProfile />;  // Render UserProfile when active submenu is "UserProfile"
    }

    // Render other components based on active menu or submenu item
    if (activeMenu === "DOSH Financial") {
        return <FinancePortal />;
    } else if (activeSubmenuItem === "Pending Claims") {
        return <PendingClaims />;
    } else if (activeSubmenuItem === "All Claims") {
        return <AllClaims />;
    } else if (activeSubmenuItem === "Dependent") {
        return <Dependent />;
    } else if (activeSubmenuItem === "Referral") {
        return <Referral />;
    } else {
        return <InsurancePage />;
    }
};

export default MainContent;
