import { useState } from 'react';
import "../Sidebar.css";

export default function AddDependent({ onClose, onSubmit }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Payment step fields
        groupType: '',
        insuranceType: '',
        preHealthCondition: '',
        paymentMethod: '',
        paymentMode: '',
        // Verification step fields
        country: '',
        idType: '',
        idNumber: '',
        email: '',
        confirmEmail: '',
        // Personalize step fields
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
        relationshipToDependant: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContinue = () => {
        if (step === 3) {
            // Submit the form after the last step
            onSubmit();  // Trigger form submission from parent
        } else {
            setStep(prev => Math.min(prev + 1, 3));
        }
    };

    const handleBack = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    return (
        <div className="absolute z-50 top-2 left-1/2 transform -translate-x-1/2 bg-gray-900 lg:w-[500px] w-full rounded-lg flex items-center justify-center p-2">
            <div
                className="bg-gray-800 rounded-lg w-full max-w-full relative"
                style={{
                    height: '80vh', // Take 90% of the viewport height
                    maxHeight: '90vh', // Prevents the container from exceeding the viewport
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#987C55] transition-colors"
                >
                    <span className="text-gray-300 text-[24px]">&times;</span>
                </button>

                {/* Header */}
                <div className="p-4">
                    <h2 className="text-white text-lg font-semibold mb-4">Add Dependant</h2>

                    {/* Progress steps */}
                    <div className="flex items-center justify-between mb-6 relative">
                        <div className="absolute top-4 left-[calc(12.5%+10px)] right-[calc(12.5%+10px)] h-[2px] bg-gray-700 z-0" />
                        {['Payment', 'Verification', 'Personalize'].map((label, index) => (
                            <div key={label} className="relative flex flex-col items-center z-10">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                                    ${index + 1 === step ? 'bg-[#987C55] text-white' : 'bg-gray-700 text-gray-300'}`}>
                                    {index + 1 === step ? index + 1 : <div className="w-3 h-3 rounded-full bg-gray-300" />}
                                </div>
                                <span className="text-xs text-gray-300 mt-1">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Content */}
                <div
                    className="overflow-y-auto px-4 pb-4"
                    style={{
                        maxHeight: 'calc(90vh - 100px)', // Deduct header and padding
                    }}
                >
                    {/* Form */}
                    <div className="bg-white rounded-lg p-4 overflow-y-auto">
                        <div className="space-y-3">
                            {step === 1 && (
                                <>
                                    {/* Payment step fields */}
                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Group Type
                                        </label>
                                        <select
                                            name="groupType"
                                            value={formData.groupType}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Select group type</option>
                                            <option value="group1">Group 1</option>
                                            <option value="group2">Group 2</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Insurance Type
                                        </label>
                                        <select
                                            name="insuranceType"
                                            value={formData.insuranceType}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Select insurance type</option>
                                            <option value="type1">Type 1</option>
                                            <option value="type2">Type 2</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Pre Health Condition
                                        </label>
                                        <div className="space-x-2">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="preHealthCondition"
                                                    value="yes"
                                                    checked={formData.preHealthCondition === 'yes'}
                                                    onChange={handleInputChange}
                                                    className="form-radio text-gray-600 h-3 w-3"
                                                />
                                                <span className="ml-1 text-xs">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="preHealthCondition"
                                                    value="no"
                                                    checked={formData.preHealthCondition === 'no'}
                                                    onChange={handleInputChange}
                                                    className="form-radio text-gray-600 h-3 w-3"
                                                />
                                                <span className="ml-1 text-xs">No</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Payment method
                                        </label>
                                        <select
                                            name="paymentMethod"
                                            value={formData.paymentMethod}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Please select payment method</option>
                                            <option value="card">Credit Card</option>
                                            <option value="bank">Bank Transfer</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Payment Mode
                                        </label>
                                        <select
                                            name="paymentMode"
                                            value={formData.paymentMode}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Please select payment mode</option>
                                            <option value="monthly">Monthly</option>
                                            <option value="yearly">Yearly</option>
                                        </select>
                                    </div>
                                </>
                            )}
                            {step === 2 && (
                                <>
                                    {/* Verification step fields */}
                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Country
                                        </label>
                                        <select
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Select country</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            ID Type
                                        </label>
                                        <input
                                            type="text"
                                            name="idType"
                                            value={formData.idType}
                                            onChange={handleInputChange}
                                            placeholder="yourname@email.com"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            ID Number
                                        </label>
                                        <input
                                            type="text"
                                            name="idNumber"
                                            value={formData.idNumber}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Confirm Email
                                        </label>
                                        <input
                                            type="email"
                                            name="confirmEmail"
                                            value={formData.confirmEmail}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>
                                </>
                            )}

                            {step === 3 && (
                                <div className='no-scrollbar'>
                                    {/* Personalize step fields */}
                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            placeholder="Select country"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            placeholder="yourname@email.com"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Gender
                                        </label>
                                        <input
                                            type="text"
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Date of Birth
                                        </label>
                                        <input
                                            type="text"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Phone number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Relationship to Dependant
                                        </label>
                                        <input
                                            type="text"
                                            name="relationshipToDependant"
                                            value={formData.relationshipToDependant}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>


                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="mt-4 flex space-x-2">
                            <button
                                onClick={step === 1 ? onClose : handleBack}
                                className="flex-1 px-2 py-1 border border-gray-300 text-gray-700 rounded-md text-xs"
                            >
                                {step === 1 ? 'Close' : 'Back'}
                            </button>
                            <button
                                onClick={handleContinue}
                                className="flex-1 px-2 py-1 bg-[#B69D74] text-white rounded-md text-xs"
                            >
                                {step === 3 ? 'Submit' : 'Continue'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
