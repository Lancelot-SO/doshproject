import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/assets.png";
import formlogo from "../../images/formlogo.png";

const Claims = ({ onClose, userData }) => {
    const form = useRef();

    // Initialize formData with additional fields for insurer type and specific insurer
    const [formData, setFormData] = useState({
        message: '',
        preferredInsurer: '',
        specificInsurer: '',
        customerDetails: '',
        policyNumber: '',
    });

    // Arrays for the select options
    const firms = [
        "DOSH recommended Insurer",
        "SIC Insurance Company Ltd",
        "Enterprise Insurance",
        "Star Assurance Company Ltd",
        "Vanguard Assurance Ltd",
        "Holland Insurance",
        "Millennium Insurance",
        "Sanlam Allianz Insurance Ltd",
        "Ghana Union Assurance Ltd",
        "Prime Insurance Ltd",
        "Glico General Insurance company Ltd",
        "Activa Insurance company Ltd.",
        "Loyalty Insurance company Ltd",
        "Priority Insurance Ltd",
        "Serene Insurance Company Ltd",
        "Phoenix Assurance Ltd",
        "Bedrock Insurance Company Ltd",
        "Coronation Insurance company Ltd",
        "Sunu Insurance Limited",
        "Quality Insurance Company",
        "Nsiah Insurance Company Ltd",
        "Imperial General Insurance company Ltd",
        "Best Assurance Company Ltd.",
        "Donewell Insurance company Ltd"
    ];

    const lifeInsurance = [
        "DOSH recommended Insurer",
        "SIC Life Insurance Company Ltd",
        "Enterprise Life Insurance Ltd.",
        "Starlife Insurance Company Ltd",
        "Vanguard Life Insurance company",
        "Holland Life Insurance",
        "Milife Insurance",
        "Sanlam Allianz Life Insurance Ltd",
        "Ghana life Insurance ltd",
        "Glico life Insurance company Ltd",
        "Prudential Life Insurance",
        "Old Mutual Assurance Ltd",
        "Metropolitan Life Insurance Ltd",
        "Quality Life Insurance Company",
        "Donewell life Insurance company Ltd",
        "Impact Life Insurance Ltd"
    ];

    // State for capturing the insurer category selection
    const [selectedInsurerType, setSelectedInsurerType] = useState('');

    // Populate user details when available (if provided from parent)
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                insuredName: userData.fullname ? userData.fullname.trim() : '',
                email: userData.email || '',
                mobile: userData.phone || '',
            }));
        }
    }, [userData]);

    // For generic input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Separate change handler for insurer type selection
    const handlePreferredInsurerChange = (e) => {
        const category = e.target.value;
        setFormData(prev => ({
            ...prev,
            preferredInsurer: category,
            specificInsurer: '', // Reset specific insurer when type changes
        }));
        setSelectedInsurerType(category);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_lhp5a0r',     // Replace with your EmailJS service ID
                'template_olpbd9c',    // Replace with your EmailJS template ID
                form.current,
                'aV-FvEfOZg7fbxTN2'     // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    // Show a success toast; the autoClose is set to 5000 ms (5 seconds)
                    toast.success('Claim submitted successfully!', { autoClose: 5000 });
                    // Reset the formData
                    setFormData({
                        message: '',
                        preferredInsurer: '',
                        specificInsurer: '',
                        customerDetails: '',
                        policyNumber: '',
                    });
                    // Delay unmounting the component to give time for the toast to display
                    setTimeout(() => {
                        if (onClose) onClose();
                    }, 6000);
                },
                (error) => {
                    toast.error('Failed to submit claim. Please try again.', { autoClose: 5000 });
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
                    {/* ToastContainer is here to display toast messages; autoClose is set to 5000ms */}
                    <ToastContainer autoClose={5000} />


                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute lg:top-4 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl text-gray-800 font-bold mb-3">Claim Request Form</h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        <div>
                            <label htmlFor="customerDetails" className="block text-sm font-medium">
                                Customer Details (Name)
                            </label>
                            <input
                                id="customerDetails"
                                name="customerDetails"
                                value={formData.customerDetails}
                                onChange={handleChange}
                                required
                                placeholder="Enter your details"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="preferredInsurer" className="block text-sm font-medium">
                                Preferred Insurer
                            </label>
                            <select
                                id="preferredInsurer"
                                name="preferredInsurer"
                                value={formData.preferredInsurer}
                                onChange={handlePreferredInsurerChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose an option</option>
                                <option value="Life Insurance">Life Insurer</option>
                                <option value="General Insurance">General Insurer</option>
                                <option value="Health Insurance">Health Insurance</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Conditionally render the second dropdown based on the selected insurer type */}
                        {selectedInsurerType === "Life Insurance" && (
                            <div>
                                <label htmlFor="specificInsurer" className="block text-sm font-medium">
                                    Life Insurer
                                </label>
                                <select
                                    id="specificInsurer"
                                    name="specificInsurer"
                                    value={formData.specificInsurer}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {lifeInsurance.map((insurer, idx) => (
                                        <option key={idx} value={insurer}>
                                            {insurer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {selectedInsurerType === "General Insurance" && (
                            <div>
                                <label htmlFor="specificInsurer" className="block text-sm font-medium">
                                    General Insurer
                                </label>
                                <select
                                    id="specificInsurer"
                                    name="specificInsurer"
                                    value={formData.specificInsurer}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {firms.map((insurer, idx) => (
                                        <option key={idx} value={insurer}>
                                            {insurer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div>
                            <label htmlFor="policyNumber" className="block text-sm font-medium">
                                Insurance Policy Number
                            </label>
                            <input
                                type="text"
                                id="policyNumber"
                                name="policyNumber"
                                value={formData.policyNumber}
                                onChange={handleChange}
                                required
                                placeholder="Enter policy number"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

export default Claims;
