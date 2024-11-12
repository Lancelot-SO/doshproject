import React, { useState } from 'react';
import pendingImg from "../../images/dashboard/claims/pendingImg.png";
import logo from "../../images/dashboard/dash_logo.png";
import { FaAddressBook, FaPlus } from "react-icons/fa";
import AddDependent from './AddDependent';

const Dependent = () => {
    const [showAddDependent, setShowAddDependent] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

    const handleAddDependentClick = () => {
        setShowAddDependent(true);
    };

    const handleCloseAddDependent = () => {
        setShowAddDependent(false);
    };

    // Function to handle form submission
    const handleFormSubmit = () => {
        setFormSubmitted(true);
        setShowAddDependent(false); // Close the popup once submitted
    };

    return (
        <div>
            <div className="w-[1260px] h-[630px] max-w-full mx-auto border border-gray-500 bg-gray-900 rounded-[36px] relative overflow-hidden overflow-x-hidden">
                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(86.17deg, rgba(162, 135, 95, 0.5) 11.32%, rgba(255, 255, 255, 0.05) 113.26%)',
                        backgroundBlendMode: 'overlay',
                    }}
                ></div>

                {/* Add Dependent button */}
                <button
                    onClick={handleAddDependentClick}
                    className="absolute top-4 right-4 text-white flex items-center gap-2 text-sm font-bold py-2 px-4 rounded-full z-10"
                    style={{
                        background: 'linear-gradient(251.21deg, #987C55 0%, #D0B58C 100%)',
                    }}
                >
                    Add Dependent <FaPlus />
                </button>

                {/* Cards section */}
                {formSubmitted && (
                    <div className="flex space-x-4 absolute top-20 left-4 z-20">
                        {/* First Card */}
                        <div className="w-[300px] h-[150px] bg-gray-800 rounded-xl border-2 border-green-500 p-4 flex flex-col justify-between">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-2">
                                    <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                                        <FaAddressBook className="w-8 h-8 text-gray-800" />
                                    </div>
                                    <div>
                                        <h2 className="text-white text-lg font-semibold">Muhammad Iqbal Tahir</h2>
                                        <p className="text-gray-400 text-sm">Dependent</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="text-white text-sm font-medium">
                                    DOSH 365
                                    <br />
                                    PREMIUM
                                </div>
                                <div className="flex flex-col items-end space-y-2">
                                    <img src={logo} alt='logo' className="w-6 h-6" />
                                    <div className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                        Active
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* "No Dependant" section */}
                {!formSubmitted && !showAddDependent && (
                    <div className="flex items-center justify-center h-full">
                        <div
                            className="text-center relative z-10 w-[184px] h-[233px] bg-[#161717] bg-opacity-[20%] rounded-[29px] p-4 flex flex-col items-center justify-center cursor-pointer"
                        >
                            <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
                                <img src={pendingImg} className="w-full h-full" alt="pending" />
                            </div>
                            <div className="w-[131px] h-[35px] flex flex-col items-center justify-center">
                                <h2 className="text-[9px] font-bold text-[#F4F4F4] leading-[12px]">No Dependant</h2>
                                <p className="text-[9px] font-bold text-[#F4F4F4] leading-[11px] text-center">Added</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* AddDependent Popup */}
                {showAddDependent && <AddDependent onClose={handleCloseAddDependent} onSubmit={handleFormSubmit} />}
            </div>
        </div>
    );
};

export default Dependent;
