import React, { useEffect, useRef, useState } from "react";
import image from "../../images/guarantee.png"
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GuaranteeClaim = ({ onClose, userData }) => {
    const [formData, setFormData] = useState({
        firstname: "",
        middlename: "",
        lastname: "",
        lastKnownAddress: "",
        discoveryDetails: "",
        embezzlementDetails: "",
        previousIrregularity: "",
        extentOfLoss: "",
        otherSecurity: "",
        remuneration: "",
        propertyDetails: "",
        downfallCircumstances: "",
        policyNo: "",
        declarationDate: "",
        // We'll track the filename in state if you want to show it or do something with it
        agency: "",
        message: "",
    });

    // 2. A ref for the form so EmailJS can capture all fields including the file
    const formRef = useRef();

    useEffect(() => {
        if (userData) {
            setFormData(f => ({
                ...f,
                firstname: userData.firstname || '',
                middlename: userData.middlename || '',
                lastname: userData.lastname || '',
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        // build payload
        const payload = {
            ...formData,
            emailType: "guaranteeClaim"
        };

        // send JSON (your PHP endpoint should parse JSON and handle $_FILES separately)
        try {
            const res = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (result.status === 'success') {
                toast.success(result.message);
                formRef.current.reset();
                setFormData({
                    lastKnownAddress: "",
                    discoveryDetails: "",
                    embezzlementDetails: "",
                    previousIrregularity: "",
                    extentOfLoss: "",
                    otherSecurity: "",
                    remuneration: "",
                    propertyDetails: "",
                    downfallCircumstances: "",
                    policyNo: "",
                    declarationDate: "",
                    agency: "",
                    message: "",
                    firstname: "",
                    middlename: "",
                    lastname: "",
                });
                setTimeout(onClose, 6000);
            } else {
                toast.error(result.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('An error occurred. Please try again.');
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-lg shadow-lg flex overflow-hidden">


                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[700px] extralarge:h-3/4 object-cover" loading="lazy" />
                    <div className='w-full h-full extralarge:h-1/4 bg-black p-4'>
                        <img src={formlogo} alt='formlogo' className='w-[112px] h-[53px]' loading='lazy' />
                        <h2 className='font-bold text-white text-[20px] mb-4 mt-4'>
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className='text-[14px] text-white'>
                            We simplify insurance so you can focus on what truly matters.
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        pauseOnHover
                    />


                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute lg:top-3 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <h1 className="text-3xl font-bold mb-6 text-black">
                        Fidelity Guarantee Insurance Request
                    </h1>
                    <p className="text-black">Please kindly fill out the form fields below.</p>

                    <form ref={formRef}
                        onSubmit={handleSubmit} className="space-y-6 text-black">

                        {/* Policy No */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Policy No
                            </label>
                            <input
                                type="text"
                                name="policyNo"
                                value={formData.policyNo}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            />
                        </div>
                        {/* Personal Details */}
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                placeholder="Enter first name"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium">
                                Middle Name
                            </label>
                            <input
                                type="text"
                                id="middlename"
                                name="middlename"
                                value={formData.middlename}
                                onChange={handleChange}
                                required
                                placeholder="Enter middle name"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                placeholder="Enter last name"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Last Known Address */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Last Known Address
                            </label>
                            <textarea
                                name="lastKnownAddress"
                                value={formData.lastKnownAddress}
                                onChange={handleChange}
                                rows="3"
                                required
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Discovery Details */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                State date of discovery of the Irregularities and what led to it
                            </label>
                            <textarea
                                name="discoveryDetails"
                                value={formData.discoveryDetails}
                                onChange={handleChange}
                                rows="4"
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Embezzlement Details */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                For how long and in what manner have the embezzlements been carried on and concealed?
                            </label>
                            <textarea
                                name="embezzlementDetails"
                                value={formData.embezzlementDetails}
                                onChange={handleChange}
                                rows="4"
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Previous Irregularity */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Has there been any previous irregularity in the Defaulter's accounts? If so, state nature of same
                            </label>
                            <textarea
                                name="previousIrregularity"
                                value={formData.previousIrregularity}
                                onChange={handleChange}
                                rows="3"
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Extent of Loss */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                What is the extent of the loss so far as at present ascertained?
                            </label>
                            <textarea
                                name="extentOfLoss"
                                value={formData.extentOfLoss}
                                onChange={handleChange}
                                rows="3"
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Other Security */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Do you hold any other security than the above policy in respect of the Defaulter?
                            </label>
                            <textarea
                                name="otherSecurity"
                                value={formData.otherSecurity}
                                onChange={handleChange}
                                rows="2"
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Remuneration */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                What salary, commission, or other remuneration or allowance is due to him?
                            </label>
                            <input
                                type="text"
                                name="remuneration"
                                value={formData.remuneration}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            />
                        </div>

                        {/* Property Details */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Has he to your knowledge any Property, Furniture, or other effects?
                            </label>
                            <input
                                type="text"
                                name="propertyDetails"
                                value={formData.propertyDetails}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            />
                        </div>

                        {/* Downfall Circumstances */}
                        <div>
                            <label className="block text-lg font-medium mb-2">
                                Mention briefly to what circumstances you ascribe his downfall
                            </label>
                            <textarea
                                name="downfallCircumstances"
                                value={formData.downfallCircumstances}
                                onChange={handleChange}
                                rows="3"
                                className="border border-gray-300 rounded-[5px] p-2 w-full"
                            ></textarea>
                        </div>

                        {/* Declaration */}
                        <div className="border-t pt-4">
                            <p className="text-sm mb-4">
                                I warrant that the above statements and particulars are true and I hereby
                                agree that this Declaration shall be held to be promissory and of continuing
                                effect and shall form the basis of and be deemed to be incorporated in
                                Contract between me and the DOSH Risk and I am willing to accept a
                                policy subject to the Terms prescribed by the Company herein, and to pay the
                                Premium thereon.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-lg font-medium mb-2">Date</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-[5px] p-2 w-full"
                                    />
                                </div>

                                <div>
                                    <label className="block text-lg font-medium mb-2">Agency</label>
                                    <input
                                        type="text"
                                        name="agency"
                                        value={formData.agency}
                                        onChange={handleChange}
                                        className="border border-gray-300 rounded-[5px] p-2 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium">
                                Request Details
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                minLength={15}
                                required
                                placeholder="Enter a message"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-[#a58b63] hover:bg-[#725c3a] text-white font-semibold py-2 px-4 rounded-[5px]"
                            >
                                Submit Claim
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GuaranteeClaim;