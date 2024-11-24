import React, { useState } from "react";
import pendingImg from "../../../../images/dashboard/claims/pendingImg.png";

const ChildAccount = () => {
    const [open, setOpen] = useState(false);
    const [formStep, setFormStep] = useState(1); // Tracks the current step of the form
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); // Controls the visibility of the confirmation popup

    const toggleModal = () => {
        setOpen(!open);
        setFormStep(1); // Reset to the first form when the modal is toggled
    };

    const handleNext = () => setFormStep((prev) => prev + 1); // Move to the next step
    const handlePrevious = () => setFormStep((prev) => prev - 1); // Go back to the previous step
    const handleFinalSubmit = () => {
        setShowConfirmationPopup(true); // Show the confirmation popup when form is submitted
    };

    const closeConfirmationPopup = () => {
        setShowConfirmationPopup(false); // Close the confirmation popup
        toggleModal(); // Close the main modal as well
    };

    return (
        <div>
            <div className="w-[1260px] h-[630px] flex items-center justify-center max-w-full mx-auto border border-gray-500 bg-gray-900 rounded-[36px] relative overflow-hidden">
                {/* Pending section */}
                <div className="flex items-center justify-center h-full" onClick={toggleModal}>
                    <div
                        className="text-center relative z-10 w-[184px] h-[233px] bg-[#161717] bg-opacity-[20%] rounded-[29px] p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-30"
                    >
                        <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                            <img src={pendingImg} className="w-full h-full" alt="pending" />
                        </div>
                        <div className="w-[131px] h-[35px] flex flex-col items-center justify-center">
                            <h2 className="text-[9px] font-bold text-[#F4F4F4] leading-[12px]">No child accounts</h2>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {open && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 rounded-[36px] z-50">
                        <div className="bg-[#1C1C1E] text-white w-full max-w-md p-6 rounded-lg relative">
                            {/* Close Button */}
                            <button
                                onClick={toggleModal}
                                className="absolute right-4 top-4 text-white hover:bg-white/10 rounded-full p-1"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Modal Header */}
                            <h2 className="text-2xl font-normal mb-6">Add Child Account</h2>

                            {/* Modal Body */}
                            <div className="space-y-6">
                                {formStep === 1 && (
                                    <>
                                        {/* First Form */}
                                        <div>
                                            <label htmlFor="account-type" className="block text-sm font-medium mb-2">
                                                Account Type
                                            </label>
                                            <select
                                                id="account-type"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            >
                                                <option value="">Select account type</option>
                                                <option value="savings">Savings</option>
                                                <option value="checking">Checking</option>
                                                <option value="investment">Investment</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="has-dosh" className="block text-sm font-medium mb-2">
                                                Has Dosh account
                                            </label>
                                            <select
                                                id="has-dosh"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            >
                                                <option value="">Select</option>
                                                <option value="yes">Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                    </>
                                )}

                                {formStep === 2 && (
                                    <>
                                        {/* Second Form */}
                                        <div>
                                            <label htmlFor="product-type" className="block text-sm font-medium mb-2">
                                                Product Type
                                            </label>
                                            <input
                                                id="product-type"
                                                type="text"
                                                placeholder="Personal - 365"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="payment-method" className="block text-sm font-medium mb-2">
                                                Payment Mode
                                            </label>
                                            <select
                                                id="payment-mode"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            >
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="payment-method" className="block text-sm font-medium mb-2">
                                                Username
                                            </label>
                                            <input
                                                id="username"
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="payment-method" className="block text-sm font-medium mb-2">
                                                Payment Method
                                            </label>
                                            <select
                                                id="payment-method"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            >
                                                <option value="">Select</option>
                                            </select>
                                        </div>
                                    </>
                                )}

                                {formStep === 3 && (
                                    <>
                                        {/* Third Form */}
                                        <div>
                                            <label htmlFor="dosh-number" className="block text-sm font-medium mb-2">
                                                Dosh Number
                                            </label>
                                            <input
                                                id="dosh-number"
                                                type="text"
                                                placeholder="Enter Dosh number"
                                                className="w-full bg-transparent border border-white/20 text-white p-2 rounded focus:outline-none focus:ring focus:ring-[#C6A366]"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={formStep === 1 ? toggleModal : handlePrevious}
                                    className="border border-[#C6A366] w-[150px] text-[#C6A366] px-4 py-2 rounded hover:bg-[#C6A366] hover:text-white"
                                >
                                    {formStep === 1 ? "Cancel" : "Previous"}
                                </button>
                                <button
                                    onClick={formStep === 3 ? handleFinalSubmit : handleNext}
                                    className="bg-[#C6A366] w-[150px] text-white px-4 py-2 rounded hover:bg-[#C6A366]/90"
                                >
                                    {formStep === 3 ? "Submit" : "Next"}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Confirmation Popup Modal */}
                {showConfirmationPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white rounded-lg shadow-lg sm:max-w-[425px] w-full p-6 ml-[150px]">
                            <div className="flex justify-between items-center border-b pb-4">
                                <h2 className="text-lg font-semibold">Confirmation</h2>
                                <button
                                    onClick={closeConfirmationPopup}
                                    className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-col items-center space-y-4 mt-4">
                                <div className="h-16 w-16 rounded-full bg-[#B39B7D] flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        className="h-8 w-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>

                                <div className="text-center space-y-1">
                                    <h3 className="font-semibold text-xl">Thank you!</h3>
                                    <p className="text-gray-600">
                                        You are debiting from
                                        <br />
                                        Jerry Sam
                                    </p>
                                </div>

                                <div className="w-full bg-[#FDF8F3] p-4 rounded-lg space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Cheque Number</span>
                                        <span>dullnm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Cheque payee name</span>
                                        <span>James</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Description</span>
                                        <span>pay me</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Amount</span>
                                        <span>GHS1.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Charges</span>
                                        <span>GHS0.00</span>
                                    </div>
                                    <div className="flex justify-between font-semibold pt-2 border-t">
                                        <span>Total</span>
                                        <span>GHS1.00</span>
                                    </div>
                                </div>

                                <div className="flex w-full gap-4">
                                    <button
                                        onClick={closeConfirmationPopup} // Close the confirmation popup when clicked
                                        className="flex-1 border border-[#B39B7D] text-[#B39B7D] hover:bg-[#B39B7D] hover:text-white py-2 rounded-lg"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={() => console.log("Continue clicked")}
                                        className="flex-1 bg-[#B39B7D] hover:bg-[#9A846A] text-white py-2 rounded-lg"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ChildAccount;
