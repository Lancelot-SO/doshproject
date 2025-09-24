import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../../images/executivelive.png";
import formlogo from "../../../images/formlogo.png";

function ExecutiveLifePlan({ onClose, userData }) {
    const formRef = useRef();
    const [step, setStep] = useState(1);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateEmail = email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = phone =>
        /^\+?[0-9]{7,15}$/.test(phone);

    const [formData, setFormData] = useState({
        // Step 1: Employment Details
        employerOrganisation: '',
        employeeNumber: '',
        basicEarnings: '',
        occupation: '',
        // Step 2: Additional Employment Info
        dateOfEmployment: '',
        department: '',
        contractType: '',
        directManager: '',
        workEmail: '',
        // Step 3: Identification
        idType: '',
        idNumber: '',
        idExpiryDate: '',
        issuingAuthority: '',
        // Step 4: Personal Details
        title: '',
        firstname: '',
        middlename: '',
        lastname: '',
        dateOfBirth: '',
        gender: '',
        maritalStatus: '',
        nationality: '',
        // Step 5: Beneficiary
        beneficiaryName: '',
        beneficiaryRelationship: '',
        beneficiaryDOB: '',
        beneficiaryEmail: '',
        beneficiaryPhone: '',
        // Common
        streetAddress: '',
        city: '',
        stateProvince: '',
        zipPostal: '',
        country: '',
        moveInDate: '',
        comments: '',
        subscribe: false,
        message: ''
    });

    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                firstname: userData.firstname.trim(),
                middlename: userData.middlename.trim(),
                lastname: userData.lastname.trim(),
                workEmail: userData.email || '',
                beneficiaryEmail: userData.email || ''
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (name === 'workEmail' || name === 'beneficiaryEmail') {
            setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address.');
        }
        if (name === 'employeeNumber' || name === 'beneficiaryPhone') {
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
            emailType: 'executiveliveplan',
        };

        try {
            const res = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const result = await res.json();

            if (result.status === 'success') {
                toast.success(result.message);
                // reset to initial state
                setFormData({
                    employerOrganisation: '',
                    employeeNumber: '',
                    basicEarnings: '',
                    occupation: '',
                    dateOfEmployment: '',
                    department: '',
                    contractType: '',
                    directManager: '',
                    workEmail: '',
                    idType: '',
                    idNumber: '',
                    idExpiryDate: '',
                    issuingAuthority: '',
                    title: '',
                    firstname: '',
                    middlename: '',
                    lastname: '',
                    dateOfBirth: '',
                    gender: '',
                    maritalStatus: '',
                    nationality: '',
                    beneficiaryName: '',
                    beneficiaryRelationship: '',
                    beneficiaryDOB: '',
                    beneficiaryEmail: '',
                    beneficiaryPhone: '',
                    streetAddress: '',
                    city: '',
                    stateProvince: '',
                    zipPostal: '',
                    country: '',
                    moveInDate: '',
                    comments: '',
                    subscribe: false,
                    message: ''
                });
                setTimeout(() => onClose?.(), 6000);
            } else {
                toast.error(result.message);
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
                        className="absolute top-4 md:top-3 lg:top-3 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-xl text-gray-800 font-bold mb-3">
                        Executive/Living Plus Plan
                    </h2>
                    <p className='text-black'>Please kindly fill out the form fields below.</p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="bg-white text-black p-8 rounded-md shadow-md w-full max-w-2xl"
                    >
                        {/* Step 1: Employment Details */}
                        {step === 1 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">
                                    Employment Details
                                </h1>
                                {/* Employer Organisation */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="employerOrganisation"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Employer Organisation
                                    </label>
                                    <input
                                        type="text"
                                        id="employerOrganisation"
                                        name="employerOrganisation"
                                        value={formData.employerOrganisation}
                                        onChange={handleChange}
                                        placeholder="Enter your employer organization"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                {/* Employee Number */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="employeeNumber"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Employee Number
                                    </label>
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
                                {/* Basic Earnings */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="basicEarnings"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Basic Earnings (GHC)
                                    </label>
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
                                {/* Occupation */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="occupation"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Occupation
                                    </label>
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

                        {/* Step 2: Additional Employment Information */}
                        {step === 2 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">
                                    Additional Employment Information
                                </h1>
                                {/* Date of Employment */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="dateOfEmployment"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Date of Employment
                                    </label>
                                    <input
                                        type="date"
                                        id="dateOfEmployment"
                                        name="dateOfEmployment"
                                        value={formData.dateOfEmployment}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                {/* Department */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="department"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Department
                                    </label>
                                    <select
                                        id="department"
                                        name="department"
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select a department</option>
                                        <option value="sales">Sales</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="hr">Human Resources</option>
                                        <option value="finance">Finance</option>
                                        <option value="marketing">Marketing</option>
                                    </select>
                                </div>
                                {/* Contract Type */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="contractType"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Contract Type
                                    </label>
                                    <select
                                        id="contractType"
                                        name="contractType"
                                        value={formData.contractType}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select contract type</option>
                                        <option value="permanent">Permanent</option>
                                        <option value="contract">Contract</option>
                                        <option value="temporary">Temporary</option>
                                    </select>
                                </div>
                                {/* Direct Manager */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="directManager"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Direct Manager
                                    </label>
                                    <input
                                        type="text"
                                        id="directManager"
                                        name="directManager"
                                        value={formData.directManager}
                                        onChange={handleChange}
                                        placeholder="Enter your direct manager's name"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                {/* Work Email */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="workEmail"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Work Email
                                    </label>
                                    <input
                                        type="email"
                                        id="workEmail"
                                        name="workEmail"
                                        value={formData.workEmail}
                                        onChange={handleChange}
                                        placeholder="Enter your work email"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 3: Identification Details */}
                        {step === 3 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">
                                    Identification Details
                                </h1>
                                {/* ID Type */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="idType"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        ID Type
                                    </label>
                                    <select
                                        id="idType"
                                        name="idType"
                                        value={formData.idType}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    >
                                        <option value="">Select ID Type</option>
                                        <option value="national-id">National ID</option>
                                        <option value="passport">Passport</option>
                                        <option value="drivers-license">Driver's License</option>
                                    </select>
                                </div>
                                {/* ID Number */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="idNumber"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        ID Number
                                    </label>
                                    <input
                                        type="text"
                                        id="idNumber"
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        placeholder="Enter your ID number"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        required
                                    />
                                </div>
                                {/* ID Expiry Date */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="idExpiryDate"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        ID Expiry Date
                                    </label>
                                    <input
                                        type="date"
                                        id="idExpiryDate"
                                        name="idExpiryDate"
                                        value={formData.idExpiryDate}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                {/* Issuing Authority */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="issuingAuthority"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Issuing Authority
                                    </label>
                                    <input
                                        type="text"
                                        id="issuingAuthority"
                                        name="issuingAuthority"
                                        value={formData.issuingAuthority}
                                        onChange={handleChange}
                                        placeholder="Enter the issuing authority"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Step 4: Personal Details */}
                        {step === 4 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">
                                    Personal Details
                                </h1>
                                {/* Title */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="title"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Title
                                    </label>
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
                                {/* Date of Birth */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="dateOfBirth"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Date of Birth
                                    </label>
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
                                {/* Gender */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="gender"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Gender
                                    </label>
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
                                {/* Marital Status */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="maritalStatus"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Marital Status
                                    </label>
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
                                {/* Nationality */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="nationality"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Nationality
                                    </label>
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

                        {/* Step 5: Beneficiary Details (New Step) */}
                        {step === 5 && (
                            <div>
                                <h1 className="text-xl font-semibold text-gray-700 mb-4">
                                    Beneficiary Details
                                </h1>
                                {/* Beneficiary Name */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="beneficiaryName"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Beneficiary Name
                                    </label>
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
                                {/* Beneficiary Relationship */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="beneficiaryRelationship"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Beneficiary Relationship
                                    </label>
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
                                        <option value="friend">Friend</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                {/* Beneficiary Date of Birth */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="beneficiaryDOB"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Beneficiary Date of Birth
                                    </label>
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
                                {/* Beneficiary Email */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="beneficiaryEmail"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Beneficiary Email
                                    </label>
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
                                {/* Beneficiary Phone */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="beneficiaryPhone"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Beneficiary Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="beneficiaryPhone"
                                        name="beneficiaryPhone"
                                        value={formData.beneficiaryPhone}
                                        onChange={handleChange}
                                        placeholder="Enter beneficiary's phone number"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="streetAddress"
                                        className="block mb-1 text-gray-600 font-medium"
                                    >
                                        Street Address
                                    </label>
                                    <input
                                        type="tel"
                                        id="streetAddress"
                                        name="streetAddress"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                        placeholder="Enter Street Address"
                                        className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                                    />
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
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-[30px] hover:bg-gray-300"
                                >
                                    Back
                                </button>
                            )}
                            {step < 5 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="ml-auto px-4 py-2 bg-[#b5996e] text-white rounded-[30px] hover:bg-[#9d835d]"
                                >
                                    Next
                                </button>
                            )}
                            {step === 5 && (
                                <button
                                    type="submit"
                                    className="ml-auto px-4 py-2 bg-[#b5996e] text-white rounded-[30px] hover:bg-[#9d835d]"
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

export default ExecutiveLifePlan;
