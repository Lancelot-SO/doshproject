import React from 'react'
import fam from "../images/risk_detail.png"



const RiskDetails = ({ onClose }) => {



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
                <div className="h-[330px] flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={fam}
                        alt="Family enjoying financial security"
                    />
                </div>
                <div className="flex flex-col flex-grow overflow-hidden">
                    <div className="flex-grow overflow-y-auto p-6">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Risk Brokerage Services: Your Shield Against Surprises</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Life and business throw curveballs, but with us, you’re covered. Our brokerage services turn those “uh-oh” moments into “we’ve got this” moments. We protect your assets and peace of mind with smart, tailored strategies. Here’s the reality: 80% of businesses face major disruptions early on. Let us ensure those disruptions don’t derail your success.                            </p>

                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">
                                What Annoys Our Clients about Risk Management?                                </h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li>Confusing Jargon: Insurance should be clear, but 53% of businesses find policies confusing. We skip the fine print and make coverage crystal clear.</li>
                                <li>Coverage Gaps: Many clients think they’re covered until they’re not. With 70% lacking a formal risk plan, we close every gap.</li>
                                <li>One-Size-Fits-None: Only 40% feel their policies meet their needs. We offer customized solutions that fit you and your business.</li>
                                <li>No Strategy, Just Policies: Insurance alone isn’t enough. We add proactive strategies to keep risks at bay.</li>
                                <li> Vanishing Act Service: 60% of clients feel abandoned by their brokers. We stay by your side with consistent support.</li>
                            </ol>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">How We're Different</h3>
                            <ol className="list-decimal list-inside space-y-2">
                                <li> Clear Policies: No legalese—just transparent, no-surprise coverage.</li>
                                <li>Custom Coverage: Policies built to fit your specific needs.</li>
                                <li>Thorough Risk Assessments: We cover every angle to keep you ready for anything.</li>
                                <li> Proactive Protection: Strategies that help you dodge risks before they happen.</li>
                                <li>Always-On Support: Real people, real help, whenever you need it.</li>
                            </ol>
                            <h3 className="text-2xl font-bold mt-6 mb-4 text-gray-800">Let’s Lock Down Your Worries!</h3>
                            <p>
                                Turn risk into resilience with a partner you can trust. Call us today and get the protection you deserve.
                            </p>
                            <p className="font-bold">
                                Apply now to get started!
                            </p>
                        </div>
                    </div>
                    {/* <div className="p-6 flex-shrink-0 flex gap-4">
                        <button onClick={openPopup} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                            Compare
                        </button>
                        <button onClick={openFinance} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-[50px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                            Pick a Package
                        </button>
                    </div> */}
                </div>
            </div>
            {/* {isPopupOpen && <InsuranceTable closePopup={closePopup} />}
            {isInsureOpen && <Insure onClose={closeInsure} />}  */}


        </div>
    )
}

export default RiskDetails