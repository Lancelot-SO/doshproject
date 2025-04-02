import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import { X } from 'lucide-react';
import image from "../../../images/assets.png";
import formlogo from "../../../images/formlogo.png"

const initialState = {
    // Header
    mandateNo: '',
    salesActivationCode: '',

    // [D] COVER DETAILS
    policyTerm: '',
    benefitsIncrease: '', // "yes" or "no"

    // Rider: Total and Permanent Disability
    tpd: '', // "yes" or "no"
    tpdAnnualPremium: '',
    tpdIncrease: '',
    tpdAnnualSum: '',
    // (Other riders are displayed as options only, so no input fields for Retrenchment, Dread Disease, or Personal Accident)

    basicPremium: '',
    extraPremium: '',
    totalPremium: '',
    initialSumAssured: '',

    // [E] BENEFICIARY (10 rows – each row has multiple fields)
    beneficiary1Surname: '',
    beneficiary1FirstName: '',
    beneficiary1OtherNames: '',
    beneficiary1DOB: '',
    beneficiary1Relationship: '',
    beneficiary1Percentage: '',
    beneficiary1Contact: '',

    beneficiary2Surname: '',
    beneficiary2FirstName: '',
    beneficiary2OtherNames: '',
    beneficiary2DOB: '',
    beneficiary2Relationship: '',
    beneficiary2Percentage: '',
    beneficiary2Contact: '',

    beneficiary3Surname: '',
    beneficiary3FirstName: '',
    beneficiary3OtherNames: '',
    beneficiary3DOB: '',
    beneficiary3Relationship: '',
    beneficiary3Percentage: '',
    beneficiary3Contact: '',

    beneficiary4Surname: '',
    beneficiary4FirstName: '',
    beneficiary4OtherNames: '',
    beneficiary4DOB: '',
    beneficiary4Relationship: '',
    beneficiary4Percentage: '',
    beneficiary4Contact: '',

    beneficiary5Surname: '',
    beneficiary5FirstName: '',
    beneficiary5OtherNames: '',
    beneficiary5DOB: '',
    beneficiary5Relationship: '',
    beneficiary5Percentage: '',
    beneficiary5Contact: '',

    beneficiary6Surname: '',
    beneficiary6FirstName: '',
    beneficiary6OtherNames: '',
    beneficiary6DOB: '',
    beneficiary6Relationship: '',
    beneficiary6Percentage: '',
    beneficiary6Contact: '',

    beneficiary7Surname: '',
    beneficiary7FirstName: '',
    beneficiary7OtherNames: '',
    beneficiary7DOB: '',
    beneficiary7Relationship: '',
    beneficiary7Percentage: '',
    beneficiary7Contact: '',

    beneficiary8Surname: '',
    beneficiary8FirstName: '',
    beneficiary8OtherNames: '',
    beneficiary8DOB: '',
    beneficiary8Relationship: '',
    beneficiary8Percentage: '',
    beneficiary8Contact: '',

    beneficiary9Surname: '',
    beneficiary9FirstName: '',
    beneficiary9OtherNames: '',
    beneficiary9DOB: '',
    beneficiary9Relationship: '',
    beneficiary9Percentage: '',
    beneficiary9Contact: '',

    beneficiary10Surname: '',
    beneficiary10FirstName: '',
    beneficiary10OtherNames: '',
    beneficiary10DOB: '',
    beneficiary10Relationship: '',
    beneficiary10Percentage: '',
    beneficiary10Contact: '',

    // [A] PERSONAL DETAILS
    customerClassification: '', // "individual" or "corporate"
    occupation: '',
    surname: '',
    middleNames: '',
    firstName: '',
    dob: '',
    nationality: '',
    gender: '', // "male" or "female"
    pregnant: '', // "yes" or "no"
    pregnantDuration: '',
    marital: '', // "single", "married", "divorced", "widowed"

    // [B] EMPLOYER DETAILS
    employerAddress: '',
    employerTelephone: '',
    employerFacsimile: '',
    employerEmail: '',

    // [C] PAYMENT DETAILS
    pepStatus: '', // "cagd" or "corporate"
    staffId: '',
    politicallyExposed: '', // "yes" or "no"
    familyPep: '', // "yes" or "no"
    paymentMode: '', // "debit", "cash", or "mobile"
    mobileMoneyNumber: '',
    permanentPostalAddress: '',
    stateBankBranch: '',
    residentialAddress: '',
    bankAccountNumber: '',
    payFreq: '', // "monthly" or "annually"
    mobile: '',
    email: '',
    idType: '', // "Passport", "Voters’ ID", "Drivers’ License", "National ID", "NHIS"
    idNumber: '',
    idDateOfIssue: '',
    idDateOfExpiry: '',
    sourceIncome: '', // "salary", "business", "other"
    incomeDetails: '',

    // Trustee (if beneficiary is below 18 years)
    trusteeSurname: '',
    trusteeOtherNames: '',
    trusteeDOB: '',
    trusteeRelationship: '',
    trusteeContact: '',

    // [F] MEDICAL HISTORY
    asthma: '', // "yes" or "no"
    asthmaYear: '',
    asthmaClinic: '',
    asthmaResults: '',
    fits: '',
    diabetes: '',
    rheumatism: '',
    skinDisease: '',
    sensoryDisorder: '',
    diagnosticTest: '',
    bilharzia: '',
    surgicalHistory: '',
    medication: '', // "yes" or "no"
    medicationDetails: '',
    alcohol: '', // "yes" or "no"
    alcoholConsumption: '',
    smoke: '', // "yes" or "no"
    smokeSticks: '',
    consentMarketing: '', // "yes" or "no"
    consentBusiness: '', // "yes" or "no"

    // [G] INSURANCE HISTORY
    lifePolicy: '', // "yes" or "no"
    lifePolicy1: '',
    lifePolicy2: '',
    refusedLife: '', // "yes" or "no"

    // [H] DECLARATION
    proposerSignature: '',
    declarationDate: '',
    branchManagerName: '',
    zonalManagerName: '',
    salesExecutiveId: '',
    salesExecutiveName: '',
    salesExecutiveSignature: '',
    salesExecutiveDate: '',
    unitManagerName: '',
    unitManagerSignature: '',
    unitManagerDate: '',
};

const ChildLifelineForm = ({ onClose, userData }) => {
    const form = useRef();
    const [formData, setFormData] = useState(initialState);

    // Validation error state for email and mobile
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    // Pre-populate personal details if provided
    useEffect(() => {
        if (userData) {
            setFormData((prev) => ({
                ...prev,
                surname: userData.fullname ? userData.fullname.trim() : '',
                email: userData.email || '',
                mobile: userData.phone || '',
            }));
        }
    }, [userData]);

    // Helper validation functions
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\+?[0-9]{7,15}$/;
        return regex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === 'email') {
            setEmailError(!validateEmail(value) ? "Please enter a valid email address." : "");
        }
        if (name === 'mobile') {
            setPhoneError(!validatePhone(value) ? "Please enter a valid mobile number." : "");
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (emailError || phoneError) {
            toast.error("Please fix the errors before submitting the claim.");
            return;
        }

        emailjs
            .sendForm(
                'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
                form.current,
                'YOUR_PUBLIC_KEY'     // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    toast.success('Application submitted successfully!');
                    setFormData(initialState);
                    if (onClose) onClose();
                    setTimeout(() => onClose(), 5000);
                },
                (error) => {
                    toast.error('Failed to submit claim. Please try again.');
                    console.error('Email error:', error.text);
                }
            );
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
                        className="absolute top-4 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-xl text-gray-800 font-bold mb-3">Child Lifeline Plus Application Form (EducationPolicy)</h2>
                    <p>Please kindly fill out the form fields below.</p>
                    <form ref={form} onSubmit={sendEmail} className="max-w-6xl mx-auto p-4">
                        {/* HEADER */}
                        <header className="mb-6">
                            <div className="flex flex-wrap justify-between">
                                <div className="w-full md:w-1/2 mb-2 md:mb-0">
                                    <label className="block font-bold text-sm">
                                        MANDATE NO.:
                                        <input
                                            type="text"
                                            name="mandateNo"
                                            value={formData.mandateNo}
                                            onChange={handleChange}
                                            className="ml-2 border-b border-dashed"
                                        />
                                        <span className="ml-2 text-xs">( CAGD only)</span>
                                    </label>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <label className="block font-bold text-sm">
                                        SALES ACTIVATION CODE:
                                        <input
                                            type="text"
                                            name="salesActivationCode"
                                            value={formData.salesActivationCode}
                                            onChange={handleChange}
                                            className="ml-2 border-b border-dashed"
                                        />
                                    </label>
                                </div>
                            </div>
                            <h1 className="text-left text-[14px] font-bold mt-4">
                                StarLife CHILD LIFELINE PLUS POLICY APPLICATION FORM
                            </h1>
                            <p className="text-left text-sm mt-1 text-red-500">
                                NB. EVERY QUESTION MUST BE ANSWERED. PLEASE COMPLETE THIS FORM IN BLOCK LETTERS
                            </p>
                        </header>

                        {/* [A] PERSONAL DETAILS & [B] EMPLOYER DETAILS */}
                        <section className="border-t pt-4 mt-6 flex flex-col gap-8">
                            {/* [A] PERSONAL DETAILS */}
                            <div>
                                <h2 className="text-[14px] font-bold">[A] PERSONAL DETAILS</h2>
                                <div className="mt-4">
                                    <label className="block font-bold">Customer Classification:</label>
                                    <div className="flex space-x-4 mt-1">
                                        <label>
                                            <input
                                                type="radio"
                                                name="customerClassification"
                                                value="individual"
                                                checked={formData.customerClassification === 'individual'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Individual
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="customerClassification"
                                                value="corporate"
                                                checked={formData.customerClassification === 'corporate'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Corporate
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block font-bold">Surname:</label>
                                        <input
                                            type="text"
                                            name="surname"
                                            value={formData.surname}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold">Middle Name(s):</label>
                                        <input
                                            type="text"
                                            name="middleNames"
                                            value={formData.middleNames}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold">First Name:</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-bold">Date of Birth:</label>
                                        <input
                                            type="date"
                                            name="dob"
                                            value={formData.dob}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold">Nationality:</label>
                                        <input
                                            type="text"
                                            name="nationality"
                                            value={formData.nationality}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">Gender:</label>
                                    <div className="flex space-x-4 mt-1">
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={formData.gender === 'male'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={formData.gender === 'female'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="font-bold">If Female, are you Pregnant?</p>
                                    <div className="flex space-x-4 mt-1">
                                        <label>
                                            <input
                                                type="radio"
                                                name="pregnant"
                                                value="yes"
                                                checked={formData.pregnant === 'yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="pregnant"
                                                value="no"
                                                checked={formData.pregnant === 'no'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">If yes, for how long:</label>
                                    <input
                                        type="text"
                                        name="pregnantDuration"
                                        value={formData.pregnantDuration}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">Marital Status:</label>
                                    <div className="flex space-x-4 mt-1">
                                        <label>
                                            <input
                                                type="radio"
                                                name="marital"
                                                value="single"
                                                checked={formData.marital === 'single'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Single
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="marital"
                                                value="married"
                                                checked={formData.marital === 'married'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Married
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="marital"
                                                value="divorced"
                                                checked={formData.marital === 'divorced'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Divorced
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="marital"
                                                value="widowed"
                                                checked={formData.marital === 'widowed'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Widowed
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* [B] EMPLOYER DETAILS */}
                            <div>
                                <h2 className="text-[14px] font-bold">[B] EMPLOYER DETAILS</h2>
                                <div className="mt-4">
                                    <label className="block font-bold">Occupation:</label>
                                    <input
                                        type="text"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">Name of Employer &amp; Work Place Address:</label>
                                    <textarea
                                        name="employerAddress"
                                        value={formData.employerAddress}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">Telephone:</label>
                                    <input
                                        type="text"
                                        name="employerTelephone"
                                        value={formData.employerTelephone}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">Facsimile:</label>
                                    <input
                                        type="text"
                                        name="employerFacsimile"
                                        value={formData.employerFacsimile}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block font-bold">E-mail:</label>
                                    <input
                                        type="email"
                                        name="employerEmail"
                                        value={formData.employerEmail}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* [C] PAYMENT DETAILS */}
                        <section className="border-t pt-4 mt-6">
                            <h2 className="text-[14px] font-bold">[C] PAYMENT DETAILS</h2>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">PEP STATUS:</label>
                                    <div className="flex space-x-4 mt-1">
                                        <label>
                                            <input
                                                type="radio"
                                                name="pepStatus"
                                                value="cagd"
                                                checked={formData.pepStatus === 'cagd'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> CAGD
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="pepStatus"
                                                value="corporate"
                                                checked={formData.pepStatus === 'corporate'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Corporate
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-bold">Staff ID No.:</label>
                                    <input
                                        type="text"
                                        name="staffId"
                                        value={formData.staffId}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">a. Are you a politically exposed Person?</label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="politicallyExposed"
                                            value="yes"
                                            checked={formData.politicallyExposed === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="politicallyExposed"
                                            value="no"
                                            checked={formData.politicallyExposed === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">b. Is any family member or known close associate a PEP?</label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="familyPep"
                                            value="yes"
                                            checked={formData.familyPep === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="familyPep"
                                            value="no"
                                            checked={formData.familyPep === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">Payment Mode:</label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMode"
                                            value="debit"
                                            checked={formData.paymentMode === 'debit'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Debit Order
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMode"
                                            value="cash"
                                            checked={formData.paymentMode === 'cash'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Cash/Cheque
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMode"
                                            value="mobile"
                                            checked={formData.paymentMode === 'mobile'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Mobile Money
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block">Mobile Money Number (e.g., 024 528 7497):</label>
                                    <input
                                        type="text"
                                        name="mobileMoneyNumber"
                                        value={formData.mobileMoneyNumber}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Permanent Postal Address:</label>
                                    <textarea
                                        name="permanentPostalAddress"
                                        value={formData.permanentPostalAddress}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-bold">State Bank &amp; Branch:</label>
                                    <input
                                        type="text"
                                        name="stateBankBranch"
                                        value={formData.stateBankBranch}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Residential Address:</label>
                                    <textarea
                                        name="residentialAddress"
                                        value={formData.residentialAddress}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-bold">Bank A/C No.:</label>
                                    <input
                                        type="text"
                                        name="bankAccountNumber"
                                        value={formData.bankAccountNumber}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Payment Frequency:</label>
                                    <div className="flex space-x-4 mt-1">
                                        <label>
                                            <input
                                                type="radio"
                                                name="payFreq"
                                                value="monthly"
                                                checked={formData.payFreq === 'monthly'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Monthly
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="payFreq"
                                                value="annually"
                                                checked={formData.payFreq === 'annually'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Annually
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-bold">Mobile:</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">E-Mail:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                </div>
                                <div>
                                    <label className="block font-bold">ID Type:</label>
                                    <select
                                        name="idType"
                                        value={formData.idType}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    >
                                        <option value="">Select</option>
                                        <option>Passport</option>
                                        <option>Voters’ ID</option>
                                        <option>Drivers’ License</option>
                                        <option>National ID</option>
                                        <option>NHIS</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block font-bold">ID Number:</label>
                                    <input
                                        type="text"
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date of Issue:</label>
                                    <input
                                        type="date"
                                        name="idDateOfIssue"
                                        value={formData.idDateOfIssue}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date of Expiry:</label>
                                    <input
                                        type="date"
                                        name="idDateOfExpiry"
                                        value={formData.idDateOfExpiry}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">Source of Income:</label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="sourceIncome"
                                            value="salary"
                                            checked={formData.sourceIncome === 'salary'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Salary
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sourceIncome"
                                            value="business"
                                            checked={formData.sourceIncome === 'business'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Business
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sourceIncome"
                                            value="other"
                                            checked={formData.sourceIncome === 'other'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Other
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block">
                                        If Business or Other, please specify nature of Business or other source of income:
                                    </label>
                                    <input
                                        type="text"
                                        name="incomeDetails"
                                        value={formData.incomeDetails}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                        </section>
                        {/* [D] COVER DETAILS */}
                        <section className="border-t pt-4">
                            <h2 className="text-[14px] font-bold">[D] COVER DETAILS</h2>
                            <div className="mt-4">
                                <label className="block font-bold">Policy Term (Minimum of 8 years):</label>
                                <input
                                    type="text"
                                    name="policyTerm"
                                    value={formData.policyTerm}
                                    onChange={handleChange}
                                    className="border rounded p-1 w-full mt-1"
                                />
                            </div>
                            <div className="mt-4">
                                <p className="font-bold">Do you wish to have the Benefits Increase option?</p>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="benefitsIncrease"
                                            value="yes"
                                            checked={formData.benefitsIncrease === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="benefitsIncrease"
                                            value="no"
                                            checked={formData.benefitsIncrease === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                            {/* Example: Rider for Total & Permanent Disability */}
                            <div className="mt-6 border p-4">
                                <p className="font-semibold">Total and Permanent Disability</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="tpd"
                                            value="yes"
                                            checked={formData.tpd === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="tpd"
                                            value="no"
                                            checked={formData.tpd === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block">Annual Premium</label>
                                        <input
                                            type="text"
                                            name="tpdAnnualPremium"
                                            value={formData.tpdAnnualPremium}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Increase</label>
                                        <input
                                            type="text"
                                            name="tpdIncrease"
                                            value={formData.tpdIncrease}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block">Annual Sum Assured</label>
                                        <input
                                            type="text"
                                            name="tpdAnnualSum"
                                            value={formData.tpdAnnualSum}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Basic Premium (GH₵):</label>
                                    <input
                                        type="text"
                                        name="basicPremium"
                                        value={formData.basicPremium}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Extra Premium (GH₵):</label>
                                    <input
                                        type="text"
                                        name="extraPremium"
                                        value={formData.extraPremium}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Total Premium (GH₵):</label>
                                    <input
                                        type="text"
                                        name="totalPremium"
                                        value={formData.totalPremium}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Initial Sum Assured (GH₵):</label>
                                    <input
                                        type="text"
                                        name="initialSumAssured"
                                        value={formData.initialSumAssured}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* [E] BENEFICIARY (IES) */}
                        <section className="border-t pt-4 mt-6 overflow-x-auto">
                            <h2 className="text-[14px] font-bold">[E] BENEFICIARY (IES)</h2>
                            <table className="w-full border-collapse border mt-4">
                                <thead>
                                    <tr>
                                        <th className="border p-2">No.</th>
                                        <th className="border p-2">Surname</th>
                                        <th className="border p-2">First Name</th>
                                        <th className="border p-2">Other Names</th>
                                        <th className="border p-2">Date of Birth</th>
                                        <th className="border p-2">Relationship</th>
                                        <th className="border p-4 ">%</th>
                                        <th className="border p-2">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 10 }, (_, i) => (
                                        <tr key={i}>
                                            <td className="border p-2 text-center">{i + 1}.</td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiary${i + 1}Surname`}
                                                    value={formData[`beneficiary${i + 1}Surname`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-1"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiary${i + 1}FirstName`}
                                                    value={formData[`beneficiary${i + 1}FirstName`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-1"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiary${i + 1}OtherNames`}
                                                    value={formData[`beneficiary${i + 1}OtherNames`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-1"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="date"
                                                    name={`beneficiary${i + 1}DOB`}
                                                    value={formData[`beneficiary${i + 1}DOB`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-1"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiary${i + 1}Relationship`}
                                                    value={formData[`beneficiary${i + 1}Relationship`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-1"
                                                />
                                            </td>
                                            <td className="border">
                                                <input
                                                    type="number"
                                                    name={`beneficiary${i + 1}Percentage`}
                                                    value={formData[`beneficiary${i + 1}Percentage`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiary${i + 1}Contact`}
                                                    value={formData[`beneficiary${i + 1}Contact`]}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-1"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        {/* Trustee Section */}
                        <section className="border-t pt-4 mt-6">
                            <h2 className="text-xl font-bold">Trustee (for beneficiary below 18 years)</h2>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Surname:</label>
                                    <input
                                        type="text"
                                        name="trusteeSurname"
                                        value={formData.trusteeSurname}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Other Names:</label>
                                    <input
                                        type="text"
                                        name="trusteeOtherNames"
                                        value={formData.trusteeOtherNames}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date of Birth:</label>
                                    <input
                                        type="date"
                                        name="trusteeDOB"
                                        value={formData.trusteeDOB}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Relationship:</label>
                                    <input
                                        type="text"
                                        name="trusteeRelationship"
                                        value={formData.trusteeRelationship}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Contact No.:</label>
                                    <input
                                        type="text"
                                        name="trusteeContact"
                                        value={formData.trusteeContact}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* [F] MEDICAL HISTORY */}
                        <section className="border-t pt-4 mt-6">
                            <h2 className="text-xl font-bold">[F] MEDICAL HISTORY</h2>
                            <p className="mt-2">
                                Do you have or have you ever had any of the following? If yes, provide details:
                            </p>
                            {/* Row 1: Asthma */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">
                                    Asthma, persistent cough, blood spitting, bronchitis, chest pains, tuberculosis, pneumonia, hypertension?
                                </p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="asthma"
                                            value="yes"
                                            checked={formData.asthma === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="asthma"
                                            value="no"
                                            checked={formData.asthma === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 2: Fits */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">
                                    Fits, fit of dizziness, paralysis, stroke or any other nervous or mental disorder?
                                </p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="fits"
                                            value="yes"
                                            checked={formData.fits === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="fits"
                                            value="no"
                                            checked={formData.fits === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 3: Diabetes */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Diabetes Mellitus?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="diabetes"
                                            value="yes"
                                            checked={formData.diabetes === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="diabetes"
                                            value="no"
                                            checked={formData.diabetes === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 4: Rheumatism */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">
                                    Rheumatism, sciatica, or any disorder of the bones, joints or the spine?
                                </p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="rheumatism"
                                            value="yes"
                                            checked={formData.rheumatism === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="rheumatism"
                                            value="no"
                                            checked={formData.rheumatism === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 5: Skin Disease */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Skin disease, tumour or growth?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="skinDisease"
                                            value="yes"
                                            checked={formData.skinDisease === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="skinDisease"
                                            value="no"
                                            checked={formData.skinDisease === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 6: Disorder of senses */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Disorder of the eyes, ears, nose or throat?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="sensoryDisorder"
                                            value="yes"
                                            checked={formData.sensoryDisorder === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="sensoryDisorder"
                                            value="no"
                                            checked={formData.sensoryDisorder === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 7: Diagnostic test */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">
                                    Diagnostic test such as X-ray examinations, electrocardiogram?
                                </p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="diagnosticTest"
                                            value="yes"
                                            checked={formData.diagnosticTest === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="diagnosticTest"
                                            value="no"
                                            checked={formData.diagnosticTest === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 8: Bilharzia */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Bilharzia?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="bilharzia"
                                            value="yes"
                                            checked={formData.bilharzia === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="bilharzia"
                                            value="no"
                                            checked={formData.bilharzia === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 9: Surgical History */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">
                                    Any surgical operation, accident or severe injury, mutilation or amputation, any hospital treatment or medical attention not mentioned?
                                </p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="surgicalHistory"
                                            value="yes"
                                            checked={formData.surgicalHistory === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="surgicalHistory"
                                            value="no"
                                            checked={formData.surgicalHistory === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block">Year:</label>
                                        <input
                                            type="text"
                                            name="asthmaYear"
                                            value={formData.asthmaYear}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Clinic/Hospital:</label>
                                        <input
                                            type="text"
                                            name="asthmaClinic"
                                            value={formData.asthmaClinic}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block">Results (Treated &amp; Discharged / Undergoing Treatment):</label>
                                        <input
                                            type="text"
                                            name="asthmaResults"
                                            value={formData.asthmaResults}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full mt-1"
                                            placeholder='Treated &amp; Discharged / Undergoing Treatment'
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Row 10: Medication */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Are you currently taking any medication?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="medication"
                                            value="yes"
                                            checked={formData.medication === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="medication"
                                            value="no"
                                            checked={formData.medication === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block">If yes, give type of medication and dosage:</label>
                                    <input
                                        type="text"
                                        name="medicationDetails"
                                        value={formData.medicationDetails}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            {/* Row 11: Alcohol */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Do you take in any alcoholic drink?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="alcohol"
                                            value="yes"
                                            checked={formData.alcohol === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="alcohol"
                                            value="no"
                                            checked={formData.alcohol === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block">If yes, state weekly consumption:</label>
                                    <input
                                        type="text"
                                        name="alcoholConsumption"
                                        value={formData.alcoholConsumption}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            {/* Row 12: Smoking */}
                            <div className="mt-4 border p-4">
                                <p className="font-semibold">Do you smoke cigarette?</p>
                                <div className="flex space-x-4 mt-2">
                                    <label>
                                        <input
                                            type="radio"
                                            name="smoke"
                                            value="yes"
                                            checked={formData.smoke === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="smoke"
                                            value="no"
                                            checked={formData.smoke === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block">If yes, how many sticks a day?</label>
                                    <input
                                        type="text"
                                        name="smokeSticks"
                                        value={formData.smokeSticks}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            {/* Consents */}
                            <div className="mt-4">
                                <label className="block font-bold">
                                    I hereby consent to the processing of personal data for the purposes of targeted and direct marketing.
                                </label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="consentMarketing"
                                            value="yes"
                                            checked={formData.consentMarketing === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="consentMarketing"
                                            value="no"
                                            checked={formData.consentMarketing === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">
                                    I hereby consent to the processing of my personal data for business relationship and further acknowledge and agree that my personal data may be disclosed to entities associated or affiliated to StarLife Assurance Company Limited to achieve the purpose of processing under this consent.
                                </label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="consentBusiness"
                                            value="yes"
                                            checked={formData.consentBusiness === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="consentBusiness"
                                            value="no"
                                            checked={formData.consentBusiness === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* [G] INSURANCE HISTORY */}
                        <section className="border-t pt-4 mt-6">
                            <h2 className="text-xl font-bold">[G] INSURANCE HISTORY</h2>
                            <div className="mt-4">
                                <label className="block font-bold">Do you have any life assurance policy?</label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="lifePolicy"
                                            value="yes"
                                            checked={formData.lifePolicy === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="lifePolicy"
                                            value="no"
                                            checked={formData.lifePolicy === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">If yes, list company(ies) and the sum(s) assured:</label>
                                <div className="grid grid-cols-2 gap-4 mt-1">
                                    <div>
                                        <label>1.</label>
                                        <input
                                            type="text"
                                            name="lifePolicy1"
                                            value={formData.lifePolicy1}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full"
                                            placeholder="Company &amp; Sum Assured"
                                        />
                                    </div>
                                    <div>
                                        <label>2.</label>
                                        <input
                                            type="text"
                                            name="lifePolicy2"
                                            value={formData.lifePolicy2}
                                            onChange={handleChange}
                                            className="border rounded p-1 w-full"
                                            placeholder="Company &amp; Sum Assured"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-bold">
                                    Have you ever been refused life assurance, your application deferred or had special terms imposed on it?
                                </label>
                                <div className="flex space-x-4 mt-1">
                                    <label>
                                        <input
                                            type="radio"
                                            name="refusedLife"
                                            value="yes"
                                            checked={formData.refusedLife === 'yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="refusedLife"
                                            value="no"
                                            checked={formData.refusedLife === 'no'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* [H] DECLARATION */}
                        <section className="border-t pt-4 mt-6">
                            <h2 className="text-xl font-bold">[H] DECLARATION</h2>
                            <div className="mt-4">
                                <p>
                                    Declaration by Applicant:<br />
                                    I hereby declare to the best of my knowledge and belief that the above statements are true and complete and that this proposal will form the basis of contract.
                                </p>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Proposer’s Signature:</label>
                                    <input
                                        type="text"
                                        name="proposerSignature"
                                        value={formData.proposerSignature}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                        placeholder="Signature"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date:</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Branch Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="branchManagerName"
                                        value={formData.branchManagerName}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Zonal Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="zonalManagerName"
                                        value={formData.zonalManagerName}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block font-bold">Sales Executive’s ID:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveId"
                                        value={formData.salesExecutiveId}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Sales Executive’s Name:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveName"
                                        value={formData.salesExecutiveName}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Sales Executive’s Signature:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveSignature"
                                        value={formData.salesExecutiveSignature}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                        placeholder="Signature"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block font-bold">Sales Executive’s Date:</label>
                                <input
                                    type="date"
                                    name="salesExecutiveDate"
                                    value={formData.salesExecutiveDate}
                                    onChange={handleChange}
                                    className="border rounded p-1 w-full mt-1"
                                />
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Unit Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="unitManagerName"
                                        value={formData.unitManagerName}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Unit Manager’s Signature:</label>
                                    <input
                                        type="text"
                                        name="unitManagerSignature"
                                        value={formData.unitManagerSignature}
                                        onChange={handleChange}
                                        className="border rounded p-1 w-full mt-1"
                                        placeholder="Signature"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label className="block font-bold">Unit Manager’s Date:</label>
                                <input
                                    type="date"
                                    name="unitManagerDate"
                                    value={formData.unitManagerDate}
                                    onChange={handleChange}
                                    className="border rounded p-1 w-full mt-1"
                                />
                            </div>
                        </section>

                        <div className="mt-8 text-center">
                            <button type="submit" className="bg-blue-600 text-white rounded py-2 px-4">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChildLifelineForm;
