import React from 'react';
import InsurancePage from './insurance/InsurancePage';
import FinancePortal from './finaceportal/FinancePortal';
import PendingClaims from './claims/PendingClaims';
import AllClaims from './claims/AllClaims';
import Dependent from "./dependent/Dependent"
import Referral from "./referral/Referral"
import UserProfile from './profile/UserProfile';
import LinkAccount from './finaceportal/accounts/LinkAccount';
import MainTransactions from './finaceportal/accounts/MainTransactions';
import Investments from './finaceportal/accounts/Investments';
import Refer from './finaceportal/accounts/Refer';
import AuthCode from './finaceportal/accounts/others/AuthCode';
import StandingOrders from './finaceportal/accounts/others/StandingOrders';
import SavedTemplate from './finaceportal/accounts/others/SavedTemplate';
import ChildAccount from './finaceportal/accounts/others/ChildAccount';


const MainContent = ({ activeMenu, activeSubmenuItem }) => {

    if (activeSubmenuItem === "UserProfile") {
        return <UserProfile />;  // Render UserProfile when active submenu is "UserProfile"
    }

    // Check for DOSH Financial active submenu items
    if (activeMenu === "DOSH Financial") {
        switch (activeSubmenuItem) {
            case "Link Account":
                return <LinkAccount />;
            case "Transactions":
                return <MainTransactions />;
            case "Investments":
                return <Investments />;
            case "Referral":
                return <Refer />;
            case "Auth Code":
                return <AuthCode />;
            case "Standing Orders":
                return <StandingOrders />;
            case "Saved Template":
                return <SavedTemplate />;
            case "Child Account":
                return <ChildAccount />;
            // Add additional cases as needed
            default:
                return <FinancePortal />;
        }
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
