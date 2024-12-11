import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Wallet, CreditCard, BanknoteIcon, Share2 } from 'lucide-react';
import "../../Dashboard.css";
import DoshPay from './DoshPay'; // Import the DoshPay component

export default function QuickActions() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showDoshPayPopup, setShowDoshPayPopup] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const openDoshPay = () => {
        setShowDoshPayPopup(true);
    };

    const closeDoshPay = () => {
        setShowDoshPayPopup(false);
    };

    return (
        <div className="flex">
            {/* Sidebar for "Quick Actions" */}
            <div className="flex items-center justify-center bg-[#8B7355] w-[28px] h-[150px] px-2 py-4 rounded-l-lg">
                <div
                    className="flex items-center gap-2 -rotate-90 whitespace-nowrap cursor-pointer"
                    onClick={toggleExpansion}
                >
                    <span className="text-white font-medium">Quick Actions</span>
                    <IoIosArrowBack className={`text-white transition-transform ${isExpanded ? '-rotate-90' : 'rotate-90'}`} size={20} />
                </div>
            </div>

            {/* Expanded/Collapsed section for actions */}
            <div
                className={`bg-[#D9D9D9] h-[350px] flex flex-col rounded-br-[28px] gap-4 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'w-[120px] p-4' : 'w-0'}`}
            >
                {isExpanded && (
                    <>
                        <div className="flex flex-col items-center">
                            <button
                                onClick={openDoshPay}
                                className="flex flex-col items-center justify-center bg-white rounded-xl p-3 w-[40px] h-[40px] shadow-xl hover:bg-gray-50 transition-colors border hover:border-yellow-500"
                            >
                                <Wallet size={24} className="mb-1" />
                            </button>
                            <span className="text-xs text-[#575757] mt-1">Dosh Pay</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <button className="flex flex-col items-center justify-center bg-white rounded-xl p-3 w-[40px] h-[40px] shadow-xl hover:bg-gray-50 transition-colors">
                                <CreditCard size={24} className="mb-1" />
                            </button>
                            <span className="text-xs text-[#575757] mt-1">Load Account</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <button className="flex flex-col items-center justify-center bg-white rounded-xl p-3 w-[40px] h-[40px] shadow-xl hover:bg-gray-50 transition-colors">
                                <BanknoteIcon size={24} className="mb-1" />
                            </button>
                            <span className="text-xs text-[#575757] mt-1">Send Money</span>
                        </div>

                        <div className="flex flex-col items-center">
                            <button className="flex flex-col items-center justify-center bg-white rounded-xl p-3 w-[40px] h-[40px] shadow-xl hover:bg-gray-50 transition-colors">
                                <Share2 size={24} className="mb-1" />
                            </button>
                            <span className="text-xs text-[#575757] text-center mt-1">Bulk Disbursment</span>
                        </div>
                    </>
                )}
            </div>

            {/* DoshPay Popup */}
            {showDoshPayPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
                    <div className="relative rounded-lg shadow-lg p-4 w-[900px] h-[600px]">
                        <button
                            onClick={closeDoshPay}
                            className="absolute lg:top-20 top-4 lg:right-40 right-72 text-white bg-[#d4a373] rounded-full w-6 h-6 flex items-center justify-center z-50"
                        >
                            ✕
                        </button>
                        <DoshPay />
                    </div>
                </div>
            )}
        </div>
    );
}
