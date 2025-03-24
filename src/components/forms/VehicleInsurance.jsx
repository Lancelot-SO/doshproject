import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import image from "../../images/commvehicle.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";

const VehicleInsurance = ({ onClose, userData }) => {
    const [formData, setFormData] = useState({
        proposerName: "",
        surname: "",
        otherNames: "",
        dob: "",
        sex: "",
        address: "",
        email: "",
        mobileNo: "",
        postalAddress: "",
        residenceCountry: "",
        passportNumber: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        travelPurpose: "",
        productType: "",
        premiumPaid: "",
        vehicleMakeModel: "",
        yearOfManufacture: "",
        noOfSeats: "",
        engineNo: "",
        cubicCapacity: "",
        chassisNo: "",
        registrationNo: "",
        seatingCapacity: "",
        carryingCapacity: "",
        driveType: "",
        purchaseDate: "",
        pricePaid: "",
        presentValue: "",
        thoroughRepair: "",
        altered: "",
        carriageFare: "",
        carriageOwnGoods: "",
        carriageOthersGoods: "",
        motorTradeUse: "",
        owner: "",
        registeredInName: "",
        ownerDetails: "",
        loanObtained: "",
        registeredName: "",
        loanProvider: "",
        licensed: "",
        accidentsPastThreeYears: "",
        insuranceHistory: "",
        declinedInsurance: "",
        firstLossPortion: "",
        increasedPremium: "",
        refusedRenewal: "",
        loanPurchase: "",
        loanGained: "",
        cancelledPolicy: "",
        policyType: "",
        driversDetails: "",
        declarationDate: "",
        inexperiencedDriver: "",
        recentLicenseHolder: "",
        under25Driver: "",
        convictedDriver: "",
        physicalInfirmityDriver: "",
        accidentHistory: [{ name: "", date: "", vehicleNumber: "", insuranceCompany: "", claimDetails: "" }],
        previousInsurance: "",
        insuranceCompanyDetails: "",
        policyTypeSelection: "",
        insuranceProposal: "",
        declinedProposal: "",
        insuredUnder: "",
        date: "",
        agency: "",
        declareSignature: ""
    });

    // Create a ref for the form
    const formRef = useRef();

    // Pre-populate key fields from the parent's userData when available.
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                proposerName: userData.fullname || "",
                // surname: userData.surname || "",
                // otherNames: userData.othernames || "",
                email: userData.email || "",
                mobileNo: userData.phone || "",
            }));
        }
    }, [userData]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle file changes separately (do not set value for file inputs)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, signature: file ? file.name : "" });
    };

    // Handle form submission via emailjs.sendForm
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these with your actual EmailJS credentials
        const serviceID = "service_c7l5lms";
        const templateID = "template_kj8pvbv";
        const publicKey = "aV-FvEfOZg7fbxTN2";

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Form submitted successfully!");
                // Optionally reset state and form here:
                setFormData({
                    proposerName: "",
                    surname: "",
                    otherNames: "",
                    dob: "",
                    sex: "",
                    address: "",
                    email: "",
                    mobileNo: "",
                    postalAddress: "",
                    residenceCountry: "",
                    passportNumber: "",
                    destination: "",
                    departureDate: "",
                    returnDate: "",
                    travelPurpose: "",
                    productType: "",
                    premiumPaid: "",
                    vehicleMakeModel: "",
                    yearOfManufacture: "",
                    noOfSeats: "",
                    engineNo: "",
                    cubicCapacity: "",
                    chassisNo: "",
                    registrationNo: "",
                    seatingCapacity: "",
                    carryingCapacity: "",
                    driveType: "",
                    purchaseDate: "",
                    pricePaid: "",
                    presentValue: "",
                    thoroughRepair: "",
                    altered: "",
                    carriageFare: "",
                    carriageOwnGoods: "",
                    carriageOthersGoods: "",
                    motorTradeUse: "",
                    owner: "",
                    registeredInName: "",
                    ownerDetails: "",
                    loanObtained: "",
                    registeredName: "",
                    loanProvider: "",
                    licensed: "",
                    accidentsPastThreeYears: "",
                    insuranceHistory: "",
                    declinedInsurance: "",
                    firstLossPortion: "",
                    increasedPremium: "",
                    refusedRenewal: "",
                    loanPurchase: "",
                    loanGained: "",
                    cancelledPolicy: "",
                    policyType: "",
                    driversDetails: "",
                    declarationDate: "",
                    signature: "",
                    inexperiencedDriver: "",
                    recentLicenseHolder: "",
                    under25Driver: "",
                    convictedDriver: "",
                    physicalInfirmityDriver: "",
                    accidentHistory: [{ name: "", date: "", vehicleNumber: "", insuranceCompany: "", claimDetails: "" }],
                    previousInsurance: "",
                    insuranceCompanyDetails: "",
                    policyTypeSelection: "",
                    insuranceProposal: "",
                    declinedProposal: "",
                    insuredUnder: "",
                    date: "",
                    agency: "",
                    declareSignature: ""
                });
                e.target.reset();
            })
            .catch((err) => {
                console.error("FAILED...", err);
                toast.error("Failed to submit form. Please try again.");
            });
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[5px] shadow-lg flex overflow-hidden">


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
                    </button>           <h2 className="text-2xl font-bold mb-4">Commercial Vehicle Insurance Proposal Request</h2>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700">Name of Proposer (Mr/Ms/Mrs/Dr/Prof)</label>
                            <input type="text" name="proposerName" value={formData.proposerName} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Surname</label>
                            <input type="text" name="surname" value={formData.surname} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Other Names</label>
                            <input type="text" name="otherNames" value={formData.otherNames} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Date of Birth</label>
                            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Sex</label>
                            <select name="sex" value={formData.sex} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">Postal Address</label>
                            <input type="text" name="postalAddress" value={formData.postalAddress} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Mobile Number</label>
                            <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Vehicle Make/Model</label>
                            <input type="text" name="vehicleMakeModel" value={formData.vehicleMakeModel} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Year of Manufacture</label>
                            <input type="text" name="yearOfManufacture" value={formData.yearOfManufacture} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Make / Model of Vehicle</label>
                            <input type="text" name="vehicleMakeModel" value={formData.vehicleMakeModel} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Year of Manufacture</label>
                            <input type="text" name="yearOfManufacture" value={formData.yearOfManufacture} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">No. of Seats</label>
                            <input type="text" name="noOfSeats" value={formData.noOfSeats} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Engine No</label>
                            <input type="text" name="engineNo" value={formData.engineNo} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Cubic Capacity</label>
                            <input type="text" name="cubicCapacity" value={formData.cubicCapacity} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Chassis No</label>
                            <input type="text" name="chassisNo" value={formData.chassisNo} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Vehicle Registration No</label>
                            <input type="text" name="registrationNo" value={formData.registrationNo} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Seating Capacity (Including Driver)</label>
                            <input type="text" name="seatingCapacity" value={formData.seatingCapacity} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Carrying Capacity (Weight of Load)</label>
                            <input type="text" name="carryingCapacity" value={formData.carryingCapacity} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Left or Right Hand Drive</label>
                            <input type="text" name="driveType" value={formData.driveType} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Date of Purchase</label>
                            <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Price Paid</label>
                            <input type="text" name="pricePaid" value={formData.pricePaid} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Proposer’s Estimate of Present Value</label>
                            <input type="text" name="presentValue" value={formData.presentValue} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Is the vehicle in a thorough state of repair?</label>
                            <select name="thoroughRepair" value={formData.thoroughRepair} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">Has the vehicle been altered from the original manufacturer’s design?</label>
                            <select name="altered" value={formData.altered} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700"> Is the vehicle(s) used or licensed for:</label>
                            <input type="text" name="licensed" value={formData.licensed} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Carriage of Fare Paying Passengers</label>
                            <select name="carriageFare" value={formData.carriageFare} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">Carriage of Own Goods</label>
                            <select name="carriageOwnGoods" value={formData.carriageOwnGoods} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <input type="text" name="carriageOwnGoodsDetails" placeholder="If Yes, state all types of goods" value={formData.carriageOwnGoodsDetails} onChange={handleChange} className="w-full p-2 border rounded-[5px] mt-2" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Carriage of Other Person’s Goods</label>
                            <select name="carriageOthersGoods" value={formData.carriageOthersGoods} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <input type="text" name="carriageOthersGoodsDetails" placeholder="If Yes, state all types of goods" value={formData.carriageOthersGoodsDetails} onChange={handleChange} className="w-full p-2 border rounded-[5px] mt-2" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Use in Motor Trade</label>
                            <select name="motorTradeUse" value={formData.motorTradeUse} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <input type="text" name="motorTradeUseDetails" placeholder="If Yes, please give details" value={formData.motorTradeUseDetails} onChange={handleChange} className="w-full p-2 border rounded-[5px] mt-2" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Are you the owner of the Vehicle?</label>
                            <select name="owner" value={formData.owner} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700">Is it registered in your name?</label>
                            <select name="registeredInName" value={formData.registeredInName} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <input type="text" name="registeredName" placeholder=" If not state name and address of owner" value={formData.registeredName} onChange={handleChange} className="w-full p-2 border rounded-[5px] mt-2" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Did you obtain a loan to purchase the Vehicle?</label>
                            <select name="loanPurchase" value={formData.loanPurchase} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <input type="text" name="loanGained" placeholder="If so, please state name and address of person/hire company from who the loan was obtained" value={formData.loanGained} onChange={handleChange} className="w-full p-2 border rounded-[5px] mt-2" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Will the Vehicle be driven by a person with less than two years of continuous experience?</label>
                            <select name="inexperiencedDriver" value={formData.inexperiencedDriver} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>

                        <p>Will the Vehicle(s) AT ANY TIME be driven by:</p>

                        <div>
                            <label className="block text-gray-700"> Any person with less than two years continuous driving experience on this type of vehicle(s)?</label>
                            <input type="text" name="recentLicenseHolder" value={formData.recentLicenseHolder} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Any person under 25 years of age?</label>
                            <input type="text" name="under25Driver" value={formData.under25Driver} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700"> Any person who has ever been charged with or convicted of any motoring of driving offence?</label>
                            <input type="text" name="convictedDriver" value={formData.convictedDriver} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Any person with defective vision or hearing or with any other physical infirmity?.</label>
                            <input type="text" name="physicalInfirmityDriver" value={formData.physicalInfirmityDriver} onChange={handleChange} className="w-full p-2 border rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-gray-700">Have there been accidents or losses occurring during the past three years in connection with any motor owned by
                                you or driven by you or on your behalf?</label>
                            <input name="accidentsPastThreeYears" value={formData.accidentsPastThreeYears} onChange={handleChange} className="w-full p-2 border rounded-[5px]"></input>
                        </div>

                        <div>
                            <h3 className="">If so please give details:</h3>
                            {formData.accidentHistory.map((accident, index) => (
                                <div key={index} className="grid grid-cols-5 gap-2">
                                    <input type="text" name={`accidentHistory.name`} placeholder="Name of Driver" value={accident.name} onChange={(e) => handleChange(e, index)} className="p-2 border rounded-[5px]" />
                                    <input type="date" name={`accidentHistory.date`} placeholder="Date of Accident" value={accident.date} onChange={(e) => handleChange(e, index)} className="p-2 border rounded-[5px]" />
                                    <input type="text" name={`accidentHistory.vehicleNumber`} placeholder="Vehicle Number" value={accident.vehicleNumber} onChange={(e) => handleChange(e, index)} className="p-2 border rounded-[5px]" />
                                    <input type="text" name={`accidentHistory.insuranceCompany`} placeholder="Name of Insurance Company" value={accident.insuranceCompany} onChange={(e) => handleChange(e, index)} className="p-2 border rounded-[5px]" />
                                    <input type="text" name={`accidentHistory.claimDetails`} placeholder="Detail of any Claim Payment" value={accident.claimDetails} onChange={(e) => handleChange(e, index)} className="p-2 border rounded-[5px]" />
                                </div>
                            ))}
                        </div>

                        <div>
                            <label className="block text-gray-700">Have you ever held a motor insurance policy or ever proposed to an insurance company for motor insurance?</label>
                            <select name="insuranceProposal" value={formData.insuranceProposal} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            <textarea name="insuranceCompanyDetails" placeholder=" If so please give name of each insurance company, policy number and period of cover." value={formData.insuranceCompanyDetails} onChange={handleChange} className="w-full p-2 border rounded-[5px] mt-2"></textarea>
                        </div>

                        <div>
                            <label className="block text-gray-700">Has any insurance company ever, in connection with any vehicle:</label>
                            <div className="space-y-2">
                                <label>Declined your proposal?</label>
                                <select name="declinedProposal" value={formData.declinedProposal} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Required you to carry the first portion of any loss?</label>
                                <select name="firstLossPortion" value={formData.firstLossPortion} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Required an increased premium or imposed special conditions?</label>
                                <select name="increasedPremium" value={formData.increasedPremium} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Refused to renew your policy?</label>
                                <select name="refusedRenewal" value={formData.refusedRenewal} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label>Cancelled your policy?</label>
                                <select name="cancelledPolicy" value={formData.cancelledPolicy} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                    <option value="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                <label> Do you wish to insure under?</label>
                                <select name="insuredUnder" value={formData.insuredUnder} onChange={handleChange} className="w-full p-2 border rounded-[5px]">
                                    <option value="">Select</option>
                                    <option value="Comprehensive">Comprehensive Policy </option>
                                    <option value="Party">Third Party Fire & Theft </option>
                                    <option value="Third"> Third Party</option>

                                </select>
                            </div>
                        </div>

                        <h3 className="font-bold text-gray-800">DECLARATION</h3>
                        <p className='text-gray-800'>
                            I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory
                            and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and
                            DOSH Risk and I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the
                            Premium thereon.
                        </p>

                        <div>
                            <label className="block text-sm font-medium">Date</label>
                            <input type="date" name="declareDate" value={formData.declareDate} onChange={handleChange} className="w-full p-2 border rounded-[5px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Agency</label>
                            <input type="text" name="agency" value={formData.agency} onChange={handleChange} className="w-full p-2 border rounded-[5px]" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Signature</label>
                            <input type="file" name="declareSignature" onChange={handleFileChange} className="w-full p-2 border rounded-[5px]" required />
                        </div>

                        <button type="submit" className="w-full bg-[#a58b63] text-white p-2 rounded hover:bg-[#77603f]">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default VehicleInsurance;
