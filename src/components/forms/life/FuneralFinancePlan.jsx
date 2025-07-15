import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../../images/funeral3.png";
import formlogo from "../../../images/formlogo.png";

const FuneralFinancePlan = ({ onClose, userData }) => {
    const formRef = useRef();
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateEmail = email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = phone =>
        /^\+?[0-9]{10,15}$/.test(phone);

    const [formData, setFormData] = useState({
        // I. Applicant & Personal Information
        fullName: '',
        dateOfBirth: '',
        gender: '',
        ssn: '',
        maritalStatus: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        primaryPhone: '',
        secondaryPhone: '',
        email: '',
        // II. Policy & Coverage Details
        policyNumber: '',
        applicationDate: '',
        planType: '',
        coverageAmount: '',
        paymentFrequency: '',
        paymentMode: '',
        termOfCoverage: '',
        // III. Beneficiary/Claimant Information
        beneficiaryName: '',
        beneficiaryRelationship: '',
        beneficiaryAddress: '',
        beneficiaryPhone: '',
        secondaryBeneficiary: '',
        // IV. Funeral Service & Arrangement Preferences
        funeralHome: '',
        serviceType: '',
        serviceDate: '',
        specialInstructions: '',
        // V. Medical and Underwriting Information
        preExistingConditions: '',
        previousInsurance: '',
        doctorName: '',
        underwritingQuestions: '',
        // VI. Declarations, Authorizations & Signatures
        applicantSignature: '',
        signatureDate: '',
        witnessSignature: '',
        witnessSignatureDate: '',
        // VII. Administrative & Internal Use Fields
        agentName: '',
        agentContact: '',
        processingDate: '',
        policyEffectiveDate: '',
        underwriterComments: '',
        // VIII. Additional Info & Communication Preferences
        communicationMethod: '',
        languagePreference: '',
        additionalComments: '',
        message: '',
    });

    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                fullName: userData.fullname?.trim() || '',
                email: userData.email || '',
                primaryPhone: userData.phone || '',
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'email') {
            setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address.');
        }
        if (name === 'primaryPhone') {
            setPhoneError(validatePhone(value) ? '' : 'Please enter a valid phone number.');
        }
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (emailError || phoneError) {
            toast.error('Please fix the errors before submitting.');
            return;
        }

        const payload = { ...formData, emailType: 'funeralfinanceplan' };

        try {
            const res = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const result = await res.json();

            if (result.status === 'success') {
                toast.success(result.message || 'Message sent successfully!');
                setFormData({
                    fullName: '', dateOfBirth: '', gender: '', ssn: '', maritalStatus: '',
                    streetAddress: '', city: '', state: '', zipCode: '',
                    primaryPhone: '', secondaryPhone: '', email: '',
                    policyNumber: '', applicationDate: '', planType: '',
                    coverageAmount: '', paymentFrequency: '', paymentMode: '',
                    termOfCoverage: '', beneficiaryName: '', beneficiaryRelationship: '',
                    beneficiaryAddress: '', beneficiaryPhone: '', secondaryBeneficiary: '',
                    funeralHome: '', serviceType: '', serviceDate: '', specialInstructions: '',
                    preExistingConditions: '', previousInsurance: '', doctorName: '',
                    underwritingQuestions: '', applicantSignature: '', signatureDate: '',
                    witnessSignature: '', witnessSignatureDate: '', agentName: '',
                    agentContact: '', processingDate: '', policyEffectiveDate: '',
                    underwriterComments: '', communicationMethod: '',
                    languagePreference: '', additionalComments: '', message: '',
                });
                setTimeout(() => onClose?.(), 6000);
            } else {
                toast.error(result.message || 'Failed to send message.');
            }
        } catch (err) {
            console.error('Error submitting form:', err);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[5px] shadow-lg flex overflow-hidden">
                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[700px] md:h-[500px] extralarge:h-3/4 object-cover" loading="lazy" />
                    <div className="w-full h-full extralarge:h-1/4 bg-black p-4">
                        <img src={formlogo} alt="formlogo" className="w-[112px] h-[53px]" loading="lazy" />
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
                        className="absolute top-4 md:top-4 lg:top-4 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-xl text-gray-800 font-bold mb-3">Funeral Finance Plan (Whole Life Policy)</h2>
                    <p className='text-black'>Please kindly fill out the form fields below.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 rounded shadow-md">
                        {/* I. Applicant & Personal Information */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold text-black border-b pb-2 mb-4">
                                I. Applicant & Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="fullName" className="font-medium">Full Legal Name</label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dateOfBirth" className="font-medium">Date of Birth</label>
                                    <input
                                        id="dateOfBirth"
                                        name="dateOfBirth"
                                        type="date"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">Gender</label>
                                    <div className="mt-1">
                                        <label className="mr-4">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Male"
                                                checked={formData.gender === "Male"}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />
                                            Male
                                        </label>
                                        <label className="mr-4">
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Female"
                                                checked={formData.gender === "Female"}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />
                                            Female
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="Other"
                                                checked={formData.gender === "Other"}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />
                                            Other
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="ssn" className="font-medium">Social Security Number</label>
                                    <input
                                        id="ssn"
                                        name="ssn"
                                        type="text"
                                        value={formData.ssn}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="maritalStatus" className="font-medium">Marital Status</label>
                                    <select
                                        id="maritalStatus"
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                        <option value="Widowed">Widowed</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="streetAddress" className="font-medium">Residential Address - Street</label>
                                    <input
                                        id="streetAddress"
                                        name="streetAddress"
                                        type="text"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="font-medium">City</label>
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="state" className="font-medium">State</label>
                                    <input
                                        id="state"
                                        name="state"
                                        type="text"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="zipCode" className="font-medium">ZIP Code</label>
                                    <input
                                        id="zipCode"
                                        name="zipCode"
                                        type="text"
                                        value={formData.zipCode}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="primaryPhone" className="font-medium">Primary Phone Number</label>
                                    <input
                                        id="primaryPhone"
                                        name="primaryPhone"
                                        type="text"
                                        value={formData.primaryPhone}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                    {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
                                </div>
                                <div>
                                    <label htmlFor="secondaryPhone" className="font-medium">Secondary/Alternate Phone Number</label>
                                    <input
                                        id="secondaryPhone"
                                        name="secondaryPhone"
                                        type="text"
                                        value={formData.secondaryPhone}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="email" className="font-medium">Email Address</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                </div>
                            </div>
                        </section>

                        {/* II. Policy & Coverage Details */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                II. Policy & Coverage Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="policyNumber" className="font-medium">Policy/Application Number</label>
                                    <input
                                        id="policyNumber"
                                        name="policyNumber"
                                        type="text"
                                        value={formData.policyNumber}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="applicationDate" className="font-medium">Date of Application/Policy Issue</label>
                                    <input
                                        id="applicationDate"
                                        name="applicationDate"
                                        type="date"
                                        value={formData.applicationDate}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="planType" className="font-medium">Plan/Coverage Type</label>
                                    <select
                                        id="planType"
                                        name="planType"
                                        value={formData.planType}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Basic">Basic</option>
                                        <option value="Standard">Standard</option>
                                        <option value="Premium">Premium</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="coverageAmount" className="font-medium">
                                        How much do you want to be covered for? (GHS)
                                    </label>
                                    <select
                                        id="coverageAmount"
                                        name="coverageAmount"
                                        value={formData.coverageAmount}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select an amount</option>
                                        <option value="5000">5000</option>
                                        <option value="7500">7500</option>
                                        <option value="10000">10000</option>
                                        <option value="15000">$15000</option>
                                        <option value="20000">$20000</option>
                                        <option value="25000">25000</option>
                                        <option value="30000">30000</option>
                                        <option value="40000">40000</option>
                                        <option value="50000">50000</option>
                                        <option value="60000">60000</option>
                                        <option value="70000">70000</option>
                                        <option value="80000">80000</option>
                                        <option value="90000">90000</option>
                                        <option value="100000">100000</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="paymentFrequency" className="font-medium">Payment Frequency</label>
                                    <select
                                        id="paymentFrequency"
                                        name="paymentFrequency"
                                        value={formData.paymentFrequency}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Monthly">Monthly</option>
                                        <option value="Quarterly">Quarterly</option>
                                        <option value="Annually">Annually</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="paymentMode" className="font-medium">Mode of Payment</label>
                                    <select
                                        id="paymentMode"
                                        name="paymentMode"
                                        value={formData.paymentMode}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="ACH">ACH</option>
                                        <option value="Check">Check</option>
                                        <option value="Credit Card">Credit Card</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="termOfCoverage" className="font-medium">Term of Coverage</label>
                                    <input
                                        id="termOfCoverage"
                                        name="termOfCoverage"
                                        type="text"
                                        value={formData.termOfCoverage}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        placeholder="e.g., 20 years"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* III. Beneficiary/Claimant Information */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                III. Beneficiary/Claimant Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="beneficiaryName" className="font-medium">Primary Beneficiary Name</label>
                                    <input
                                        id="beneficiaryName"
                                        name="beneficiaryName"
                                        type="text"
                                        value={formData.beneficiaryName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="beneficiaryRelationship" className="font-medium">Relationship to Applicant</label>
                                    <input
                                        id="beneficiaryRelationship"
                                        name="beneficiaryRelationship"
                                        type="text"
                                        value={formData.beneficiaryRelationship}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="beneficiaryAddress" className="font-medium">Beneficiary Address</label>
                                    <input
                                        id="beneficiaryAddress"
                                        name="beneficiaryAddress"
                                        type="text"
                                        value={formData.beneficiaryAddress}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="beneficiaryPhone" className="font-medium">Beneficiary Phone Number</label>
                                    <input
                                        id="beneficiaryPhone"
                                        name="beneficiaryPhone"
                                        type="text"
                                        value={formData.beneficiaryPhone}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="secondaryBeneficiary" className="font-medium">Secondary/Alternate Beneficiary</label>
                                    <input
                                        id="secondaryBeneficiary"
                                        name="secondaryBeneficiary"
                                        type="text"
                                        value={formData.secondaryBeneficiary}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* IV. Funeral Service & Arrangement Preferences */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                IV. Funeral Service & Arrangement Preferences
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label htmlFor="funeralHome" className="font-medium">Preferred Funeral Home / Service Provider</label>
                                    <input
                                        id="funeralHome"
                                        name="funeralHome"
                                        type="text"
                                        value={formData.funeralHome}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="serviceType" className="font-medium">Service Type / Arrangement Options</label>
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Burial">Burial</option>
                                        <option value="Cremation">Cremation</option>
                                        <option value="Memorial Service">Memorial Service</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="serviceDate" className="font-medium">Service Date</label>
                                    <input
                                        id="serviceDate"
                                        name="serviceDate"
                                        type="date"
                                        value={formData.serviceDate}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="specialInstructions" className="font-medium">
                                        Special Instructions / Service Preferences
                                    </label>
                                    <textarea
                                        id="specialInstructions"
                                        name="specialInstructions"
                                        value={formData.specialInstructions}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        rows="4"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* V. Medical and Underwriting Information */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                V. Medical and Underwriting Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-medium">Pre-Existing Conditions?</label>
                                    <div className="mt-1">
                                        <label className="mr-4">
                                            <input
                                                type="radio"
                                                name="preExistingConditions"
                                                value="Yes"
                                                checked={formData.preExistingConditions === "Yes"}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="preExistingConditions"
                                                value="No"
                                                checked={formData.preExistingConditions === "No"}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="previousInsurance" className="font-medium">
                                        Prior Insurance Details (e.g., Insurer Name – Policy Number)
                                    </label>
                                    <input
                                        id="previousInsurance"
                                        name="previousInsurance"
                                        type="text"
                                        value={formData.previousInsurance}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        placeholder="e.g., Company Name - Policy Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="doctorName" className="font-medium">Physician/Medical Examiner Name</label>
                                    <input
                                        id="doctorName"
                                        name="doctorName"
                                        type="text"
                                        value={formData.doctorName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="underwritingQuestions" className="font-medium">
                                        Additional Underwriting Questions/Comments
                                    </label>
                                    <textarea
                                        id="underwritingQuestions"
                                        name="underwritingQuestions"
                                        value={formData.underwritingQuestions}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* VI. Declarations, Authorizations & Signatures */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                VI. Declarations, Authorizations & Signatures
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <p className="mb-2">
                                        I hereby declare that the information provided is true and correct to the best of my knowledge.
                                    </p>
                                </div>
                                <div>
                                    <label htmlFor="applicantSignature" className="font-medium">Applicant Signature</label>
                                    <input
                                        id="applicantSignature"
                                        name="applicantSignature"
                                        type="text"
                                        value={formData.applicantSignature}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        placeholder="Type your name as signature"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="signatureDate" className="font-medium">Date of Signature</label>
                                    <input
                                        id="signatureDate"
                                        name="signatureDate"
                                        type="date"
                                        value={formData.signatureDate}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="witnessSignature" className="font-medium">Witness Signature (if applicable)</label>
                                    <input
                                        id="witnessSignature"
                                        name="witnessSignature"
                                        type="text"
                                        value={formData.witnessSignature}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        placeholder="Witness name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="witnessSignatureDate" className="font-medium">Witness Signature Date</label>
                                    <input
                                        id="witnessSignatureDate"
                                        name="witnessSignatureDate"
                                        type="date"
                                        value={formData.witnessSignatureDate}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* VII. Administrative & Internal Use Fields */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                VII. Administrative & Internal Use Fields
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="agentName" className="font-medium">Agent/Broker Name</label>
                                    <input
                                        id="agentName"
                                        name="agentName"
                                        type="text"
                                        value={formData.agentName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="agentContact" className="font-medium">Agent/Broker Contact Details</label>
                                    <input
                                        id="agentContact"
                                        name="agentContact"
                                        type="text"
                                        value={formData.agentContact}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="processingDate" className="font-medium">Date Received / Processing Date</label>
                                    <input
                                        id="processingDate"
                                        name="processingDate"
                                        type="date"
                                        value={formData.processingDate}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="policyEffectiveDate" className="font-medium">Policy Effective Date</label>
                                    <input
                                        id="policyEffectiveDate"
                                        name="policyEffectiveDate"
                                        type="date"
                                        value={formData.policyEffectiveDate}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="underwriterComments" className="font-medium">
                                        Underwriter’s Comments / Approval Status
                                    </label>
                                    <textarea
                                        id="underwriterComments"
                                        name="underwriterComments"
                                        value={formData.underwriterComments}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* VIII. Additional Information & Communication Preferences */}
                        <section className="mb-8">
                            <h2 className="text-[14px] font-semibold border-b pb-2 mb-4">
                                VIII. Additional Information & Communication Preferences
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="communicationMethod" className="font-medium">Preferred Method of Communication</label>
                                    <select
                                        id="communicationMethod"
                                        name="communicationMethod"
                                        value={formData.communicationMethod}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    >
                                        <option value="">Select</option>
                                        <option value="Phone">Phone</option>
                                        <option value="Email">Email</option>
                                        <option value="Mail">Mail</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="languagePreference" className="font-medium">Language Preference</label>
                                    <input
                                        id="languagePreference"
                                        name="languagePreference"
                                        type="text"
                                        value={formData.languagePreference}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="additionalComments" className="font-medium">Additional Comments / Special Conditions</label>
                                    <textarea
                                        id="additionalComments"
                                        name="additionalComments"
                                        value={formData.additionalComments}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded w-full"
                                        rows="4"
                                    ></textarea>
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
                        </section>

                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#b5996e] text-white p-3 rounded-[30px] transition">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FuneralFinancePlan;
