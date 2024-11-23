import { useState } from "react";
import pendingImg from "../../../../images/dashboard/claims/pendingImg.png";

export default function AuthCode() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);

    const handlePendingClick = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleContinue = () => {
        setIsPopupOpen(false); // Close the form popup
        setIsConfirmationPopupOpen(true); // Open the confirmation popup
    };

    const closeConfirmationPopup = () => {
        setIsConfirmationPopupOpen(false); // Close the confirmation popup
    };

    return (
        <div className="w-[1260px] h-[630px] max-w-full mx-auto border border-gray-500 bg-gray-900 rounded-[36px] relative overflow-hidden overflow-x-hidden">
            {/* Gradient overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "linear-gradient(86.17deg, rgba(162, 135, 95, 0.5) 11.32%, rgba(255, 255, 255, 0.05) 113.26%)",
                    backgroundBlendMode: "overlay",
                }}
            ></div>

            {/* Content */}
            <div className="flex items-center justify-center h-full">
                {/* Pending section */}
                <div
                    onClick={handlePendingClick}
                    className="text-center relative z-10 w-[184px] h-[233px] bg-[#161717] bg-opacity-[20%] rounded-[29px] p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-30"
                >
                    <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                        <img src={pendingImg} className="w-full h-full" alt="pending" />
                    </div>
                    <div className="w-[131px] h-[35px] flex flex-col items-center justify-center">
                        <h2 className="text-[9px] font-bold text-[#F4F4F4] leading-[12px]">
                            You don't
                        </h2>
                        <p className="text-[9px] font-bold text-[#F4F4F4] leading-[11px] text-center">
                            have any recent data
                        </p>
                        <p className="text-[9px] font-bold text-[#A2865F] leading-[11px] text-center">
                            Generate auth code
                        </p>
                    </div>
                </div>
            </div>

            {/* Form Popup */}
            {isPopupOpen && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-20">
                    <div className="bg-[#2C2C2C] w-[90%] max-w-sm rounded-lg p-3 shadow-lg relative">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-semibold text-white">Generate Auth Code</h2>
                            <button
                                onClick={closePopup}
                                className="w-8 h-8 flex items-center justify-center bg-[#A2865F] text-white rounded-full focus:outline-none"
                            >
                                ✖
                            </button>
                        </div>

                        {/* Form Section */}
                        <div className="bg-white rounded-md p-3 space-y-3">
                            {/* Form fields */}
                            <div>
                                <label htmlFor="debitAccount" className="block text-sm font-medium text-gray-700">
                                    Debit Account Name
                                </label>
                                <input
                                    id="debitAccount"
                                    type="text"
                                    placeholder="Ale Jerry Sam"
                                    className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#B39B7D] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                                    Currency
                                </label>
                                <input
                                    id="currency"
                                    type="text"
                                    placeholder="Yearly"
                                    className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#B39B7D] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                                    Amount
                                </label>
                                <input
                                    id="amount"
                                    type="text"
                                    placeholder="Dosh"
                                    className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#B39B7D] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="chequeNumber" className="block text-sm font-medium text-gray-700">
                                    Cheque Number
                                </label>
                                <input
                                    id="chequeNumber"
                                    type="text"
                                    placeholder="Dosh"
                                    className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#B39B7D] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="payeeName" className="block text-sm font-medium text-gray-700">
                                    Cheque Payee Name
                                </label>
                                <input
                                    id="payeeName"
                                    type="text"
                                    placeholder="Dosh"
                                    className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#B39B7D] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    rows="2"
                                    className="w-full bg-[#F5F5F5] border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#B39B7D] focus:outline-none"
                                    placeholder="Enter details here..."
                                ></textarea>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-3">
                            <button
                                onClick={handleContinue}
                                className="w-[112px] bg-[#A2865F] hover:bg-[#9A846A] text-white py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B39B7D]"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Confirmation Popup */}
            {isConfirmationPopupOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg sm:max-w-[425px] w-full p-6">
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
    );
}
