import React, { useState } from "react";
import blurry from "../../../images/dashboard/finance/blur.png";
import doshtemp from "../../../images/dashboard/finance/doshtemp.png";
import { ChevronDown } from "lucide-react";

export default function DoshPay() {
    const [pin, setPin] = useState("");
    const [showPinPopup, setShowPinPopup] = useState(false);
    const [formType, setFormType] = useState("DOSH Till");
    const [showOtpPopup, setShowOtpPopup] = useState(false); // Controls OTP popup visibility

    const [formData, setFormData] = useState({
        payerAccountType: "",
        payerDoshNumber: "",
        selectedCurrency: "",
        amount: "",
        source: "",
        destination: "",
        reference: "",
        loadToWallet: false, // Added `loadToWallet` for toggle state
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleToggleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            loadToWallet: e.target.checked, // Toggle the boolean value
        }));
    };

    const handleSave = () => {
        setShowPinPopup(true); // Show the PIN popup
    };

    const handleContinue = () => {
        setShowOtpPopup(true); // Show OTP popup on Continue
    };

    const closeOtpPopup = () => {
        setShowOtpPopup(false); // Close OTP popup
    };

    return (
        <div className="w-[1260px] h-[630px] flex items-center justify-center max-w-full mx-auto bg-black rounded-[36px] relative overflow-hidden overflow-x-hidden">
            <div className="relative flex items-center justify-center w-[999px] h-[546px] bg-[#171616] rounded-[30px]">
                <div className="hidden absolute bottom-0 right-4">
                    <img src={blurry} alt="blur" loading="lazy" />
                </div>

                <div className="lg:w-[720px] w-[370px] lg:h-[500px] h-[550px] bg-black z-50">

                    <div className="flex flex-col gap-4 px-4">
                        <div className="w-full border-b">
                            <ul className="flex justify-around text-sm pt-2">
                                <li
                                    className={`cursor-pointer text-white border-b-4 ${formType === "DOSH Till" ? "border-[#d4a373] text-[#d4a373]" : "border-transparent"
                                        }`}
                                    onClick={() => setFormType("DOSH Till")}
                                >
                                    DOSH Till
                                </li>
                                <li
                                    className={`cursor-pointer text-white border-b-4 ${formType === "DOSH Direct" ? "border-[#d4a373]" : "border-transparent"
                                        }`}
                                    onClick={() => setFormType("DOSH Direct")}
                                >
                                    DOSH Direct
                                </li>
                                <li
                                    className={`cursor-pointer text-white border-b-4 ${formType === "Airtime/Data" ? "border-[#d4a373]" : "border-transparent"
                                        }`}
                                    onClick={() => setFormType("Airtime/Data")}
                                >
                                    Airtime/Data
                                </li>
                                <li
                                    className={`cursor-pointer text-white border-b-4 ${formType === "Bill Pay" ? "border-[#d4a373]" : "border-transparent"
                                        }`}
                                    onClick={() => setFormType("Bill Pay")}
                                >
                                    Bill Pay
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="hidden lg:flex flex-col gap-8 px-8 items-start justify-center w-[250px] h-[300px]">
                                <div>
                                    <img src={doshtemp} alt="Icon" className="w-20 h-20" />
                                </div>
                                <div className="text-start">
                                    <div className="text-[10px] text-gray-400">
                                        No templates.<br /> Get started by saving a new template.
                                    </div>
                                </div>
                            </div>

                            <div className=" hidden lg:flex w-[1px] h-[200px] bg-white"></div>
                            <div className="lg:w-[420px] w-full h-[350px] pl-4 lg:pl-[50px]">
                                <div className="flex-1 pl-6 overflow-auto">
                                    {formType === "DOSH Till" && (
                                        <div>
                                            <div className="w-3/4 mt-10">
                                                <div className="space-y-2">
                                                    <label htmlFor="payerAccountType" className="text-sm font-medium text-gray-300">
                                                        Payer's Account Type
                                                    </label>
                                                    <select
                                                        id="payerAccountType"
                                                        name="payerAccountType"
                                                        value={formData.payerAccountType}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#1C1C1C] text-white border border-gray-700 rounded-md p-2"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="DOSH">DOSH</option>
                                                    </select>
                                                </div>

                                                <div className="space-y-2">
                                                    <label htmlFor="payerDoshNumber" className="text-sm font-medium text-gray-300">
                                                        Payer's DOSH Number
                                                    </label>
                                                    <select
                                                        id="payerDoshNumber"
                                                        name="payerDoshNumber"
                                                        value={formData.payerDoshNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#1C1C1C] text-white border border-gray-700 rounded-md p-2"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="dosh1">DOSH</option>
                                                    </select>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <label htmlFor="selectedCurrency" className="text-sm font-medium text-gray-300">
                                                            Currency
                                                        </label>
                                                        <select
                                                            id="selectedCurrency"
                                                            name="selectedCurrency"
                                                            value={formData.selectedCurrency}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#1C1C1C] text-white border border-gray-700 rounded-md p-2"
                                                        >
                                                            <option value="">Select</option>
                                                            <option value="usd">USD</option>
                                                            <option value="eur">EUR</option>
                                                            <option value="gbp">GBP</option>
                                                        </select>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label htmlFor="amount" className="text-sm font-medium text-gray-300">
                                                            Amount
                                                        </label>
                                                        <input
                                                            type="number"
                                                            id="amount"
                                                            name="amount"
                                                            value={formData.amount}
                                                            onChange={handleInputChange}
                                                            placeholder="0.00"
                                                            className="w-full bg-[#1C1C1C] text-white border border-gray-700 rounded-md p-2"
                                                            step="0.01"
                                                            min="0"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex justify-start mt-6">
                                                    <button
                                                        type="button"
                                                        onClick={handleSave}
                                                        className="bg-[#B19470] hover:bg-[#9A815E] cursor-pointer text-white py-2 px-4 rounded-md"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>

                                            {showPinPopup && (
                                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                    <div className="max-w-md w-full bg-[#1a1a1a] rounded-lg shadow-lg p-6 relative">
                                                        <button
                                                            className="absolute top-4 right-4 text-[#d4a373]"
                                                            onClick={() => setShowPinPopup(false)}
                                                        >
                                                            ✕
                                                        </button>
                                                        <p className="mb-4 text-white">Enter pin to complete till.</p>
                                                        <input
                                                            type="password"
                                                            value={pin}
                                                            onChange={(e) => setPin(e.target.value)}
                                                            className="w-full bg-[#333] text-white p-2 rounded-lg mb-2"
                                                            placeholder="Enter your PIN"
                                                        />
                                                        <button className="w-28 bg-[#d4a373] text-white p-2 rounded-lg">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {formType === "DOSH Direct" && (
                                        <form className="w-3/4 space-y-4">
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Source</label>
                                                <div className="relative">
                                                    <select
                                                        name="source"
                                                        value={formData.source}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-2 rounded-lg appearance-none"
                                                    >
                                                        <option>Select Source</option>
                                                        <option>Wallet 1</option>
                                                        <option>Wallet 2</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Currency</label>
                                                <div className="relative flex space-x-2">
                                                    <select
                                                        name="selectedCurrency"
                                                        value={formData.selectedCurrency}
                                                        onChange={handleInputChange}
                                                        className="w-1/3 bg-[#333] text-white text-sm p-2 rounded-lg appearance-none"
                                                    >
                                                        <option>Currency</option>
                                                        <option>USD</option>
                                                        <option>EUR</option>
                                                    </select>
                                                    <input
                                                        type="number"
                                                        name="amount"
                                                        value={formData.amount}
                                                        onChange={handleInputChange}
                                                        className="w-2/3 bg-[#333] text-white text-sm p-2 rounded-lg"
                                                        placeholder="0.00"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Destination dosh number</label>
                                                <input
                                                    type="text"
                                                    name="destination"
                                                    value={formData.destination}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-2 rounded-lg"
                                                    placeholder="eg002145789"
                                                />
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <span className="text-gray-400 text-xs">Loading to recipient's DOSH Wallet</span>
                                                <div className="relative">
                                                    <input
                                                        type="checkbox"
                                                        id="toggle"
                                                        className="peer hidden"
                                                        checked={formData.loadToWallet}
                                                        onChange={handleToggleChange}
                                                    />
                                                    <label
                                                        htmlFor="toggle"
                                                        className="block w-12 h-6 bg-gray-600 rounded-full cursor-pointer relative transition-all peer-checked:bg-[#d4a373]"
                                                    >
                                                        <span className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform transform peer-checked:translate-x-6"></span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Reference</label>
                                                <input
                                                    type="text"
                                                    name="reference"
                                                    value={formData.reference}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-2 rounded-lg"
                                                    placeholder="Enter reference here"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={handleContinue}
                                                className="mt-4 bg-[#d4a373] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#c78b62] transition-all"
                                            >
                                                Continue
                                            </button>
                                        </form>
                                    )}

                                    {formType === "Airtime/Data" && (
                                        <form className="w-3/4 space-y-2">
                                            {/* Purchase Radio Buttons */}
                                            <div className="flex items-center space-x-4">
                                                <label className="text-white">Purchase</label>
                                                <label className="text-white text-sm">
                                                    <input
                                                        type="radio"
                                                        name="purchaseType"
                                                        value="Airtime"
                                                        onChange={handleInputChange}
                                                        className="mr-2"
                                                    />
                                                    Airtime
                                                </label>
                                                <label className="text-white text-sm">
                                                    <input
                                                        type="radio"
                                                        name="purchaseType"
                                                        value="Data"
                                                        onChange={handleInputChange}
                                                        className="mr-2"
                                                    />
                                                    Data
                                                </label>
                                            </div>
                                            {/* Airtime Network Operator */}
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Airtime Network Operator</label>
                                                <div className="relative">
                                                    <select
                                                        name="networkOperator"
                                                        value={formData.networkOperator}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-2 rounded-lg appearance-none"
                                                    >
                                                        <option>Select network operator</option>
                                                        <option>Operator 1</option>
                                                        <option>Operator 2</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>

                                            {/* Country Code and Destination Number */}
                                            <div className="flex space-x-2">
                                                <div className="w-1/2">
                                                    <label className="block text-xs text-gray-400 mb-1">Country Code</label>
                                                    <div className="relative">
                                                        <select
                                                            name="countryCode"
                                                            value={formData.countryCode}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#333] text-white text-sm p-2 rounded-lg appearance-none"
                                                        >
                                                            <option>Code</option>
                                                            <option>+233</option>
                                                            <option>+234</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                    </div>
                                                </div>
                                                <div className="w-1/2">
                                                    <label className="block text-xs text-gray-400 mb-1">Destination Number</label>
                                                    <input
                                                        type="text"
                                                        name="destinationNumber"
                                                        value={formData.destinationNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-2 rounded-lg"
                                                        placeholder="0.00"
                                                    />
                                                </div>
                                            </div>

                                            {/* Currency and Amount */}
                                            <div className="flex space-x-2">
                                                <div className="w-1/2">
                                                    <label className="block text-xs text-gray-400 mb-1">Currency</label>
                                                    <div className="relative">
                                                        <select
                                                            name="currency"
                                                            value={formData.currency}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#333] text-white text-sm p-2 rounded-lg appearance-none"
                                                        >
                                                            <option>Currency</option>
                                                            <option>USD</option>
                                                            <option>GHS</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                    </div>
                                                </div>
                                                <div className="w-1/2">
                                                    <label className="block text-xs text-gray-400 mb-1">Amount</label>
                                                    <input
                                                        type="number"
                                                        name="amount"
                                                        value={formData.amount}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-2 rounded-lg"
                                                        placeholder="0.00"
                                                    />
                                                </div>
                                            </div>

                                            {/* Source */}
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Source</label>
                                                <div className="relative">
                                                    <select
                                                        name="source"
                                                        value={formData.source}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-2 rounded-lg appearance-none"
                                                    >
                                                        <option>Please select operator</option>
                                                        <option>Source 1</option>
                                                        <option>Source 2</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>

                                            {/* Reference */}
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Reference</label>
                                                <input
                                                    type="text"
                                                    name="reference"
                                                    value={formData.reference}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-2 rounded-lg"
                                                    placeholder="Enter reference here"
                                                />
                                            </div>

                                            {/* Buy Button */}

                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    onClick={handleContinue}
                                                    className="mt-4 bg-[#d4a373] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#c78b62] transition-all"
                                                >
                                                    Buy
                                                </button>
                                            </div>
                                        </form>
                                    )}

                                    {formType === "Bill Pay" && (
                                        <form className="w-3/4 space-y-2 mt-20">
                                            {/* Utility Operator */}
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Utility operator</label>
                                                <div className="relative">
                                                    <select
                                                        name="utilityOperator"
                                                        value={formData.utilityOperator}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-3 rounded-lg appearance-none"
                                                    >
                                                        <option>Select utility operator</option>
                                                        <option>Operator 1</option>
                                                        <option>Operator 2</option>
                                                    </select>
                                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                        <ChevronDown className="text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Destination Number */}
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Destination number</label>
                                                <div className="relative">
                                                    <select
                                                        name="destinationNumber"
                                                        value={formData.destinationNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-3 rounded-lg appearance-none"
                                                    >
                                                        <option>Please select operator</option>
                                                        <option>+233</option>
                                                        <option>+234</option>
                                                    </select>
                                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                        <ChevronDown className="text-white" />

                                                    </div>
                                                </div>
                                            </div>

                                            {/* Payment Mode */}
                                            <div>
                                                <label className="block text-xs text-gray-400 mb-1">Payment mode</label>
                                                <div className="relative">
                                                    <select
                                                        name="paymentMode"
                                                        value={formData.paymentMode}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-3 rounded-lg appearance-none"
                                                    >
                                                        <option>Select operator</option>
                                                        <option>Mode 1</option>
                                                        <option>Mode 2</option>
                                                    </select>
                                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                                        <ChevronDown className="text-white" />

                                                    </div>
                                                </div>
                                            </div>

                                            {/* Pay Button */}
                                            <div className="flex justify-end">
                                                <button
                                                    type="button"
                                                    onClick={handleContinue}
                                                    className="bg-[#B68A61] text-white text-sm px-6 py-2 rounded-lg hover:bg-[#a17c55] transition-all"
                                                >
                                                    Pay
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                                {/* OTP Popup */}
                                {showOtpPopup && (
                                    <div
                                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                                        onClick={closeOtpPopup}
                                    >
                                        <div
                                            className="bg-[#171616] rounded-lg p-6 w-[350px] flex flex-col space-y-4"
                                            onClick={(e) => e.stopPropagation()} // Prevent click on modal from closing it
                                        >
                                            <h3 className="text-sm text-white">
                                                6 digit code has been sent to +233 209584789
                                            </h3>
                                            <div className="flex space-x-2 justify-center">
                                                {Array(6)
                                                    .fill("")
                                                    .map((_, idx) => (
                                                        <input
                                                            key={idx}
                                                            type="text"
                                                            maxLength="1"
                                                            className="w-10 h-10 text-center text-white bg-[#333] rounded-md"
                                                        />
                                                    ))}
                                            </div>
                                            <p className="text-xs text-gray-400 text-center">
                                                Didn’t receive? <span className="text-[#d4a373] cursor-pointer">Resend OTP</span>
                                            </p>
                                            <div className="flex justify-end">
                                                <button
                                                    className="bg-[#d4a373] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#c78b62] w-[80px]"
                                                >
                                                    Confirm
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
