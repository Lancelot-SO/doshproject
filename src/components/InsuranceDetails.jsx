import React, { useEffect, useState } from 'react';
// import fam from "../images/dosh-financial.jpg";
import InsuranceTable from '../components/InsuranceTable.jsx';
import Insure from './Insure.jsx';

const InsuranceDetails = ({ onClose }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isInsureOpen, setInsureOpen] = useState(false);

    const [InsureModal, setInsureModal] = useState(null);


    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const openInsure = () => {
        setInsureOpen(true);
    };

    const closeInsure = () => {
        setInsureOpen(false);
    };

    //fetch api for insurance details data
    useEffect(() => {
        const fetchInsuranceDetail = async () => {
            try {
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/health-insurance-modal');
                const data = await response.json();
                console.log('insurancedetails Data:', data);
                setInsureModal(data[0]);
            } catch (error) {
                console.error('Error fetching insurance detail data:', error);
            }
        };
        fetchInsuranceDetail();
    }, []);

    if (!InsureModal) {
        return <div>Loading...</div>;
    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4'>
            <div className="w-full max-w-4xl mt-16 h-[85vh] bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out z-10"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="flex-grow overflow-y-auto">
                    <img
                        className="w-full h-[400px] object-center"
                        src={InsureModal?.image ? `https://doshcms.interactivedigital.com.gh/${InsureModal.image}` : "assets/elevate.png"}
                        alt="Family enjoying financial security"
                        loading='lazy'
                    />
                    <div className="p-6">
                        {/* <h2 className="lg:text-3xl text-[16px] font-bold mb-6 text-gray-800">What's the Deal with Health Insurance?</h2> */}
                        <div className="space-y-4 text-gray-600"
                            dangerouslySetInnerHTML={{ __html: InsureModal.description }}
                        />

                    </div>

                    {/* References Section */}
                    <div className="bg-gray-100 p-4 mt-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">References</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1"
                            dangerouslySetInnerHTML={{ __html: InsureModal.references }}
                        />
                    </div>
                </div>
                <div className="p-6 flex gap-4">
                    <button onClick={openPopup} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                        Compare
                    </button>
                    <button onClick={openInsure} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                        Pick a Package
                    </button>
                </div>


            </div>
            {isPopupOpen && <InsuranceTable closePopup={closePopup} />}
            {isInsureOpen && <Insure onClose={closeInsure} />}
        </div>
    );
};

export default InsuranceDetails;
