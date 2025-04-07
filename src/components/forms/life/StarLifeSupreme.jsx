import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../../images/assets.png";
import formlogo from "../../../images/formlogo.png";

const initialState = {
    // Header
    mandateNo: '',
    salesActivationCode: '',

    // [A] Personal Details
    surname: '',
    middleName: '',
    firstName: '',
    dateOfBirth: '',
    nationality: '',
    gender: '',
    pregnant: '',
    pregnantDuration: '',
    telephone: '',
    facsimile: '',
    email: '',
    maritalStatus: '',

    // [B] Employer Details
    occupation: '',
    employerDetails: '',

    // [C] Payment Details
    paymentMode: '',
    paymentOption: '',
    staffID: '',
    permanentAddress: '',
    residentialAddress: '',
    mobile: '',
    sourceOfIncome: '',
    idType: '',
    idNumber: '',
    dateOfIssue: '',
    dateOfExpiry: '',

    // Policy Term and Sum Assured
    policyTerm: '',
    sumAssured: '',
    endTermRefund: false,
    endTermFreeCover: false,

    // Assureds Details & Premiums (11 rows)
    assureds: [
        { role: 'Principal Assured (not above 64 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: 'Spouse (not above 64 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: '1st Child (not above 23 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: '2nd Child (not above 23 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: '3rd Child (not above 23 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: '4th Child (not above 23 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: 'Mother (not above 74 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: 'Father (not above 74 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: 'Mother-in-law (not above 74 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: 'Father-in-law (not above 74 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' },
        { role: 'Extended Family Member (Only 1 allowed. Not above 74 years)', surname: '', name: '', dateOfBirth: '', age: '', premium: '' }
    ],

    // Premium Summary
    basicPremium: '',
    extraPremium: '',
    totalPremium: '',

    // Beneficiaries (10 rows)
    beneficiaries: Array.from({ length: 10 }, () => ({
        surname: '',
        firstName: '',
        otherNames: '',
        dateOfBirth: '',
        relationship: '',
        percentage: '',
        contactNo: ''
    })),

    // Trustee (for beneficiary below 18 years)
    trusteeSurname: '',
    trusteeFirstName: '',
    trusteeOtherNames: '',
    trusteeDOB: '',
    trusteeRelationship: '',
    trusteeAddress: '',

    // Benefits Increase Option
    benefitsIncrease: '',
    annualPremiumIncrease: '',
    annualSumAssuredIncrease: '',

    // [F] Declaration
    applicantName: '',
    proposerSignature: '',
    declarationDate: '',
    branchManagerName: '',
    zonalManagerName: '',
    salesExecutiveID: '',
    salesExecutiveName: '',
    salesExecutiveSignature: '',
    salesManagerName: '',
    salesManagerSignature: '',

    // [E] Statement of Health
    health1: '',
    health2a: '',
    health2b: '',
    health3: '',
    health4: '',
    health5: '',
    health6: '',
    health6Details: '',

    // [F] How Did You Get To Know StarLife?
    knowStarLife: [],
    knowStarLifeOthers: '',

    // For Official Use Only
    policyNumber: '',
    approvedBy: '',
    issueDate: '',
    officialSignature: '',
    issueAge: '',
    officialDate: ''
};

function StarLifeSupremeForm({ onClose, userData }) {
    const form = useRef();
    const [formData, setFormData] = useState(initialState);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // Pre-populate personal details if provided
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                surname: userData.fullname ? userData.fullname.trim() : '',
                email: userData.email || '',
                mobile: userData.phone || '',
            }));
        }
    }, [userData]);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        const regex = /^\+?[0-9]{7,15}$/;
        return regex.test(phone);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: fieldValue }));

        if (name === 'email') {
            setEmailError(!validateEmail(value) ? 'Please enter a valid email address.' : '');
        }
        if (name === 'mobile') {
            setPhoneError(!validatePhone(value) ? 'Please enter a valid mobile number.' : '');
        }
    };

    // For nested fields in arrays (Assureds)
    const handleAssuredChange = (idx, field, value) => {
        const newAssureds = [...formData.assureds];
        newAssureds[idx] = { ...newAssureds[idx], [field]: value };
        setFormData({ ...formData, assureds: newAssureds });
    };

    // For nested fields in arrays (Beneficiaries)
    const handleBeneficiaryChange = (idx, field, value) => {
        const newBeneficiaries = [...formData.beneficiaries];
        newBeneficiaries[idx] = { ...newBeneficiaries[idx], [field]: value };
        setFormData({ ...formData, beneficiaries: newBeneficiaries });
    };

    // For nested fields in arrays (KnowStarLife)
    const handleKnowStarLifeChange = (e) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            if (checked) {
                return { ...prev, knowStarLife: [...prev.knowStarLife, value] };
            } else {
                return { ...prev, knowStarLife: prev.knowStarLife.filter(v => v !== value) };
            }
        });
    };


    const sendEmail = (e) => {
        e.preventDefault();

        if (emailError || phoneError) {
            toast.error('Please fix the errors before submitting the form.');
            return;
        }

        emailjs
            .sendForm(
                'service_nxndxca',    // Your EmailJS service ID
                'template_260ycvt',   // Your EmailJS template ID
                form.current,
                'aV-FvEfOZg7fbxTN2'   // Your EmailJS public key
            )
            .then(
                (result) => {
                    toast.success('Application submitted successfully!');
                    setFormData(initialState);
                    if (onClose) onClose();
                    setTimeout(() => onClose(), 5000);
                },
                (error) => {
                    toast.error('Failed to submit the application. Please try again.');
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

                    <h2 className="text-xl text-gray-800 font-bold mb-3">
                        StarLife Supreme Homecall Plan
                    </h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        {/* Header: Mandate No. and Sales Activation Code */}
                        <div className="mb-6">
                            <div className="flex flex-col gap-4">
                                <div className="flex-1">
                                    <label className="block font-bold">MANDATE NO.:</label>
                                    <input
                                        type="text"
                                        name="mandateNo"
                                        value={formData.mandateNo}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        placeholder="___________________________"
                                    />
                                    <span className="text-sm"> ( CAGD only)</span>
                                </div>
                                <div className="flex-1">
                                    <label className="block font-bold">SALES ACTIVATION CODE:</label>
                                    <input
                                        type="text"
                                        name="salesActivationCode"
                                        value={formData.salesActivationCode}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        placeholder="_____________________"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Title and Instructions */}
                        <div className="text-left mb-6">
                            <h1 className="text-[20px] font-bold">StarLife SUPREME HOMECALL PLAN</h1>
                            <h2 className="text-[20px] font-bold">APPLICATION FORM</h2>
                            <p className="text-[12px] italic text-red-500">
                                NB. EVERY QUESTION MUST BE ANSWERED. PLEASE COMPLETE THIS FORM IN BLOCK LETTERS
                                (ALL NAMES SHOULD BE IN FULL. INITIALS ARE NOT ACCEPTABLE)
                            </p>
                        </div>

                        {/* [A] PERSONAL DETAILS and [B] EMPLOYER DETAILS */}
                        <div className="grid grid-cols-1 gap-6">
                            {/* PERSONAL DETAILS */}
                            <div className="border p-4">
                                <h3 className="font-bold mb-2">[A] PERSONAL DETAILS</h3>
                                <div className="mb-4">
                                    <label className="block font-bold">Surname:</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Middle Name(s):</label>
                                    <input
                                        type="text"
                                        name="middleName"
                                        value={formData.middleName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">First Name:</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Date of Birth:</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Nationality:</label>
                                    <input
                                        type="text"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        placeholder="(*if non-Ghanaian provide passport and residence permit)"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Gender:</label>
                                    <div className="flex items-center gap-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                onChange={handleChange}
                                                checked={formData.gender === 'male'}
                                                className="mr-1"
                                            />
                                            Male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                onChange={handleChange}
                                                checked={formData.gender === 'female'}
                                                className="mr-1"
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">If Female, are you Pregnant?</label>
                                    <div className="flex items-center gap-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="pregnant"
                                                value="yes"
                                                onChange={handleChange}
                                                checked={formData.pregnant === 'yes'}
                                                className="mr-1"
                                            />
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="pregnant"
                                                value="no"
                                                onChange={handleChange}
                                                checked={formData.pregnant === 'no'}
                                                className="mr-1"
                                            />
                                            No
                                        </label>
                                    </div>
                                    <label className="block font-bold mt-2">If yes, for how long:</label>
                                    <input
                                        type="text"
                                        name="pregnantDuration"
                                        value={formData.pregnantDuration}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Telephone:</label>
                                    <input
                                        type="text"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Facsimile:</label>
                                    <input
                                        type="text"
                                        name="facsimile"
                                        value={formData.facsimile}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">E-mail:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">Marital Status:</label>
                                    <select
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                    </select>
                                </div>
                            </div>

                            {/* EMPLOYER DETAILS */}
                            <div className="border p-4">
                                <h3 className="font-bold mb-2">[B] EMPLOYER DETAILS</h3>
                                <div className="mb-4">
                                    <label className="block font-bold">Occupation:</label>
                                    <input
                                        type="text"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block font-bold">
                                        Name of Employer &amp; Work Place Address:
                                    </label>
                                    <textarea
                                        name="employerDetails"
                                        value={formData.employerDetails}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        {/* [C] PAYMENT DETAILS */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[C] PAYMENT DETAILS</h3>
                            <div className="mb-4">
                                <label className="block font-bold">Payment Mode:</label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMode"
                                            value="cagd"
                                            onChange={handleChange}
                                            checked={formData.paymentMode === 'cagd'}
                                            className="mr-1"
                                        />
                                        CAGD
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentMode"
                                            value="corporate"
                                            onChange={handleChange}
                                            checked={formData.paymentMode === 'corporate'}
                                            className="mr-1"
                                        />
                                        Corporate
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">Payment Options:</label>
                                <div className="flex flex-wrap gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="debit"
                                            onChange={handleChange}
                                            checked={formData.paymentOption === 'debit'}
                                            className="mr-1"
                                        />
                                        Debit Order
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="cash"
                                            onChange={handleChange}
                                            checked={formData.paymentOption === 'cash'}
                                            className="mr-1"
                                        />
                                        Cash/Cheque
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="paymentOption"
                                            value="mobile"
                                            onChange={handleChange}
                                            checked={formData.paymentOption === 'mobile'}
                                            className="mr-1"
                                        />
                                        Mobile Money
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="staffID"
                                        value={formData.staffID}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        placeholder="Staff ID No."
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block font-bold">Permanent Postal Address:</label>
                                    <textarea
                                        name="permanentAddress"
                                        value={formData.permanentAddress}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-bold">Residential Address:</label>
                                    <textarea
                                        name="residentialAddress"
                                        value={formData.residentialAddress}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block font-bold">Mobile:</label>
                                    <input
                                        type="text"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">E-Mail:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-4 mt-4">
                                <label className="block font-bold">Source of Income:</label>
                                <input
                                    type="text"
                                    name="sourceOfIncome"
                                    value={formData.sourceOfIncome}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">ID Type:</label>
                                    <select
                                        name="idType"
                                        value={formData.idType}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Passport">Passport</option>
                                        <option value="Voters’ ID">Voters’ ID</option>
                                        <option value="Drivers’ License">Drivers’ License</option>
                                        <option value="National ID">National ID</option>
                                        <option value="NHIS">NHIS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-bold">ID Number:</label>
                                    <input
                                        type="text"
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <div>
                                    <label className="block font-bold">Date of Issue:</label>
                                    <input
                                        type="date"
                                        name="dateOfIssue"
                                        value={formData.dateOfIssue}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date of Expiry:</label>
                                    <input
                                        type="date"
                                        name="dateOfExpiry"
                                        value={formData.dateOfExpiry}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Policy Term and Sum Assured Section */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">Policy Term &amp; Sum Assured</h3>
                            <div className="mb-4">
                                <label className="block font-bold">Policy Term (years):</label>
                                <input
                                    type="number"
                                    name="policyTerm"
                                    value={formData.policyTerm}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    Sum Assured GH₵ (Benefits Category):
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: "2500", label: "Option 1 - GH₵ 2,500" },
                                        { value: "5000", label: "Option 2 - GH₵ 5,000" },
                                        { value: "7500", label: "Option 3 - GH₵ 7,500" },
                                        { value: "10000", label: "Option 4 - GH₵ 10,000" },
                                        { value: "15000", label: "Option 5 - GH₵ 15,000" },
                                        { value: "20000", label: "Option 6 - GH₵ 20,000" },
                                        { value: "25000", label: "Option 7 - GH₵ 25,000" },
                                        { value: "30000", label: "Option 8 - GH₵ 30,000" },
                                        { value: "40000", label: "Option 9 - GH₵ 40,000" },
                                        { value: "50000", label: "Option 10 - GH₵ 50,000" }
                                    ].map((option, idx) => (
                                        <div key={idx}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="sumAssured"
                                                    value={option.value}
                                                    onChange={handleChange}
                                                    checked={formData.sumAssured === option.value}
                                                    className="mr-1"
                                                />
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    End of Term Benefit (please tick your preferred option):
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="endTermRefund"
                                            checked={formData.endTermRefund}
                                            onChange={handleChange}
                                            className="mr-1"
                                        />
                                        Refund
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="endTermFreeCover"
                                            checked={formData.endTermFreeCover}
                                            onChange={handleChange}
                                            className="mr-1"
                                        />
                                        Free Cover
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Assureds and Premiums Table */}
                        <div className="border p-4 my-6 overflow-x-auto">
                            <h3 className="font-bold mb-2">Assureds Details &amp; Premiums</h3>
                            <table className="min-w-full border">
                                <thead>
                                    <tr>
                                        <th className="border p-8">Assured</th>
                                        <th className="border p-8">Surname</th>
                                        <th className="border p-8">Name</th>
                                        <th className="border p-2">Date of Birth</th>
                                        <th className="border p-8">Age</th>
                                        <th className="border p-2">Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.assureds.map((assured, idx) => (
                                        <tr key={idx}>
                                            <td className="border p-2">{assured.role}</td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`assuredSurname_${idx}`}
                                                    value={assured.surname}
                                                    onChange={(e) =>
                                                        handleAssuredChange(idx, 'surname', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`assuredName_${idx}`}
                                                    value={assured.name}
                                                    onChange={(e) =>
                                                        handleAssuredChange(idx, 'name', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="date"
                                                    name={`assuredDOB_${idx}`}
                                                    value={assured.dateOfBirth}
                                                    onChange={(e) =>
                                                        handleAssuredChange(idx, 'dateOfBirth', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="number"
                                                    name={`assuredAge_${idx}`}
                                                    value={assured.age}
                                                    onChange={(e) =>
                                                        handleAssuredChange(idx, 'age', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="number"
                                                    name={`assuredPremium_${idx}`}
                                                    value={assured.premium}
                                                    onChange={(e) =>
                                                        handleAssuredChange(idx, 'premium', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-xs mt-2 text-red-500">
                                * If at the time of claim it is discovered that the assured was more than the age limit at
                                the inception of the policy, the company would only refund premiums.
                            </p>
                        </div>

                        {/* Premium Summary */}
                        <div className="grid grid-cols-1 gap-4 my-6">
                            <div>
                                <label className="block font-bold">Basic Premium (GH₵):</label>
                                <input
                                    type="number"
                                    name="basicPremium"
                                    value={formData.basicPremium}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Extra Premium (GH₵):</label>
                                <input
                                    type="number"
                                    name="extraPremium"
                                    value={formData.extraPremium}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-bold">Total Premium (GH₵):</label>
                                <input
                                    type="number"
                                    name="totalPremium"
                                    value={formData.totalPremium}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                        </div>

                        {/* Beneficiaries */}
                        <div className="border p-4 my-6 overflow-x-auto">
                            <h3 className="font-bold mb-2">Beneficiaries</h3>
                            <table className="min-w-full border">
                                <thead>
                                    <tr>
                                        <th className="border p-2">No.</th>
                                        <th className="border p-8">Surname</th>
                                        <th className="border p-8">First Name</th>
                                        <th className="border p-8">Other Names</th>
                                        <th className="border p-2">Date of Birth</th>
                                        <th className="border p-2">Relationship</th>
                                        <th className="border p-8">%</th>
                                        <th className="border p-6">Contact No.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.beneficiaries.map((beneficiary, idx) => (
                                        <tr key={idx}>
                                            <td className="border p-2 text-center">{idx + 1}</td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiarySurname_${idx}`}
                                                    value={beneficiary.surname}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'surname', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryFirstName_${idx}`}
                                                    value={beneficiary.firstName}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'firstName', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryOtherNames_${idx}`}
                                                    value={beneficiary.otherNames}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'otherNames', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="date"
                                                    name={`beneficiaryDOB_${idx}`}
                                                    value={beneficiary.dateOfBirth}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'dateOfBirth', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryRelationship_${idx}`}
                                                    value={beneficiary.relationship}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'relationship', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="number"
                                                    name={`beneficiaryPercentage_${idx}`}
                                                    value={beneficiary.percentage}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'percentage', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryContact_${idx}`}
                                                    value={beneficiary.contactNo}
                                                    onChange={(e) =>
                                                        handleBeneficiaryChange(idx, 'contactNo', e.target.value)
                                                    }
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-4">
                                <h4 className="font-bold text-red-500">
                                    Trustee (where a beneficiary is below 18 years of age)
                                </h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-bold">Surname:</label>
                                        <input
                                            type="text"
                                            name="trusteeSurname"
                                            value={formData.trusteeSurname}
                                            onChange={handleChange}
                                            className="border p-1 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold">First Name:</label>
                                        <input
                                            type="text"
                                            name="trusteeFirstName"
                                            value={formData.trusteeFirstName}
                                            onChange={handleChange}
                                            className="border p-1 w-full"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block font-bold">Other Names:</label>
                                        <input
                                            type="text"
                                            name="trusteeOtherNames"
                                            value={formData.trusteeOtherNames}
                                            onChange={handleChange}
                                            className="border p-1 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold">Date of Birth:</label>
                                        <input
                                            type="date"
                                            name="trusteeDOB"
                                            value={formData.trusteeDOB}
                                            onChange={handleChange}
                                            className="border p-1 w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold">Relationship:</label>
                                        <input
                                            type="text"
                                            name="trusteeRelationship"
                                            value={formData.trusteeRelationship}
                                            onChange={handleChange}
                                            className="border p-1 w-full"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <label className="block font-bold">Address/Contact No.:</label>
                                        <input
                                            type="text"
                                            name="trusteeAddress"
                                            value={formData.trusteeAddress}
                                            onChange={handleChange}
                                            className="border p-1 w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Benefits Increase Option */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">Benefits Increase Option</h3>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    Do you wish to have the Benefits Increase option?
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="benefitsIncrease"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.benefitsIncrease === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="benefitsIncrease"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.benefitsIncrease === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    If yes, please tick your preferred option:
                                </label>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block font-bold">Annual Premium Increase</label>
                                        <div className="flex flex-col gap-4">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="annualPremiumIncrease"
                                                    value="5"
                                                    onChange={handleChange}
                                                    checked={formData.annualPremiumIncrease === "5"}
                                                    className="mr-1"
                                                />
                                                Option 1 - 5%
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="annualPremiumIncrease"
                                                    value="10"
                                                    onChange={handleChange}
                                                    checked={formData.annualPremiumIncrease === "10"}
                                                    className="mr-1"
                                                />
                                                Option 2 - 10%
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="annualPremiumIncrease"
                                                    value="15"
                                                    onChange={handleChange}
                                                    checked={formData.annualPremiumIncrease === "15"}
                                                    className="mr-1"
                                                />
                                                Option 3 - 15%
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-bold">Annual Sum Assured Increase</label>
                                        <div className="flex flex-col gap-4">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="annualSumAssuredIncrease"
                                                    value="3"
                                                    onChange={handleChange}
                                                    checked={formData.annualSumAssuredIncrease === "3"}
                                                    className="mr-1"
                                                />
                                                Option 1 - 3%
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="annualSumAssuredIncrease"
                                                    value="6"
                                                    onChange={handleChange}
                                                    checked={formData.annualSumAssuredIncrease === "6"}
                                                    className="mr-1"
                                                />
                                                Option 2 - 6%
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="annualSumAssuredIncrease"
                                                    value="9"
                                                    onChange={handleChange}
                                                    checked={formData.annualSumAssuredIncrease === "9"}
                                                    className="mr-1"
                                                />
                                                Option 3 - 9%
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Optional Benefits */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">Optional Benefit for:</h3>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    Personal Accident (Cover ends at Age 60)
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="personalAccident"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.personalAccident === true}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="personalAccident"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.personalAccident === false}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block font-bold">GH₵ Annual Benefit Options:</label>
                                    <div className="grid grid-cols-1 gap-4">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="personalAccidentBenefit"
                                                value="5000"
                                                onChange={handleChange}
                                                checked={formData.personalAccidentBenefit === "5000"}
                                                className="mr-1"
                                            />
                                            Option 1 - GH₵ 5,000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="personalAccidentBenefit"
                                                value="10000"
                                                onChange={handleChange}
                                                checked={formData.personalAccidentBenefit === "10000"}
                                                className="mr-1"
                                            />
                                            Option 2 - GH₵ 10,000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="personalAccidentBenefit"
                                                value="15000"
                                                onChange={handleChange}
                                                checked={formData.personalAccidentBenefit === "15000"}
                                                className="mr-1"
                                            />
                                            Option 3 - GH₵ 15,000
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="personalAccidentBenefit"
                                                value="20000"
                                                onChange={handleChange}
                                                checked={formData.personalAccidentBenefit === "20000"}
                                                className="mr-1"
                                            />
                                            Option 4 - GH₵ 20,000
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    Hospitalisation Benefit (Cover ends at Age 60)
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="hospitalisation"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.hospitalisation === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="hospitalisation"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.hospitalisation === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <label className="block font-bold">GH₵ Annual Benefit Options:</label>
                                    <div className="grid grid-cols-1 gap-4">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="hospitalisationBenefit"
                                                value="1400"
                                                onChange={handleChange}
                                                checked={formData.hospitalisationBenefit === "1400"}
                                                className="mr-1"
                                            />
                                            Option 1 - GH₵ 1,400
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="hospitalisationBenefit"
                                                value="2500"
                                                onChange={handleChange}
                                                checked={formData.hospitalisationBenefit === "2500"}
                                                className="mr-1"
                                            />
                                            Option 2 - GH₵ 2,500
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="hospitalisationBenefit"
                                                value="3600"
                                                onChange={handleChange}
                                                checked={formData.hospitalisationBenefit === "3600"}
                                                className="mr-1"
                                            />
                                            Option 3 - GH₵ 3,600
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name="hospitalisationBenefit"
                                                value="5000"
                                                onChange={handleChange}
                                                checked={formData.hospitalisationBenefit === "5000"}
                                                className="mr-1"
                                            />
                                            Option 4 - GH₵ 5,000
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* [F] DECLARATION */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[F] DECLARATION</h3>
                            <p className="mb-4">
                                Declaration by Applicant: I{" "}
                                <input
                                    type="text"
                                    name="applicantName"
                                    value={formData.applicantName}
                                    onChange={handleChange}
                                    className="inline-block border-b border-gray-400 w-1/2 focus:outline-none"
                                    placeholder="Enter your name"
                                />{" "}
                                declare that every statement in response to questions asked in this application is true and correct to the best of my knowledge. I agree that this application shall serve as the basis and form part of the contract. All the questions have been explained to me in the language that I understand and I have been made to understand that this contract shall become operative until all of the following conditions have been met:
                            </p>
                            <ol className="list-decimal list-inside mb-4">
                                <li>This application has been approved by StarLife Assurance Company Limited.</li>
                                <li>The appropriate premium has been paid.</li>
                                <li>
                                    I satisfy all the conditions precedent to the policy especially those pertaining to my health and that of all the proposed lives assured.
                                </li>
                                <li>All the persons proposed for cover are alive and in good health.</li>
                            </ol>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block font-bold">Proposer’s Signature:</label>
                                    <input
                                        type="text"
                                        name="proposerSignature"
                                        value={formData.proposerSignature}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date:</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block font-bold">Branch Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="branchManagerName"
                                        value={formData.branchManagerName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Zonal Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="zonalManagerName"
                                        value={formData.zonalManagerName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block font-bold">Sales Executive’s ID:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveID"
                                        value={formData.salesExecutiveID}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Sales Executive’s Name:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveName"
                                        value={formData.salesExecutiveName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">Sales Executive’s Signature:</label>
                                <input
                                    type="text"
                                    name="salesExecutiveSignature"
                                    value={formData.salesExecutiveSignature}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-bold">Sales Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="salesManagerName"
                                        value={formData.salesManagerName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Sales Manager’s Signature:</label>
                                    <input
                                        type="text"
                                        name="salesManagerSignature"
                                        value={formData.salesManagerSignature}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* [E] STATEMENT OF HEALTH */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[E] STATEMENT OF HEALTH</h3>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    1. Do you or any of the Proposed Life Assured suffer any disease, disorder, paralysis or health impairment?
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="health1"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.health1 === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="health1"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.health1 === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    2. During the past 12 months did any Proposed Life Assured suffer from any of the following?
                                </label>
                                <ol className="list-decimal list-inside">
                                    <li>
                                        Respiratory or lung disorder (e.g. persistent tuberculosis, spitting of blood, recurrent lung infection, difficulty in breathing)
                                        <div className="flex items-center gap-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="health2a"
                                                    value="yes"
                                                    onChange={handleChange}
                                                    checked={formData.health2a === 'yes'}
                                                    className="mr-1"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="health2a"
                                                    value="no"
                                                    onChange={handleChange}
                                                    checked={formData.health2a === 'no'}
                                                    className="mr-1"
                                                />
                                                No
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        A disease or disorder of the bladder or reproductive organs (e.g. blood or albumin in the urine, chronic discharge, difficulty in passing urine, venereal diseases)
                                        <div className="flex items-center gap-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="health2b"
                                                    value="yes"
                                                    onChange={handleChange}
                                                    checked={formData.health2b === 'yes'}
                                                    className="mr-1"
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="health2b"
                                                    value="no"
                                                    onChange={handleChange}
                                                    checked={formData.health2b === 'no'}
                                                    className="mr-1"
                                                />
                                                No
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    3. Is any Proposed Life Assured at present receiving or has he/she during the past 12 months received any medication or treatment for longer than two weeks continuously?
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="health3"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.health3 === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="health3"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.health3 === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    4. Did any Proposed Life Assured consult any medical doctor or other persons providing healing services (e.g. Herbalist, traditional healer) during the past 3 months?
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="health4"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.health4 === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="health4"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.health4 === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    5. Has any Proposed Life Assured been informed that he/she has been infected with HIV or is suffering from it?
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="health5"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.health5 === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="health5"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.health5 === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block font-bold">
                                    6. Do you or any of the Proposed Life Assured have any sickle cell condition?
                                </label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="health6"
                                            value="yes"
                                            onChange={handleChange}
                                            checked={formData.health6 === 'yes'}
                                            className="mr-1"
                                        />
                                        Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="health6"
                                            value="no"
                                            onChange={handleChange}
                                            checked={formData.health6 === 'no'}
                                            className="mr-1"
                                        />
                                        No
                                    </label>
                                </div>
                                <label className="block font-bold mt-2">If yes, please provide details below:</label>
                                <textarea
                                    name="health6Details"
                                    value={formData.health6Details}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                    rows="3"
                                ></textarea>
                            </div>
                        </div>

                        {/* [F] HOW DID YOU GET TO KNOW STARLIFE? */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[F] HOW DID YOU GET TO KNOW STARLIFE?</h3>
                            <div className="mb-4">
                                <label className="block font-bold">Options:</label>
                                <div className="flex flex-wrap gap-4">
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="knowStarLife"
                                            value="advertisement"
                                            onChange={handleKnowStarLifeChange}
                                            checked={formData.knowStarLife.includes('advertisement')}
                                            className="mr-1"
                                        />
                                        Advertisement
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="knowStarLife"
                                            value="website"
                                            onChange={handleKnowStarLifeChange}
                                            checked={formData.knowStarLife.includes('website')}
                                            className="mr-1"
                                        />
                                        Website
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="knowStarLife"
                                            value="referral"
                                            onChange={handleKnowStarLifeChange}
                                            checked={formData.knowStarLife.includes('referral')}
                                            className="mr-1"
                                        />
                                        Referral
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="knowStarLife"
                                            value="agent"
                                            onChange={handleKnowStarLifeChange}
                                            checked={formData.knowStarLife.includes('agent')}
                                            className="mr-1"
                                        />
                                        Agent
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="knowStarLife"
                                            value="broker"
                                            onChange={handleKnowStarLifeChange}
                                            checked={formData.knowStarLife.includes('broker')}
                                            className="mr-1"
                                        />
                                        Broker
                                    </label>
                                    <label>
                                        <input
                                            type="checkbox"
                                            name="knowStarLife"
                                            value="others"
                                            onChange={handleKnowStarLifeChange}
                                            checked={formData.knowStarLife.includes('others')}
                                            className="mr-1"
                                        />
                                        Others
                                    </label>
                                </div>
                                <label className="block font-bold mt-2">If Others, kindly specify:</label>
                                <input
                                    type="text"
                                    name="knowStarLifeOthers"
                                    value={formData.knowStarLifeOthers}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                        </div>

                        {/* FOR OFFICIAL USE ONLY */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">FOR OFFICIAL USE ONLY</h3>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="block font-bold">Policy Number:</label>
                                    <input
                                        type="text"
                                        name="policyNumber"
                                        value={formData.policyNumber}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Approved By:</label>
                                    <input
                                        type="text"
                                        name="approvedBy"
                                        value={formData.approvedBy}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mt-4">
                                <div>
                                    <label className="block font-bold">Issue Date:</label>
                                    <input
                                        type="date"
                                        name="issueDate"
                                        value={formData.issueDate}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Signature:</label>
                                    <input
                                        type="file"
                                        name="officialSignature"
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="block font-bold">Issue Age:</label>
                                    <input
                                        type="number"
                                        name="issueAge"
                                        value={formData.issueAge}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-bold">Date:</label>
                                    <input
                                        type="date"
                                        name="officialDate"
                                        value={formData.officialDate}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mb-12 text-center">
                            <button type="submit" className="bg-[#b5996e] text-white px-4 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StarLifeSupremeForm;
