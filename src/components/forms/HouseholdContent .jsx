import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import image from "../../images/household.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const HouseholdInsuranceForm = ({ onClose, userData }) => {
    // 1. Local state for your form
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        otherNames: "",
        dateOfBirth: "",
        sex: "",
        postalAddress: "",
        email: "",
        mobileNo: "",
        idType: "",
        idNumber: "",
        propertyAddress: "",
        digitalAddress: "",
        package: "",
        previousInsurance: "",
        previousCompany: "",
        expiryDate: "",
        homeUnoccupied: "",
        homeUnoccupied14Days: "",
        constructionWalls: "",
        constructionRoof: "",
        constructionBuilding: "",
        fence: "",
        stormOrFlood: "",
        theftOrDamage: "",
        highValueItems: "",
        ownsBuilding: "",
        insureBuilding: "",
        buildingStay: "",
        date: "",
        agency: "",
        signature: "",
    });

    const formRef = useRef();

    // When userData is provided from the parent, update local state to pre-populate fields
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                firstName: userData.firstName || "",
                surname: userData.surname || "",
                otherNames: userData.otherNames || "",
                email: userData.email || "",
                mobileNo: userData.phone || "",
            }));
        }
    }, [userData]);

    // 3. Handle changes for text/select/radio
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // 4. Handle file input separately
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // We only store the filename in state (optional). The actual file is read by the DOM form.
        setFormData((prev) => ({
            ...prev,
            signature: file ? file.name : "",
        }));
    };

    // 5. On form submission, call emailjs.sendForm
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these with your actual EmailJS service/template IDs and Public Key
        const serviceID = 'service_qu9ui2s';
        const templateID = 'template_9k6j6xe';
        const publicKey = 'aV-FvEfOZg7fbxTN2';

        emailjs.sendForm(
            serviceID,
            templateID,
            formRef.current, // pass the form ref
            publicKey
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Form submitted successfully!');

                // Reset local state
                setFormData({
                    firstName: "",
                    surname: "",
                    otherNames: "",
                    dateOfBirth: "",
                    sex: "",
                    postalAddress: "",
                    email: "",
                    mobileNo: "",
                    idType: "",
                    idNumber: "",
                    propertyAddress: "",
                    digitalAddress: "",
                    package: "",
                    previousInsurance: "",
                    previousCompany: "",
                    expiryDate: "",
                    homeUnoccupied: "",
                    homeUnoccupied14Days: "",
                    constructionWalls: "",
                    constructionRoof: "",
                    constructionBuilding: "",
                    fence: "",
                    stormOrFlood: "",
                    theftOrDamage: "",
                    highValueItems: "",
                    ownsBuilding: "",
                    insureBuilding: "",
                    buildingStay: "",
                    date: "",
                    agency: "",
                    signature: "",
                });

                // Also reset the actual DOM form fields
                e.target.reset();
            })
            .catch((err) => {
                console.error('FAILED...', err);
                toast.error('Failed to submit form. Please try again.');
            });
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-[20px]-lg shadow-lg flex overflow-hidden">
                {/* Left Side Image */}
                <div className="hidden md:flex flex-col w-1/2 bg-cover bg-center">
                    <img src={image} alt="Insurance" className="w-full h-[400px] object-cover" loading="lazy" />
                    <div className='w-full h-full bg-black p-4'>
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
                        className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={16} />
                    </button>
                    <h2 className="text-2xl font-semibold mb-4">Household Content Insurance Proposal Request</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <label>First Name<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="border p-2 rounded-[20px] w-full" required /></label>
                            <label>Surname<input type="text" name="surname" value={formData.surname} onChange={handleChange} className="border p-2 rounded-[20px] w-full" required /></label>
                        </div>
                        <label>Other Names<input type="text" name="otherNames" value={formData.otherNames} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                        <label>Date of Birth<input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="border p-2 rounded-[20px] w-full" required /></label>
                        <div className="flex gap-4">
                            <label><input type="radio" name="sex" value="Male" onChange={handleChange} required /> Male</label>
                            <label><input type="radio" name="sex" value="Female" onChange={handleChange} required /> Female</label>
                        </div>
                        <label>Postal Address<input type="text" name="postalAddress" value={formData.postalAddress} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                        <label>Email<input type="email" name="email" value={formData.email} onChange={handleChange} className="border p-2 rounded-[20px] w-full" required /></label>
                        <label>Mobile No<input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="border p-2 rounded-[20px] w-full" required /></label>

                        <h3 className="text-lg font-medium mt-4">Property Details</h3>
                        <label>Property Address<input type="text" name="propertyAddress" value={formData.propertyAddress} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                        <label>Ghana Post Digital Address<input type="text" name="digitalAddress" value={formData.digitalAddress} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>

                        <h3 className="text-lg font-medium mt-4">Choose Package</h3>
                        <label>Package
                            <select name="package" value={formData.package} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select a package</option>
                                <option value="80">¢80 (¢10,000 Cover)</option>
                                <option value="120">¢120 (¢15,000 Cover)</option>
                                <option value="170">¢170 (¢30,000 Cover)</option>
                                <option value="200">¢200 (¢50,000 Cover)</option>
                                <option value="350">¢350 (¢75,000 Cover)</option>
                                <option value="450">¢450 (¢100,000 Cover)</option>
                                <option value="630">¢630 (¢150,000 Cover)</option>
                            </select>
                        </label>

                        <label>Have you had household insurance previously?
                            <select name="previousInsurance" value={formData.previousInsurance} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        {formData.previousInsurance === "Yes" && (
                            <>
                                <label>Previous Insurance Company<input type="text" name="previousCompany" value={formData.previousCompany} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                                <label>Expiry Date<input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                            </>
                        )}

                        <h3 className="text-lg font-medium mt-4">Property Occupancy</h3>
                        <label>Is your home regularly left unoccupied?
                            <select name="homeUnoccupied" value={formData.homeUnoccupied} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <label>Is your home likely to be left unoccupied for more than 14 consecutive days in any one-year?
                            i.e. when you are absent from your home on holiday.
                            <select name="homeUnoccupied14Days" value={formData.homeUnoccupied14Days} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <h3 className="text-lg font-medium mt-4"> Details of construction Of Your House</h3>
                        <label>Walls<input type="text" name="constructionBuilding" value={formData.constructionBuilding} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                        <label>Walls<input type="text" name="constructionWalls" value={formData.constructionWalls} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                        <label>Roof<input type="text" name="constructionRoof" value={formData.constructionRoof} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>
                        <label>Fence<input type="text" name="fence" value={formData.fence} onChange={handleChange} className="border p-2 rounded-[20px] w-full" /></label>

                        <label>Has your home or the site on which it stands been affected by storm or ood before?
                            <select name="stormOrFlood" value={formData.stormOrFlood} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <label>Has any property or possessions been stolen, lost or damaged in in your home in the last 3 years?
                            <select name="theftOrDamage" value={formData.theftOrDamage} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <h3 className="text-lg font-medium mt-4">Contents</h3>
                        <label>Please list items with values in excess of GH¢2,000.00. You may use extra sheet(s)
                            <textarea name="highValueItems" value={formData.highValueItems} onChange={handleChange} className="border p-2 rounded-[20px] w-full" />
                        </label>

                        <label>Do you own the buidling in which you stay?
                            <select name="buildingStay" value={formData.buildingStay} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label>Do you or the owner want to insure the building? ( We will contact you if you answer YES)
                            <select name="insureBuilding" value={formData.insureBuilding} onChange={handleChange} className="border p-2 rounded-[20px] w-full">
                                <option value="">Select an option</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <h2 className="text-xl font-semibold mb-4">Declaration</h2>
                        <p className="mb-4">
                            I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory
                            and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and
                            DOSH Risk and I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the
                            Premium thereon.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block font-medium" htmlFor="declarationDate">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    id="declarationDate"
                                    name="declarationDate"
                                    value={formData.declarationDate}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border rounded-[20px]-[20px] w-full"
                                />
                            </div>
                            <div>
                                <label className="block font-medium" htmlFor="signature">
                                    Signature
                                </label>
                                <input
                                    type="file"
                                    id="signature"
                                    name="signature"
                                    onChange={handleFileChange}
                                    className="mt-1 p-2 border rounded-[20px]-[20px] w-full"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div>
                                <label className="block font-medium" htmlFor="agency">
                                    Agency
                                </label>
                                <input
                                    type="text"
                                    id="agency"
                                    name="agency"
                                    value={formData.agency}
                                    onChange={handleChange}
                                    className="mt-1 p-2 border rounded-[20px]-[20px] w-full"
                                />
                            </div>
                        </div>

                        <button type="submit" className="bg-[#a58b63] text-white p-2 rounded-[20px] w-full">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HouseholdInsuranceForm;
