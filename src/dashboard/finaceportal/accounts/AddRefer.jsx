import { useState } from 'react';
import "../../Sidebar.css";
import PaymentDetails from './PaymentDetails'; // Assuming PaymentDetails is in the same folder

export default function AddRefer({ onClose, onSubmit }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        productType: '',
        paymentMethod: '',
        source: '',
        sourceNumber: '',
        paymentMode: '',
        phoneNumber: '',
        country: '',
        idType: '',
        idNumber: '',
        email: '',
        confirmEmail: '',
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: ''
    });

    const [showPaymentDetails, setShowPaymentDetails] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleContinue = () => {
        if (step === 1) {
            setShowPaymentDetails(true); // Show payment details popup
        } else if (step === 3) {
            onSubmit(); // Submit form
        } else {
            setStep(prev => Math.min(prev + 1, 3));
        }
    };

    const handleBack = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    const handlePaymentClose = () => {
        setShowPaymentDetails(false); // Close popup
        setStep(1); // Return to step 1
    };

    const handlePaymentContinue = () => {
        setShowPaymentDetails(false); // Close popup
        setStep(2); // Proceed to step 2
    };

    return (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 lg:w-[500px] w-full smallS8:w-full bg-gray-900 rounded-lg flex items-center justify-center p-2">
            <div className="bg-gray-800 rounded-lg w-full max-w-xl relative">
                {showPaymentDetails && (
                    <PaymentDetails
                        debitingFrom="Jerry Sam"
                        paymentMode={formData.paymentMode || "N/A"}
                        paymentMethod={formData.paymentMethod || "N/A"}
                        amountPerYear="GHS365"
                        initialCharges="GHS0.00"
                        fixFeeCharges="GHS0.00"
                        total="GHS365.00"
                        onClose={handlePaymentClose}
                        onContinue={handlePaymentContinue}
                    />
                )}
                <button
                    onClick={onClose}
                    className="absolute right-2 top-2 w-6 h-6 flex items-center justify-center rounded-full bg-[#987C55] transition-colors"
                >
                    <span className="text-gray-300 text-[24px]">&times;</span>
                </button>

                <div className="p-4">
                    <h2 className="text-white text-[16px] font-semibold mb-4">DOSH Financial sign up</h2>
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

                    <div className="bg-white rounded-lg p-4 max-h-[520px] overflow-y-auto">
                        <div className="space-y-3">
                            {step === 1 && (
                                <>
                                    {/* Payment step fields */}
                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Product Type
                                        </label>
                                        <select
                                            name="productType"
                                            value={formData.productType}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Select Product type</option>
                                            <option value="group1">Personal GHC365</option>
                                            <option value="group2">Family GHC750</option>
                                            <option value="group2">SOHO GHC2,800</option>
                                            <option value="group2">SMB GHC5,500</option>
                                            <option value="group2">Enterprise GHC10,000</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Payment Method
                                        </label>
                                        <select
                                            name="paymentMethod"
                                            value={formData.paymentMethod}
                                            onChange={handleInputChange}
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        >
                                            <option value="">Select Payment method</option>
                                            <option value="type1">Yearly</option>
                                            <option value="type2">Monthly</option>
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
                                            <option value="">Select payment mode</option>
                                            <option value="card">DOSH</option>
                                            <option value="bank">Mobile Money</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Source
                                        </label>
                                        <div className="space-x-2">
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="source"
                                                    value="yes"
                                                    checked={formData.source === 'yes'}
                                                    onChange={handleInputChange}
                                                    className="form-radio text-gray-600 h-3 w-3"
                                                />
                                                <span className="ml-1 text-xs">Yes</span>
                                            </label>
                                            <label className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    name="source"
                                                    value="no"
                                                    checked={formData.source === 'no'}
                                                    onChange={handleInputChange}
                                                    className="form-radio text-gray-600 h-3 w-3"
                                                />
                                                <span className="ml-1 text-xs">No</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Source Number
                                        </label>
                                        <input
                                            type='text'
                                            placeholder='DOSH793580'
                                            name="sourceNumber"
                                            value={formData.sourceNumber}
                                            onChange={handleInputChange}
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
                                            <option value="">Ghana</option>
                                            <option value="">Nigeria</option>
                                            <option value="">Togo</option>

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
                                            placeholder="JohnDoe@example.com"
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
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-xs font-medium mb-1">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            placeholder="*******"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md text-xs"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

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
