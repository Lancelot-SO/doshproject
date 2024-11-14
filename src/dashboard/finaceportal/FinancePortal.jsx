import React from 'react';
import TopSection from './financeSections/TopSection';
import MiddleSection from './financeSections/MiddleSection';
import Transactions from './transaction/Transactions';
import RightSideSection from './financeSections/RightSideSection';

const FinancePortal = () => {
    return (
        <div className="flex gap-[80px] w-full h-full bg-[#242424] p-4 overflow-auto">
            <div className="w-[817px] h-full flex flex-col gap-4">
                <TopSection />
                <MiddleSection />
                <Transactions />
            </div>
            <div className="flex-shrink-0">
                <RightSideSection />
            </div>
        </div>
    );
};

export default FinancePortal;
