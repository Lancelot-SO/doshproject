import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../../images/wealth.png";
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

    // Beneficiaries (9 rows as per PDF)
    beneficiaries: Array.from({ length: 9 }, () => ({
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
    officialDate: '',
    message: ''
};

function WealthMasterForm({ onClose, userData }) {
    const formRef = useRef();
    const [formData, setFormData] = useState(initialState);
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // Pre-populate from userData
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                surname: userData.fullname?.trim() || '',
                email: userData.email || '',
                mobile: userData.phone || ''
            }));
        }
    }, [userData]);

    const validateEmail = email =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = phone =>
        /^\+?[0-9]{7,15}$/.test(phone);

    const handleChange = e => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData(prev => ({ ...prev, [name]: val }));

        if (name === 'email') {
            setEmailError(validateEmail(value) ? '' : 'Please enter a valid email address.');
        }
        if (name === 'mobile') {
            setPhoneError(validatePhone(value) ? '' : 'Please enter a valid mobile number.');
        }
    };

    const handleBeneficiaryChange = (idx, field, value) => {
        const b = [...formData.beneficiaries];
        b[idx][field] = value;
        setFormData(prev => ({ ...prev, beneficiaries: b }));
    };

    const handleKnowStarLifeChange = e => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            knowStarLife: checked
                ? [...prev.knowStarLife, value]
                : prev.knowStarLife.filter(v => v !== value),
        }));
    };

    const sendEmail = async e => {
        e.preventDefault();
        if (emailError || phoneError) {
            toast.error('Please fix the errors before submitting the form.');
            return;
        }

        const payload = {
            ...formData,
            emailType: 'wealthMasterForm'
        };

        try {
            const res = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await res.json();

            if (result.status === 'success') {
                toast.success(result.message || 'Application submitted successfully!');
                setFormData(initialState);
                setTimeout(() => onClose?.(), 6000);
            } else {
                toast.error(result.message || 'Failed to submit the application. Please try again.');
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
                        className="absolute top-4 md:top-3 lg:top-3 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-xl text-gray-800 font-bold mb-3">
                        WealthMaster Plus Application Form (Investment Policy)
                    </h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form ref={formRef} onSubmit={sendEmail} className="max-w-6xl mx-auto p-4">
                        {/* Header */}
                        <div className="flex flex-col gap-4 mb-4">
                            <div className="flex-1">
                                <label className="block font-bold">MANDATE NO.:</label>
                                <input
                                    type="text"
                                    name="mandateNo"
                                    value={formData.mandateNo}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                    placeholder="_________________________"
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

                        {/* Title and Instructions */}
                        <div className="text-left mb-6">
                            <h1 className="text-[20px] font-bold">StarLife WEALTH MASTER PLUS POLICY</h1>
                            <h2 className="text-[20px] font-bold">APPLICATION FORM</h2>
                            <p className="text-[14px] text-red-500 italic">
                                NB. EVERY QUESTION MUST BE ANSWERED. PLEASE COMPLETE THIS FORM IN BLOCK LETTERS
                            </p>
                        </div>

                        {/* [A] PERSONAL DETAILS & [B] EMPLOYER DETAILS (Additional Section) */}
                        <div className="grid grid-cols-1 gap-6 mb-6">
                            {/* PERSONAL DETAILS */}
                            <div className="border p-4">
                                <h3 className="font-bold mb-2">[A] PERSONAL DETAILS</h3>
                                <div className="mb-2">
                                    <label className="font-bold">Customer Classification:</label>
                                    <div className="flex gap-4">
                                        <label>
                                            <input type="radio" name="customerClassification" value="Individual" className="mr-1" /> Individual
                                        </label>
                                        <label>
                                            <input type="radio" name="customerClassification" value="Corporate" className="mr-1" /> Corporate
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Surname:</label>
                                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Middle Name(s):</label>
                                    <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">First Name:</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Date of Birth:</label>
                                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Nationality:</label>
                                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="border p-1 w-full" placeholder="(*if non-Ghanaian provide passport and residence permit)" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Gender:</label>
                                    <div className="flex gap-4">
                                        <label>
                                            <input type="radio" name="gender2" value="Male" className="mr-1" /> Male
                                        </label>
                                        <label>
                                            <input type="radio" name="gender2" value="Female" className="mr-1" /> Female
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">If Female, are you Pregnant?</label>
                                    <div className="flex gap-4">
                                        <label>
                                            <input type="radio" name="pregnant2" value="Yes" className="mr-1" /> Yes
                                        </label>
                                        <label>
                                            <input type="radio" name="pregnant2" value="No" className="mr-1" /> No
                                        </label>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Telephone:</label>
                                    <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Email1:</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Email2:</label>
                                    <input type="email" className="border p-1 w-full" placeholder="(Alternate Email)" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Marital Status:</label>
                                    <div className="flex gap-4">
                                        <label>
                                            <input type="radio" name="maritalStatus2" value="Single" className="mr-1" /> Single
                                        </label>
                                        <label>
                                            <input type="radio" name="maritalStatus2" value="Married" className="mr-1" /> Married
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* EMPLOYER DETAILS */}
                            <div className="border p-4">
                                <h3 className="font-bold mb-2">[B] EMPLOYER DETAILS</h3>
                                <div className="mb-2">
                                    <label className="font-bold">Occupation:</label>
                                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div className="mb-2">
                                    <label className="font-bold">Name of Employer & Work Place Address:</label>
                                    <textarea name="employerDetails" value={formData.employerDetails} onChange={handleChange} className="border p-1 w-full" rows="4"></textarea>
                                </div>
                            </div>
                        </div>

                        {/* [C] PAYMENT DETAILS */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[C] PAYMENT DETAILS</h3>
                            <div className="mb-2">
                                <label className="font-bold">Payment Mode:</label>
                                <div className="flex gap-4">
                                    <label>
                                        <input type="radio" name="paymentMode" value="CAGD" onChange={handleChange} className="mr-1" /> CAGD
                                    </label>
                                    <label>
                                        <input type="radio" name="paymentMode" value="Corporate" onChange={handleChange} className="mr-1" /> Corporate
                                    </label>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">PEP STATUS:</label>
                                <div className="flex gap-4">
                                    <label>
                                        <input type="radio" name="pepStatus" value="Yes" onChange={handleChange} className="mr-1" /> Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="pepStatus" value="No" onChange={handleChange} className="mr-1" /> No
                                    </label>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Staff ID No.:</label>
                                <input type="text" name="staffID" value={formData.staffID} onChange={handleChange} className="border p-1 w-full" />
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Debit Order / Cash/Cheque / Mobile Money:</label>
                                <div className="flex flex-col gap-4">
                                    <label>
                                        <input type="radio" name="paymentMethod" value="DebitOrder" onChange={handleChange} className="mr-1" /> Debit Order
                                    </label>
                                    <label>
                                        <input type="radio" name="paymentMethod" value="CashCheque" onChange={handleChange} className="mr-1" /> Cash/Cheque
                                    </label>
                                    <label>
                                        <input type="radio" name="paymentMethod" value="MobileMoney" onChange={handleChange} className="mr-1" /> Mobile Money
                                    </label>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-2">
                                <div>
                                    <label className="font-bold">Permanent Postal Address:</label>
                                    <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} className="border p-1 w-full" rows="3"></textarea>
                                </div>
                                <div>
                                    <label className="font-bold">Residential Address:</label>
                                    <textarea name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} className="border p-1 w-full" rows="3"></textarea>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="font-bold">Mobile:</label>
                                    <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">E-Mail:</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Source of Income:</label>
                                <input type="text" name="sourceOfIncome" value={formData.sourceOfIncome} onChange={handleChange} className="border p-1 w-full" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="font-bold">ID Type:</label>
                                    <select name="idType" value={formData.idType} onChange={handleChange} className="border p-1 w-full">
                                        <option value="">Select</option>
                                        <option value="Passport">Passport</option>
                                        <option value="Voters’ ID">Voters’ ID</option>
                                        <option value="Drivers’ License">Drivers’ License</option>
                                        <option value="National ID">National ID</option>
                                        <option value="NHIS">NHIS</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-bold">ID Number:</label>
                                    <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="font-bold">Date of Issue:</label>
                                    <input type="date" name="dateOfIssue" value={formData.dateOfIssue} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">Date of Expiry:</label>
                                    <input type="date" name="dateOfExpiry" value={formData.dateOfExpiry} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">State Bank & Branch:</label>
                                <input type="text" name="stateBankBranch" onChange={handleChange} className="border p-1 w-full" />
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Bank A/C No.:</label>
                                <input type="text" name="bankAcNo" onChange={handleChange} className="border p-1 w-full" />
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Payment Frequency:</label>
                                <div className="flex gap-4">
                                    <label>
                                        <input type="radio" name="payFreq" value="Monthly" onChange={handleChange} className="mr-1" /> Monthly
                                    </label>
                                    <label>
                                        <input type="radio" name="payFreq" value="Annually" onChange={handleChange} className="mr-1" /> Annually
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* [D] COVER DETAILS */}
                        <div className="border p-4 mb-6">
                            <h3 className="font-bold mb-2">[D] COVER DETAILS</h3>
                            <div className="mb-4">
                                <p className="font-bold">Term of Policy (Select preferred no. of years):</p>
                                <div className="flex gap-4">
                                    {["4", "5", "6", "7", "8", "9", "10"].map((year) => (
                                        <label key={year}>
                                            <input type="radio" name="termOfPolicy" value={year} className="mr-1" /> {year}
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Basic Premium (GH₵):</label>
                                    <input type="number" name="basicPremium" value={formData.basicPremium} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">Extra Premium (GH₵):</label>
                                    <input type="number" name="extraPremium" value={formData.extraPremium} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="grid gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Total Premium (GH₵):</label>
                                    <input type="number" name="totalPremium" value={formData.totalPremium} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">Initial Sum Assured (GH₵):</label>
                                    <input type="number" name="sumAssured" value={formData.sumAssured} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Do you wish to have the Benefits Increase option?</label>
                                <div className="flex gap-4">
                                    <label>
                                        <input type="radio" name="benefitsIncrease" value="yes" onChange={handleChange} checked={formData.benefitsIncrease === 'yes'} className="mr-1" /> Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="benefitsIncrease" value="no" onChange={handleChange} checked={formData.benefitsIncrease === 'no'} className="mr-1" /> No
                                    </label>
                                </div>
                            </div>
                            <div>
                                <p className="font-bold">If yes, tick your preferred option:</p>
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="font-bold">Annual Premium Increase</label>
                                        <div className="flex flex-col gap-2">
                                            <label>
                                                <input type="radio" name="annualPremiumIncrease" value="5" onChange={handleChange} checked={formData.annualPremiumIncrease === '5'} className="mr-1" /> Option 1: 5%
                                            </label>
                                            <label>
                                                <input type="radio" name="annualPremiumIncrease" value="10" onChange={handleChange} checked={formData.annualPremiumIncrease === '10'} className="mr-1" /> Option 2: 10%
                                            </label>
                                            <label>
                                                <input type="radio" name="annualPremiumIncrease" value="15" onChange={handleChange} checked={formData.annualPremiumIncrease === '15'} className="mr-1" /> Option 3: 15%
                                            </label>
                                            <label>
                                                <input type="radio" name="annualPremiumIncrease" value="20" onChange={handleChange} checked={formData.annualPremiumIncrease === '20'} className="mr-1" /> Option 4: 20%
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="font-bold">Annual Sum Assured Increase</label>
                                        <div className="flex flex-col gap-2">
                                            <label>
                                                <input type="radio" name="annualSumAssuredIncrease" value="3" onChange={handleChange} checked={formData.annualSumAssuredIncrease === '3'} className="mr-1" /> Option 1: 3%
                                            </label>
                                            <label>
                                                <input type="radio" name="annualSumAssuredIncrease" value="6" onChange={handleChange} checked={formData.annualSumAssuredIncrease === '6'} className="mr-1" /> Option 2: 6%
                                            </label>
                                            <label>
                                                <input type="radio" name="annualSumAssuredIncrease" value="9" onChange={handleChange} checked={formData.annualSumAssuredIncrease === '9'} className="mr-1" /> Option 3: 9%
                                            </label>
                                            <label>
                                                <input type="radio" name="annualSumAssuredIncrease" value="12" onChange={handleChange} checked={formData.annualSumAssuredIncrease === '12'} className="mr-1" /> Option 4: 12%
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* [E] BENEFICIARIES */}
                        <div className="border p-4 mb-6 overflow-x-auto">
                            <h3 className="font-bold mb-2">[E] BENEFICIARY(IES)</h3>
                            <table className="min-w-full border">
                                <thead>
                                    <tr>
                                        <th className="border p-2">No.</th>
                                        <th className="border p-2">Surname</th>
                                        <th className="border p-2">First Name</th>
                                        <th className="border p-2">Other Names</th>
                                        <th className="border p-2">Date of Birth</th>
                                        <th className="border p-2">Relationship</th>
                                        <th className="border p-8">%</th>
                                        <th className="border p-2">Contact No.</th>
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
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'surname', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryFirstName_${idx}`}
                                                    value={beneficiary.firstName}
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'firstName', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryOtherNames_${idx}`}
                                                    value={beneficiary.otherNames}
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'otherNames', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="date"
                                                    name={`beneficiaryDOB_${idx}`}
                                                    value={beneficiary.dateOfBirth}
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'dateOfBirth', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryRelationship_${idx}`}
                                                    value={beneficiary.relationship}
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'relationship', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="number"
                                                    name={`beneficiaryPercentage_${idx}`}
                                                    value={beneficiary.percentage}
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'percentage', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    name={`beneficiaryContact_${idx}`}
                                                    value={beneficiary.contactNo}
                                                    onChange={(e) => handleBeneficiaryChange(idx, 'contactNo', e.target.value)}
                                                    className="border p-1 w-full"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Trustee */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">Trustee (where a beneficiary is below 18 years of age)</h3>
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="font-bold">Surname:</label>
                                    <input type="text" name="trusteeSurname" value={formData.trusteeSurname} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">First Name:</label>
                                    <input type="text" name="trusteeFirstName" value={formData.trusteeFirstName} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Other Names:</label>
                                <input type="text" name="trusteeOtherNames" value={formData.trusteeOtherNames} onChange={handleChange} className="border p-1 w-full" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div>
                                    <label className="font-bold">Date of Birth:</label>
                                    <input type="date" name="trusteeDOB" value={formData.trusteeDOB} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">Relationship:</label>
                                    <input type="text" name="trusteeRelationship" value={formData.trusteeRelationship} onChange={handleChange} className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="font-bold">Contact No.:</label>
                                <input type="text" name="trusteeAddress" value={formData.trusteeAddress} onChange={handleChange} className="border p-1 w-full" />
                            </div>
                        </div>

                        {/* [F] MEDICAL HISTORY */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[F] MEDICAL HISTORY</h3>
                            {/* For brevity, only a couple of questions are shown here. Extend as needed */}
                            <div className="mb-2">
                                <p className="font-bold">
                                    Asthma, persistent cough, blood spitting, bronchitis, chest pains, tuberculosis, pneumonia, hypertension?
                                </p>
                                <div className="flex gap-4">
                                    <label>
                                        <input type="radio" name="medAsthma" value="yes" onChange={handleChange} className="mr-1" /> Yes
                                    </label>
                                    <label>
                                        <input type="radio" name="medAsthma" value="no" onChange={handleChange} className="mr-1" /> No
                                    </label>
                                </div>
                            </div>
                            {/* Add additional medical history questions similarly */}
                        </div>

                        {/* [F] HOW DID YOU GET TO KNOW STARLIFE? */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[F] HOW DID YOU GET TO KNOW STARLIFE?</h3>
                            <div className="mb-2">
                                <label className="font-bold">Options:</label>
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
                            </div>
                            <div>
                                <label className="font-bold">If Others, kindly specify:</label>
                                <input
                                    type="text"
                                    name="knowStarLifeOthers"
                                    value={formData.knowStarLifeOthers}
                                    onChange={handleChange}
                                    className="border p-1 w-full"
                                />
                            </div>
                        </div>

                        {/* [H] DECLARATION */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">[H] DECLARATION</h3>
                            <p className="mb-4">
                                Declaration by Applicant <br />
                                I{" "}
                                <input
                                    type="text"
                                    name="applicantName"
                                    value={formData.applicantName}
                                    onChange={handleChange}
                                    className="inline-block border-b border-gray-400 w-1/2"
                                    placeholder="Enter your name"
                                />{" "}
                                do hereby declare to the best of my knowledge and belief that the above statements are true and complete and that this proposal will form the basis of contract.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Proposer’s Signature:</label>
                                    <input
                                        type="text"
                                        name="proposerSignature"
                                        value={formData.proposerSignature}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Date:</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Branch Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="branchManagerName"
                                        value={formData.branchManagerName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Zonal Manager’s Name:</label>
                                    <input
                                        type="text"
                                        name="zonalManagerName"
                                        value={formData.zonalManagerName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Sales Executive’s ID:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveID"
                                        value={formData.salesExecutiveID}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Sales Executive’s Name:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveName"
                                        value={formData.salesExecutiveName}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-bold">Sales Executive’s Signature:</label>
                                    <input
                                        type="text"
                                        name="salesExecutiveSignature"
                                        value={formData.salesExecutiveSignature}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Unit Manager’s Name:</label>
                                    <input type="text" className="border p-1 w-full" />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label className="font-bold">Unit Manager’s Signature:</label>
                                    <input type="text" className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">Date:</label>
                                    <input type="date" className="border p-1 w-full" />
                                </div>
                            </div>
                        </div>

                        {/* FOR OFFICIAL USE ONLY */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">FOR OFFICIAL USE ONLY</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Policy Number:</label>
                                    <input
                                        type="text"
                                        name="policyNumber"
                                        value={formData.policyNumber}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Approved By:</label>
                                    <input
                                        type="text"
                                        name="approvedBy"
                                        value={formData.approvedBy}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="font-bold">Issue Date:</label>
                                    <input
                                        type="date"
                                        name="issueDate"
                                        value={formData.issueDate}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Signature:</label>
                                    <input
                                        type="text"
                                        name="officialSignature"
                                        value={formData.officialSignature}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-bold">Issue Age:</label>
                                    <input
                                        type="number"
                                        name="issueAge"
                                        value={formData.issueAge}
                                        onChange={handleChange}
                                        className="border p-1 w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-bold">Date:</label>
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

                        {/* DEBIT MANDATE */}
                        <div className="border p-4 my-6">
                            <h3 className="font-bold mb-2">DEBIT MANDATE</h3>
                            <div className="mb-4">
                                <label className="font-bold">Policy Holder’s Name:</label>
                                <input type="text" className="border p-1 w-full" />
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Annual Benefits Increase Options?</label>
                                <div className="flex items-center gap-4">
                                    <label>
                                        <input type="radio" name="benefitOption" value="Monthly" className="mr-1" /> Monthly
                                    </label>
                                    <label>
                                        <input type="radio" name="benefitOption" value="Annual" className="mr-1" /> Annual
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">DECLARATION (Debit Mandate):</label>
                                <p className="mb-2">
                                    I have applied to StarLife Assurance Company Limited for a life policy and authorise you to deduct from my account the amount stated above and credit same to StarLife Assurance Company Limited on the date stated and every month after.
                                </p>
                                <p>This authorisation shall be effective until a written notice cancelling it is received.</p>
                            </div>
                            <div className="mb-4">
                                <label className="font-bold">Customer’s Signature:</label>
                                <input type="file" className="border p-1 w-full" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="font-bold">Date:</label>
                                    <input type="date" className="border p-1 w-full" />
                                </div>
                                <div>
                                    <label className="font-bold">Policy No.:</label>
                                    <input type="text" className="border p-1 w-full" />
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
                        </div>

                        {/* Footer */}
                        <div className="text-left mt-6">
                            <p className="text-sm">
                                Website: <a href="http://www.starlife.com.gh" className="text-blue-500">www.starlife.com.gh</a>
                            </p>
                            <p className="text-sm">Plot No. Z 20B, Airport Residential Area, Accra on the Mankata Avenue</p>
                            <p className="text-sm">P. O. Box AN 5783, Accra-North</p>
                            <p className="text-sm">
                                Tel: +233 302-258943-6 | Fax: +233 302-258947 | Email: info@starlife.com.gh
                            </p>
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

export default WealthMasterForm;
