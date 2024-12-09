import React, { useState } from 'react';
import fam from "../images/risk_detail.png";
import RiskForm from './RiskForm';

const RiskDetails = ({ onClose }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

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
                <div className="flex flex-col flex-grow overflow-y-auto">
                    <div className="flex-shrink-0">
                        <img
                            className="w-full h-[330px] object-cover"
                            src={fam}
                            alt="Family enjoying financial security"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="lg:text-3xl text-[16px] font-bold mb-6 text-gray-800">Risk Brokerage Services: Your Shield Against Surprises</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Life and business throw curveballs, but with us, you’re covered. Our brokerage services turn those “uh-oh” moments into “we’ve got this” moments. We protect your assets and peace of mind with smart, tailored strategies. Here’s the reality: many businesses face major disruptions early on. Let us ensure those disruptions don’t derail your success.
                            </p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">What Annoys Our Clients about Risk Management?</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <strong>Coverage Gaps:</strong> Many clients think they’re covered until they’re not. With 60% lacking a formal risk plan, we close every gap.<sup>[10]</sup>
                                </li>
                                <li>
                                    <strong>One-Size-Fits-None:</strong> Only 70% feel their policies meet their needs. We offer customized solutions that fit you and your business.<sup>[11]</sup>
                                </li>
                                <li>
                                    <strong>Vanishing Act Service:</strong> 21% of clients feel abandoned by their brokers. We stay by your side with consistent support.<sup>[10]</sup>
                                </li>
                            </ul>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">How We’re Different</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Thorough Risk Assessments:</strong> We cover every angle to keep you ready for anything.</li>
                                <li><strong>Custom Coverage:</strong> Policies built to fit your specific needs.</li>
                                <li><strong>Proactive Protection:</strong> Strategies that help you dodge risks before they happen.</li>
                                <li><strong>Always-On Support:</strong> Real people, real help, whenever you need it.</li>
                            </ul>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Let’s Lock Down Your Worries!</h3>
                            <p>
                                Turn risk into resilience with a partner you can trust. Call us today and get the protection you deserve.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-100 text-gray-700">
                        <h3 className="text-xl font-bold mb-4">References</h3>
                        <ul className="list-decimal list-inside space-y-2">
                            <li>In their own words: Insured Americans struggle to navigate complex coverage.</li>
                            <li>Most Americans Say the Health Care System Fails Them | TIME.</li>
                        </ul>
                    </div>
                </div>
                <div className="p-6 flex-shrink-0 flex gap-4">
                    <button onClick={openPopup} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                        Download form
                    </button>
                </div>

            </div>
            {isPopupOpen && <RiskForm onClose={closePopup} />}
        </div>
    );
};

export default RiskDetails;
