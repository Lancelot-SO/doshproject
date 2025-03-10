import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import image from "../../images/imagebg.png";
import formlogo from "../../images/formlogo.png";
import { X } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

const TravelInsurance = ({ onClose }) => {
    const [formData, setFormData] = useState({
        proposerName: "",
        surname: "",
        otherNames: "",
        dob: "",
        sex: "",
        address: "",
        email: "",
        mobile: "",
        postalAddress: "",
        residenceCountry: "",
        passportNumber: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        travelPurpose: "",
        productType: "",
        premiumPaid: "",
        declarationDate: "",
        validator: "",
        officer: "",
        date: "",
        agency: "",
        declareSignature: "",
        declareDate: ""
    });

    // Create a ref for the form
    const formRef = useRef();

    // Handle text and select changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file change separately. Note: do not set a value on the file input.
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // Optionally store the filename in state for reference
        setFormData({ ...formData, declareSignature: file ? file.name : "" });
    };

    // Handle form submission using emailjs.sendForm
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these placeholders with your actual EmailJS credentials:
        const serviceID = "service_1jcgpuj";
        const templateID = "template_mr8dt37";
        const publicKey = 'aV-FvEfOZg7fbxTN2';

        emailjs
            .sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Form submitted successfully!");
                setFormData({
                    proposerName: "",
                    surname: "",
                    otherNames: "",
                    dob: "",
                    sex: "",
                    address: "",
                    email: "",
                    mobile: "",
                    postalAddress: "",
                    residenceCountry: "",
                    passportNumber: "",
                    destination: "",
                    departureDate: "",
                    returnDate: "",
                    travelPurpose: "",
                    productType: "",
                    premiumPaid: "",
                    declarationDate: "",
                    validator: "",
                    officer: "",
                    date: "",
                    agency: "",
                    declareSignature: "",
                    declareDate: ""
                });
                e.target.reset();
            })
            .catch((err) => {
                console.error("FAILED...", err);
                toast.error("Failed to submit form. Please try again.");
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-lg shadow-lg flex overflow-hidden">


                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[400px] object-cover" loading="lazy" />
                    <div className='w-full h-full bg-black p-4'>
                        <img src={formlogo} alt='formlogo' className='w-[112px] h-[53px]' loading='lazy' />
                        <h2 className='font-bold text-white text-[22px] mb-2'>
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className='text-[16px] text-white'>
                            At DOSH Risk, we simplify insurance so you can focus on what truly matters.
                            Fill out the form to request personalized insurance solutions tailored to your unique needs.
                        </p>
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
                    <ToastContainer />

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold text-left mb-4">Travel Insurance Proposal Request</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name of Proposer</label>
                            <input type="text" name="proposerName" value={formData.proposerName} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Surname</label>
                                <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Other Names</label>
                                <input type="text" name="otherNames" value={formData.otherNames} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Date of Birth</label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Sex</label>
                                <select name="sex" value={formData.sex} onChange={handleChange} className="w-full p-2 border rounded-[20px]">
                                    <option value="">Select</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Postal Address</label>
                                <input type="text" name="postalAddress" value={formData.postalAddress} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Mobile No</label>
                                <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Country of Residence</label>
                            <input type="text" name="residenceCountry" value={formData.residenceCountry} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Passport Number</label>
                            <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Destination</label>
                            <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium">Date of Departure</label>
                                <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Date of Return</label>
                                <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Purpose of Travel</label>
                            <input type="text" name="travelPurpose" value={formData.travelPurpose} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Product Type</label>
                            <select name="productType" value={formData.productType} onChange={handleChange} className="w-full p-2 border rounded-[20px]">
                                <option value="">Select</option>
                                <option value="Europe">Europe / Schengen</option>
                                <option value="Traveller">Traveller</option>
                                <option value="Family">Family</option>
                                <option value="Pearl">Pearl</option>
                                <option value="Economy">Economy</option>

                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Premium Paid (GHC)</label>
                            <input type="number" name="premiumPaid" value={formData.premiumPaid} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Signature</label>
                            <input type="text" name="signature" value={formData.signature} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>

                        <p className=" font-bold mb-4">
                            Official Use Only
                        </p>
                        <div>
                            <label className="block text-sm font-medium">Validator</label>
                            <input type="text" name="Validator" value={formData.Validator} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Signature of Validating Of Officer</label>
                            <input type="text" name="officer" value={formData.officer} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>

                        <h3 className="font-bold text-gray-800">DECLARATION</h3>
                        <p className='text-gray-800'>
                            I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory
                            and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and the
                            DOSH Risk and I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the
                            Premium thereon.
                        </p>

                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input type="date" name="declareDate" value={formData.declareDate} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Agency</label>
                            <input type="text" name="agency" value={formData.agency} onChange={handleChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Signature</label>
                            <input type="file" name="declareSignature" onChange={handleFileChange} className="w-full p-2 border rounded-[20px]" required />
                        </div>
                        <button type="submit" className="w-full bg-[#b5996e] text-white p-2 rounded-[20px] hover:bg-[#816842]">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TravelInsurance;
