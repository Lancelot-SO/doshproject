import React from 'react';
import TopSection from './financeSections/TopSection';
import MiddleSection from './financeSections/MiddleSection';
import Transactions from './transaction/Transactions';
import RightSideSection from './financeSections/RightSideSection';
import QuickActions from './quickActions/QuickActions';
import "../Dashboard.css"

const FinancePortal = () => {
    return (
        <div className="relative flex flex-col lg:flex-row lg:gap-[80px] w-full h-full bg-[#242424] p-4 lg:overflow-auto overflow-x-hidden no-scrollbar">
            <div className="w-[817px] h-auto flex flex-col gap-4">
                <TopSection />
                <MiddleSection />
                <Transactions />
            </div>
            <div className="flex-shrink-0">
                <RightSideSection />
            </div>

            <div className='fixed top-30 right-0 z-50'>
                <QuickActions />
            </div>
        </div>
    );
};

export default FinancePortal;
