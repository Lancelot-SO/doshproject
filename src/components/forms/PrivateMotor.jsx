import React, { useEffect, useRef, useState } from 'react';
import image from "../../images/privatemotor.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateMotor = ({ onClose, userData }) => {
    const form = useRef();

    const [formData, setFormData] = useState({
        // Insured’s Details
        proposerTitle: '',
        surname: '',
        otherNames: '',
        dob: '',
        sex: '',
        businessOccupation: '',
        homeAddress: '',
        businessAddress: '',
        email: '',
        personalMobile: '',
        businessMobile: '',
        otherPolicies: '',
        numberOfDependants: '',
        maritalStatus: '',
        // Vehicle Details
        vehicleInRepair: '',
        vehicleAltered: '',
        vehicleUse: '',
        carriageOfGoods: '',
        carriageOfPassengers: '',
        useInMotorTrade: '',
        useByOwnBusiness: '',
        ownerOfVehicle: '',
        ownerDetails: '',
        obtainedLoan: '',
        loanDetails: '',
        // Single vehicle details (for demonstration)
        vehicleMakeModel: '',
        vehicleBodyType: '',
        cubicCapacity: '',
        yearOfManufacture: '',
        seatingCapacity: '',
        registrationNumber: '',
        engineChassisNumber: '',
        purchaseDate: '',
        purchasePrice: '',
        estimatedValue: '',
        // Driver and Accident History
        allowOtherDrivers: '',
        drivingExperience: '',
        accidentHistory: '',
        accidentDetails: '',
        physicalDefects: '',
        defectDetails: '',
        // Previous Policies & Refusals
        previousPolicies: '',
        previousPolicyDetails: '',
        declinedProposal: '',
        firstLoss: '',
        increasedPremium: '',
        refusedRenewal: '',
        // Insurance Options
        insureComprehensive: '',
        insureThirdParty: '',
        insureMotorAct: '',
        legalLiabilityPassengers: '',
        coverEmployedDriver: '',
        // Employed driver details (if applicable)
        employedDriverName: '',
        employedDriverAge: '',
        employedDriverOccupation: '',
        employedDriverYears: '',
        employedDriverConvictions: '',
        // Third Party Limit Revision
        revisedThirdPartyLimit: '',
        // Declaration
        declarationDate: '',
        declarationSignature: '',
        declarationAgency: '',
        drivingLicense: '',
        motoring: "",
        age: "",
        drivingName: "",
        occupation: ""
    });

    // Update fields from parent's userData when it changes
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                // Here, we assume the parent's keys are: firstname, surname, othernames, email, phone
                proposerTitle: userData.fullname || "",
                // surname: userData.surname || "",
                // otherNames: userData.othernames || "",
                email: userData.email || "",
                personalMobile: userData.phone || "",
            }));
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        // e.target.files is a FileList object
        const file = e.target.files[0];
        if (file) {
            // You could store the file or its name if needed
            setFormData((prev) => ({
                ...prev,
                declarationSignature: file, // or file.name if you only need the filename
            }));
        }
    };


    // The form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace with your actual EmailJS keys:
        const serviceId = 'service_y1w3b4o';
        const templateId = 'template_9c49bzq';
        const publicKey = 'aV-FvEfOZg7fbxTN2';

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log('SUCCESS!', result.text);
                toast.success('Marine Open Cover form submitted successfully!');

                // Reset local form state
                setFormData({
                    // Insured’s Details
                    proposerTitle: '',
                    surname: '',
                    otherNames: '',
                    dob: '',
                    sex: '',
                    businessOccupation: '',
                    homeAddress: '',
                    businessAddress: '',
                    email: '',
                    personalMobile: '',
                    businessMobile: '',
                    otherPolicies: '',
                    numberOfDependants: '',
                    maritalStatus: '',
                    // Vehicle Details
                    vehicleInRepair: '',
                    vehicleAltered: '',
                    vehicleUse: '',
                    carriageOfGoods: '',
                    carriageOfPassengers: '',
                    useInMotorTrade: '',
                    useByOwnBusiness: '',
                    ownerOfVehicle: '',
                    ownerDetails: '',
                    obtainedLoan: '',
                    loanDetails: '',
                    // Single vehicle details (for demonstration)
                    vehicleMakeModel: '',
                    vehicleBodyType: '',
                    cubicCapacity: '',
                    yearOfManufacture: '',
                    seatingCapacity: '',
                    registrationNumber: '',
                    engineChassisNumber: '',
                    purchaseDate: '',
                    purchasePrice: '',
                    estimatedValue: '',
                    // Driver and Accident History
                    allowOtherDrivers: '',
                    drivingExperience: '',
                    accidentHistory: '',
                    accidentDetails: '',
                    physicalDefects: '',
                    defectDetails: '',
                    // Previous Policies & Refusals
                    previousPolicies: '',
                    previousPolicyDetails: '',
                    declinedProposal: '',
                    firstLoss: '',
                    increasedPremium: '',
                    refusedRenewal: '',
                    // Insurance Options
                    insureComprehensive: '',
                    insureThirdParty: '',
                    insureMotorAct: '',
                    legalLiabilityPassengers: '',
                    coverEmployedDriver: '',
                    // Employed driver details (if applicable)
                    employedDriverName: '',
                    employedDriverAge: '',
                    employedDriverOccupation: '',
                    employedDriverYears: '',
                    employedDriverConvictions: '',
                    // Third Party Limit Revision
                    revisedThirdPartyLimit: '',
                    // Declaration
                    declarationDate: '',
                    declarationSignature: '',
                    declarationAgency: '',
                    drivingLicense: '',
                    motoring: "",
                    age: "",
                    drivingName: "",
                    occupation: ""
                });

                // Reset the actual form fields
                e.target.reset();
                setTimeout(() => onClose(), 5000);

            })
            .catch((error) => {
                console.error('FAILED...', error);
                toast.error('Failed to send form data. Please try again.');
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[5px]-[20px]-lg shadow-lg flex overflow-hidden">


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
                        className="absolute top-4 right-2 text-[#687588] font-bold rounded-[5px]-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <h1 className="text-2xl font-bold mb-4">
                        Private Motor Insurance Proposal Form
                    </h1>
                    <p>Please kindly fill out the form fields below.</p>

                    <form ref={form} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
                        {/* Insured’s Details */}
                        <section>
                            <h2 className="text-[14px] font-semibold mb-4">Insured’s Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Proposer Name */}
                                <div>
                                    <label className="block font-medium">
                                        1. Name of Proposer
                                    </label>
                                    <input
                                        type="text"
                                        name="proposerTitle"
                                        value={formData.proposerTitle}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="Mr/Ms/Mrs/Dr/Prof"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Surname</label>
                                    <input
                                        type="text"
                                        name="surname"
                                        value={formData.surname}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">Other Names</label>
                                    <input
                                        type="text"
                                        name="otherNames"
                                        value={formData.otherNames}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                {/* Date of Birth & Sex */}
                                <div>
                                    <label className="block font-medium">2. Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">3. Sex</label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="Male"
                                                checked={formData.sex === 'Male'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="sex"
                                                value="Female"
                                                checked={formData.sex === 'Female'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Female
                                        </label>
                                    </div>
                                </div>
                                {/* Occupation and Addresses */}
                                <div>
                                    <label className="block font-medium">
                                        4. Business/Occupation
                                    </label>
                                    <input
                                        type="text"
                                        name="businessOccupation"
                                        value={formData.businessOccupation}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">5. Home Address</label>
                                    <textarea
                                        name="homeAddress"
                                        value={formData.homeAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        rows="2"
                                        required
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">6. Business Address</label>
                                    <textarea
                                        name="businessAddress"
                                        value={formData.businessAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        rows="2"
                                        required
                                    ></textarea>
                                </div>
                                {/* Contact Information */}
                                <div>
                                    <label className="block font-medium">
                                        7. E-mail Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        8. Personal Mobile No.
                                    </label>
                                    <input
                                        type="text"
                                        name="personalMobile"
                                        value={formData.personalMobile}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        Business Mobile No.
                                    </label>
                                    <input
                                        type="text"
                                        name="businessMobile"
                                        value={formData.businessMobile}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                {/* Policies, Dependants, and Marital Status */}
                                <div>
                                    <label className="block font-medium">
                                        9. Do you have other policies with any insurance company?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="otherPolicies"
                                                value="Yes"
                                                checked={formData.otherPolicies === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="otherPolicies"
                                                value="No"
                                                checked={formData.otherPolicies === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        10. Number of Dependants
                                    </label>
                                    <input
                                        type="number"
                                        name="numberOfDependants"
                                        value={formData.numberOfDependants}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        11. Marital Status
                                    </label>
                                    <input
                                        type="text"
                                        name="maritalStatus"
                                        value={formData.maritalStatus}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        required
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Vehicle Details */}
                        <section>
                            <h2 className="text-[14px] font-semibold mb-4">
                                Details of Vehicle(s) to be Insured
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        11. Is the Vehicle(s) at present in a thorough state of repair?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="vehicleInRepair"
                                                value="Yes"
                                                checked={formData.vehicleInRepair === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="vehicleInRepair"
                                                value="No"
                                                checked={formData.vehicleInRepair === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        12. Has the Vehicle(s) been altered or adapted from the original manufacturer’s design?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="vehicleAltered"
                                                value="Yes"
                                                checked={formData.vehicleAltered === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="vehicleAltered"
                                                value="No"
                                                checked={formData.vehicleAltered === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        13. Will the Vehicle(s) be used otherwise than for social, domestic or pleasure purposes?
                                    </label>
                                    <textarea
                                        name="vehicleUse"
                                        value={formData.vehicleUse}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        rows="2"
                                        placeholder="If applicable, specify usage details"
                                        required
                                    ></textarea>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-medium">
                                            a. The carriage of goods or samples?
                                        </label>
                                        <div className="flex items-center space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="carriageOfGoods"
                                                    value="Yes"
                                                    checked={formData.carriageOfGoods === 'Yes'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="carriageOfGoods"
                                                    value="No"
                                                    checked={formData.carriageOfGoods === 'No'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-medium">
                                            b. The carriage of passengers for hire or reward?
                                        </label>
                                        <div className="flex items-center space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="carriageOfPassengers"
                                                    value="Yes"
                                                    checked={formData.carriageOfPassengers === 'Yes'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="carriageOfPassengers"
                                                    value="No"
                                                    checked={formData.carriageOfPassengers === 'No'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-medium">
                                            c. Use in connection with the motor trade?
                                        </label>
                                        <div className="flex items-center space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="useInMotorTrade"
                                                    value="Yes"
                                                    checked={formData.useInMotorTrade === 'Yes'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="useInMotorTrade"
                                                    value="No"
                                                    checked={formData.useInMotorTrade === 'No'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                No
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block font-medium">
                                            d. Use by yourself only on your own business?
                                        </label>
                                        <div className="flex items-center space-x-4">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="useByOwnBusiness"
                                                    value="Yes"
                                                    checked={formData.useByOwnBusiness === 'Yes'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="useByOwnBusiness"
                                                    value="No"
                                                    checked={formData.useByOwnBusiness === 'No'}
                                                    onChange={handleChange}
                                                    className="mr-1"
                                                />{' '}
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        14. (a) Are you the owner of the Vehicle and is it registered in your name?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="ownerOfVehicle"
                                                value="Yes"
                                                checked={formData.ownerOfVehicle === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="ownerOfVehicle"
                                                value="No"
                                                checked={formData.ownerOfVehicle === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                    {formData.ownerOfVehicle === 'No' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                (b) If not, state name and address of owner
                                            </label>
                                            <textarea
                                                name="ownerDetails"
                                                value={formData.ownerDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="2"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        (c) Did you obtain a loan to purchase the Vehicle(s)?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="obtainedLoan"
                                                value="Yes"
                                                checked={formData.obtainedLoan === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="obtainedLoan"
                                                value="No"
                                                checked={formData.obtainedLoan === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                    {formData.obtainedLoan === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                (d) If so, state name and address of person/hire company from whom the loan was obtained
                                            </label>
                                            <textarea
                                                name="loanDetails"
                                                value={formData.loanDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="2"

                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                                {/* Vehicle Basic Details */}
                                <div className="mt-4">
                                    <h3 className="text-[14px] font-semibold mb-2">Vehicle Details</h3>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div>
                                            <label className="block font-medium">
                                                Make/Model of Motor Vehicle
                                            </label>
                                            <input
                                                type="text"
                                                name="vehicleMakeModel"
                                                value={formData.vehicleMakeModel}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">Type of Body</label>
                                            <input
                                                type="text"
                                                name="vehicleBodyType"
                                                value={formData.vehicleBodyType}
                                                onChange={handleChange}
                                                required
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                Cubic Capacity of Engine
                                            </label>
                                            <input
                                                type="text"
                                                name="cubicCapacity"
                                                value={formData.cubicCapacity}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                Year of Manufacture
                                            </label>
                                            <input
                                                type="text"
                                                name="yearOfManufacture"
                                                value={formData.yearOfManufacture}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                Seating Capacity Including Driver
                                            </label>
                                            <input
                                                type="text"
                                                name="seatingCapacity"
                                                value={formData.seatingCapacity}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">Registration Number</label>
                                            <input
                                                type="text"
                                                name="registrationNumber"
                                                value={formData.registrationNumber}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                Engine or Chassis Number
                                            </label>
                                            <input
                                                type="text"
                                                name="engineChassisNumber"
                                                value={formData.engineChassisNumber}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                Date of Purchase and Price Paid
                                            </label>
                                            <input
                                                type="text"
                                                name="purchaseDate"
                                                value={formData.purchaseDate}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                placeholder="e.g., 2023-01-01, $20,000"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                Proposer's Estimate of Present Value Including Accessories
                                            </label>
                                            <input
                                                type="text"
                                                name="estimatedValue"
                                                value={formData.estimatedValue}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Driver Details & Accident History */}
                        <section>
                            <h2 className="text-[14px] font-semibold mb-4">
                                Driver Details &amp; Accident History
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        15. (a) Will you allow other licensed drivers to drive your car?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="allowOtherDrivers"
                                                value="Yes"
                                                checked={formData.allowOtherDrivers === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="allowOtherDrivers"
                                                value="No"
                                                checked={formData.allowOtherDrivers === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        15. (b) Proposer’s Driving Experience
                                    </label>
                                    <input
                                        type="text"
                                        name="drivingExperience"
                                        value={formData.drivingExperience}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        15. (b) Proposer’s Driving Experience
                                    </label>
                                    <input
                                        type="text"
                                        name="drivingExperience"
                                        value={formData.drivingExperience}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        15. Name
                                    </label>
                                    <input
                                        type="text"
                                        name="drivingName"
                                        value={formData.drivingName}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        15. Age
                                    </label>
                                    <input
                                        type="text"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        15. Occupation
                                    </label>
                                    <input
                                        type="text"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        15. No. of Years a Full Driving Licensed held
                                    </label>
                                    <input
                                        type="text"
                                        name="drivingLicense"
                                        value={formData.drivingLicense}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        15.  Details of any conviction of motoring offence during the past ve years
                                    </label>
                                    <input
                                        type="text"
                                        name="motoring"
                                        value={formData.motoring}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        placeholder="e.g., 10 years"
                                    />
                                </div>

                                <div>
                                    <label className="block font-medium">
                                        16. Have you been involved in an accident in the past 5 years?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="accidentHistory"
                                                value="Yes"
                                                checked={formData.accidentHistory === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="accidentHistory"
                                                value="No"
                                                checked={formData.accidentHistory === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                    {formData.accidentHistory === 'Yes' && (
                                        <textarea
                                            name="accidentDetails"
                                            value={formData.accidentDetails}
                                            onChange={handleChange}
                                            className="w-full border rounded-[5px] p-2 mt-2"
                                            rows="3"
                                            placeholder="Provide details of the accident(s)"
                                        ></textarea>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        17. Do you or any prospective driver suffer from defective vision, hearing, or any physical infirmity?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="physicalDefects"
                                                value="Yes"
                                                checked={formData.physicalDefects === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="physicalDefects"
                                                value="No"
                                                checked={formData.physicalDefects === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                    {formData.physicalDefects === 'Yes' && (
                                        <textarea
                                            name="defectDetails"
                                            value={formData.defectDetails}
                                            onChange={handleChange}
                                            className="w-full border rounded-[5px] p-2 mt-2"
                                            rows="3"
                                            placeholder="Provide details"
                                        ></textarea>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Previous Policies & Insurance Refusals */}
                        <section>
                            <h2 className="text-[14px] font-semibold mb-4">
                                Previous Policies &amp; Insurance Refusals
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        18. Have you ever held or proposed a motor insurance policy?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="previousPolicies"
                                                value="Yes"
                                                checked={formData.previousPolicies === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="previousPolicies"
                                                value="No"
                                                checked={formData.previousPolicies === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                    {formData.previousPolicies === 'Yes' && (
                                        <textarea
                                            name="previousPolicyDetails"
                                            value={formData.previousPolicyDetails}
                                            onChange={handleChange}
                                            className="w-full border rounded-[5px] p-2 mt-2"
                                            rows="3"
                                            placeholder="Provide details: name of insurance companies, policy numbers, period of cover"
                                        ></textarea>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        19. Has any insurer ever:
                                    </label>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="block font-medium">
                                                (a) Declined your proposal
                                            </label>
                                            <input
                                                type="text"
                                                name="declinedProposal"
                                                value={formData.declinedProposal || ''}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                placeholder="Provide details if any"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                (b) Required you to carry the first portion of any loss
                                            </label>
                                            <input
                                                type="text"
                                                name="firstLoss"
                                                value={formData.firstLoss || ''}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                placeholder="Provide details if any"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                (c) Required an increased premium or imposed special conditions
                                            </label>
                                            <input
                                                type="text"
                                                name="increasedPremium"
                                                value={formData.increasedPremium || ''}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                placeholder="Provide details if any"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                (d) Refused to renew your policy
                                            </label>
                                            <input
                                                type="text"
                                                name="refusedRenewal"
                                                value={formData.refusedRenewal || ''}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                placeholder="Provide details if any"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Insurance Options */}
                        <section>
                            <h2 className="text-[14px] font-semibold mb-4">Insurance Options</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        20. Do you wish to Insure?
                                    </label>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="block font-medium">
                                                (a) Under a Comprehensive Policy
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="insureComprehensive"
                                                        value="Yes"
                                                        checked={formData.insureComprehensive === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    />{' '}
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="insureComprehensive"
                                                        value="No"
                                                        checked={formData.insureComprehensive === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    />{' '}
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                (b) Your liability to Third Party only
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="insureThirdParty"
                                                        value="Yes"
                                                        checked={formData.insureThirdParty === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    />{' '}
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="insureThirdParty"
                                                        value="No"
                                                        checked={formData.insureThirdParty === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    />{' '}
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                (c) Your liability under the Motor Vehicle (Third Party Insurance) Act only
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="insureMotorAct"
                                                        value="Yes"
                                                        checked={formData.insureMotorAct === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    />{' '}
                                                    Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="insureMotorAct"
                                                        value="No"
                                                        checked={formData.insureMotorAct === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    />{' '}
                                                    No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        21. Do you wish to Insure your legal liability to passengers in the vehicle(s) proposed for insurance?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="legalLiabilityPassengers"
                                                value="Yes"
                                                checked={formData.legalLiabilityPassengers === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="legalLiabilityPassengers"
                                                value="No"
                                                checked={formData.legalLiabilityPassengers === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        22. Do you wish to provide insurance Cover to your employed driver?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverEmployedDriver"
                                                value="Yes"
                                                checked={formData.coverEmployedDriver === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="coverEmployedDriver"
                                                value="No"
                                                checked={formData.coverEmployedDriver === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            />{' '}
                                            No
                                        </label>
                                    </div>
                                    {formData.coverEmployedDriver === 'Yes' && (
                                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block font-medium">Name</label>
                                                <input
                                                    type="text"
                                                    name="employedDriverName"
                                                    value={formData.employedDriverName}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">Age</label>
                                                <input
                                                    type="number"
                                                    name="employedDriverAge"
                                                    value={formData.employedDriverAge}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">Occupation</label>
                                                <input
                                                    type="text"
                                                    name="employedDriverOccupation"
                                                    value={formData.employedDriverOccupation}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    Years of Licensed Driving Held
                                                </label>
                                                <input
                                                    type="text"
                                                    name="employedDriverYears"
                                                    value={formData.employedDriverYears}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div className="md:col-span-2">
                                                <label className="block font-medium">
                                                    Details of any conviction of motoring offence during the past 5 years
                                                </label>
                                                <textarea
                                                    name="employedDriverConvictions"
                                                    value={formData.employedDriverConvictions}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                    rows="3"
                                                ></textarea>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Revision of Third Party Limit */}
                        <section>
                            <h2 className="text-[14px] font-semibold mb-4">
                                Revision of Third Party Property Damage Limit
                            </h2>
                            <div>
                                <label className="block font-medium">
                                    23. The Third Party Property Damage Limit Under our Standard Policy is ¢5,000.00.
                                    Do you wish to revise this upward? If so, please state the amount of indemnity required.
                                </label>
                                <input
                                    type="text"
                                    name="revisedThirdPartyLimit"
                                    value={formData.revisedThirdPartyLimit}
                                    onChange={handleChange}
                                    className="w-full border rounded-[5px] p-2 mt-2"
                                    placeholder="Amount of indemnity required"
                                />
                            </div>
                        </section>

                        {/* Declaration */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Declaration</h2>
                            <p className="mb-4">
                                I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and DOSH Risk, and that I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the Premium thereon.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <label className="block font-medium">Date</label>
                                    <input
                                        type="date"
                                        name="declarationDate"
                                        value={formData.declarationDate}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Signature</label>
                                    <input
                                        type="file"
                                        name="declarationSignature"
                                        onChange={handleFileChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Agency</label>
                                    <input
                                        type="text"
                                        name="declarationAgency"
                                        value={formData.declarationAgency}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                            </div>
                        </section>

                        <button type="submit" className="bg-[#a58b63] text-white px-6 py-3 rounded-[5px]">
                            Submit Proposal
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PrivateMotor;
