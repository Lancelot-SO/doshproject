import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import newAnime from "../images/sphoto.png";
import { countryList } from '../utils/countries';
import { validateSignupForm } from '../utils/validation';
import { useSignup } from '../hooks/useSignup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Reusable Label Component
const Label = ({ htmlFor, children, required }) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
        {children} {required && <span className="text-red-500">*</span>}
    </label>
);

// Reusable Input Component
const Input = ({ type = "text", name, value, onChange, placeholder, error, ...props }) => (
    <div className="mb-4">
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'} focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50`}
            {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
    </div>
);

// Reusable Select Component
const Select = ({ name, value, onChange, options, error, placeholder, ...props }) => (
    <div className="mb-4">
        <div className="relative">
            <select
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                className={`w-full px-4 py-3 rounded-lg border ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'} focus:outline-none focus:ring-4 transition-all duration-200 bg-gray-50 appearance-none`}
                {...props}
            >
                <option value="">{placeholder || "-- Select --"}</option>
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
            </div>
        </div>
        {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
    </div>
);

// Custom Country Selector Component
const CountrySelector = ({ value, onChange, options, error, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find(opt => opt.value === value);

    return (
        <div className="mb-4 relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 rounded-lg border cursor-pointer flex justify-between items-center transition-all duration-200 bg-gray-50 ${error ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-100 focus:border-blue-500'}`}
            >
                <span className={selectedOption ? "text-gray-800" : "text-gray-400"}>
                    {selectedOption ? selectedOption.label : (placeholder || "-- Select Country --")}
                </span>
                <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
                    <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto animate-fade-in-up">
                        {options.map((opt) => (
                            <div
                                key={opt.value}
                                onClick={() => {
                                    onChange({ target: { name: 'country', value: opt.value } });
                                    setIsOpen(false);
                                }}
                                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${value === opt.value ? 'bg-blue-50 font-semibold text-blue-600' : 'text-gray-700'}`}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>
                </>
            )}
            {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
        </div>
    );
};

const Insurance = () => {
    const { signup, loading, successData, errorMessage, setErrorMessage, setSuccessData } = useSignup();
    const location = useLocation();

    // Ensure we are on the WWW subdomain (Backend requirement)
    useEffect(() => {
        if (window.location.hostname === '0800dosh.me') {
            window.location.replace('https://www.0800dosh.me' + window.location.pathname);
        }
    }, []);

    const [formData, setFormData] = useState({
        insuranceCategory: 'Family',
        insuranceType: 'DOSH 365',
        medicalCondition: 'no',
        paymentMethod: '',
        insuranceOption: '',
        productType: 'Personal',
        paymentMode: '',
        phoneNumber: '',
        country: '+233',
        idType: '',
        idNumber: '',
        email: '',
        region: '',
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        password: '',
        confirmPassword: '',
        currency: 'GHS',
        above60: '',
        doshNumber: '',
        accountOption: '', // New: for "Choose the option that applies to you" when yearly+insuranceOnly
    });

    const [errors, setErrors] = useState({});
    const [formStepsNum, setFormStepsNum] = useState(0);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [fromPackage, setFromPackage] = useState(false); // Track if user came from insurance package

    // Read plan from location state (preferred) or URL query params (fallback)
    // Pre-select insurance-only registration with the specified plan
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const planFromUrl = searchParams.get('plan');
        const planParam = location.state?.plan || planFromUrl;

        if (planParam) {
            // Valid insurance plan types
            const validInsurancePlans = ['365', '500', '750', '900', '1000', '1200', '2500', '2800', '5000', '5500', '10000', '11000'];
            // Valid financial plan types
            const validFinancialPlans = ['Individual', 'Personal', 'Family', 'SOHO', 'SMB', 'Enterprise'];

            if (validInsurancePlans.includes(planParam)) {
                setFormData(prev => ({
                    ...prev,
                    insuranceOption: 'insuranceOnly',
                    insuranceType: `DOSH ${planParam}`
                }));
                setFromPackage(true);
            } else if (validFinancialPlans.includes(planParam)) {
                setFormData(prev => ({
                    ...prev,
                    insuranceOption: 'financial',
                    productType: planParam === 'Individual' ? 'Personal' : planParam
                }));
                setFromPackage(true);
            }
        }
    }, [location.state, location.search]);

    const getPricing = () => {
        const type = formData.insuranceType;
        const frequency = formData.paymentMethod || 'yearly';

        const rates = {
            'DOSH 365': 365,
            'DOSH 750': 750,
            'DOSH 1000': 1000,
            'DOSH 1500': 1500, // Added based on potentially common types
            'DOSH 2500': 2500,
            'DOSH 5000': 5000,
            'DOSH 10000': 10000
        };

        const base = rates[type] || 0;

        if (frequency === 'daily') {
            if (type === 'DOSH 365') return 1;
            return (base / 365).toFixed(2);
        }

        return base;
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        // If phone number, only allow digits
        if (name === 'phoneNumber') {
            const cleanValue = value.replace(/\D/g, '');
            setFormData(prev => ({ ...prev, [name]: cleanValue }));
            if (errors[name]) {
                setErrors(prev => ({ ...prev, [name]: '' }));
            }
            return;
        }

        setFormData(prev => {
            const next = { ...prev, [name]: value };
            return next;
        });

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleNextStep = () => {
        const { isValid, errors: validationErrors } = validateSignupForm(formData, formStepsNum);
        if (isValid) {
            setErrors({});

            // Special Case: Financial signup triggers payment at Step 2
            if (formStepsNum === 2 && formData.insuranceOption === 'financial') {
                setShowConfirmModal(true);
                return;
            }

            setFormStepsNum(prevNum => prevNum + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            setErrors(validationErrors);
            toast.error("Please fix the errors before proceeding.");
        }
    };

    const handlePrevStep = () => {
        if (formStepsNum > 0) {
            setFormStepsNum(prevNum => prevNum - 1);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, errors: validationErrors } = validateSignupForm(formData, formStepsNum);

        if (!isValid) {
            setErrors(validationErrors);
            toast.error("Please fix the errors before submitting.");
            return;
        }

        setShowConfirmModal(true);
    };

    const performSignup = async () => {
        setShowConfirmModal(false);
        try {
            await signup(formData);

            if (formData.insuranceOption === 'financial') {
                toast.success("Payment initiated! Now please complete your profile details.");
                // Advance to Profile step
                setFormStepsNum(3);
                // We keep successData so the user sees the username/ref if they want, 
                // but the modal needs to be closable or automatically dismissed to see Step 3.
            } else {
                toast.info("Registration initiated. Redirecting soon...");
                setTimeout(() => {
                    window.location.href = '/login';
                }, 30000);
            }
        } catch (error) {
            toast.error(error.message || "Registration failed.");
        }
    };

    // --- Options Arrays ---
    const insuranceOptions = [
        { value: "financial", label: "DOSH Financial" },
        { value: "insuranceOnly", label: "DOSH Insurance" },
        { value: "plan", label: "No, create one for my payment plan (Combo)" },
        { value: "account", label: "Already have a DOSH financial account (Insurance Add-on)" },
    ];

    const categoryOptions = [
        { value: "Family", label: "Family" },
        { value: "Group", label: "Group" },
    ];

    const typeOptions = [
        { value: "DOSH 365", label: "DOSH 365" },
        { value: "DOSH 750", label: "DOSH 750" },
        { value: "DOSH 1000", label: "DOSH 1000" },
        { value: "DOSH 2500", label: "DOSH 2500" },
        { value: "DOSH 5000", label: "DOSH 5000" },
        { value: "DOSH 10000", label: "DOSH 10000" },
    ];

    const financialAccountOptions = [
        { value: "Personal", label: "Personal - GHC 365" },
        { value: "Family", label: "Family - GHC 730" },
        { value: "SOHO", label: "SOHO - GHC 1,820" },
        { value: "SMB", label: "SMB - GHC 3,650" },
        { value: "Enterprise", label: "Enterprise - GHC 10,000" },
    ];

    const paymentFreqOptions = [
        { value: "daily", label: "Daily" },
        { value: "yearly", label: "Yearly" },
    ];

    // New: Options for "Choose the option that applies to you" when insuranceOnly + yearly
    const accountOptionChoices = [
        { value: "existingAccount", label: "Already have a DOSH financial account" },
        { value: "createPlan", label: "No, create one for my payment plan" },
        { value: "insuranceOnly", label: "DOSH Insurance" },
    ];

    // Options for daily payment (only 2 options, no "insurance-only" for daily)
    const accountOptionChoicesDaily = [
        { value: "existingAccount", label: "Already have a DOSH financial account" },
        { value: "createPlan", label: "No, create one for my payment plan" },
    ];

    const paymentModeOptions = [
        { value: "DOSH", label: "DOSH" },
        { value: "MTN Mobile Money", label: "MTN Mobile Money" },
        { value: "AirtelTigo Money", label: "AirtelTigo Money" },
        { value: "Telecel Cash", label: "Telecel Cash" },
        { value: "Debit and Credit Cards", label: "Debit and Credit Cards" },
    ];

    const currencyOptions = [
        { value: "GHS", label: "GHS - Ghanaian Cedi" },
        { value: "USD", label: "USD" },
        { value: "EUR", label: "EUR" },
        { value: "CAD", label: "CAD" },
        { value: "GBP", label: "GBP" },
    ];

    const countryOptions = countryList.map(c => ({
        value: c.code,
        label: `${c.flag} ${c.code} (${c.name})`
    }));



    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
            <ToastContainer position="top-right" autoClose={5000} />

            <div className="bg-white w-full max-w-6xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                {/* Left Side - Image/Branding */}
                <div className="hidden md:block w-1/2 bg-black/50 relative">
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white p-12">
                        <h1 className="text-4xl font-extrabold mb-4 tracking-tight">Join DOSH</h1>
                        <p className="text-lg text-blue-100 text-center mb-8">Secure your future with our comprehensive financial and insurance solutions.</p>
                        <ul className="space-y-4 text-left">
                            <li className="flex items-center"><span className="bg-green-400 w-2 h-2 rounded-full mr-3"></span>Instant Processing</li>
                            <li className="flex items-center"><span className="bg-green-400 w-2 h-2 rounded-full mr-3"></span>Secure Payments</li>
                            <li className="flex items-center"><span className="bg-green-400 w-2 h-2 rounded-full mr-3"></span>24/7 Support</li>
                        </ul>
                    </div>
                    <img
                        src={newAnime}
                        alt="Join DOSH"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            {formStepsNum === 0 ? "Registration" : (
                                formData.insuranceOption === 'financial' ? "DOSH Financial Signup" :
                                    formData.insuranceOption === 'insuranceOnly' ? "DOSH Insurance Signup" :
                                        formData.insuranceOption === 'plan' ? "DOSH Combo Signup" :
                                            formData.insuranceOption === 'account' ? "DOSH Add-on Signup" : "Registration"
                            )}
                        </h2>
                        <p className="text-gray-500 mt-2">Let's get you set up in minutes.</p>
                    </div>

                    {/* Stepper */}
                    <div className="flex items-center mb-8">
                        {/* Step 1: Product */}
                        <div className={`flex flex-col items-center ${formStepsNum >= 0 ? 'text-[#987c55]' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold mb-1 transition-colors ${formStepsNum >= 0 ? 'border-[#987c55] bg-[#987c55]/10' : 'border-gray-300'}`}>1</div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">Type</span>
                        </div>

                        {/* Step 2: Details */}
                        <div className={`flex-1 h-0.5 mx-2 transition-colors ${formStepsNum >= 1 ? 'bg-[#987c55]' : 'bg-gray-200'}`}></div>
                        <div className={`flex flex-col items-center ${formStepsNum >= 1 ? 'text-[#987c55]' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold mb-1 transition-colors ${formStepsNum >= 1 ? 'border-[#987c55] bg-[#987c55]/10' : 'border-gray-300'}`}>2</div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">Plan</span>
                        </div>

                        {/* Step 3: Account/Payment */}
                        <div className={`flex-1 h-0.5 mx-2 transition-colors ${formStepsNum >= 2 ? 'bg-[#987c55]' : 'bg-gray-200'}`}></div>
                        <div className={`flex flex-col items-center ${formStepsNum >= 2 ? 'text-[#987c55]' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold mb-1 transition-colors ${formStepsNum >= 2 ? 'border-[#987c55] bg-[#987c55]/10' : 'border-gray-300'}`}>3</div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">Payments</span>
                        </div>

                        {/* Step 4: Personal Details */}
                        <div className={`flex-1 h-0.5 mx-2 transition-colors ${formStepsNum >= 3 ? 'bg-[#987c55]' : 'bg-gray-200'}`}></div>
                        <div className={`flex flex-col items-center ${formStepsNum >= 3 ? 'text-[#987c55]' : 'text-gray-400'}`}>
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold mb-1 transition-colors ${formStepsNum >= 3 ? 'border-[#987c55] bg-[#987c55]/10' : 'border-gray-300'}`}>4</div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider">Profile</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
                        {/* STEP 0: Product Selection */}
                        {formStepsNum === 0 && (
                            <div className="space-y-6 animate-fade-in-up">
                                <div>
                                    <Label htmlFor="insuranceOption" required>Registration Type</Label>
                                    <Select
                                        name="insuranceOption"
                                        value={formData.insuranceOption}
                                        onChange={handleChange}
                                        options={insuranceOptions}
                                        error={errors.insuranceOption}
                                        placeholder="-- Select Registration Type --"
                                        disabled={fromPackage}
                                    />
                                    {fromPackage && (
                                        <p className="mt-1 text-xs text-gray-500 italic">Pre-selected from your chosen insurance package</p>
                                    )}
                                </div>

                                {['insuranceOnly', 'plan', 'account'].includes(formData.insuranceOption) && (
                                    <div className="space-y-6 pt-4 border-t border-gray-100">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <Label htmlFor="insuranceCategory">Insurance Category Type</Label>
                                                <Select
                                                    name="insuranceCategory"
                                                    value={formData.insuranceCategory}
                                                    onChange={handleChange}
                                                    options={categoryOptions}
                                                    error={errors.insuranceCategory}
                                                    disabled={fromPackage}
                                                />
                                                {fromPackage && (
                                                    <p className="mt-1 text-xs text-gray-500 italic">Pre-selected from your chosen insurance package</p>
                                                )}
                                            </div>
                                            <div>
                                                <Label htmlFor="insuranceType">Insurance Type</Label>
                                                <Select
                                                    name="insuranceType"
                                                    value={formData.insuranceType}
                                                    onChange={handleChange}
                                                    options={typeOptions}
                                                    error={errors.insuranceType}
                                                    disabled={fromPackage}
                                                />
                                                {fromPackage && (
                                                    <p className="mt-1 text-xs text-gray-500 italic">Pre-selected from your chosen insurance package</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {formData.insuranceOption === 'financial' && (
                                    <div className="animate-fade-in pt-4 border-t border-gray-100">
                                        <Label htmlFor="productType" required>Product Type</Label>
                                        <Select
                                            name="productType"
                                            value={formData.productType}
                                            onChange={handleChange}
                                            options={financialAccountOptions}
                                            error={errors.productType}
                                            placeholder="Please select product type"
                                            disabled={fromPackage}
                                        />
                                        {fromPackage && (
                                            <p className="mt-1 text-xs text-gray-500 italic">Pre-selected from your chosen financial package</p>
                                        )}
                                    </div>
                                )}

                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className="w-full bg-[#987c55] hover:bg-[#7d6542] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 focus:ring-4 focus:ring-amber-100 mt-6"
                                >
                                    Continue
                                </button>
                            </div>
                        )}

                        {/* STEP 1: Pre-Health Condition, Above 60, Payment Frequency & Product Type */}
                        {formStepsNum === 1 && (
                            <div className="space-y-6 animate-fade-in-up">
                                {/* Pre-Health and Above 60 sections - Only for insurance paths */}
                                {formData.insuranceOption === 'insuranceOnly' && (
                                    <>
                                        <div className="py-2">
                                            <label className="block text-sm font-semibold mb-3 text-gray-700">
                                                Pre-Health Condition
                                            </label>
                                            <p className="text-sm mb-4 text-gray-600">Diagnosed with any pre-existing health conditions in the past 5 years?</p>
                                            <div className="flex items-center space-x-4">
                                                <label className={`flex-1 flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${formData.medicalCondition === 'yes' ? 'bg-[#987c55]/10 border-[#987c55] text-[#987c55]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`}>
                                                    <input type="radio" name="medicalCondition" value="yes" checked={formData.medicalCondition === 'yes'} onChange={handleChange} className="w-4 h-4 mr-2 accent-[#987c55]" />
                                                    <span className="font-medium">Yes</span>
                                                </label>
                                                <label className={`flex-1 flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${formData.medicalCondition === 'no' ? 'bg-[#987c55]/10 border-[#987c55] text-[#987c55]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`}>
                                                    <input type="radio" name="medicalCondition" value="no" checked={formData.medicalCondition === 'no'} onChange={handleChange} className="w-4 h-4 mr-2 accent-[#987c55]" />
                                                    <span className="font-medium">No</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="py-2">
                                            <p className="text-sm mb-4 text-gray-600 font-medium">Are you 60 years old or above?</p>
                                            <div className="flex items-center space-x-4">
                                                <label className={`flex-1 flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${formData.above60 === 'yes' ? 'bg-[#987c55]/10 border-[#987c55] text-[#987c55]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`}>
                                                    <input type="radio" name="above60" value="yes" checked={formData.above60 === 'yes'} onChange={handleChange} className="w-4 h-4 mr-2 accent-[#987c55]" />
                                                    <span className="font-medium">Yes</span>
                                                </label>
                                                <label className={`flex-1 flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${formData.above60 === 'no' ? 'bg-[#987c55]/10 border-[#987c55] text-[#987c55]' : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-700'}`}>
                                                    <input type="radio" name="above60" value="no" checked={formData.above60 === 'no'} onChange={handleChange} className="w-4 h-4 mr-2 accent-[#987c55]" />
                                                    <span className="font-medium">No</span>
                                                </label>
                                            </div>
                                            {errors.above60 && <p className="mt-2 text-xs text-red-500 font-medium">{errors.above60}</p>}
                                        </div>

                                        <hr className="border-gray-200" />
                                    </>
                                )}

                                <div>
                                    <Label htmlFor="paymentMethod" required>Payment Frequency</Label>
                                    <Select
                                        name="paymentMethod"
                                        value={formData.paymentMethod}
                                        onChange={handleChange}
                                        options={paymentFreqOptions}
                                        error={errors.paymentMethod}
                                        placeholder="-- Select Frequency --"
                                    />
                                </div>


                                <div className="flex gap-4 mt-8">
                                    <button
                                        type="button"
                                        onClick={handlePrevStep}
                                        className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3.5 px-6 rounded-lg transition"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        className="w-2/3 bg-[#987c55] hover:bg-[#7d6542] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-0.5"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Payments & Account Options */}
                        {formStepsNum === 2 && (
                            <div className="space-y-6 animate-fade-in-up">
                                {formData.insuranceOption === 'insuranceOnly' && (
                                    <div className="space-y-6">
                                        <div className="animate-fade-in">
                                            <Label htmlFor="accountOption" required>Choose the option that applies to you</Label>
                                            <Select
                                                name="accountOption"
                                                value={formData.accountOption}
                                                onChange={handleChange}
                                                options={formData.paymentMethod === 'yearly' ? accountOptionChoices : accountOptionChoicesDaily}
                                                error={errors.accountOption}
                                                placeholder="Please choose an option"
                                            />
                                        </div>
                                    </div>
                                )}

                                {(formData.insuranceOption === 'account' || (formData.insuranceOption === 'insuranceOnly' && formData.accountOption === 'existingAccount')) && (
                                    <div className="animate-fade-in">
                                        <Label htmlFor="doshNumber" required>Enter your DOSH number</Label>
                                        <Input name="doshNumber" value={formData.doshNumber} onChange={handleChange} placeholder="Enter your DOSH number" error={errors.doshNumber} />
                                    </div>
                                )}

                                {formData.insuranceOption === 'insuranceOnly' && formData.accountOption === 'createPlan' && (
                                    <div className="animate-fade-in space-y-4">
                                        <div className="flex items-start bg-[#987c55]/10 border border-[#987c55] p-4 rounded-lg">
                                            <div className="bg-[#987c55] rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <p className="text-sm text-[#987c55] font-medium">A Financial account will be created using the same details.</p>
                                        </div>
                                        <div>
                                            <Label htmlFor="productType" required>Financial Account Type</Label>
                                            <Select name="productType" value={formData.productType} onChange={handleChange} options={financialAccountOptions} error={errors.productType} placeholder="Please select Financial account type" />
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="col-span-1 md:col-span-2">
                                        <Label htmlFor="paymentMode" required>Payment Mode</Label>
                                        <Select name="paymentMode" value={formData.paymentMode} onChange={handleChange} options={paymentModeOptions} error={errors.paymentMode} placeholder="-- Select Payment Mode --" />
                                    </div>

                                    {formData.paymentMode === 'Debit and Credit Cards' && (
                                        <div className="col-span-1 md:col-span-2 space-y-4">
                                            <div>
                                                <Label htmlFor="currency" required>Select Card Currency</Label>
                                                <Select name="currency" value={formData.currency} onChange={handleChange} options={currencyOptions} error={errors.currency} />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email Address (Optional)</Label>
                                                <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="eg. user@example.com" error={errors.email} />
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <Label htmlFor="country" required>Country Code</Label>
                                        <CountrySelector value={formData.country} onChange={handleChange} options={countryOptions} error={errors.country} />
                                    </div>
                                    <div>
                                        <Label htmlFor="phoneNumber" required>Phone Number</Label>
                                        <Input
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="eg. 548686500"
                                            error={errors.phoneNumber}
                                            type="tel"
                                        />
                                    </div>

                                    {formData.paymentMode === 'Debit and Credit Cards' && (
                                        <div className="col-span-1 md:col-span-2 mt-4 flex items-center text-amber-700 bg-amber-50 p-3 rounded-lg text-sm border border-amber-200">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                            Card transactions would be subject to a 5% fee
                                        </div>
                                    )}
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button type="button" onClick={handlePrevStep} className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3.5 px-6 rounded-lg transition">Back</button>
                                    <button
                                        type="button"
                                        onClick={handleNextStep}
                                        className="w-2/3 bg-[#987c55] hover:bg-[#7d6542] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-0.5"
                                    >
                                        {formData.insuranceOption === 'financial' ? 'Proceed' : 'Continue'}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: Personal Details */}
                        {formStepsNum === 3 && (
                            <div className="space-y-6 animate-fade-in-up">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="firstName" required>First Name</Label>
                                        <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" error={errors.firstName} />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName" required>Last Name</Label>
                                        <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" error={errors.lastName} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="password" required>Password</Label>
                                        <Input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Min 6 chars" error={errors.password} />
                                    </div>
                                    <div>
                                        <Label htmlFor="confirmPassword" required>Confirm Password</Label>
                                        <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Re-enter password" error={errors.confirmPassword} />
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-8">
                                    <button type="button" onClick={handlePrevStep} className="w-1/3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3.5 px-6 rounded-lg transition">Back</button>
                                    <button type="submit" disabled={loading} className="w-2/3 bg-[#987c55] hover:bg-[#7d6542] text-white font-bold py-3.5 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-0.5">
                                        {loading ? 'Processing...' : (formData.insuranceOption === 'financial' ? 'Finish Registration' : 'Complete Signup')}
                                    </button>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            {/* CONFIRMATION MODAL */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
                        <div className="bg-[#987c55] p-6 text-white text-center">
                            <h3 className="text-2xl font-bold">Confirm Transaction</h3>
                            <p className="opacity-90 mt-1">Please review your details</p>
                        </div>
                        <div className="p-6 space-y-4">
                            {formData.paymentMethod === 'daily' && (
                                <div className="flex items-start text-amber-700 bg-amber-50 p-4 rounded-xl text-sm border border-amber-200">
                                    <div className="bg-amber-100 rounded-full p-1 mr-3 mt-0.5">
                                        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="font-semibold leading-relaxed">
                                        A DOSH Financial account will be created with this Insurance details using a daily payment plan.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm py-1">
                                    <span className="text-gray-500">Payment Mode</span>
                                    <span className="font-semibold text-gray-800 flex items-center">
                                        {formData.paymentMode.includes('MTN') && <span className="mr-2">🟡</span>}
                                        {formData.paymentMode}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-1">
                                    <span className="text-gray-500">Payment Method</span>
                                    <span className="font-semibold text-gray-800 capitalize">{formData.paymentMethod}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-1">
                                    <span className="text-gray-500">Payment amount per {formData.paymentMethod === 'daily' ? 'day' : 'year'}</span>
                                    <span className="font-semibold text-gray-800">
                                        {formData.paymentMode === 'Debit and Credit Cards' ? (formData.currency || 'GHS') : 'GHS'} {formData.paymentMethod === 'daily' ? '1.00' : getPricing()}
                                    </span>
                                </div>
                                {['insuranceOnly', 'plan', 'account'].includes(formData.insuranceOption) && formData.paymentMethod === 'daily' && (
                                    <div className="flex justify-between items-center text-sm py-1">
                                        <span className="text-gray-500">Insurance payment amount per day</span>
                                        <span className="font-semibold text-gray-800">GHS 4.06</span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center text-sm py-1">
                                    <span className="text-gray-500">Initial charge</span>
                                    <span className="font-semibold text-gray-800">GHS 0.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-1">
                                    <span className="text-gray-500">Initial Insurance charge</span>
                                    <span className="font-semibold text-gray-800">GHS 0.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm py-1">
                                    <span className="text-gray-500">Fixed Fee charge</span>
                                    <span className="font-semibold text-gray-800">GHS 1.00</span>
                                </div>
                                <div className="pt-3 mt-3 border-t-2 border-dashed border-gray-200 flex justify-between items-center">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-xl font-extrabold text-[#987c55]">
                                        {formData.currency || 'GHS'} {formData.paymentMethod === 'daily' ? '25.06' : (parseFloat(getPricing()) + 1).toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-blue-50 text-blue-800 text-xs p-3 rounded-lg mt-4 flex items-center">
                                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                {formData.paymentMode === 'Debit and Credit Cards' ? (
                                    <span>Secure card payment redirect follows.</span>
                                ) : (
                                    <span>Prompt will be sent to {formData.phoneNumber}.</span>
                                )}
                            </div>
                        </div>
                        <div className="p-6 bg-gray-50 flex gap-4">
                            <button
                                onClick={() => setShowConfirmModal(false)}
                                className="w-1/2 py-3 px-4 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
                            >
                                Edit
                            </button>
                            <button
                                onClick={performSignup}
                                className="w-1/2 py-3 px-4 rounded-lg bg-[#987c55] text-white font-bold hover:bg-[#7d6542] transition shadow-lg"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* SUCCESS MODAL */}
            {successData && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden text-center p-8">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                            <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Registration Initiated!</h3>
                        <p className="text-gray-500 mb-6">Your DOSH account is being created.</p>

                        <div className="bg-gray-100 rounded-xl p-4 mb-6 text-left space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-500 text-sm">Ref ID:</span>
                                <span className="font-mono font-medium text-gray-800">{successData?.referenceId || 'N/A'}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-500 text-sm">Username:</span>
                                <span className="font-mono font-bold text-blue-600">{successData?.username || 'N/A'}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {(successData?.paymentLink || successData?.link) ? (
                                <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                                    <p className="text-green-800 font-medium mb-3">Your payment link is ready!</p>
                                    <a
                                        href={successData.paymentLink || successData.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md transition-all text-center"
                                    >
                                        Pay Now via Card
                                    </a>
                                </div>
                            ) : (
                                <p className="text-gray-600 text-sm">Please check your phone for the MOMO prompt to authorize the transaction.</p>
                            )}

                            <div className="flex gap-4">
                                <button
                                    onClick={() => setSuccessData(null)}
                                    className="flex-1 py-3 px-4 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-gray-50"
                                >
                                    Close
                                </button>
                                {formData.insuranceOption !== 'financial' && (
                                    <button
                                        onClick={() => window.location.href = '/login'}
                                        className="flex-1 py-3 px-4 rounded-lg bg-[#987c55] text-white font-bold hover:bg-[#7d6542]"
                                    >
                                        Login Now
                                    </button>
                                )}
                            </div>
                            {formData.insuranceOption === 'financial' && (
                                <p className="text-xs text-[#987c55] italic">Closing this will allow you to complete your profile setup.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ERROR MODAL */}
            {errorMessage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden text-center p-6">
                        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                            <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Registration Failed</h3>
                        <p className="text-gray-500 text-sm mb-6">{errorMessage}</p>
                        <button
                            onClick={() => setErrorMessage('')}
                            className="w-full py-2.5 px-4 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default Insurance;
