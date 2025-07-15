import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../../images/lifetime.png";
import formlogo from "../../../images/formlogo.png";

function LifetimeNeeds({ onClose, userData }) {
    const formRef = useRef();
    const [step, setStep] = useState(1);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateEmail = email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = phone =>
        /^\+?[0-9]{10,15}$/.test(phone);

    const [formData, setFormData] = useState({
        // Step 1
        title: '',
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
        nationality: '',
        // Step 2
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        stateProvince: '',
        zipPostal: '',
        country: '',
        // Step 3
        employerOrganisation: '',
        employeeNumber: '',
        basicEarnings: '',
        occupation: '',
        // Step 4
        policyCommencementDate: '',
        coverageAmount: '',
        // Step 5
        beneficiaryName: '',
        beneficiaryRelationship: '',
        beneficiaryDOB: '',
        beneficiaryEmail: '',
        beneficiaryPhone: '',
        // Step 6
        paymentFrequency: '',
        paymentMethod: '',
        bankName: '',
        bankAccountNumber: '',
        additionalRemarks: '',
        // Step 7
        agreeToTerms: false,
        declarationDate: '',
        // Extras
        comments: '',
        subscribe: false,
        message: ''
    });

    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                firstName: userData.firstName || '',
                lastName: userData.lastName || '',
                email: userData.email || '',
                phone: userData.phone || ''
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (name === 'email') {
            setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address.');
        }
        if (name === 'phone') {
            setPhoneError(validatePhone(value) ? '' : 'Please enter a valid phone number.');
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (emailError || phoneError) {
            toast.error('Please fix the errors before submitting.');
            return;
        }

        const payload = {
            ...formData,
            emailType: 'lifetimeNeedsForm'
        };

        try {
            const res = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await res.json();

            if (result.status === 'success') {
                toast.success(result.message || 'Message sent successfully!');
                setFormData({
                    title: '',
                    firstName: '',
                    middleName: '',
                    lastName: '',
                    dateOfBirth: '',
                    gender: '',
                    maritalStatus: '',
                    nationality: '',
                    email: '',
                    phone: '',
                    streetAddress: '',
                    city: '',
                    stateProvince: '',
                    zipPostal: '',
                    country: '',
                    employerOrganisation: '',
                    employeeNumber: '',
                    basicEarnings: '',
                    occupation: '',
                    policyCommencementDate: '',
                    coverageAmount: '',
                    beneficiaryName: '',
                    beneficiaryRelationship: '',
                    beneficiaryDOB: '',
                    beneficiaryEmail: '',
                    beneficiaryPhone: '',
                    paymentFrequency: '',
                    paymentMethod: '',
                    bankName: '',
                    bankAccountNumber: '',
                    additionalRemarks: '',
                    agreeToTerms: false,
                    declarationDate: '',
                    comments: '',
                    subscribe: false,
                    message: ''
                });
                setTimeout(() => onClose?.(), 6000);
            } else {
                toast.error(result.message || 'Failed to ssend message.');
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[5px] shadow-lg flex overflow-hidden">
                {/* Left Side Image & Branding */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img
                        src={image}
                        alt="Insurance"
                        className="w-full h-[700px] md:h-[500px] extralarge:h-3/4 object-cover"
                        loading="lazy"
                    />
                    <div className="w-full h-full extralarge:h-1/4 bg-black p-4">
                        <img
                            src={formlogo}
                            alt="formlogo"
                            className="w-[112px] h-[53px]"
                            loading="lazy"
                        />
                        <h2 className="font-bold text-white text-[20px] mb-4 mt-4">
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className="text-[14px] text-white">
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
                        className="absolute top-4 md:top-3 lg:top-3 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-xl text-gray-800 font-bold mb-3">
                        ⁠Lifetime Needs (Annuity Policy/Investment Policy)
                    </h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl"
                    >
                        {/* Step 1: Personal Details */}
                        {step === 1 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Personal Details</h1>
                                <div className="mb-4">
                                    <label htmlFor="title" className="block mb-1 text-gray-600 font-medium">Title</label>
                                    <select
                                        id="title"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select title</option>
                                        <option value="Mr">Mr</option>
                                        <option value="Mrs">Mrs</option>
                                        <option value="Miss">Miss</option>
                                        <option value="Dr">Dr</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="block mb-1 text-gray-600 font-medium">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter your first name"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="middleName" className="block mb-1 text-gray-600 font-medium">Middle Name</label>
                                    <input
                                        type="text"
                                        id="middleName"
                                        name="middleName"
                                        value={formData.middleName}
                                        onChange={handleChange}
                                        placeholder="Enter your middle name"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="block mb-1 text-gray-600 font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter your last name"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="dateOfBirth" className="block mb-1 text-gray-600 font-medium">Date of Birth</label>
                                    <input
                                        type="date"
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="gender" className="block mb-1 text-gray-600 font-medium">Gender</label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="maritalStatus" className="block mb-1 text-gray-600 font-medium">Marital Status</label>
                                    <select
                                        id="maritalStatus"
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select marital status</option>
                                        <option value="single">Single</option>
                                        <option value="married">Married</option>
                                        <option value="divorced">Divorced</option>
                                        <option value="widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="nationality" className="block mb-1 text-gray-600 font-medium">Nationality</label>
                                    <input
                                        type="text"
                                        id="nationality"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        placeholder="Enter your nationality"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 2: Contact Information */}
                        {step === 2 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h1>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1 text-gray-600 font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phone" className="block mb-1 text-gray-600 font-medium">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                    {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="streetAddress" className="block mb-1 text-gray-600 font-medium">Street Address</label>
                                    <input
                                        type="text"
                                        id="streetAddress"
                                        name="streetAddress"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                        placeholder="Enter your street address"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="city" className="block mb-1 text-gray-600 font-medium">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="City"
                                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="stateProvince" className="block mb-1 text-gray-600 font-medium">State / Province</label>
                                        <input
                                            type="text"
                                            id="stateProvince"
                                            name="stateProvince"
                                            value={formData.stateProvince}
                                            onChange={handleChange}
                                            placeholder="State or Province"
                                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="zipPostal" className="block mb-1 text-gray-600 font-medium">Zip / Postal Code</label>
                                        <input
                                            type="text"
                                            id="zipPostal"
                                            name="zipPostal"
                                            value={formData.zipPostal}
                                            onChange={handleChange}
                                            placeholder="Zip or Postal"
                                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="country" className="block mb-1 text-gray-600 font-medium">Country</label>
                                        <input
                                            type="text"
                                            id="country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                            placeholder="Country"
                                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Employment / Financial Details */}
                        {step === 3 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Employment / Financial Details</h1>
                                <div className="mb-4">
                                    <label htmlFor="employerOrganisation" className="block mb-1 text-gray-600 font-medium">Employer Organisation</label>
                                    <select
                                        id="employerOrganisation"
                                        name="employerOrganisation"
                                        value={formData.employerOrganisation}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select an organisation</option>
                                        <option value="organisation1">Organisation 1</option>
                                        <option value="organisation2">Organisation 2</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="employeeNumber" className="block mb-1 text-gray-600 font-medium">Employee Number</label>
                                    <input
                                        type="text"
                                        id="employeeNumber"
                                        name="employeeNumber"
                                        value={formData.employeeNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your employee number"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="basicEarnings" className="block mb-1 text-gray-600 font-medium">Basic Earnings (GHC)</label>
                                    <input
                                        type="number"
                                        id="basicEarnings"
                                        name="basicEarnings"
                                        value={formData.basicEarnings}
                                        onChange={handleChange}
                                        placeholder="Enter your basic earnings"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="occupation" className="block mb-1 text-gray-600 font-medium">Occupation</label>
                                    <input
                                        type="text"
                                        id="occupation"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        placeholder="Enter your occupation"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Plan Information */}
                        {step === 4 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Plan Information</h1>
                                <div className="mb-4">
                                    <label htmlFor="policyCommencementDate" className="block mb-1 text-gray-600 font-medium">Policy Commencement Date</label>
                                    <input
                                        type="date"
                                        id="policyCommencementDate"
                                        name="policyCommencementDate"
                                        value={formData.policyCommencementDate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="coverageAmount" className="block mb-1 text-gray-600 font-medium">Coverage Amount (GHC)</label>
                                    <input
                                        type="number"
                                        id="coverageAmount"
                                        name="coverageAmount"
                                        value={formData.coverageAmount}
                                        onChange={handleChange}
                                        placeholder="Enter desired coverage amount"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 5: Beneficiary Details */}
                        {step === 5 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Beneficiary Details</h1>
                                <div className="mb-4">
                                    <label htmlFor="beneficiaryName" className="block mb-1 text-gray-600 font-medium">Beneficiary Name</label>
                                    <input
                                        type="text"
                                        id="beneficiaryName"
                                        name="beneficiaryName"
                                        value={formData.beneficiaryName}
                                        onChange={handleChange}
                                        placeholder="Enter beneficiary's full name"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="beneficiaryRelationship" className="block mb-1 text-gray-600 font-medium">Beneficiary Relationship</label>
                                    <select
                                        id="beneficiaryRelationship"
                                        name="beneficiaryRelationship"
                                        value={formData.beneficiaryRelationship}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select relationship</option>
                                        <option value="spouse">Spouse</option>
                                        <option value="child">Child</option>
                                        <option value="parent">Parent</option>
                                        <option value="sibling">Sibling</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="beneficiaryDOB" className="block mb-1 text-gray-600 font-medium">Beneficiary Date of Birth</label>
                                    <input
                                        type="date"
                                        id="beneficiaryDOB"
                                        name="beneficiaryDOB"
                                        value={formData.beneficiaryDOB}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="beneficiaryEmail" className="block mb-1 text-gray-600 font-medium">Beneficiary Email</label>
                                    <input
                                        type="email"
                                        id="beneficiaryEmail"
                                        name="beneficiaryEmail"
                                        value={formData.beneficiaryEmail}
                                        onChange={handleChange}
                                        placeholder="Enter beneficiary's email"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="beneficiaryPhone" className="block mb-1 text-gray-600 font-medium">Beneficiary Phone</label>
                                    <input
                                        type="tel"
                                        id="beneficiaryPhone"
                                        name="beneficiaryPhone"
                                        value={formData.beneficiaryPhone}
                                        onChange={handleChange}
                                        placeholder="Enter beneficiary's phone number"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 6: Additional Payment Details */}
                        {step === 6 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Additional Payment Details</h1>
                                <div className="mb-4">
                                    <label htmlFor="paymentFrequency" className="block mb-1 text-gray-600 font-medium">Payment Frequency</label>
                                    <select
                                        id="paymentFrequency"
                                        name="paymentFrequency"
                                        value={formData.paymentFrequency}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select frequency</option>
                                        <option value="monthly">Monthly</option>
                                        <option value="quarterly">Quarterly</option>
                                        <option value="semi-annually">Semi-Annually</option>
                                        <option value="annually">Annually</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="paymentMethod" className="block mb-1 text-gray-600 font-medium">Payment Method</label>
                                    <select
                                        id="paymentMethod"
                                        name="paymentMethod"
                                        value={formData.paymentMethod}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select method</option>
                                        <option value="bank-transfer">Bank Transfer</option>
                                        <option value="credit-card">Credit Card</option>
                                        <option value="mobile-money">Mobile Money</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="bankName" className="block mb-1 text-gray-600 font-medium">Bank Name</label>
                                    <input
                                        type="text"
                                        id="bankName"
                                        name="bankName"
                                        value={formData.bankName}
                                        onChange={handleChange}
                                        placeholder="Enter your bank name"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="bankAccountNumber" className="block mb-1 text-gray-600 font-medium">Bank Account Number</label>
                                    <input
                                        type="text"
                                        id="bankAccountNumber"
                                        name="bankAccountNumber"
                                        value={formData.bankAccountNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your bank account number"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="additionalRemarks" className="block mb-1 text-gray-600 font-medium">Additional Remarks</label>
                                    <textarea
                                        id="additionalRemarks"
                                        name="additionalRemarks"
                                        value={formData.additionalRemarks}
                                        onChange={handleChange}
                                        placeholder="Enter any additional remarks"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    ></textarea>
                                </div>
                            </div>
                        )}

                        {/* Step 7: Declaration & Consent */}
                        {step === 7 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">Declaration & Consent</h1>
                                <div className="mb-4">
                                    <p className="mb-2 text-gray-600">
                                        I hereby declare that the information provided above is true and correct to the best of my knowledge, and I consent to the terms and conditions of this policy.
                                    </p>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="agreeToTerms"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            className="mr-2"
                                            required
                                        />
                                        <label htmlFor="agreeToTerms" className="text-gray-600">I agree to the terms and conditions</label>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="declarationDate" className="block mb-1 text-gray-600 font-medium">Declaration Date</label>
                                    <input
                                        type="date"
                                        id="declarationDate"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>

                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-[30px] hover:bg-gray-300"
                                >
                                    Back
                                </button>
                            )}
                            {step < 7 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="ml-auto px-4 py-2 bg-[#b5996e] text-white rounded-[30px] hover:bg-[#7a674a]"
                                >
                                    Next
                                </button>
                            )}
                            {step === 7 && (
                                <button
                                    type="submit"
                                    className="ml-auto px-4 py-2 bg-[#b5996e] text-white rounded-[30px] hover:bg-[#7a674a]"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LifetimeNeeds;
