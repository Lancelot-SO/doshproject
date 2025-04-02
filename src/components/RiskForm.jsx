import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../images/imagebg.png";
import formlogo from "../images/formlogo.png";
import AssetsAllRisk from './forms/AssetsAllRisk';
import PublicLiability from './forms/PublicLiability';
import MarineOpenCover from './forms/MarineOpenCover';
import WorkMen from './forms/WorkMen';
import TravelInsurance from './forms/TravelInsurance';
import Transit from './forms/Transit';
import ProfessionalIndemnity from './forms/ProfessionalIndemnity';
import HouseholdContent from './forms/HouseholdContent ';
import VehicleInsurance from './forms/VehicleInsurance';
import TheftInsurance from './forms/TheftInsurance';
import GuaranteeClaim from './forms/GuaranteeClaim';
import Director from './forms/Director';
import FireInsurance from './forms/FireInsurance';
import PrivateMotor from './forms/PrivateMotor';
import HotelInsurance from './forms/HotelInsurance';
import HomeProtection from './forms/HomeProtection';
import ChildLifelineForm from './forms/life/ChildLifelineForm';

const RiskForm = ({ onClose }) => {
    const form = useRef();
    const [showAssetsForm, setShowAssetsForm] = useState(false);
    const [showPublicLiabilityForm, setShowPublicLiabilityForm] = useState(false);
    const [showMarineOpenCoverForm, setShowMarineOpenCoverForm] = useState(false);
    const [showWorkMen, setShowWorkMen] = useState(false);
    const [showTravelInsurance, setShowTravelInsurance] = useState(false);
    const [showTransit, setShowTransit] = useState(false);
    const [showProfessional, setShowProfessional] = useState(false);
    const [showHouseHold, setShowHouseHold] = useState(false);
    const [showVehicle, setShowVehicle] = useState(false);
    const [showTheft, setShowTheft] = useState(false);
    const [showClaim, setShowClaim] = useState(false);
    const [showDirector, setShowDirector] = useState(false);
    const [showFire, setShowFire] = useState(false);
    const [showPrivate, setShowPrivate] = useState(false);
    const [showHotel, setShowHotel] = useState(false);
    const [showHomeProtection, setShowHomeProtection] = useState(false);

    //for the life insurance

    const [showChild, setShowChild] = useState(false);


    const [formData, setFormData] = useState({
        requestType: '',
        fullname: '',
        email: '',
        phone: '',
        brokerage: '',
        insuranceType: '',
        formType: '',
        message: ''
    });

    // Error state for email and phone validations
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    // State for pre-filling the modal or secondary form
    const [modalFormData, setModalFormData] = useState({
        fullname: "",
        email: "",
        phone: ""
    });

    const pdfOptions = [
        'Assets All Risks',
        'Private Motor',
        'Commercial Vehicle',
        'Directors and Officers Liability',
        'Guarantee Claim',
        'Fire Insurance',
        'Home Protection with Content',
        'Marine Open Cover',
        'Professional Indemnity',
        'Theft Insurance',
        'Goods in Transit',
        'Hotels and Guest Houses',
        'Household Content',
        'Public Liability',
        'Travel Insurance',
        'Workman\'s Compensation & Employers Liability'
    ];

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

    const lifeForms = [
        "Funeral Finance Plan (Whole Life Policy)",
        "StarLife Supreme Homecall Plan",
        "WealthMaster Plus Applicable Form (Investment Policy)",
        "⁠Child Lifeline Plus Application Form (EducationPolicy)",
        "⁠Enterprise Executive/Living Plus Plan (Comprehensive Individual Life Policy)",
        "⁠Enterprise Lifetime Needs (Annuity Policy/Investment Policy)"
    ];

    // Helper functions for validation
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone) => {
        // This regex accepts numbers with an optional + and length between 7 and 15 digits
        const regex = /^\+?[0-9]{7,15}$/;
        return regex.test(phone);
    };

    // Compute filtered options for Insurance Product (formType)
    const filteredPdfOptions = () => {
        if (formData.insuranceType === "General Insurance") {
            if (formData.requestType === "Existing Policy") {
                // For existing policy, show only Assets All Risks and Guarantee Claim
                return pdfOptions.filter(option =>
                    option === "Assets All Risks" || option === "Guarantee Claim"
                );
            } else if (formData.requestType === "Insurance Quote") {
                // For new quote, show all options except Assets All Risks and Guarantee Claim
                return pdfOptions.filter(option =>
                    option !== "Assets All Risks" && option !== "Guarantee Claim"
                );
            }
        }
        return pdfOptions;
    };

    const handleClose = (setter) => {
        setter(false);
        onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update form data state
        setFormData({
            ...formData,
            [name]: value
        });

        // Validate email field
        if (name === 'email') {
            if (!validateEmail(value)) {
                setEmailError("Please enter a valid email address.");
            } else {
                setEmailError("");
            }
        }

        // Validate phone field
        if (name === 'phone') {
            if (!validatePhone(value)) {
                setPhoneError("Please enter a valid phone number.");
            } else {
                setPhoneError("");
            }
        }

        // When the formType changes, update which component should be displayed,
        // but only if both email and phone validations pass.
        if (name === 'formType') {
            if (emailError && phoneError) {
                toast.error("Please fix errors in both email and phone number before selecting an insurance product.");
                return; // Do not populate the selected child form
            }
            setShowAssetsForm(value === 'Assets All Risks');
            setShowPublicLiabilityForm(value === 'Public Liability');
            setShowMarineOpenCoverForm(value === 'Marine Open Cover');
            setShowWorkMen(value === 'Workman\'s Compensation & Employers Liability');
            setShowTravelInsurance(value === 'Travel Insurance');
            setShowTransit(value === 'Goods in Transit');
            setShowProfessional(value === 'Professional Indemnity');
            setShowHouseHold(value === 'Household Content');
            setShowVehicle(value === 'Commercial Vehicle');
            setShowTheft(value === 'Theft Insurance');
            setShowClaim(value === 'Guarantee Claim');
            setShowDirector(value === 'Directors and Officers Liability');
            setShowFire(value === 'Fire Insurance');
            setShowPrivate(value === 'Private Motor');
            setShowHotel(value === 'Hotels and Guest Houses');
            setShowHomeProtection(value === 'Home Protection with Content');
            //for the life insurance
            setShowChild(value === '⁠Child Lifeline Plus Application Form (EducationPolicy)')
        }
    };

    // Pre-fill modal data when personal details change
    useEffect(() => {
        if (formData.formType) {
            setModalFormData({
                fullname: formData.fullname,
                email: formData.email,
                phone: formData.phone
            });
        }
    }, [
        formData.formType,
        formData.fullname,
        formData.email,
        formData.phone
    ]);

    const sendEmail = (e) => {
        e.preventDefault();

        // Optionally, prevent sending if errors exist
        if (emailError || phoneError) {
            toast.error("Please fix the errors in the form before submitting.");
            return;
        }

        emailjs
            .sendForm('service_w146wla', 'template_1dqgkm6', form.current, 'aV-FvEfOZg7fbxTN2')
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    setFormData({
                        requestType: '',
                        fullname: '',
                        email: '',
                        phone: '',
                        brokerage: '',
                        insuranceType: '',
                        formType: '',
                        message: ''
                    });
                    setTimeout(() => onClose(), 5000);
                },
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                    console.error('Email error:', error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[5px] shadow-lg flex overflow-hidden">
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
                    {/* Set the ToastContainer to display at the bottom */}
                    <ToastContainer position="bottom-center" />
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <div className='flex flex-col text-black'>
                        <h2 className='font-extrabold uppercase text-[20px] mb-2 mt-4'>
                            Risk Brokerage service portal
                        </h2>
                        <p className='text-[14px]'>
                            Tell us how we can help you today.
                        </p>
                    </div>

                    {/* Conditional Rendering of Form Components */}
                    {showAssetsForm ? (
                        <AssetsAllRisk onClose={() => handleClose(setShowAssetsForm)}
                            userData={modalFormData} />
                    ) : showPublicLiabilityForm ? (
                        <PublicLiability onClose={() => handleClose(setShowPublicLiabilityForm)}
                            userData={modalFormData} />
                    ) : showMarineOpenCoverForm ? (
                        <MarineOpenCover onClose={() => handleClose(setShowMarineOpenCoverForm)}
                            userData={modalFormData} />
                    ) : showWorkMen ? (
                        <WorkMen onClose={() => handleClose(setShowWorkMen)}
                            userData={modalFormData} />
                    ) : showTravelInsurance ? (
                        <TravelInsurance onClose={() => handleClose(setShowTravelInsurance)}
                            userData={modalFormData} />
                    ) : showTransit ? (
                        <Transit onClose={() => handleClose(setShowTransit)}
                            userData={modalFormData} />
                    ) : showProfessional ? (
                        <ProfessionalIndemnity onClose={() => handleClose(setShowProfessional)}
                            userData={modalFormData} />
                    ) : showHouseHold ? (
                        <HouseholdContent onClose={() => handleClose(setShowHouseHold)}
                            userData={modalFormData} />
                    ) : showVehicle ? (
                        <VehicleInsurance onClose={() => handleClose(setShowVehicle)}
                            userData={modalFormData} />
                    ) : showTheft ? (
                        <TheftInsurance onClose={() => handleClose(setShowTheft)}
                            userData={modalFormData} />
                    ) : showClaim ? (
                        <GuaranteeClaim onClose={() => handleClose(setShowClaim)}
                            userData={modalFormData} />
                    ) : showDirector ? (
                        <Director onClose={() => handleClose(setShowDirector)}
                            userData={modalFormData} />
                    ) : showFire ? (
                        <FireInsurance onClose={() => handleClose(setShowFire)}
                            userData={modalFormData} />
                    ) : showPrivate ? (
                        <PrivateMotor onClose={() => handleClose(setShowPrivate)}
                            userData={modalFormData} />
                    ) : showHotel ? (
                        <HotelInsurance onClose={() => handleClose(setShowHotel)}
                            userData={modalFormData} />
                    ) : showHomeProtection ? (
                        <HomeProtection onClose={() => handleClose(setShowHomeProtection)}
                            userData={modalFormData} />
                    ) : showChild ? (
                        <ChildLifelineForm onClose={() => handleClose(setShowChild)}
                            userData={modalFormData} />
                    ) : (
                        <form ref={form} onSubmit={sendEmail} className="w-full space-y-4">
                            <div>
                                <label htmlFor="insuranceType" className="block text-sm font-medium">
                                    Select your request type:
                                </label>
                                <select
                                    id="requestType"
                                    name="requestType"
                                    value={formData.requestType}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose an option</option>
                                    <option value="Insurance Quote">Get new insurace quote</option>
                                    <option value="Existing Policy">File a claim for existing policy</option>
                                    <option value="Policy changes">Request policy changes</option>
                                    <option value="Assistance">Other Assistance</option>
                                </select>
                            </div>
                            {/* Personal Details */}
                            <div>
                                <label htmlFor="fullname" className="block text-sm font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter full name"
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter email here"
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter number here"
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                            </div>
                            <div>
                                <label htmlFor="insuranceType" className="block text-sm font-medium">
                                    Insurance Category
                                </label>
                                <select
                                    id="insuranceType"
                                    name="insuranceType"
                                    value={formData.insuranceType}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Choose an option</option>
                                    <option value="Life Insurance">Life Insurance</option>
                                    <option value="General Insurance">General Insurance</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="formType" className="block text-sm font-medium">
                                    Insurance Product
                                </label>
                                <select
                                    id="formType"
                                    name="formType"
                                    value={formData.formType}
                                    onChange={handleChange}
                                    required
                                    disabled={formData.insuranceType.trim() === "Other"}
                                    className={`w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${formData.insuranceType.trim() === "Other" ? "cursor-not-allowed" : ""
                                        }`}
                                >
                                    <option value="">Choose an option</option>
                                    {formData.insuranceType === "Life Insurance"
                                        ? lifeForms.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))
                                        : filteredPdfOptions().map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* Preferred Insurance Company for Life or General Insurance */}
                            {formData.insuranceType === "Life Insurance" && (
                                <div>
                                    <label htmlFor="brokerage" className="block text-sm font-medium">
                                        Preferred Insurance Company
                                    </label>
                                    <select
                                        id="brokerage"
                                        name="brokerage"
                                        value={formData.brokerage}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Choose an option</option>
                                        {lifeInsurance.map((life, index) => (
                                            <option key={index} value={life}>
                                                {life}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            {formData.insuranceType === "General Insurance" && (
                                <div>
                                    <label htmlFor="brokerage" className="block text-sm font-medium">
                                        Preferred Insurance Company
                                    </label>
                                    <select
                                        id="brokerage"
                                        name="brokerage"
                                        value={formData.brokerage}
                                        onChange={handleChange}
                                        className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Choose an option</option>
                                        {firms.map((firm, index) => (
                                            <option key={index} value={firm}>
                                                {firm}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Enter a message"
                                    className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#b5996e] text-white py-2 rounded-[5px] hover:bg-[#776449] transition duration-300"
                            >
                                Send
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RiskForm;
