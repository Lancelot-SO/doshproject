import React, { useState } from "react";
import linkwallet from "../../../images/dashboard/finance/linkwallet.png";
import walletcard from "../../../images/dashboard/finance/Cards.png";
import { FaPlus } from "react-icons/fa";
import WalletOtp from "./WalletOtp"; // Import the OTP component
import "./Investment.css";
import QuickActions from "../quickActions/QuickActions";

const LinkAccount = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showOtp, setShowOtp] = useState(false); // State to toggle between form and OTP
    const [otpVerified, setOtpVerified] = useState(false); // State to track OTP verification

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
        setShowOtp(false); // Reset OTP view when modal closes
        setOtpVerified(false); // Reset OTP verification when modal closes
    };

    // Function to switch to the OTP component
    const handleNext = () => {
        setShowOtp(true);
    };

    // Function to verify OTP and show provider options
    const handleOtpVerification = (verified) => {
        if (verified) {
            setOtpVerified(true); // Set OTP as verified if true is passed
        }
    };

    return (
        <div>
            {/* Link Account Section */}
            <div className="lg:w-[1260px] w-[100%] lg:h-[630px] h-[100vh] max-w-full mx-auto border border-gray-500 bg-gray-900 rounded-[36px] overflow-hidden overflow-x-hidden relative">
                {/* Gradient overlay */}
                <div
                    className=""
                    style={{
                        background: "#452A7C1A opacity-50",
                        backgroundBlendMode: "overlay",
                    }}
                ></div>

                {/* "No Dependant" section (conditionally rendered) */}
                {!isModalOpen && (
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex flex-col h-[400px] lg:items-center lg:justify-center lg:h-full">
                            <div
                                className="text-center w-[184px] h-[233px] bg-[#161717] bg-opacity-[20%] 
                              rounded-[29px] p-4 flex flex-col items-center justify-center cursor-pointer"
                            >
                                <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                                    <img src={linkwallet} className="w-full h-full" alt="pending" />
                                </div>
                                <div className="w-[131px] h-[35px] flex flex-col items-center justify-center">
                                    <h2 className="text-[9px] font-bold text-[#F4F4F4] leading-[12px]">
                                        You don't have any linked accounts
                                    </h2>
                                    <p className="text-[9px] font-bold text-[#F4F4F4] leading-[11px] text-center">
                                        Kindly link the wallet to continue
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={openModal} // Open the modal on button click
                                    className="text-white flex items-center justify-center w-[95px] gap-2 text-[11px] mt-2 font-medium rounded-lg"
                                    style={{
                                        background:
                                            "linear-gradient(251.21deg, #987C55 0%, #D0B58C 100%)",
                                    }}
                                >
                                    <FaPlus /> Add Wallet
                                </button>
                            </div>

                        </div>
                    </div>
                )}

                {/* Wallet Form Modal */}
                {isModalOpen && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        {/* Blurry Background */}
                        <div className="absolute bottom-24 right-4 blurry bg-white rounded-full opacity-50"></div>

                        <div className="w-full max-w-5xl bg-white/10 rounded-lg p-6 relative backdrop-blur-lg">
                            <h2 className="text-xl font-medium text-amber-300/90 mb-8">Cards</h2>

                            <div className="flex flex-col lg:flex-row gap-8 items-center md:items-start">
                                {/* Cards Stack */}
                                <div className="relative w-full md:w-1/2 max-w-md">
                                    <img
                                        src={walletcard}
                                        alt="card"
                                        loading="lazy"
                                        className="w-[242px] h-[171px] ml-24"
                                    />

                                    {/* Dots */}
                                    <div className="flex justify-center gap-2 mt-6 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-amber-300/90" />
                                        <div className="w-2 h-2 rounded-full bg-amber-300/30" />
                                        <div className="w-2 h-2 rounded-full bg-amber-300/30" />
                                    </div>

                                    {/* Conditionally render provider options based on OTP verification */}
                                    {otpVerified && (
                                        <div className="space-y-2 hidden lg:block">
                                            {[
                                                { name: "MTN", date: "May 24, 2022", icon: "📱" },
                                                { name: "Vodafone", date: "May 24, 2022", icon: "📞" },
                                                { name: "Airtel Tigo", date: "May 24, 2022", icon: "🔵" },
                                            ].map((provider) => (
                                                <div
                                                    key={provider.name}
                                                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors"
                                                >
                                                    <span className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full">
                                                        {provider.icon}
                                                    </span>
                                                    <div>
                                                        <h3 className="font-medium text-white">{provider.name}</h3>
                                                        <p className="text-sm text-white/60">{provider.date}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Form or OTP Section */}
                                <div className="p-6 bg-white/5 backdrop-blur-lg border-white/10 lg:h-full h-[400px] lg:overflow-hidden overflow-y-scroll w-full md:w-1/2 max-w-md rounded-lg">
                                    {!showOtp ? (
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                                                    <span className="text-2xl">+</span> Add Wallet
                                                </h3>
                                                <p className="text-sm text-white/60">
                                                    Add your Momo/credit card
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="relative">
                                                    <select className="w-full bg-white/5 text-white border-white/10 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300">
                                                        <option
                                                            disabled
                                                            selected
                                                            className="bg-black text-white"
                                                        >
                                                            Select wallet provider
                                                        </option>
                                                        <option value="visa" className="bg-black text-white">
                                                            Visa
                                                        </option>
                                                        <option
                                                            value="mastercard"
                                                            className="bg-black text-white"
                                                        >
                                                            Mastercard
                                                        </option>
                                                        <option value="momo" className="bg-black text-white">
                                                            Momo
                                                        </option>
                                                    </select>
                                                </div>

                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Wallet number..."
                                                        className="w-full bg-white/5 border-white/10 text-white placeholder:text-white/60 p-2 rounded-md"
                                                    />
                                                </div>
                                            </div>

                                            {/* Next Button */}
                                            <div className="flex justify-end mt-8">
                                                <button
                                                    onClick={handleNext} // Switch to OTP
                                                    className="bg-[#A2875F] text-white px-8 py-2 rounded-md"
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <WalletOtp onOtpVerification={handleOtpVerification} /> // Pass callback to handle OTP verification
                                    )}
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={closeModal} // Close the modal
                                className="absolute top-4 right-4 text-white text-xl"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}

            </div>
            <div className='fixed top-[100px] right-0'>
                <QuickActions />
            </div>
        </div>
    );
};

export default LinkAccount;
