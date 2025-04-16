import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/assets.png";
import formlogo from "../../images/formlogo.png";

const AssetsAllRisk = ({ onClose, userData }) => {
    const form = useRef();

    const [formData, setFormData] = useState({
        insuredName: '',
        occupation: '',
        email: '',
        mobile: '',
        tin: '',
        propertyLocation: '',
        lossDate: '',
        lossTime: '',
        noticeDateOne: '',
        noticeDateTwo: '',
        witnesses: '',
        witnessName: '',
        damagedItem: '',
        itemNumber: '',
        sumInsured: '',
        manufacturerEquipment: '',
        yearSerial: '',
        itemDescription: '',
        damagedParts: '',
        damageCause: '',
        policeStation: '',
        radioSerialNumber: '',
        repaircost: '',
        estimate: '',
        // Additional fields for damaged items insured with another company
        insuredCompany: '',
        scope: '',
        thirdPartyDamage: '',
        thirdPartyDetails: '',
        propertyDamage: '',
        bodilyInjury: '',
        existingPropertyDamage: '',
        propertyDamageDetails: '',
        claimAmount: '',
        issuedAt: '',
        issuedDay: '',
        issuedMonth: '',
        issuedYear: '',
        message: '',
    });

    // State for email and mobile (phone) error messages
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    // Pre-populate the personal details from the parent if provided
    useEffect(() => {
        if (userData) {
            setFormData((prev) => ({
                ...prev,
                insuredName: userData.fullname ? userData.fullname.trim() : '',
                email: userData.email || '',
                mobile: userData.phone || '',
            }));
        }
    }, [userData]);

    // Helper function to validate email using a regex
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Helper function to validate mobile/phone number
    const validatePhone = (phone) => {
        // Accepts an optional '+' followed by 7 to 15 digits
        const regex = /^\+?[0-9]{7,15}$/;
        return regex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validate email field and update error state accordingly
        if (name === 'email') {
            if (!validateEmail(value)) {
                setEmailError("Please enter a valid email address.");
            } else {
                setEmailError("");
            }
        }

        // Validate mobile field and update error state accordingly
        if (name === 'mobile') {
            if (!validatePhone(value)) {
                setPhoneError("Please enter a valid mobile number.");
            } else {
                setPhoneError("");
            }
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Prevent form submission if there are validation errors
        if (emailError || phoneError) {
            toast.error("Please fix the errors before submitting the claim.");
            return;
        }

        emailjs
            .sendForm(
                'service_q21fuxd',     // Replace with your EmailJS service ID
                'template_yj0pmcx',    // Replace with your EmailJS template ID
                form.current,
                'aV-FvEfOZg7fbxTN2'     // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    toast.success('Claim submitted successfully!');
                    // Optionally reset the form state
                    setFormData({
                        insuredName: '',
                        occupation: '',
                        email: '',
                        mobile: '',
                        tin: '',
                        propertyLocation: '',
                        lossDate: '',
                        lossTime: '',
                        noticeDateOne: '',
                        noticeDateTwo: '',
                        witnesses: '',
                        witnessName: '',
                        damagedItem: '',
                        itemNumber: '',
                        sumInsured: '',
                        manufacturerEquipment: '',
                        yearSerial: '',
                        itemDescription: '',
                        damagedParts: '',
                        damageCause: '',
                        policeStation: '',
                        radioSerialNumber: '',
                        repaircost: '',
                        estimate: '',
                        insuredCompany: '',
                        scope: '',
                        thirdPartyDamage: '',
                        thirdPartyDetails: '',
                        propertyDamage: '',
                        bodilyInjury: '',
                        existingPropertyDamage: '',
                        propertyDamageDetails: '',
                        claimAmount: '',
                        issuedAt: '',
                        issuedDay: '',
                        issuedMonth: '',
                        issuedYear: '',
                        message: '',
                    });
                    // Close the form
                    // Delay unmounting the component to give time for the toast to display
                    setTimeout(() => {
                        if (onClose) onClose();
                    }, 6000);
                },
                (error) => {
                    toast.error('Failed to submit claim. Please try again.');
                    console.error('Email error:', error.text);
                }
            );

        // Optionally reset the form fields in the DOM
        e.target.reset();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-lg shadow-lg flex overflow-hidden">

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
                    <ToastContainer />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute lg:top-4 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl text-gray-800 font-bold mb-3">Assets All Risks Claim Request</h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Insured Name</label>
                            <input
                                type="text"
                                name="insuredName"
                                value={formData.insuredName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Occupation</label>
                            <input
                                type="text"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}

                        </div>

                        <div>
                            <label className="block text-sm font-medium">Mobile No(s)</label>
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}

                        </div>

                        <div>
                            <label className="block text-sm font-medium">Tax Identification No (TIN)</label>
                            <input
                                type="text"
                                name="tin"
                                value={formData.tin}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className='text-red-500'>
                                (Dear Customer, the Ghana Revenue Authority (GRA) pursuant to the Revenue Administration
                                Act,2016 requires the provision of your TIN to enable us process your claim)
                            </p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Location and Address of Property Insured</label>
                            <input
                                type="text"
                                name="propertyLocation"
                                value={formData.propertyLocation}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">When did the loss or
                                damage occur?</label>
                            <input
                                type="Date"
                                name="lossDate"
                                value={formData.lossDate}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">When was notice first given to the Insurer? <b>To Whom?</b></label>
                            <input
                                type="text"
                                name="noticeDateOne"
                                value={formData.noticeDateOne}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">When was notice first given to the Insurer? <b>By Whom?</b></label>
                            <input
                                type="text"
                                name="noticeDateTwo"
                                value={formData.noticeDateTwo}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Are there any witnesses?</label>
                            <div className="flex items-center space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="witnesses"
                                        value="yes"
                                        onChange={handleChange}
                                        required
                                        className="mr-2"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="witnesses"
                                        value="no"
                                        onChange={handleChange}
                                        required
                                        className="mr-2"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">If so, please give names,professions and addresses.</label>
                            <input
                                type="text"
                                name="witnessName"
                                value={formData.witnessName}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Which item was damaged?</label>
                            <input
                                type="text"
                                name="damagedItem"
                                value={formData.damagedItem}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Item No. in Specification of Policy Schedule</label>
                            <input
                                type="text"
                                name="itemNumber"
                                value={formData.itemNumber}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Sum Insured</label>
                            <input
                                type="text"
                                name="sumInsured"
                                value={formData.sumInsured}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Name of Manufacturer, Type of Equipment</label>
                            <input
                                type="text"
                                name="manufacturerEquipment"
                                value={formData.manufacturerEquipment}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Year of manufacture, Serial number (Please give full details as on manufacturer’s plate)</label>
                            <input
                                type="text"
                                name="yearSerial"
                                value={formData.yearSerial}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Description of damaged item (capacity, r.p.m, Weight, etc)</label>
                            <input
                                type="text"
                                name="itemDescription"
                                value={formData.itemDescription}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Which parts were damaged?</label>
                            <input
                                type="text"
                                name="damagedParts"
                                value={formData.damagedParts}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">How did the Damage occur and what was its probable cause?</label>
                            <textarea
                                name="damageCause"
                                value={formData.damageCause}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Please attach sketches, photos; If available indication on amount of rainfall, water levels, rates of flow; police reports and newspaper cuttings</label>
                            <input
                                type="file"
                                name="attachments"
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                multiple
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">In the event of losses caused by burglary, theft, fire, traffic accidents, which police station did you notify of the accident?</label>
                            <input
                                type="text"
                                name="policeStation"
                                value={formData.policeStation}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">In the event of damage to radio equipment: serial No. of damaged equipment</label>
                            <input
                                type="text"
                                name="radioSerialNumber"
                                value={formData.radioSerialNumber}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">How will the damaged item be repaired, by whom and where? Please indicate estimate repair period. </label>
                            <input
                                type="text"
                                name="repaircost"
                                value={formData.repaircost}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium">What are the estimated repair costs?</label>
                            <input
                                type="text"
                                name="estimate"
                                value={formData.estimate}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Are the damaged items also insured with another company?</label>
                            <input
                                type="text"
                                name="damagedItem"
                                value={formData.damagedItem}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">If so which?</label>
                            <input
                                type="text"
                                name="insuredCompany"
                                value={formData.insuredCompany}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Scope of cover</label>
                            <input
                                type="text"
                                name="scope"
                                value={formData.scope}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Was any third party or surrounding property damaged?</label>
                            <div className="flex items-center space-x-4 mt-1">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="thirdPartyDamage"
                                        value="yes"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="thirdPartyDamage"
                                        value="no"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">If so, please give details.</label>
                            <textarea
                                name="thirdPartyDetails"
                                value={formData.thirdPartyDetails}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">What is the estimated indemnity for third party liability claims?</label>
                            <div className="mt-2">
                                <label className="block text-sm">Property damage</label>
                                <input
                                    type="text"
                                    name="propertyDamage"
                                    value={formData.propertyDamage}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mt-2">
                                <label className="block text-sm">Bodily injury</label>
                                <input
                                    type="text"
                                    name="bodilyInjury"
                                    value={formData.bodilyInjury}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Were any existing buildings or surrounding property damaged?</label>
                            <div className="flex items-center space-x-4 mt-1">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="existingPropertyDamage"
                                        value="yes"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    Yes
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="existingPropertyDamage"
                                        value="no"
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    No
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">If so, by what?</label>
                            <textarea
                                name="propertyDamageDetails"
                                value={formData.propertyDamageDetails}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                rows="4"
                            ></textarea>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Estimated claim amount?</label>
                            <input
                                type="text"
                                name="claimAmount"
                                value={formData.claimAmount}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium">Please enclose copies of repair estimates (material costs, labour charges, hours worked, freight charges)</label>
                            <input
                                type="file"
                                name="repairEstimates"
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                multiple
                            />
                        </div>

                        <div className="mt-4">
                            <p className="text-sm text-gray-900">
                                The undersigned insured declares that he has answered the above questions conscientiously and truthfully,
                            </p>
                        </div>

                        <div className="mt-4 grid grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Issued at</label>
                                <input
                                    type="text"
                                    name="issuedAt"
                                    value={formData.issuedAt}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">This</label>
                                <input
                                    type="text"
                                    name="issuedDay"
                                    value={formData.issuedDay}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Day of</label>
                                <input
                                    type="text"
                                    name="issuedMonth"
                                    value={formData.issuedMonth}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Year</label>
                                <input
                                    type="text"
                                    name="issuedYear"
                                    value={formData.issuedYear}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border rounded-[30px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="YY"
                                />
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


                        <button
                            type="submit"
                            className="w-full bg-[#b5996e] text-white py-2 rounded-[30px] hover:bg-[#776449] transition duration-300"
                        >
                            Submit Claim
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssetsAllRisk;
