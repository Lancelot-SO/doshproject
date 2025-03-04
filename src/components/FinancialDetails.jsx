import React, { useState } from 'react';
import fam from "../images/finance_detail.png";
import FinanceTable from './FinanceTable';
import FinanceSideModal from './FinanceSideModal';

const FinanceDetails = ({ onClose }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isfinanceOpen, setFinanceOpen] = useState(false);

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
                        className="w-full h-[330px] object-cover"
                        src={fam}
                        alt="Family enjoying financial security"
                    />
                    {/* Scrollable text content */}
                    <div className="p-6">
                        <h2 className="lg:text-3xl text-[16px] font-bold mb-6 text-gray-800">Why Financial Services Matter</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Loans and financial insights aren’t just nice-to-haves—they’re essential. Whether for starting a business, paying for school, or handling life’s surprises, financial services unlock opportunities, improve lives, and provide stability. Yet 1.7 billion people remain unbanked, lacking access to even basic financial tools to build their future<sup>1</sup>.
                            </p>
                            <p>
                                Our service bridges this gap with personalised loans and wealth assessments, empowering you to make smarter financial choices.
                            </p>
                            <h3 className="lg:text-2xl text-[16px] font-bold mt-6 mb-4 text-gray-800">Challenges Customers Face with Financial Services</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>High Rates & Hidden Fees:</strong> In places like Ghana, loan rates can average 33%, often layered with hidden fees, making even small loans a big challenge<sup>2</sup>.</li>
                                <li><strong>Complex Approvals:</strong> Stringent loan criteria mean 40% of applications get denied, creating obstacles for those with limited credit history<sup>3</sup>.</li>
                                <li><strong>Limited Financial Literacy:</strong> Only 33% of adults are financially literate, making wealth assessments crucial for informed choices<sup>4</sup>.</li>
                                <li><strong>Slow, Unresponsive Support:</strong> Customers want fast answers, but poor support leaves them feeling stuck.</li>
                                <li><strong>Few Wealth-Building Options:</strong> Many providers focus solely on loans, missing the broader goal of financial growth.</li>
                            </ol>
                            <h3 className="lg:text-2xl font-bold mt-6 mb-4 text-gray-800">How We're Different</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li><strong>Transparent, Fair Loans:</strong> Competitive rates and zero hidden fees keep borrowing affordable, with flexible terms designed to fit your budget.</li>
                                <li><strong>Simple Loan Approvals:</strong> Streamlined processes and innovative assessment tools mean faster access to funds—even with limited credit history.</li>
                                <li><strong>Custom Wealth Planning:</strong> Our assessments give clear, tailored insights on managing and growing your wealth, putting you in control.</li>
                                <li><strong>24/7 Real Support:</strong> Round-the-clock support means help is always just a call away.</li>
                                <li><strong>Guidance for Growth:</strong> Beyond loans, our advisors offer advice on saving, investing, and long-term planning.</li>
                            </ol>
                            <h3 className="lg:text-2xl text-[16px] font-bold mt-6 mb-4 text-gray-800">Take Charge of Your Financial Future</h3>
                            <p>
                                Our loans and wealth services bring your goals within reach. Join thousands who have chosen financial empowerment.
                            </p>
                            <p className="font-bold">
                                Apply now to get started!
                            </p>

                            {/* References Section */}
                            <div className="bg-gray-100 p-4 mt-4">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">References</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li><sup id="reference2">1</sup> <a href="https://www.who.int/news/item/13-12-2017-world-bank-and-who-half-the-world-lacks-access-to-essential-health-services-100-million-still-pushed-into-extreme-poverty-because-of-health-expenses" target="_blank" rel="noopener noreferrer" className='text-blue-500'>1.7 Billion People Don’t Have a Bank Account — But Mobile Banking Could Change Their Lives – BRINK – Conversations and Insights on Global Business.</a></li>
                                    <li><sup id="reference3">2</sup> <a href="https://www.theghanareport.com/average-lending-rate-ends-2023-at-33-75-bog/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Average lending rate ends 2023 at 33.75% – BoG.</a></li>
                                    <li><sup id="reference4">3</sup> <a href="https://www.urban.org/urban-wire/what-different-denial-rates-can-tell-us-about-racial-disparities-mortgage-market" target="_blank" rel="noopener noreferrer" className='text-blue-500'>What Different Denial Rates Can Tell Us About Racial Disparities in the Mortgage Market | Urban Institute.</a></li>
                                    <li><sup id="reference5">4</sup> <a href="https://gflec.org/initiatives/sp-global-finlit-survey/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>S&P Global FinLit Survey | Global Financial Literacy Excellence Center (GFLEC).</a></li>
                                </ul>
                            </div>

                        </div>
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
