import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import image from "../../images/workmen.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';

const WorkMen = ({ onClose, userData }) => {
    const [formData, setFormData] = useState({
        proposerName: '',
        businessAddress: '',
        firmEstablished: '',
        tradeOccupation: '',
        telephone: '',
        particularsOfWork: '',
        statutoryLaws: '',
        // Employee details (nested objects)
        clericalEmployees: { number: '', wages: '' },
        commercialTravellers: { number: '', wages: '' },
        woodWorkingEmployees: { number: '', wages: '' },
        otherEmployees: { description: '', number: '', wages: '' },
        // Contractor details
        contractorName: '',
        contractorNature: '',
        contractorLabourAndMaterials: '',
        contractorLabourOnly: '',
        // Total wages paid in last 12 months
        totalWagesPaid: '',
        // Subcontractor insurance option
        subcontractorInsurance: '',
        // Additional questions
        includeAllPersons: '',
        includeSubContractors: '',
        premisesRegulation: '',
        premisesCompliance: '',
        machineryDetails: '',
        machinerySafety: '',
        boilers: '',
        chemicalsUsed: '',
        chemicalsDetails: '',
        requireMedicalCover: 'No',
        totalPremium: '',
        // Accident and insurance history
        currentInsurer: '',
        insuranceDeclined: '',
        wagesAndAccidents: '',
        // Declaration
        declarationDate: '',
        message: "",
        agency: '',
    });

    // Pre-populate key fields from the parent's userData when available.
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                proposerName: `${userData.fullname || ""}`.trim(),
                telephone: userData.phone || "",
            }));
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleNestedChange = (e, section) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [name]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare template parameters for EmailJS.
        // Flatten nested objects so that they match the placeholders in your email template.
        const templateParams = {
            ...formData,
            clericalNumber: formData.clericalEmployees.number,
            clericalWages: formData.clericalEmployees.wages,
            commercialNumber: formData.commercialTravellers.number,
            commercialWages: formData.commercialTravellers.wages,
            woodNumber: formData.woodWorkingEmployees.number,
            woodWages: formData.woodWorkingEmployees.wages,
            otherDescription: formData.otherEmployees.description,
            otherNumber: formData.otherEmployees.number,
            otherWages: formData.otherEmployees.wages,
        };

        // Send email using EmailJS.
        emailjs
            .send(
                'service_e0q53fo',    // Replace with your EmailJS service ID
                'template_28274e7',   // Replace with your EmailJS template ID (e.g., "WorkmenProposal")
                templateParams,
                'aV-FvEfOZg7fbxTN2'     // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    toast.success('Proposal submitted successfully!');
                    // Optionally reset the form.
                    setFormData({
                        proposerName: '',
                        businessAddress: '',
                        firmEstablished: '',
                        tradeOccupation: '',
                        telephone: '',
                        particularsOfWork: '',
                        statutoryLaws: '',
                        clericalEmployees: { number: '', wages: '' },
                        commercialTravellers: { number: '', wages: '' },
                        woodWorkingEmployees: { number: '', wages: '' },
                        otherEmployees: { description: '', number: '', wages: '' },
                        contractorName: '',
                        contractorNature: '',
                        contractorLabourAndMaterials: '',
                        contractorLabourOnly: '',
                        totalWagesPaid: '',
                        subcontractorInsurance: '',
                        includeAllPersons: '',
                        includeSubContractors: '',
                        premisesRegulation: '',
                        premisesCompliance: '',
                        machineryDetails: '',
                        machinerySafety: '',
                        boilers: '',
                        chemicalsUsed: '',
                        chemicalsDetails: '',
                        requireMedicalCover: '',
                        totalPremium: '',
                        currentInsurer: '',
                        insuranceDeclined: '',
                        wagesAndAccidents: '',
                        declarationDate: '',
                        message: "",
                        agency: '',
                    });
                    // Delay unmounting the component to give time for the toast to display
                    setTimeout(() => {
                        if (onClose) onClose();
                    }, 6000);

                },
                (error) => {
                    console.error('Failed to send email. Error:', error.text);
                    toast.error('Failed to submit proposal. Please try again later.');
                }
            );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px] shadow-lg flex overflow-hidden">

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
                        className="absolute lg:top-4 top-6 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h1 className="text-2xl font-bold mb-4 text-gray-800">
                        Workmen’s Compensation and Employers’ Liability Insurance
                    </h1>
                    <p>Please kindly fill out the form fields below.</p>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Section 1: Proposer Details */}
                        <section className="border p-4 rounded-[20px] shadow">
                            <h2 className="text-[14px] font-semibold mb-4">Proposer Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium" htmlFor="proposerName">
                                        1. Proposer’s Name in Full
                                    </label>
                                    <input
                                        type="text"
                                        id="proposerName"
                                        name="proposerName"
                                        value={formData.proposerName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="businessAddress">
                                        Business Address
                                    </label>
                                    <input
                                        type="text"
                                        id="businessAddress"
                                        name="businessAddress"
                                        value={formData.businessAddress}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="firmEstablished">
                                        When was the Firm Established?
                                    </label>
                                    <input
                                        type="date"
                                        id="firmEstablished"
                                        name="firmEstablished"
                                        value={formData.firmEstablished}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        placeholder="YYYY or date"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="tradeOccupation">
                                        Trade or Occupation
                                    </label>
                                    <input
                                        type="text"
                                        id="tradeOccupation"
                                        name="tradeOccupation"
                                        value={formData.tradeOccupation}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="telephone">
                                        Telephone
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium" htmlFor="particularsOfWork">
                                        Particulars of Work
                                    </label>
                                    <textarea
                                        id="particularsOfWork"
                                        name="particularsOfWork"
                                        value={formData.particularsOfWork}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium" htmlFor="statutoryLaws">
                                        Please name the statutory law(s) under which indemnity is required
                                    </label>
                                    <textarea
                                        id="statutoryLaws"
                                        name="statutoryLaws"
                                        value={formData.statutoryLaws}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        rows="2"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Employee Details */}
                        <section className="border p-4 rounded-[5px] shadow">
                            <h2 className="text-[14px] font-semibold mb-4">Employee Details</h2>
                            <p className="mb-2">For each category, please provide the estimated number of employees and annual wages.</p>
                            <div className="space-y-4">
                                {/* Clerical Staff */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="clericalNumber">
                                            Clerical Staff - Estimated Number
                                        </label>
                                        <input
                                            type="number"
                                            id="clericalNumber"
                                            name="number"
                                            value={formData.clericalEmployees.number}
                                            onChange={(e) => handleNestedChange(e, 'clericalEmployees')}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="clericalWages">
                                            Clerical Staff - Estimated Annual Wages
                                        </label>
                                        <input
                                            type="number"
                                            id="clericalWages"
                                            name="wages"
                                            value={formData.clericalEmployees.wages}
                                            onChange={(e) => handleNestedChange(e, 'clericalEmployees')}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                </div>
                                {/* Commercial Travellers */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="commercialNumber">
                                            Commercial Travellers - Estimated Number
                                        </label>
                                        <input
                                            type="number"
                                            id="commercialNumber"
                                            name="number"
                                            value={formData.commercialTravellers.number}
                                            onChange={(e) => handleNestedChange(e, 'commercialTravellers')}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="commercialWages">
                                            Commercial Travellers - Estimated Annual Wages
                                        </label>
                                        <input
                                            type="number"
                                            id="commercialWages"
                                            name="wages"
                                            value={formData.commercialTravellers.wages}
                                            onChange={(e) => handleNestedChange(e, 'commercialTravellers')}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                </div>
                                {/* Employees engaged with wood-working machinery */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="woodNumber">
                                            Wood-working Employees - Estimated Number
                                        </label>
                                        <input
                                            type="number"
                                            id="woodNumber"
                                            name="number"
                                            value={formData.woodWorkingEmployees.number}
                                            onChange={(e) => handleNestedChange(e, 'woodWorkingEmployees')}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="woodWages">
                                            Wood-working Employees - Estimated Annual Wages
                                        </label>
                                        <input
                                            type="number"
                                            id="woodWages"
                                            name="wages"
                                            value={formData.woodWorkingEmployees.wages}
                                            onChange={(e) => handleNestedChange(e, 'woodWorkingEmployees')}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                </div>
                                {/* Other Employees */}
                                <div>
                                    <label className="block font-medium" htmlFor="otherEmployeesDesc">
                                        Other Employees (describe)
                                    </label>
                                    <input
                                        type="text"
                                        id="otherEmployeesDesc"
                                        name="description"
                                        value={formData.otherEmployees.description}
                                        onChange={(e) => handleNestedChange(e, 'otherEmployees')}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <div>
                                            <label className="block font-medium" htmlFor="otherEmployeesNumber">
                                                Estimated Number
                                            </label>
                                            <input
                                                type="number"
                                                id="otherEmployeesNumber"
                                                name="number"
                                                value={formData.otherEmployees.number}
                                                onChange={(e) => handleNestedChange(e, 'otherEmployees')}
                                                className="mt-1 p-2 border rounded-[5px] w-full"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium" htmlFor="otherEmployeesWages">
                                                Estimated Annual Wages
                                            </label>
                                            <input
                                                type="number"
                                                id="otherEmployeesWages"
                                                name="wages"
                                                value={formData.otherEmployees.wages}
                                                onChange={(e) => handleNestedChange(e, 'otherEmployees')}
                                                className="mt-1 p-2 border rounded-[5px] w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Contractor Details */}
                        <section className="border p-4 rounded-[5px] shadow">
                            <h2 className="text-[14px] font-semibold mb-4">Contractor Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium" htmlFor="contractorName">
                                        Name of Contractor
                                    </label>
                                    <input
                                        type="text"
                                        id="contractorName"
                                        name="contractorName"
                                        value={formData.contractorName}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="contractorNature">
                                        Nature of Work Sublet
                                    </label>
                                    <input
                                        type="text"
                                        id="contractorNature"
                                        name="contractorNature"
                                        value={formData.contractorNature}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="contractorLabourAndMaterials">
                                            Contract (Labour &amp; Materials) – Estimated Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="contractorLabourAndMaterials"
                                            name="contractorLabourAndMaterials"
                                            value={formData.contractorLabourAndMaterials}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="contractorLabourOnly">
                                            Contract (Labour Only) – Estimated Amount
                                        </label>
                                        <input
                                            type="number"
                                            id="contractorLabourOnly"
                                            name="contractorLabourOnly"
                                            value={formData.contractorLabourOnly}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Additional Information */}
                        <section className="border p-4 rounded-[5px] shadow">
                            <h2 className="text-[14px] font-semibold mb-4">Additional Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium" htmlFor="totalWagesPaid">
                                        Total wages, salaries, and other earnings paid in the past 12 months
                                    </label>
                                    <input
                                        type="number"
                                        id="totalWagesPaid"
                                        name="totalWagesPaid"
                                        value={formData.totalWagesPaid}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="subcontractorInsurance">
                                        Do you wish to insure your liability under the statutory law(s) to the workmen of subcontractors? If so, please state
                                    </label>
                                    <input
                                        type="text"
                                        id="subcontractorInsurance"
                                        name="subcontractorInsurance"
                                        value={formData.subcontractorInsurance}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                {/* Additional Yes/No and text fields for further questions */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="includeAllPersons">
                                            1(a). Does the schedule include all persons under the Law(s) named?
                                        </label>
                                        <input
                                            type="text"
                                            id="includeAllPersons"
                                            name="includeAllPersons"
                                            value={formData.includeAllPersons}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                            placeholder="Yes/No"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="includeSubContractors">
                                            1(b). Does it include all your sub-contractors?
                                        </label>
                                        <input
                                            type="text"
                                            id="includeSubContractors"
                                            name="includeSubContractors"
                                            value={formData.includeSubContractors}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                            placeholder="Yes/No"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="premisesRegulation">
                                            2(a). Do your premises come within the scope of the relevant law/regulation? (If yes, name them)
                                        </label>
                                        <input
                                            type="text"
                                            id="premisesRegulation"
                                            name="premisesRegulation"
                                            value={formData.premisesRegulation}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="premisesCompliance">
                                            2(b). Have you carried out all obligations imposed by these laws/regulations?
                                        </label>
                                        <input
                                            type="text"
                                            id="premisesCompliance"
                                            name="premisesCompliance"
                                            value={formData.premisesCompliance}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                            placeholder="Yes/No or Details"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="machineryDetails">
                                        3(a). Details of any circular saws or other machinery
                                    </label>
                                    <textarea
                                        id="machineryDetails"
                                        name="machineryDetails"
                                        value={formData.machineryDetails}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="machinerySafety">
                                        3(b). Are your machinery, plant, and ways properly fenced and guarded?
                                    </label>
                                    <input
                                        type="text"
                                        id="machinerySafety"
                                        name="machinerySafety"
                                        value={formData.machinerySafety}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        placeholder="Yes/No or Details"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="boilers">
                                        4. What boilers have you?
                                    </label>
                                    <input
                                        type="text"
                                        id="boilers"
                                        name="boilers"
                                        value={formData.boilers}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="chemicalsUsed">
                                        5. What acids, gases, chemicals, or explosives will be used?
                                    </label>
                                    <textarea
                                        id="chemicalsUsed"
                                        name="chemicalsUsed"
                                        value={formData.chemicalsUsed}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        rows="2"
                                    ></textarea>
                                    <label className="block font-medium mt-2" htmlFor="chemicalsDetails">
                                        Details/Extent
                                    </label>
                                    <textarea
                                        id="chemicalsDetails"
                                        name="chemicalsDetails"
                                        value={formData.chemicalsDetails}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium" htmlFor="requireMedicalCover">
                                            Do you require Medical Expenses Cover?
                                        </label>
                                        <select
                                            id="requireMedicalCover"
                                            name="requireMedicalCover"
                                            value={formData.requireMedicalCover}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        >
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block font-medium" htmlFor="totalPremium">
                                            Total Premium
                                        </label>
                                        <input
                                            type="number"
                                            id="totalPremium"
                                            name="totalPremium"
                                            value={formData.totalPremium}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border rounded-[5px] w-full"
                                        />
                                    </div>
                                </div>
                                {/* Additional questions 6-8 */}
                                <div>
                                    <label className="block font-medium" htmlFor="currentInsurer">
                                        6. Are you currently insured or have you previously proposed for insurance? (Name the company/companies)
                                    </label>
                                    <input
                                        type="text"
                                        id="currentInsurer"
                                        name="currentInsurer"
                                        value={formData.currentInsurer}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="insuranceDeclined">
                                        7. Has any proposal for such insurance ever been declined or withdrawn?
                                    </label>
                                    <input
                                        type="text"
                                        id="insuranceDeclined"
                                        name="insuranceDeclined"
                                        value={formData.insuranceDeclined}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        placeholder="Yes/No with details"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium" htmlFor="wagesAndAccidents">
                                        8. State the total wages paid and give particulars of accidents to employees over the last 3 years.
                                    </label>
                                    <textarea
                                        id="wagesAndAccidents"
                                        name="wagesAndAccidents"
                                        value={formData.wagesAndAccidents}
                                        onChange={handleChange}
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Declaration */}
                        <section className="border p-4 rounded-[5px] shadow">
                            <h2 className="text-[14px] font-semibold mb-4">Declaration</h2>
                            <p className="mb-4">
                                I warrant that the above statements and particulars are true and agree that this declaration shall be held to be promissory and form the basis of the contract.
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
                                        className="mt-1 p-2 border rounded-[5px] w-full"
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
                                        className="mt-1 p-2 border rounded-[5px] w-full"
                                    />
                                </div>
                            </div>
                        </section>

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

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-[#b5996e] text-white font-semibold rounded-[5px] hover:bg-[#886f49]"
                            >
                                Submit Proposal
                            </button>
                        </div>
                    </form>
                </div>
            </div></div>
    );
};

export default WorkMen;
