import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import image from "../../images/homeprotection.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import HomeProtectionTable from './HomeProtectionTable';

const HomeProtection = ({ onClose, userData }) => {
    const [formData, setFormData] = useState({
        // Personal Details
        proposerName: '',
        postalAddress: '',
        businessOccupation: '',
        telephone: '',
        fax: '',
        email: '',
        propertyAddress: '',

        // General Information
        homeType: '',
        otherHomeType: '',
        houseType: '',
        buildingWalls: '',
        buildingRoof: '',
        fenceDetails: '',
        refusedInsurance: '',
        propertyLoss: '',

        // Coverage Options
        coverFence: '',
        coverBuilding: '',
        buildingSumInsured: '',
        coverContent: '',
        contentSumInsured: '',
        coverEmployerLiability: '',
        numIndoorServants: '',
        numOutdoorServants: '',
        numDrivers: '',
        coverPersonalAccident: '',
        personalAccidentDeath: '',
        personalAccidentDisability: '',
        personalAccidentMedical: '',
        coverAlternativeAccommodation: '',
        alternativeAccommodationSumInsured: '',
        coverLegalLiability: '',
        legalLiabilitySumInsured: '',
        coverPersonalLiability: '',
        personalLiabilitySumInsured: '',

        // Declaration
        declarationDate: '',
        declarationSignature: '',
        declarationAgency: '',
    });

    // Lift the table data to the parent component
    const [tableData, setTableData] = useState({
        section1Building: { insure: false, sumInsured: '', premium: '' },
        section1Fence: { insure: false, sumInsured: '', premium: '' },
        section1AlternativeAccommodation: { insure: false, sumInsured: '', premium: '' },
        section1Liability: { insure: false, sumInsured: '500', premium: 'FREE' },
        section2Content: { insure: false, sumInsured: '10000', premium: '80.00' },
        section3PersonalLiability: { insure: false, sumInsured: '500', premium: 'FREE' },
        section4EmployersLiability: { insure: false, sumInsured: 'Unlimited', premium: '5.00 per head', indoorServants: 0, outdoorServants: 0, drivers: 0 },
        section4PersonalAccidentDeath: { insure: false },
        section4PersonalAccidentDisability: { insure: false },
        section4PersonalAccidentMedical: { insure: false },
        totalPremium: ''
    });

    // Update formData with values from parent if provided
    useEffect(() => {
        if (userData) {
            setFormData((prevState) => ({
                ...prevState,
                proposerName: `${userData.fullname}`.trim(),
                telephone: userData.telephone || '',
                email: userData.email || '',
            }));
        }
    }, [userData]);

    // Helper function to flatten the tableData object
    const flattenTableData = (data) => {
        const flattened = {};
        Object.keys(data).forEach((key) => {
            if (typeof data[key] === 'object' && data[key] !== null) {
                Object.keys(data[key]).forEach((subKey) => {
                    flattened[`${key}_${subKey}`] = data[key][subKey];
                });
            } else {
                flattened[key] = data[key];
            }
        });
        return flattened;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Flatten table data and combine with form data
        const tableParams = flattenTableData(tableData);
        const templateParams = {
            ...formData,
            ...tableParams,
        };

        emailjs
            .send(
                'service_r9t2vbj',    // Replace with your EmailJS service ID
                'template_oodevxb',   // Replace with your EmailJS template ID (e.g., "HomeProtectionProposal")
                templateParams,
                'aV-FvEfOZg7fbxTN2'    // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    toast.success('Proposal submitted successfully via Email!');
                    // Reset form and table data if needed
                    setFormData({
                        proposerName: '',
                        postalAddress: '',
                        businessOccupation: '',
                        telephone: '',
                        fax: '',
                        email: '',
                        propertyAddress: '',
                        homeType: '',
                        otherHomeType: '',
                        houseType: '',
                        buildingWalls: '',
                        buildingRoof: '',
                        fenceDetails: '',
                        refusedInsurance: '',
                        propertyLoss: '',
                        coverFence: '',
                        coverBuilding: '',
                        buildingSumInsured: '',
                        coverContent: '',
                        contentSumInsured: '',
                        coverEmployerLiability: '',
                        numIndoorServants: '',
                        numOutdoorServants: '',
                        numDrivers: '',
                        coverPersonalAccident: '',
                        personalAccidentDeath: '',
                        personalAccidentDisability: '',
                        personalAccidentMedical: '',
                        coverAlternativeAccommodation: '',
                        alternativeAccommodationSumInsured: '',
                        coverLegalLiability: '',
                        legalLiabilitySumInsured: '',
                        coverPersonalLiability: '',
                        personalLiabilitySumInsured: '',
                        declarationDate: '',
                        declarationSignature: '',
                        declarationAgency: '',
                    });
                    setTableData({
                        section1Building: { insure: false, sumInsured: '', premium: '' },
                        section1Fence: { insure: false, sumInsured: '', premium: '' },
                        section1AlternativeAccommodation: { insure: false, sumInsured: '', premium: '' },
                        section1Liability: { insure: false, sumInsured: '500', premium: 'FREE' },
                        section2Content: { insure: false, sumInsured: '10000', premium: '80.00' },
                        section3PersonalLiability: { insure: false, sumInsured: '500', premium: 'FREE' },
                        section4EmployersLiability: { insure: false, sumInsured: 'Unlimited', premium: '5.00 per head', indoorServants: 0, outdoorServants: 0, drivers: 0 },
                        section4PersonalAccidentDeath: { insure: false },
                        section4PersonalAccidentDisability: { insure: false },
                        section4PersonalAccidentMedical: { insure: false },
                        totalPremium: ''
                    });
                    if (onClose) onClose();
                },
                (error) => {
                    toast.error('Failed to submit proposal. Please try again.');
                }
            );
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-lg shadow-lg flex overflow-hidden">



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
                        className="absolute top-4 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <h1 className="text-3xl font-bold mb-6">
                        Home Protection Policy
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Details Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium">
                                        1. Name of Proposer (Mr/Ms/Mrs/Dr/Prof)
                                    </label>
                                    <input
                                        type="text"
                                        name="proposerName"
                                        value={formData.proposerName}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="e.g., Mr John Doe"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">2. Postal Address</label>
                                    <textarea
                                        name="postalAddress"
                                        value={formData.postalAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        3. Business/Occupation
                                    </label>
                                    <input
                                        type="text"
                                        name="businessOccupation"
                                        value={formData.businessOccupation}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        4. Tel./ Fax
                                    </label>
                                    <input
                                        type="text"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="Tel or Fax"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        5. Address of property to be Insured
                                    </label>
                                    <textarea
                                        name="propertyAddress"
                                        value={formData.propertyAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* General Information Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">General Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium">
                                        6. Is your home a:
                                    </label>
                                    <select
                                        name="homeType"
                                        value={formData.homeType}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    >
                                        <option value="">Select</option>
                                        <option value="Flat">Flat</option>
                                        <option value="House">House</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                                {formData.homeType === 'Other' && (
                                    <div className="md:col-span-2">
                                        <label className="block font-medium">
                                            If “Other”, please specify:
                                        </label>
                                        <input
                                            type="text"
                                            name="otherHomeType"
                                            value={formData.otherHomeType}
                                            onChange={handleChange}
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                )}
                                {formData.homeType === 'House' && (
                                    <div>
                                        <label className="block font-medium">
                                            7. Is your house:
                                        </label>
                                        <div className="flex items-center space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="houseType"
                                                    value="Detached"
                                                    checked={formData.houseType === 'Detached'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                /> Detached
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="houseType"
                                                    value="Semi-Detached"
                                                    checked={formData.houseType === 'Semi-Detached'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                /> Semi-Detached
                                            </label>
                                        </div>
                                    </div>
                                )}
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        8. Details of Construction
                                    </label>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="block">a. Building(s): Walls</label>
                                            <input
                                                type="text"
                                                name="buildingWalls"
                                                value={formData.buildingWalls}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                                placeholder="e.g., brick, concrete, etc."
                                            />
                                        </div>
                                        <div>
                                            <label className="block">a. Building(s): Roof</label>
                                            <input
                                                type="text"
                                                name="buildingRoof"
                                                value={formData.buildingRoof}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                                placeholder="e.g., tiles, metal, etc."
                                            />
                                        </div>
                                        <div>
                                            <label className="block">b. Fence details</label>
                                            <input
                                                type="text"
                                                name="fenceDetails"
                                                value={formData.fenceDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                                placeholder="Describe your fence"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        9. Have you or any member of your household ever been refused insurance or had special conditions imposed?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="refusedInsurance"
                                                value="Yes"
                                                checked={formData.refusedInsurance === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="refusedInsurance"
                                                value="No"
                                                checked={formData.refusedInsurance === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        10. Have any property or possessions been stolen, lost, or damaged in the last three years?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="propertyLoss"
                                                value="Yes"
                                                checked={formData.propertyLoss === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="propertyLoss"
                                                value="No"
                                                checked={formData.propertyLoss === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Coverage Options Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Coverage Options</h2>
                            <div className="space-y-6">
                                {/* Fence Cover */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverFence"
                                                value="Yes"
                                                checked={formData.coverFence === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverFence"
                                                value="No"
                                                checked={formData.coverFence === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                {/* Building Cover */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure your Building?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverBuilding"
                                                value="Yes"
                                                checked={formData.coverBuilding === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverBuilding"
                                                value="No"
                                                checked={formData.coverBuilding === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverBuilding === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Enter Sum Insured for Building (GH¢):
                                            </label>
                                            <input
                                                type="number"
                                                name="buildingSumInsured"
                                                value={formData.buildingSumInsured}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                                {/* Content Cover */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure your Contents?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverContent"
                                                value="Yes"
                                                checked={formData.coverContent === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverContent"
                                                value="No"
                                                checked={formData.coverContent === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverContent === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Enter Sum Insured for Contents (GH¢):
                                            </label>
                                            <input
                                                type="number"
                                                name="contentSumInsured"
                                                value={formData.contentSumInsured}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                                {/* Employer’s Liability */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure Employer’s Liability?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverEmployerLiability"
                                                value="Yes"
                                                checked={formData.coverEmployerLiability === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverEmployerLiability"
                                                value="No"
                                                checked={formData.coverEmployerLiability === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverEmployerLiability === 'Yes' && (
                                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block font-medium">
                                                    Number of indoor servants:
                                                </label>
                                                <input
                                                    type="number"
                                                    name="numIndoorServants"
                                                    value={formData.numIndoorServants}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    Number of outdoor servants:
                                                </label>
                                                <input
                                                    type="number"
                                                    name="numOutdoorServants"
                                                    value={formData.numOutdoorServants}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    Number of drivers:
                                                </label>
                                                <input
                                                    type="number"
                                                    name="numDrivers"
                                                    value={formData.numDrivers}
                                                    onChange={handleChange}
                                                    className="w-full border rounded p-2"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Personal Accident */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure against Personal Accident?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverPersonalAccident"
                                                value="Yes"
                                                checked={formData.coverPersonalAccident === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverPersonalAccident"
                                                value="No"
                                                checked={formData.coverPersonalAccident === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverPersonalAccident === 'Yes' && (
                                        <div className="mt-2 space-y-2">
                                            <label className="block font-medium">
                                                Select cover options:
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="personalAccidentDeath"
                                                        value="Yes"
                                                        checked={formData.personalAccidentDeath === 'Yes'}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, personalAccidentDeath: e.target.checked ? 'Yes' : '' })
                                                        }
                                                        className="mr-1"
                                                    /> Death
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="personalAccidentDisability"
                                                        value="Yes"
                                                        checked={formData.personalAccidentDisability === 'Yes'}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, personalAccidentDisability: e.target.checked ? 'Yes' : '' })
                                                        }
                                                        className="mr-1"
                                                    /> Permanent Disability
                                                </label>
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="personalAccidentMedical"
                                                        value="Yes"
                                                        checked={formData.personalAccidentMedical === 'Yes'}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, personalAccidentMedical: e.target.checked ? 'Yes' : '' })
                                                        }
                                                        className="mr-1"
                                                    /> Medical Expenses
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Alternative Accommodation */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure Alternative Accommodation &amp; Rent?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverAlternativeAccommodation"
                                                value="Yes"
                                                checked={formData.coverAlternativeAccommodation === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverAlternativeAccommodation"
                                                value="No"
                                                checked={formData.coverAlternativeAccommodation === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverAlternativeAccommodation === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Enter Sum Insured for Alternative Accommodation (GH¢):
                                            </label>
                                            <input
                                                type="number"
                                                name="alternativeAccommodationSumInsured"
                                                value={formData.alternativeAccommodationSumInsured}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                                {/* Legal & Personal Liability */}
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure your Legal Liability as Proprietary Owner?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverLegalLiability"
                                                value="Yes"
                                                checked={formData.coverLegalLiability === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverLegalLiability"
                                                value="No"
                                                checked={formData.coverLegalLiability === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverLegalLiability === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Enter Sum Insured for Legal Liability (GH¢):
                                            </label>
                                            <input
                                                type="number"
                                                name="legalLiabilitySumInsured"
                                                value={formData.legalLiabilitySumInsured}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        Do you wish to insure your Personal Liability?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverPersonalLiability"
                                                value="Yes"
                                                checked={formData.coverPersonalLiability === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverPersonalLiability"
                                                value="No"
                                                checked={formData.coverPersonalLiability === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.coverPersonalLiability === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Enter Sum Insured for Personal Liability (GH¢):
                                            </label>
                                            <input
                                                type="number"
                                                name="personalLiabilitySumInsured"
                                                value={formData.personalLiabilitySumInsured}
                                                onChange={handleChange}
                                                className="w-full border rounded p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        <section>
                            <HomeProtectionTable tableData={tableData} setTableData={setTableData} />
                        </section>

                        {/* Declaration Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Declaration</h2>
                            <p className="mb-4">
                                I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory and of continuing effect and shall form the basis of, and be deemed to be incorporated in, the Contract between me and DOSH Risk. I am willing to accept a policy subject to the Terms prescribed by the Company herein and to pay the Premium thereon.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block font-medium">Date</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        Signature
                                    </label>
                                    <input
                                        type="file"
                                        name="declarationSignature"
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="Enter your signature"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        Agency
                                    </label>
                                    <input
                                        type="text"
                                        name="declarationAgency"
                                        value={formData.declarationAgency}
                                        onChange={handleChange}
                                        className="w-full border rounded p-2"
                                        placeholder="Agency name"
                                    />
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="bg-[#b5996e] text-white px-6 py-3 rounded">
                            Submit Proposal
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeProtection;
