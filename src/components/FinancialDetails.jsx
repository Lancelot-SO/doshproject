import React from 'react'
import fam from "../images/dosh-financial.jpg"



const FinanceDetails = ({ onClose }) => {



    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
            <div className="w-full max-w-4xl h-[80vh] bg-white rounded-xl shadow-md overflow-hidden relative flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-300 ease-in-out z-10"
                    aria-label="Close"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="h-1/3 flex-shrink-0">
                    <img
                        className="w-full h-full object-cover"
                        src={fam}
                        alt="Family enjoying financial security"
                    />
                </div>
                <div className="flex flex-col flex-grow overflow-hidden">
                    <div className="flex-grow overflow-y-auto p-6">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Financial Services</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                At Dosh Financial, we understand that protecting your family's future is paramount. Our comprehensive insurance solutions are designed to provide you with peace of mind and financial security in an ever-changing world.
                            </p>
                            <p>
                                Our expert team of advisors works tirelessly to craft personalized insurance packages that cater to your unique needs and circumstances. Whether you're looking for life insurance, health coverage, property protection, or retirement planning, we have you covered.
                            </p>
                            <p>
                                With our state-of-the-art risk assessment tools and deep industry knowledge, we ensure that you receive the most competitive rates without compromising on coverage. We believe that high-quality insurance should be accessible to everyone, and we're committed to making that a reality.
                            </p>
                            <p>
                                Our customer-centric approach means that we're always here to support you. From the initial consultation to filing a claim, our dedicated support team is available 24/7 to assist you with any questions or concerns you may have.
                            </p>
                            <p>
                                We pride ourselves on transparency and education. That's why we offer regular workshops and resources to help you understand your coverage better and make informed decisions about your insurance needs.
                            </p>
                            <p>
                                Choose Dosh Financial for a partner who truly cares about your well-being and financial future. Let us help you build a robust safety net that allows you to live life to the fullest, knowing that you and your loved ones are protected.
                            </p>
                        </div>
                    </div>
                    {/* <div className="p-6 flex-shrink-0 flex gap-4">
                        <button onClick={openPopup} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
                            Compare
                        </button>
                        <button onClick={openInsure} className="w-full bg-[#9E825B] text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out text-lg">
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

export default FinanceDetails