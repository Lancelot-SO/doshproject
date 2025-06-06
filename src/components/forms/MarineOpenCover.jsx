import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/marine.png";
import formlogo from "../../images/formlogo.png";

const MarineOpenCover = ({ onClose, userData }) => {
    const form = useRef();

    const [formData, setFormData] = useState({
        proposerName: '',
        surname: '',
        otherNames: '',
        dateOfBirth: '',
        telephone: '',
        postalAddress: '',
        email: '',
        limit: '',
        exportMethod: '',
        countriesOfExportation: '',
        portOfDestination: '',
        itemsToBeExported: '',
        natureOrPacking: '',
        basisOfValuation: '',
        condition: '',
        volumeOfBusiness: '',
        date: '',
        agency: '',
        message: '',
    });

    // States for validation error messages
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    // Pre-populate user details when userData is provided
    useEffect(() => {
        if (userData) {
            setFormData((prev) => ({
                ...prev,
                proposerName: userData.fullname || '',
                email: userData.email || '',
                telephone: userData.phone || '',
            }));
        }
    }, [userData]);

    // Helper function to validate email format
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Helper function to validate telephone number format
    const validatePhone = (phone) => {
        // Accepts an optional '+' followed by 7 to 15 digits
        const regex = /^\+?[0-9]{7,15}$/;
        return regex.test(phone);
    };

    // Handle changes for text inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Validate email on change
        if (name === 'email') {
            if (!validateEmail(value)) {
                setEmailError("Please enter a valid email address.");
            } else {
                setEmailError("");
            }
        }

        // Validate telephone on change
        if (name === 'telephone') {
            if (!validatePhone(value)) {
                setPhoneError("Please enter a valid telephone number.");
            } else {
                setPhoneError("");
            }
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({
                ...prev,
                signature: file, // store the file or its name as needed
            }));
        }
    };

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Prevent submission if there are validation errors
        if (emailError || phoneError) {
            toast.error("Please fix the errors in the form before submitting.");
            return;
        }

        const serviceId = 'service_yywea7l';
        const templateId = 'template_12wr1kw';
        const publicKey = 'aV-FvEfOZg7fbxTN2';

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                toast.success('Marine Open Cover form submitted successfully!');

                // Reset local form state
                setFormData({
                    proposerName: '',
                    surname: '',
                    otherNames: '',
                    dateOfBirth: '',
                    telephone: '',
                    postalAddress: '',
                    email: '',
                    limit: '',
                    exportMethod: '',
                    countriesOfExportation: '',
                    portOfDestination: '',
                    itemsToBeExported: '',
                    natureOrPacking: '',
                    basisOfValuation: '',
                    condition: '',
                    volumeOfBusiness: '',
                    date: '',
                    agency: '',
                    message: '',
                });

                // Reset the actual form fields in the DOM
                e.target.reset();
                // Delay unmounting the component to give time for the toast to display
                setTimeout(() => {
                    if (onClose) onClose();
                }, 6000);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send form data. Please try again.');
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-lg shadow-lg flex overflow-hidden">

                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[700px] extralarge:h-3/4 object-cover" loading="lazy" />
                    <div className='w-full h-full extralarge:h-1/4 bg-black p-4'>
                        <img src={formlogo} alt='formlogo' className='w-[112px] h-[53px]' loading='lazy' />
                        <h2 className='font-bold text-white text-[20px] mb-4 mt-4'>
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className='text-[14px] text-white'>
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
                        className="absolute lg:top-3 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl text-gray-800 font-bold mb-4">Marine Open Insurance Cover Request</h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form ref={form} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name of Proposer (Mr/Ms/Mrs/Dr/Prof)</label>
                            <input
                                type="text"
                                name="proposerName"
                                value={formData.proposerName}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Surname</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Other Names</label>
                            <input
                                type="text"
                                name="otherNames"
                                value={formData.otherNames}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Date of Birth</label>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Telephone Number</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}

                        </div>

                        <div>
                            <label className="block text-sm font-medium">Postal Address</label>
                            <input
                                type="text"
                                name="postalAddress"
                                value={formData.postalAddress}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}

                        </div>

                        <div>
                            <label className="block text-sm font-medium">Limit (Max Amount per Steamer/Location)</label>
                            <input
                                type="text"
                                name="limit"
                                value={formData.limit}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Export Method</label>
                            <select
                                name="exportMethod"
                                value={formData.exportMethod}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            >
                                <option value="">Select Export Method</option>
                                <option value="Air">Air</option>
                                <option value="Sea">Sea</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Countries of Exportation</label>
                            <input
                                type="text"
                                name="countriesOfExportation"
                                value={formData.countriesOfExportation}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Port of Destination</label>
                            <input
                                type="text"
                                name="portOfDestination"
                                value={formData.portOfDestination}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <h2 className="font-bold mb-4 text-gray-800">Items to be Exported together with packing details:</h2>
                        <div>
                            <label className="block text-sm font-medium">Items</label>
                            <textarea
                                name="itemsToBeExported"
                                value={formData.itemsToBeExported}
                                onChange={handleChange}
                                rows="4"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm resize-none"
                            ></textarea>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Nature or Packing</label>
                            <textarea
                                name="natureOrPacking"
                                value={formData.natureOrPacking}
                                onChange={handleChange}
                                rows="4"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm resize-none"
                            ></textarea>
                        </div>

                        <h2 className="font-bold mb-4 text-gray-800">DECLARATION</h2>
                        <p className="text-gray-800">
                            I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory
                            and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and
                            DOSH Risk and I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the
                            Premium thereon.
                        </p>

                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Agency</label>
                            <input
                                type="text"
                                name="agency"
                                value={formData.agency}
                                onChange={handleChange}
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm"
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
                            className="w-full bg-[#b5996e] text-white py-2 rounded-[5px] hover:bg-[#776449] transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div></div>
    );
};

export default MarineOpenCover;
