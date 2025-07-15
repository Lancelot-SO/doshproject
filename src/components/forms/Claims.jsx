import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/claim.png";
import formlogo from "../../images/formlogo.png";

const Claims = ({ onClose, userData }) => {

    const [formData, setFormData] = useState({
        message: '',
        preferredInsurer: '',
        specificInsurer: '',
        customerDetails: '',
        policyNumber: '',
    });

    // Arrays for the select options
    const firms = [
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

    const dosh = [
        "DOSH"
    ]

    const [selectedInsurerType, setSelectedInsurerType] = useState('');

    useEffect(() => {
        if (userData) {
            setFormData(f => ({
                ...f,
                customerDetails: userData.fullname?.trim() || '',
                // if you have user email/mobile fields you can add them here
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(f => ({ ...f, [name]: value }));
    };

    const handlePreferredInsurerChange = e => {
        const pref = e.target.value;
        setSelectedInsurerType(pref);
        setFormData(f => ({
            ...f,
            preferredInsurer: pref,
            specificInsurer: '',
            policyNumber: pref === 'Other' ? '' : f.policyNumber,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const payload = {
            ...formData,
            emailType: "claimForm"
        };

        try {
            const resp = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const result = await resp.json();
            if (result.status === 'success') {
                toast.success(result.message || 'Message sent successfully!', { autoClose: 5000 });
                setFormData({
                    message: '',
                    preferredInsurer: '',
                    specificInsurer: '',
                    customerDetails: '',
                    policyNumber: '',
                });
                setSelectedInsurerType('');
                setTimeout(onClose, 6000);
            } else {
                throw new Error(result.message || 'Failed to send message.');
            }
        } catch (err) {
            console.error(err);
            toast.error(err.message || 'Failed to submit claim. Please try again.', { autoClose: 5000 });
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[5px] shadow-lg flex overflow-hidden">
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
                    <ToastContainer position="bottom-center" />
                    <button
                        onClick={onClose}
                        className="absolute lg:top-3 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex flex-col text-black">
                        <h2 className="font-extrabold uppercase text-[20px] mb-2 mt-4">
                            Risk Brokerage Service Portal
                        </h2>
                        <p className="text-[14px]">
                            Tell us how we can help you today.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Customer Details */}
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
                                className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="preferredInsurer" className="block text-sm font-medium">
                                Category
                            </label>
                            <select
                                id="preferredInsurer"
                                name="preferredInsurer"
                                value={formData.preferredInsurer}
                                onChange={handlePreferredInsurerChange}
                                required
                                className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Choose an option</option>
                                <option value="General Insurance">General Insurance</option>
                                <option value="Life Insurance">Life Insurance</option>
                                <option value="Health Insurance">Health Insurance</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Specific Insurer: General */}
                        {selectedInsurerType === "General Insurance" && (
                            <div>
                                <label htmlFor="specificInsurer" className="block text-sm font-medium">
                                    Insurer
                                </label>
                                <select
                                    id="specificInsurer"
                                    name="specificInsurer"
                                    value={formData.specificInsurer}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your insurer</option>
                                    {firms.map((insurer, idx) => (
                                        <option key={idx} value={insurer}>
                                            {insurer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Specific Insurer: Life */}
                        {selectedInsurerType === "Life Insurance" && (
                            <div>
                                <label htmlFor="specificInsurer" className="block text-sm font-medium">
                                    Insurer
                                </label>
                                <select
                                    id="specificInsurer"
                                    name="specificInsurer"
                                    value={formData.specificInsurer}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your insurer</option>
                                    {lifeInsurance.map((insurer, idx) => (
                                        <option key={idx} value={insurer}>
                                            {insurer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Specific Insurer: Health */}
                        {selectedInsurerType === "Health Insurance" && (
                            <div>
                                <label htmlFor="specificInsurer" className="block text-sm font-medium">
                                    Insurer
                                </label>
                                <select
                                    id="specificInsurer"
                                    name="specificInsurer"
                                    value={formData.specificInsurer}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select your insurer</option>
                                    {dosh.map((insurer, idx) => (
                                        <option key={idx} value={insurer}>
                                            {insurer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {selectedInsurerType !== "Other" && (
                            <div>
                                <label htmlFor="policyNumber" className="block text-sm font-medium">
                                    Insurance Policy Number
                                </label>
                                <input
                                    id="policyNumber"
                                    name="policyNumber"
                                    value={formData.policyNumber}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter policy number"
                                    className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        {/* Message */}
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
                                className="w-full mt-1 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 resize-none"
                            />
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
