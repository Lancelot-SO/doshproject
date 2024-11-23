import React, { useState } from "react";
import blurry from "../../../../images/dashboard/finance/blur.png"
import doshtemp from "../../../../images/dashboard/finance/doshtemp.png"
import { ChevronDown } from "lucide-react";

export default function SavedTemplate() {
    const [showConfirmation, setShowConfirmation] = useState(false); // To manage popup visibility
    const [pin, setPin] = useState("");
    const [showPinPopup, setShowPinPopup] = useState(false); // New state for showing PIN popup



    const [formType, setFormType] = useState("loadMoney");
    const [formData, setFormData] = useState({
        selectedWallet: "",
        selectedCurrency: "",
        amount: "",
        operator: "",
        reference: "",
        source: "",
        destination: "",
        transferAccount: "",
        transferAmount: "",
        bulkTemplate: "",
        file: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true); // Show confirmation popup
    };

    const closeConfirmation = () => {
        setShowConfirmation(false); // Close confirmation popup
    };

    const handleContinue = () => {
        // Hide confirmation popup and show PIN popup
        setShowConfirmation(false);
        setShowPinPopup(true);
    };

    return (
        <div className="w-[1260px] h-[630px] flex items-center justify-center max-w-full mx-auto border border-gray-500 bg-gray-900 rounded-[36px] relative overflow-hidden overflow-x-hidden">
            {/* Gradient overlay */}
            <div
                className=""
                style={{
                    background: "#452A7C1A opacity-10",
                    backgroundBlendMode: "overlay",
                }}
            ></div>

            {/* Content */}
            <div className="relative flex items-center justify-center w-[999px] h-[546px] bg-[#171616] rounded-[30px]">
                <div className="absolute bottom-0 right-4">
                    <img src={blurry} alt="blur" loading="lazy" />
                </div>

                <div className="w-[720px] h-[400px] bg-[#000000] bg-opacity-25 rounded-lg">
                    <div className="flex flex-col gap-4 px-4">
                        <div className="w-full border-b">
                            <ul className="flex justify-around text-sm py-2">
                                <li
                                    className={`cursor-pointer text-white ${formType === "loadMoney" ? "text-[#d4a373]" : ""
                                        }`}
                                    onClick={() => setFormType("loadMoney")}
                                >
                                    Load Money
                                </li>
                                <li
                                    className={`cursor-pointer text-white ${formType === "transferMoney" ? "text-[#d4a373]" : ""
                                        }`}
                                    onClick={() => setFormType("transferMoney")}
                                >
                                    Transfer Money
                                </li>
                                <li
                                    className={`cursor-pointer text-white ${formType === "bulkDisbursements" ? "text-[#d4a373]" : ""
                                        }`}
                                    onClick={() => setFormType("bulkDisbursements")}
                                >
                                    Bulk Disbursements
                                </li>
                                <li className="cursor-pointer text-white">Utilities</li>
                                <li className="cursor-pointer text-white">Airtime / Bundles</li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-8 px-8 items-start justify-center w-[250px] h-[300px]">
                                <div className="">
                                    <img
                                        src={doshtemp}
                                        alt="Icon"
                                        className="w-20 h-20"
                                    />
                                </div>
                                <div className="text-start">
                                    <div className="text-[10px] text-gray-400">
                                        No templates.<br /> Get started by saving a new template.
                                    </div>
                                </div>
                            </div>
                            <div className="w-[1px] h-[200px] bg-white"></div>
                            <div className="w-[420px] h-[350px] pl-[50px]">
                                <div className="flex-1 pl-6 overflow-auto">
                                    {formType === "loadMoney" && (
                                        <div>
                                            <form className="w-3/4" onSubmit={handleSubmit}>
                                                <div>
                                                    <label className="block text-xs mb-1">Destination wallet</label>
                                                    <div className="relative">
                                                        <select
                                                            name="selectedWallet"
                                                            value={formData.selectedWallet}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                        >
                                                            <option>Please select destination wallet</option>
                                                            <option>Wallet 1</option>
                                                            <option>Wallet 2</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs mb-1">Currency</label>
                                                    <div className="relative">
                                                        <select
                                                            name="selectedCurrency"
                                                            value={formData.selectedCurrency}
                                                            onChange={handleInputChange}
                                                            className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                        >
                                                            <option>Select currency</option>
                                                            <option>USD</option>
                                                            <option>EUR</option>
                                                        </select>
                                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs mb-1">Amount</label>
                                                    <input
                                                        type="number"
                                                        name="amount"
                                                        value={formData.amount}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                        placeholder="Enter Amount"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs mb-1">Operator</label>
                                                    <select
                                                        name="operator"
                                                        value={formData.operator}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                    >
                                                        <option>Select operator</option>
                                                        <option>DOSH</option>
                                                        <option>MTN</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-xs mb-1">Reference</label>
                                                    <input
                                                        type="text"
                                                        name="reference"
                                                        value={formData.reference}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                        placeholder="Enter Reference"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="mt-4 bg-[#d4a373] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#c78b62] transition-all"
                                                >
                                                    Submit
                                                </button>
                                            </form>

                                            {/** Confirmation popup */}
                                            {showConfirmation && (
                                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                    <div className="bg-white rounded-lg shadow-lg sm:max-w-[425px] w-full p-6 mt-4">
                                                        <div className="flex justify-between items-center border-b pb-4">
                                                            <h2 className="text-lg font-semibold">Confirmation</h2>
                                                            <button
                                                                onClick={closeConfirmation}
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
                                                                    onClick={closeConfirmation}
                                                                    className="flex-1 border border-[#B39B7D] text-[#B39B7D] hover:bg-[#B39B7D] hover:text-white py-2 rounded-lg"
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    onClick={handleContinue} // Click Continue to show PIN popup
                                                                    className="flex-1 bg-[#B39B7D] hover:bg-[#9A846A] text-white py-2 rounded-lg"
                                                                >
                                                                    Continue
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/** PIN popup */}
                                            {showPinPopup && (
                                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                                    <div className="max-w-md w-full bg-[#1a1a1a] rounded-lg shadow-lg p-6 relative">
                                                        <button className="absolute top-4 right-4 text-[#d4a373]" onClick={() => setShowPinPopup(false)}>✕</button>
                                                        <h2 className="text-xl font-bold mb-4 text-white">Load Wallet</h2>
                                                        <p className="mb-4 text-white">Please confirm your PIN to load wallet.</p>
                                                        <input
                                                            type="password"
                                                            value={pin}
                                                            onChange={(e) => setPin(e.target.value)}
                                                            className="w-full bg-[#333] text-white p-2 rounded-lg mb-2"
                                                            placeholder="Enter your PIN"
                                                        />
                                                        <div className="text-sm text-[#d4a373] mb-4">
                                                            <a href="#" className="hover:underline">
                                                                Forgotten your PIN? Resed PIN
                                                            </a>
                                                        </div>
                                                        <button className="w-28 bg-[#d4a373] text-white p-2 rounded-lg">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {formType === "transferMoney" && (
                                        <form className="w-3/4">
                                            <div>
                                                <label className="block text-xs mb-1">Source</label>
                                                <div className="relative">
                                                    <select
                                                        name="source"
                                                        value={formData.source}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                    >
                                                        <option>Please select source wallet</option>
                                                        <option>Wallet 1</option>
                                                        <option>Wallet 2</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Currency</label>
                                                <div className="relative">
                                                    <select
                                                        name="selectedCurrency"
                                                        value={formData.selectedCurrency}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                    >
                                                        <option>Select currency</option>
                                                        <option>USD</option>
                                                        <option>EUR</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Amount</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    value={formData.amount}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                    placeholder="Enter Amount"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Destination</label>
                                                <input
                                                    type="text"
                                                    name="destination"
                                                    value={formData.destination}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                    placeholder="Enter destination"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Reference</label>
                                                <input
                                                    type="text"
                                                    name="reference"
                                                    value={formData.reference}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                    placeholder="Enter Reference"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="mt-4 bg-[#d4a373] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#c78b62] transition-all"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                    {formType === "bulkDisbursements" && (
                                        <form className="w-3/4">
                                            <div>
                                                <label className="block text-xs mb-1">Source</label>
                                                <div className="relative">
                                                    <select
                                                        name="source"
                                                        value={formData.source}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                    >
                                                        <option>Please select source wallet</option>
                                                        <option>Wallet 1</option>
                                                        <option>Wallet 2</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Currency</label>
                                                <div className="relative">
                                                    <select
                                                        name="selectedCurrency"
                                                        value={formData.selectedCurrency}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg appearance-none"
                                                    >
                                                        <option>Select currency</option>
                                                        <option>USD</option>
                                                        <option>EUR</option>
                                                    </select>
                                                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Amount</label>
                                                <input
                                                    type="number"
                                                    name="amount"
                                                    value={formData.amount}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                    placeholder="Enter Amount"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs mb-1">Destination</label>
                                                <input
                                                    type="text"
                                                    name="destination"
                                                    value={formData.destination}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                    placeholder="Enter destination"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-xs mb-1">Upload file</label>
                                                <input
                                                    type="file"
                                                    name="file"
                                                    value={formData.file}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-[#333] text-white text-sm p-1.5 rounded-lg"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="mt-4 bg-[#d4a373] text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-[#c78b62] transition-all"
                                            >
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
