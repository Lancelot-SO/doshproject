import React, { useRef, useState } from 'react';
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
        fullname: '',
        email: '',
        phone: '',
        brokerage: '',
        formType: '',
        message: ''
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
        'Enterprise Insurance',
        'Star Assurance',
        'Hollard',
        'Glico',
        'Vanguard Assurance',
        'SIC',
        'Phoenix Insurance',
        'DONEWELL Insurance',
        'NSIA Insurance',
        'OLDMUTUAL',
        'Serene Insurance',
        'Coronation Insurance',
        'Allianz',
        'Priority Insurance',
        'SUNU Assurance',
        'Sanlam',
        'Provident Insurance',
        'Bedrock Insurance',
        'Activa Insurance',
        'QIC'
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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_w146wla', 'template_1dqgkm6', form.current, 'aV-FvEfOZg7fbxTN2')
            .then(
                () => {
                    toast.success('Message sent successfully!');
                    setFormData({
                        fullname: '',
                        email: '',
                        phone: '',
                        brokerage: '',
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

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                    <div className='lg:hidden block text-black'>
                        <h2 className='font-bold text-[22px] mb-2'>
                            Secure Your Future with Comprehensive Insurance Coverage
                        </h2>
                        <p className='text-[16px]'>
                            At DOSH Risk, we simplify insurance so you can focus on what truly matters.
                            Fill out the form to request personalized insurance solutions tailored to your unique needs.
                        </p>
                    </div>

                    {/* Conditional Rendering of AssetsAllRisk Component */}
                    {showAssetsForm ? (
                        <AssetsAllRisk onClose={() => setShowAssetsForm(false)} />
                    ) : showPublicLiabilityForm ? (
                        <PublicLiability onClose={() => setShowPublicLiabilityForm(false)} />
                    ) : showMarineOpenCoverForm ? (
                        <MarineOpenCover onClose={() => setShowMarineOpenCoverForm(false)} />
                    ) : showWorkMen ? (
                        <WorkMen onClose={() => setShowWorkMen(false)} />
                    ) :
                        showTravelInsurance ? (
                            <TravelInsurance onClose={() => setShowTravelInsurance(false)} />
                        ) :
                            showTransit ? (
                                <Transit onClose={() => setShowTransit(false)} />
                            ) :
                                showProfessional ? (
                                    <ProfessionalIndemnity onClose={() => setShowProfessional(false)} />
                                ) :
                                    showHouseHold ? (
                                        <HouseholdContent onClose={() => setShowHouseHold(false)} />
                                    ) :
                                        showVehicle ? (
                                            <VehicleInsurance onClose={() => setShowVehicle(false)} />
                                        ) :
                                            showTheft ? (
                                                <TheftInsurance onClose={() => setShowTheft(false)} />
                                            ) :
                                                showClaim ? (
                                                    <GuaranteeClaim onClose={() => setShowClaim(false)} />
                                                ) :
                                                    showDirector ? (
                                                        <Director onClose={() => setShowDirector(false)} />
                                                    ) :
                                                        showFire ? (
                                                            <FireInsurance onClose={() => setShowFire(false)} />
                                                        ) :
                                                            showPrivate ? (
                                                                <PrivateMotor onClose={() => setShowPrivate(false)} />
                                                            ) :
                                                                showHotel ? (
                                                                    <HotelInsurance onClose={() => setShowHotel(false)} />
                                                                ) :
                                                                    showHomeProtection ? (
                                                                        <HomeProtection onClose={() => setShowHomeProtection(false)} />
                                                                    ) : (
                                                                        <form ref={form} onSubmit={sendEmail} className="w-full space-y-4">
                                                                            <div>
                                                                                <label htmlFor="fullname" className="block text-sm font-medium">Full Name</label>
                                                                                <input
                                                                                    type="text"
                                                                                    id="fullname"
                                                                                    name="fullname"
                                                                                    value={formData.fullname}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                    placeholder='Enter name here'
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                            </div>

                                                                            <div>
                                                                                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                                                                <input
                                                                                    type="email"
                                                                                    id="email"
                                                                                    name="email"
                                                                                    value={formData.email}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                    placeholder='Enter email here'
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                            </div>

                                                                            <div>
                                                                                <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                                                                                <input
                                                                                    type="tel"
                                                                                    id="phone"
                                                                                    name="phone"
                                                                                    value={formData.phone}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                    placeholder='Enter number here'
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                />
                                                                            </div>

                                                                            <div>
                                                                                <label htmlFor="formType" className="block text-sm font-medium">Preferred Category</label>
                                                                                <select
                                                                                    id="formType"
                                                                                    name="formType"
                                                                                    value={formData.formType}
                                                                                    onChange={handleChange}
                                                                                    required
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                >
                                                                                    <option value="">Choose an option</option>
                                                                                    {pdfOptions.map((option, index) => (
                                                                                        <option key={index} value={option}>
                                                                                            {option}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>

                                                                            <div>
                                                                                <label htmlFor="brokerage" className="block text-sm font-medium">Preferred Insurer</label>
                                                                                <select
                                                                                    id="brokerage"
                                                                                    name="brokerage"
                                                                                    value={formData.brokerage}
                                                                                    onChange={handleChange}
                                                                                    className="w-full mt-1 p-3 border rounded-lg text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                                                >
                                                                                    <option value=""></option>
                                                                                    {firms.map((firm, index) => (
                                                                                        <option key={index} value={firm}>
                                                                                            {firm}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>

                                                                            <div>
                                                                                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                                                                <textarea
                                                                                    id="message"
                                                                                    name="message"
                                                                                    value={formData.message}
                                                                                    onChange={handleChange}
                                                                                    rows="4"
                                                                                    placeholder='Enter a message'
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
