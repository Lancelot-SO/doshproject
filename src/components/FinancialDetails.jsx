import React, { useState } from 'react'
import fam from "../images/finance_detail.png"
import FinanceTable from './FinanceTable'
import FinanceSideModal from './FinanceSideModal'



const FinanceDetails = ({ onClose }) => {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isfinanceOpen, setFinanceOpen] = useState(false);  // State for Insure modal


    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    // Open Financial modal when "Pick a Package" is clicked
    const openFinance = () => {
        setFinanceOpen(true);
    };

    const closeFinance = () => {
        setFinanceOpen(false);
    };



    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4'>
            <div className="w-full max-w-4xl mt-16 h-[85vh] z-40 bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out z-10"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="h-[330px] flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={fam}
                        alt="Family enjoying financial security"
                    />
                </div>
                <div className="flex flex-col flex-grow overflow-hidden">
                    <div className="flex-grow overflow-y-auto p-6">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Financial Services Matter</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Loans and financial insights aren't just nice-to-haves—they're essential. Whether for starting a business, paying for school, or handling life's surprises, financial services unlock opportunities, improve lives, and provide stability. Yet 1.7 billion people remain unbanked, lacking access to even basic financial tools to build their future.
                            </p>
                            <p>
                                Our service bridges this gap with personalized loans and wealth assessments, empowering you to make smarter financial choices.
                            </p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Challenges Customers Face with Financial Services</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>High Rates & Hidden Fees:</strong> In places like Ghana, loan rates can hit 22%, often layered with hidden fees, making even small loans a big challenge.</li>
                                <li><strong>Complex Approvals:</strong> Stringent loan criteria mean 40% of applications get denied, creating obstacles for those with limited credit history.</li>
                                <li><strong>Limited Financial Literacy:</strong> Only 33% of adults are financially literate, making wealth assessments crucial for informed choices.</li>
                                <li><strong>Slow, Unresponsive Support:</strong> Customers want fast answers, but poor support leaves them feeling stuck.</li>
                                <li><strong>Few Wealth-Building Options:</strong> Many providers focus solely on loans, missing the broader goal of financial growth.</li>
                            </ol>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">How We're Different</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Transparent, Fair Loans:</strong> Competitive rates and zero hidden fees keep borrowing affordable, with flexible terms designed to fit your budget.</li>
                                <li><strong>Simple Loan Approvals:</strong> Streamlined processes and innovative assessment tools mean faster access to funds—even with limited credit history.</li>
                                <li><strong>Custom Wealth Planning:</strong> Our assessments give clear, tailored insights on managing and growing your wealth, putting you in control.</li>
                                <li><strong>24/7 Real Support:</strong> Round-the-clock support means help is always just a call away.</li>
                                <li><strong>Guidance for Growth:</strong> Beyond loans, our advisors offer advice on saving, investing, and long-term planning.</li>
                            </ol>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Take Charge of Your Financial Future</h3>
                            <p>
                                Our loans and wealth services bring your goals within reach. Join thousands who have chosen financial empowerment.
                            </p>
                            <p className="font-bold">
                                Apply now to get started!
                            </p>
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
            </div>
            {isPopupOpen && <FinanceTable closePopup={closePopup} />}
            {isfinanceOpen && <FinanceSideModal onClose={closeFinance} />}


        </div>
    )
}

export default FinanceDetails