import { X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/corp.png";
import formlogo from "../../images/formlogo.png";

const countryOptions = countryList().getData();

const initialState = {
    companyName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    officeAddress: '',
    gender: '',
    subscribers: '',
    country: '',
    mobile: '',
    emailAddress: '',
};

export default function CorporateInsurance({ onClose, userData }) {
    const formRef = useRef();
    const [formData, setFormData] = useState(initialState);
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                firstName: userData.firstname || "",
                middleName: userData.middlename || "",
                lastName: userData.lastname || "",
                emailAddress: userData.email || "",
                mobile: userData.phone || "",
            }));
        }
    }, [userData]);

    const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = phone => /^\+?\d{10,15}$/.test(phone);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === "emailAddress") {
            setEmailError(validateEmail(value) ? "" : "Please enter a valid email address.");
        }
        if (name === "mobile") {
            setPhoneError(validatePhone(value) ? "" : "Please enter a valid mobile number.");
        }
    };

    const handleCountryChange = option => {
        setFormData(prev => ({ ...prev, country: option?.value || "" }));
    };

    const sendEmail = async e => {
        e.preventDefault();
        if (emailError || phoneError) {
            toast.error("Please fix the errors before submitting the claim.");
            return;
        }

        const payload = { ...formData, emailType: "corporateInsurance" };
        try {
            const res = await fetch("/send-email.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const result = await res.json();
            if (result.status === "success") {
                toast.success(result.message);
                setFormData(initialState);
                setTimeout(() => onClose?.(), 6000);
            } else {
                toast.error(result.message);
            }
        } catch (err) {
            console.error("Submission error:", err);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-lg shadow-lg flex overflow-hidden">

                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[700px] object-cover" loading="lazy" />
                    <div className="bg-black p-4 flex-1 text-white">
                        <img src={formlogo} alt="Logo" className="w-[112px] h-[53px] mb-4" loading="lazy" />
                        <h2 className="font-bold text-[20px] mb-2">
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className="text-[14px]">
                            We simplify insurance so you can focus on what truly matters.
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
                    <ToastContainer position="bottom-right" autoClose={5000} />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-[#687588]"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl font-bold mb-2 text-black">Health Insurance (Corporate)</h2>
                    <p className="mb-4 text-black">Please kindly fill out the form fields below.</p>

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-4 text-black">

                        {/* company Name */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="companyName" className="font-medium">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                placeholder="Enter company name"
                                className="w-full p-2 border rounded"
                            />
                        </div>
                        {/* First Name */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="firstName" className="font-medium">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder="Enter first name"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Middle Name */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="middleName" className="font-medium">Middle Name</label>
                            <input
                                type="text"
                                id="middleName"
                                name="middleName"
                                value={formData.middleName}
                                onChange={handleChange}
                                required
                                placeholder="Enter middle name"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="lastName" className="font-medium">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Enter last name"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* office Address */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="officeAddress" className="font-medium">Office Address</label>
                            <input
                                type="text"
                                id="officeAddress"
                                name="officeAddress"
                                value={formData.officeAddress}
                                onChange={handleChange}
                                required
                                placeholder="Enter Office Address"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Gender */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="gender" className="font-medium">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded"
                            >
                                <option value="">Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="subscribers" className="font-medium">Number of subscribers (Staff and Dependants)</label>
                            <input
                                type="text"
                                id="subscribers"
                                name="subscribers"
                                value={formData.subscribers}
                                onChange={handleChange}
                                required
                                placeholder="Enter Number of subscribers (Staff and Dependants)"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Country */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="country" className="font-medium">Country</label>
                            <Select
                                id="country"
                                name="country"
                                options={countryOptions}
                                value={countryOptions.find(o => o.value === formData.country) || null}
                                onChange={handleCountryChange}
                                isClearable
                                placeholder="Select a country..."
                                className="react-select-container"
                                classNamePrefix="react-select"
                            />
                        </div>

                        {/* Mobile */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="mobile" className="font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                                placeholder="e.g. +233501234567"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="emailAddress" className="font-medium">Email Address</label>
                            <input
                                type="email"
                                id="emailAddress"
                                name="emailAddress"
                                value={formData.emailAddress}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                className="w-full p-2 border rounded"
                            />
                        </div>

                        <button type="submit" className="w-full bg-[#b5996e] text-white py-2 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
