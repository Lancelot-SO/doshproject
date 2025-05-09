import React, { useEffect, useState } from 'react';
// import fam from "../images/finance_detail.png";
import FinanceTable from './FinanceTable';
import FinanceSideModal from './FinanceSideModal';

const FinanceDetails = ({ onClose }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isfinanceOpen, setFinanceOpen] = useState(false);

    const [financeModal, setFinanceModal] = useState(null);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const openFinance = () => {
        setFinanceOpen(true);
    };

    const closeFinance = () => {
        setFinanceOpen(false);
    };


    //fetch api for finance details data
    useEffect(() => {
        const fetchFinanceDetail = async () => {
            try {
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/financial-insurance-modal');
                const data = await response.json();
                console.log('financedetails Data:', data);
                setFinanceModal(data[0]);
            } catch (error) {
                console.error('Error fetching finance detail data:', error);
            }
        };
        fetchFinanceDetail();
    }, []);

    if (!financeModal) {
        return <div>Loading...</div>;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
            <div className="w-full max-w-4xl mt-16 h-[85vh] z-40 bg-white rounded-xl shadow-md overflow-y-auto relative flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out z-10"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                {/* Scrollable content container */}
                <div className="overflow-y-auto">
                    {/* Scrollable image */}
                    <img
                        className="w-full h-[400px] object-cover"
                        src={financeModal?.image ? `https://doshcms.interactivedigital.com.gh/${financeModal.image}` : "assets/elevate.png"}
                        alt="financial security"
                    />
                    {/* Scrollable text content */}
                    <div className="p-10">
                        {/* <h2 className="lg:text-3xl text-[16px] font-bold mb-6 text-gray-800">Why Financial Services Matter</h2> */}
                        <div className="space-y-4 text-gray-600"
                            dangerouslySetInnerHTML={{ __html: financeModal.description }}
                        />
                    </div>
                    {/* References Section */}
                    <div className="bg-gray-100 p-4 mt-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">References</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1"
                            dangerouslySetInnerHTML={{ __html: financeModal.references }}
                        />
                    </div>
                </div>
                <div className="p-6 flex-shrink-0 flex gap-4">
                    <button onClick={openPopup} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                        Compare
                    </button>
                    <button onClick={openFinance} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                        Pick a Package
                    </button>
                </div>
            </div>
            {isPopupOpen && <FinanceTable closePopup={closePopup} />}
            {isfinanceOpen && <FinanceSideModal onClose={closeFinance} />}
        </div>
    );
};

export default FinanceDetails;
