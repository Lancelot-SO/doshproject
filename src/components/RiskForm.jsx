import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../images/imagebg.png"
import formlogo from "../images/formlogo.png"
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


    const [formData, setFormData] = useState({
        firstname: '',
        surname: '',
        othernames: '',
        email: '',
        phone: '',
        brokerage: '',
        insuranceType: '',
        formType: '',
        message: ''
    });

    // State for pre-filling the modal or secondary form
    const [modalFormData, setModalFormData] = useState({
        firstname: "",
        surname: "",
        othernames: "",
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



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Show the AssetsAllRisk form when "Assets All Risks" is selected
        if (name === 'formType') {
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
        }

    };


    // Whenever the user selects a Preferred Category (formType) and personal details are filled,
    // update modalFormData with the matching fields.
    useEffect(() => {
        if (formData.formType) {
            setModalFormData({
                firstname: formData.firstname,
                surname: formData.surname,
                othernames: formData.othernames,
                email: formData.email,
                phone: formData.phone
            });
        }
    }, [
        formData.formType,
        formData.firstname,
        formData.surname,
        formData.othernames,
        formData.email,
        formData.phone
    ]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_w146wla', 'template_1dqgkm6', form.current, 'aV-FvEfOZg7fbxTN2')
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    setFormData({
                        firstname: '',
                        surname: '',
                        othernames: '',
                        email: '',
                        phone: '',
                        brokerage: '',
                        insuranceType: '',
                        formType: '',
                        message: ''
                    });
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
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-lg shadow-lg flex overflow-hidden">

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
                    <div className='lg:hidden block text-black'>
                        <h2 className='font-bold text-[20px] mb-2'>
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className='text-[16px]'>
                            We simplify insurance so you can focus on what truly matters.
                        </p>
                    </div>
                    <div className=''>
                        <p className='text-[14px] text-black'>
                            Fill out this form to submit your request.
                        </p>
                    </div>

                    {/* Conditional Rendering of AssetsAllRisk Component */}
                    {showAssetsForm ? (
                        <AssetsAllRisk onClose={() => setShowAssetsForm(false)}
                            userData={modalFormData} />
                    ) : showPublicLiabilityForm ? (
                        <PublicLiability onClose={() => setShowPublicLiabilityForm(false)}
                            userData={modalFormData} />
                    ) : showMarineOpenCoverForm ? (
                        <MarineOpenCover onClose={() => setShowMarineOpenCoverForm(false)}
                            userData={modalFormData} />
                    ) : showWorkMen ? (
                        <WorkMen onClose={() => setShowWorkMen(false)}
                            userData={modalFormData} />
                    ) :
                        showTravelInsurance ? (
                            <TravelInsurance onClose={() => setShowTravelInsurance(false)}
                                userData={modalFormData} />
                        ) :
                            showTransit ? (
                                <Transit onClose={() => setShowTransit(false)}
                                    userData={modalFormData} />
                            ) :
                                showProfessional ? (
                                    <ProfessionalIndemnity onClose={() => setShowProfessional(false)}
                                        userData={modalFormData} />
                                ) :
                                    showHouseHold ? (
                                        <HouseholdContent onClose={() => setShowHouseHold(false)}
                                            userData={modalFormData} />
                                    ) :
                                        showVehicle ? (
                                            <VehicleInsurance onClose={() => setShowVehicle(false)}
                                                userData={modalFormData} />
                                        ) :
                                            showTheft ? (
                                                <TheftInsurance onClose={() => setShowTheft(false)}
                                                    userData={modalFormData} />
                                            ) :
                                                showClaim ? (
                                                    <GuaranteeClaim onClose={() => setShowClaim(false)}
                                                        userData={modalFormData} />
                                                ) :
                                                    showDirector ? (
                                                        <Director onClose={() => setShowDirector(false)}
                                                            userData={modalFormData} />
                                                    ) :
                                                        showFire ? (
                                                            <FireInsurance onClose={() => setShowFire(false)}
                                                                userData={modalFormData} />
                                                        ) :
                                                            showPrivate ? (
                                                                <PrivateMotor onClose={() => setShowPrivate(false)}
                                                                    userData={modalFormData} />
                                                            ) :
                                                                showHotel ? (
                                                                    <HotelInsurance onClose={() => setShowHotel(false)}
                                                                        userData={modalFormData} />
                                                                ) :
                                                                    showHomeProtection ? (
                                                                        <HomeProtection onClose={() => setShowHomeProtection(false)}
                                                                            userData={modalFormData} />
                                                                    ) : (
                                                                        <form ref={form} onSubmit={sendEmail} className="w-full space-y-4">
                                                                            {/* Personal Details */}
                                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                                <div>
                                                                                    <label htmlFor="firstname" className="block text-sm font-medium">
                                                                                        First Name
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        id="firstname"
                                                                                        name="firstname"
                                                                                        value={formData.firstname}
                                                                                        onChange={handleChange}
                                                                                        required
                                                                                        placeholder="Enter first name"
                                                                                        className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                    />
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="surname" className="block text-sm font-medium">
                                                                                        Surname
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        id="surname"
                                                                                        name="surname"
                                                                                        value={formData.surname}
                                                                                        onChange={handleChange}
                                                                                        required
                                                                                        placeholder="Enter surname"
                                                                                        className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                    />
                                                                                </div>
                                                                                <div>
                                                                                    <label htmlFor="othernames" className="block text-sm font-medium">
                                                                                        Other Names
                                                                                    </label>
                                                                                    <input
                                                                                        type="text"
                                                                                        id="othernames"
                                                                                        name="othernames"
                                                                                        value={formData.othernames}
                                                                                        onChange={handleChange}
                                                                                        placeholder="Enter other names"
                                                                                        className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                    />
                                                                                </div>
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
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
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
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
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
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                                                    disabled={
                                                                                        formData.insuranceType.trim() === "Life Insurance" ||
                                                                                        formData.insuranceType.trim() === "Other"
                                                                                    }
                                                                                    className={`w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${(formData.insuranceType.trim() === "Life Insurance" ||
                                                                                        formData.insuranceType.trim() === "Other")
                                                                                        ? "cursor-not-allowed"
                                                                                        : ""
                                                                                        }`}
                                                                                >
                                                                                    <option value="">Choose an option</option>
                                                                                    {pdfOptions.map((option, index) => (
                                                                                        <option key={index} value={option}>
                                                                                            {option}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>





                                                                            {/* Preferred Insurance Company appears after the Insurance Product select */}
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
                                                                                        className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                                                        className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                                                                ></textarea>
                                                                            </div>

                                                                            <button
                                                                                type="submit"
                                                                                className="w-full bg-[#b5996e] text-white py-2 rounded-lg hover:bg-[#776449] transition duration-300"
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
