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
                            alt="Risk Management"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="lg:text-3xl text-[16px] font-bold mb-6 text-gray-800">Navigating Life's Uncertainties: A Guide to Comprehensive Protection</h2>
                        <div className="space-y-2 text-gray-600">
                            <p>The world is becoming more unpredictable with each passing day. From the young professional starting their career to the established business owner, from growing families to retirees enjoying their golden years – we all face uncertainties that can impact our dreams and aspirations. That's why DOSH Risk is available 24/7, accessible through multiple channels, and affordable for every stage of life.</p>
                            <p>Think about the last time you felt uncertain about the future. Perhaps it was when your child started school, when you launched your business, or when you invested in your first property. These moments of possibility often come with questions about protection – questions we're always here to answer, day or night.</p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Understanding Modern Protection Needs</h3>
                            <p>In Ghana's dynamic environment, traditional approaches to risk management no longer suffice. Consider Sarah, a photographer who runs her business from home while raising two children. Through our accessible digital platforms, she manages her protection needs seamlessly – from her professional equipment to her family's health coverage, all with payment plans that fit her budget.</p>
                            <p>Or take Michael, who recently opened his second retail shop in Accra Mall. While his business grows, he rests easy knowing our 24/7 support team is just a call away, and our flexible payment options make comprehensive coverage affordable as he scales.</p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">The Hidden Gaps in Traditional Coverage</h3>
                            <p>Many Ghanaians discover protection gaps only when they need coverage most. These moments of realization often come with significant emotional and financial stress. That's why we've made our expertise accessible through multiple channels – whether you prefer in-person consultations, digital platforms, or our 24/7 call center. Our affordable consultation services help identify and fill these gaps before they become costly surprises.</p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">DOSH Risk's Comprehensive Approach</h3>
                            <p>We believe in protection that grows with you. Our approach begins with understanding your journey – where you are today and where you want to be tomorrow. Through our accessible multi-channel platforms and affordable payment options, we craft solutions that adapt to your changing needs, backed by round-the-clock support.</p>
                            <p className=''>Consider these real-life scenarios:</p>
                            <h4 className=" font-bold text-gray-800">For Families</h4>
                            <p>When the Owusus welcomed their second child, they needed more than just health insurance. Through our flexible payment plans and always-available support system, we created a protection package that combined health coverage, education continuity plans, and family income protection – all managed easily through our digital platforms.</p>
                            <h4 className=" font-bold mb-2 text-gray-800">For Professionals</h4>
                            <p>As a consulting engineer, Kwame's work takes him across West Africa. With our 24/7 digital access and affordable international coverage options, he stays protected wherever his work takes him. Our WhatsApp support ensures he's never more than a message away from assistance.</p>
                            <h4 className=" font-bold mt-4 mb-2 text-gray-800">For Business Owners</h4>
                            <p>Aisha's catering business grew from a home kitchen to two locations in East Legon. Her journey with us evolved from basic property insurance to a comprehensive package, with flexible payment terms that made scaling her protection affordable. Our round-the-clock support means she never worries about emergency response times.</p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Looking Ahead Together</h3>
                            <p>Life's path brings both opportunities and challenges. Whether you're starting a family, growing a business, or planning for retirement, we're here to ensure that uncertainties don't derail your dreams. Our digital platforms make protection accessible anytime, while our flexible payment options keep comprehensive coverage affordable.</p>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Let's Start Your Protection Journey</h3>
                            <p>Every dream deserves protection. With DOSH Risk, you're choosing a partner who's always available, easily accessible, and surprisingly affordable. Let's discuss how we can secure your dreams.</p>
                            <p><strong>Contact us:</strong></p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><strong>Phone:</strong> 0800367463 (Available 24/7)</li>
                                <li><strong>USSD:</strong> *915# (Accessible anywhere)</li>
                                <li><strong>WhatsApp:</strong> +1 203 293-9850 (Always available)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-6 flex-shrink-0 flex gap-4">
                    <button onClick={openPopup} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                        Submit A Request
                    </button>
                </div>
            </div>
            {isPopupOpen && <RiskForm onClose={closePopup} />}
        </div>
    );
};

export default RiskDetails;
