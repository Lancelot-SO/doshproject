import React, { useState } from 'react';
import fam from "../images/dosh-financial.jpg";
import InsuranceTable from '../components/InsuranceTable.jsx';
import Insure from './Insure.jsx';

const InsuranceDetails = ({ onClose }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isInsureOpen, setInsureOpen] = useState(false);

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
                        className="w-full h-[300px] object-cover"
                        src={fam}
                        alt="Family enjoying financial security"
                    />
                    <div className="p-6">
                        <h2 className="lg:text-3xl text-[16px] font-bold mb-6 text-gray-800">What's the Deal with Health Insurance?</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Let’s get real: health insurance is your financial armor against surprise medical bills in a world where healthcare costs are sky-high. Each year, over 100 million people are pushed into poverty by medical expenses.<sup><a href="#reference1">1</a></sup> From routine check-ups to major surgeries, insurance helps keep both your health and wallet intact.
                            </p>
                            <p>
                                In Ghana and similar countries, 36% of out-of-pocket spending goes towards healthcare, leaving families vulnerable to financial shocks.<sup><a href="#reference2">2</a></sup> Health insurance lightens that load, making healthcare accessible without the stress.
                            </p>

                            <h3 className="lg:text-2xl text-[16px] font-bold mt-6 mb-4 text-gray-800">Why Do People Struggle with Health Insurance?</h3>
                            <p>
                                Our customers' frustrations mirror global trends, and we're on a mission to simplify things:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 ml-4">
                                <li><strong>Cost Concerns:</strong> When healthcare bills outstrip monthly incomes, affordability is a must. In Sub-Saharan Africa, over 50% lack essential coverage because of cost.<sup><a href="#reference3">3</a></sup></li>
                                <li><strong>Jargon Overload:</strong> Insurance language can be baffling. About 60% of people feel lost in the terminology, which keeps them from signing up.<sup><a href="#reference4">4</a></sup></li>
                                <li><strong>Unexpected Expenses:</strong> Even with insurance, surprise bills can strike. Households without coverage often spend over 10% of their income on healthcare.<sup><a href="#reference5">5</a></sup></li>
                                <li><strong>Low Preventive Care Utilization:</strong> Preventive care saves lives and costs, but many plans don't prioritize it. Low usage rates lead to bigger issues down the line.</li>
                            </ol>

                            <h3 className="lg:text-2xl text-[16px] font-bold mt-6 mb-4 text-gray-800">How We Step Up</h3>
                            <p>
                                We've crafted our plans to tackle these pain points head-on, offering peace of mind and solid coverage:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 ml-4">
                                <li><strong>Affordable, Transparent Pricing:</strong> Our plans fit various budgets, with clear pricing—no hidden fees here! We aim to keep healthcare stress-free.</li>
                                <li><strong>Simple Policies:</strong> We cut the jargon so you know what's covered—no fine print. Just reliable coverage you can trust.</li>
                                <li><strong>Access to Quality Providers:</strong> Whether you're in the city or the countryside, our extensive network means you can choose quality care close to home.</li>
                                <li><strong>Predictable Costs:</strong> Forget surprise bills! Our plans come with clear out-of-pocket limits, so you'll know what to expect.</li>
                                <li><strong>Preventive Care Focus:</strong> With routine screenings included, we help you catch issues early, saving you from bigger headaches (and expenses) later.</li>
                            </ol>

                            <h3 className="lg:text-2xl text-[16px] font-bold mt-6 mb-4 text-gray-800">Ready for Better Coverage?</h3>
                            <p>
                                Let us ease your healthcare worries. Our plans make quality care accessible, affordable, and predictable. Join others who are discovering a smarter way to safeguard their health and finances.
                            </p>
                            <p className="font-bold">
                                Sign up today and experience health insurance designed for you!
                            </p>
                        </div>
                    </div>

                    {/* References Section */}
                    <div className="bg-gray-100 p-4 mt-4">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">References</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li><sup id="reference1">1</sup> <a href="https://www.weforum.org/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Half of the world’s population lack access to essential health services – World Economic Forum</a></li>
                            <li><sup id="reference2">2</sup> <a href="https://www.statista.com/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Ghana: out-of-pocket spending as share of health spending – Statista</a></li>
                            <li><sup id="reference3">3</sup> <a href="https://www.healthaffairs.org/do/10.1377/hlthaff.2020.00410" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Health Insurance Coverage In Low- And Middle-Income Countries – Health Affairs</a></li>
                            <li><sup id="reference4">4</sup> <a href="https://www.healthleadersmedia.com/" target="_blank" rel="noopener noreferrer" className='text-blue-500'>Most Adults Experience Problems With Their Health Insurance – HealthLeaders Media</a></li>
                            <li><sup id="reference5">5</sup> <a href="https://www.worldbank.org/ext/en/home" target="_blank" rel="noopener noreferrer" className='text-blue-500'>World Bank and WHO: Half the world lacks access to essential health services</a></li>
                        </ul>
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
