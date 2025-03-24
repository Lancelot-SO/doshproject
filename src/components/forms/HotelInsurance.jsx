import React, { useEffect, useRef, useState } from 'react';
import image from "../../images/hotels.png";
import formlogo from "../../images/formlogo.png";
import emailjs from '@emailjs/browser';
import { X } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HotelInsurance = ({ onClose, userData }) => {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        // Basic Information
        proposerFullName: '',
        postalAddress: '',
        premisesOptions: {
            guestBoardingHouse: false,
            hotelNonResidents: false,
            hotelResidents: false,
            motel: false,
            others: false,
        },
        othersDetails: '',
        yearsEstablished: '',
        otherPremises: '',
        soleOccupation: '', // Yes/No
        occupantDetails: '',
        offerAccommodation: '', // Yes/No
        hotelLaws: '', // a.i.
        licenseIssued: '', // a.ii.
        licenseIssueDate: '',
        longTermResidential: '', // b.i.
        longStayStudents: '',   // b.ii.
        accommodationDetails: '',
        seasonallyOperated: '',

        // Section 1 – Buildings Cover (Optional)
        requireCoverForBuildings: '', // Yes/No
        sumInsuredBuildings: '',

        // Section 2 – Contents
        sumInsuredStock: '',
        sumInsuredFixtures: '',
        sumInsuredTenants: '',
        sumInsuredOtherTrade: '',
        totalSumInsuredContents: '',
        theftCoverForContents: '', // Yes/No
        theftCoverDetails: '',

        // Section 3 – Glass
        glassPolicySufficient: '', // Yes/No
        requiredGlassLimit: '',

        // Section 4 – Business Interruption
        maxIndemnitySufficient: '', // Yes/No
        maxIndemnityRequired: '',   // if No: 18, 24, or 36 months
        sumInsuredOnIncome: '',

        // Section 5 – Money
        varyMoneyLimits: '', // Yes/No
        lossMoneyLockedSafe: '',
        safeDetails: '',
        lossMoneyInTransit: '',

        // Section 6 – Liability to Others
        provideRestaurantService: '', // Yes/No
        maxSeatingCapacity: '',
        provideEntertainment: '',     // Yes/No
        entertainmentType: '',
        eventsPerMonth: '',
        maxAttendance: '',
        entertainmentHours: '',
        separateChargeEntertainment: '', // Yes/No
        entertainmentLocation: '',
        workAwayFromPremises: '',    // Yes/No
        workAwayDetails: '',
        workAwayOccasions: '',

        // Section 7 – Personal Accident (Optional)
        coverPersonalAccident: '', // Yes/No
        // For simplicity, one named person (can be extended as needed)
        personTitle: '',
        personName: '',
        personOccupation: '',
        personDOB: '',
        accidentOrIllnessDetails: '',
        physicalDefect: '', // Yes/No
        defectDetails: '',

        // General – To be completed by all proposers
        currentlyInsured: '', // Yes/No
        insurerName: '',
        commencementDate: '',
        constructedAndRoofed: '', // Yes/No
        occupiedSolely: '', // Yes/No
        keysOnPerson: '',  // Yes/No
        keysInRoom: '',    // Yes/No
        keysRemoved: '',   // Yes/No
        booksEntered: '',  // Yes/No
        protectionsWorking: '', // Yes/No
        protectionDetails: '',
        acceptItemsSafekeeping: '', // Yes/No
        itemsInLockedSafe: '',      // Yes/No
        historyOfFlooding: '',      // Yes/No
        lossClaimsLast5Years: '',   // Yes/No
        specialTermsDeclined: '',   // Yes/No
        bankruptOrConvicted: '',    // Yes/No
        additionalDetails: '',

        // Declaration
        declarationDate: '',
        declarationSignature: '',
        declarationAgency: '',
    });


    // Update the local state when userData changes
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                proposerFullName: `${userData.fullname}` || '',

            }));
        }
    }, [userData]);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox' && name.startsWith("premisesOptions.")) {
            // Handle checkbox changes specifically for the nested 'premisesOptions' object
            const key = name.split('.')[1]; // Get the specific key within the premisesOptions object
            setFormData(prev => ({
                ...prev,
                premisesOptions: {
                    ...prev.premisesOptions,
                    [key]: checked // Update the specific key within the nested object
                }
            }));
        } else {
            // Handle changes for all other inputs normally
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value // Check for checkbox and use 'checked' or 'value'
            }));
        }
    };


    // Handle file input changes separately (do not set a value on a file input)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({
            ...prev,
            declareSignature: file ? file : null, // store the File object if needed
        }));
    };

    // Handle form submission using emailjs.sendForm
    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these with your actual EmailJS credentials:
        const serviceID = "service_a88tnae";
        const templateID = "template_qy7gdgs";
        const publicKey = "aV-FvEfOZg7fbxTN2";

        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                toast.success("Form submitted successfully!");
                setFormData({
                    proposerFullName: '',
                    postalAddress: '',
                    premisesOptions: {
                        guestBoardingHouse: "",
                        hotelNonResidents: "",
                        hotelResidents: "",
                        motel: "",
                        others: "",
                    },
                    othersDetails: '',
                    yearsEstablished: '',
                    otherPremises: '',
                    soleOccupation: '', // Yes/No
                    occupantDetails: '',
                    offerAccommodation: '', // Yes/No
                    hotelLaws: '', // a.i.
                    licenseIssued: '', // a.ii.
                    licenseIssueDate: '',
                    longTermResidential: '', // b.i.
                    longStayStudents: '',   // b.ii.
                    accommodationDetails: '',
                    seasonallyOperated: '',

                    // Section 1 – Buildings Cover (Optional)
                    requireCoverForBuildings: '', // Yes/No
                    sumInsuredBuildings: '',

                    // Section 2 – Contents
                    sumInsuredStock: '',
                    sumInsuredFixtures: '',
                    sumInsuredTenants: '',
                    sumInsuredOtherTrade: '',
                    totalSumInsuredContents: '',
                    theftCoverForContents: '', // Yes/No
                    theftCoverDetails: '',

                    // Section 3 – Glass
                    glassPolicySufficient: '', // Yes/No
                    requiredGlassLimit: '',

                    // Section 4 – Business Interruption
                    maxIndemnitySufficient: '', // Yes/No
                    maxIndemnityRequired: '',   // if No: 18, 24, or 36 months
                    sumInsuredOnIncome: '',

                    // Section 5 – Money
                    varyMoneyLimits: '', // Yes/No
                    lossMoneyLockedSafe: '',
                    safeDetails: '',
                    lossMoneyInTransit: '',

                    // Section 6 – Liability to Others
                    provideRestaurantService: '', // Yes/No
                    maxSeatingCapacity: '',
                    provideEntertainment: '',     // Yes/No
                    entertainmentType: '',
                    eventsPerMonth: '',
                    maxAttendance: '',
                    entertainmentHours: '',
                    separateChargeEntertainment: '', // Yes/No
                    entertainmentLocation: '',
                    workAwayFromPremises: '',    // Yes/No
                    workAwayDetails: '',
                    workAwayOccasions: '',

                    // Section 7 – Personal Accident (Optional)
                    coverPersonalAccident: '', // Yes/No
                    // For simplicity, one named person (can be extended as needed)
                    personTitle: '',
                    personName: '',
                    personOccupation: '',
                    personDOB: '',
                    accidentOrIllnessDetails: '',
                    physicalDefect: '', // Yes/No
                    defectDetails: '',

                    // General – To be completed by all proposers
                    currentlyInsured: '', // Yes/No
                    insurerName: '',
                    commencementDate: '',
                    constructedAndRoofed: '', // Yes/No
                    occupiedSolely: '', // Yes/No
                    keysOnPerson: '',  // Yes/No
                    keysInRoom: '',    // Yes/No
                    keysRemoved: '',   // Yes/No
                    booksEntered: '',  // Yes/No
                    protectionsWorking: '', // Yes/No
                    protectionDetails: '',
                    acceptItemsSafekeeping: '', // Yes/No
                    itemsInLockedSafe: '',      // Yes/No
                    historyOfFlooding: '',      // Yes/No
                    lossClaimsLast5Years: '',   // Yes/No
                    specialTermsDeclined: '',   // Yes/No
                    bankruptOrConvicted: '',    // Yes/No
                    additionalDetails: '',

                    // Declaration
                    declarationDate: '',
                    declarationSignature: '',
                    declarationAgency: '',
                })
                e.target.reset();
                if (onClose) onClose();
            })
            .catch((err) => {
                console.error("FAILED...", err);
                toast.error("Failed to submit form. Please try again.");
            });
    }

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
                    <h1 className="text-2xl font-bold mb-6">
                        Hotels And Guest Houses Insurance Proposal Form
                    </h1>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                        {/* Basic Information */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium">1. Proposer’s Full Name</label>
                                    <input
                                        type="text"
                                        name="proposerFullName"
                                        value={formData.proposerFullName}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">2. Postal Address</label>
                                    <textarea
                                        name="postalAddress"
                                        value={formData.postalAddress}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        3. Please indicate with a tick if your premises are:
                                    </label>
                                    <div className="flex flex-col space-y-2">
                                        {[
                                            { key: "guestBoardingHouse", label: "Guest or Boarding House" },
                                            { key: "hotelNonResidents", label: "Hotel offering facilities to non-residents" },
                                            { key: "hotelResidents", label: "Hotel offering facilities for the exclusive use of residents" },
                                            { key: "motel", label: "Motel" },
                                            { key: "others", label: "Others" },
                                        ].map((item) => (
                                            <label key={item.key} className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    name={`premisesOptions.${item.key}`}
                                                    checked={formData.premisesOptions[item.key]}
                                                    onChange={handleChange}
                                                    className="mr-2"
                                                />
                                                {item.label}
                                            </label>
                                        ))}
                                    </div>
                                    {formData.premisesOptions.others && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                If “Others”, please give details:
                                            </label>
                                            <textarea
                                                name="othersDetails"
                                                value={formData.othersDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="2"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">4. No. of years established</label>
                                    <input
                                        type="number"
                                        name="yearsEstablished"
                                        value={formData.yearsEstablished}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        5. Premises to which this proposal relates (if other than above)
                                    </label>
                                    <textarea
                                        name="otherPremises"
                                        value={formData.otherPremises}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                        rows="2"
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        6. Are the buildings in which your premises are situated in your sole occupation?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="soleOccupation"
                                                value="Yes"
                                                checked={formData.soleOccupation === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="soleOccupation"
                                                value="No"
                                                checked={formData.soleOccupation === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.soleOccupation === 'No' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                If “No”, please give details of other occupants and specify if any part is unoccupied:
                                            </label>
                                            <textarea
                                                name="occupantDetails"
                                                value={formData.occupantDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="2"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        7. Do your Premises offer accommodation?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="offerAccommodation"
                                                value="Yes"
                                                checked={formData.offerAccommodation === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="offerAccommodation"
                                                value="No"
                                                checked={formData.offerAccommodation === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.offerAccommodation === 'Yes' && (
                                        <div className="mt-2 space-y-4">
                                            <div>
                                                <label className="block font-medium">
                                                    a. i. Are the Premises a hotel within the meaning of the Accommodation and Catering Enterprise Regulations (L.I.1205)?
                                                </label>
                                                <div className="flex items-center space-x-4">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="hotelLaws"
                                                            value="Yes"
                                                            checked={formData.hotelLaws === 'Yes'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> Yes
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="hotelLaws"
                                                            value="No"
                                                            checked={formData.hotelLaws === 'No'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> No
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    a. ii. Has a license been issued for the Premises by the Ghana Tourist Board?
                                                </label>
                                                <div className="flex items-center space-x-4">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="licenseIssued"
                                                            value="Yes"
                                                            checked={formData.licenseIssued === 'Yes'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> Yes
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="licenseIssued"
                                                            value="No"
                                                            checked={formData.licenseIssued === 'No'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> No
                                                    </label>
                                                </div>
                                                {formData.licenseIssued === 'Yes' && (
                                                    <div className="mt-2">
                                                        <label className="block font-medium">
                                                            a. iii. If “YES”, please state date of issue:
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="licenseIssueDate"
                                                            value={formData.licenseIssueDate}
                                                            onChange={handleChange}
                                                            className="w-full border rounded-[5px] p-2"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    b. Do you provide accommodation for any of the following?
                                                </label>
                                                <div className="flex items-center space-x-4">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="longTermResidential"
                                                            value="Yes"
                                                            checked={formData.longTermResidential === 'Yes'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> Yes
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="longTermResidential"
                                                            value="No"
                                                            checked={formData.longTermResidential === 'No'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> No
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <label className="block font-medium">
                                                        ii. Long-stay Students – If “Yes”, please give details:
                                                    </label>
                                                    <textarea
                                                        name="accommodationDetails"
                                                        value={formData.accommodationDetails}
                                                        onChange={handleChange}
                                                        className="w-full border rounded-[5px] p-2"
                                                        rows="2"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        8. Is your business seasonally operated (closed for at least four months in a year)?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="seasonallyOperated"
                                                value="Yes"
                                                checked={formData.seasonallyOperated === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="seasonallyOperated"
                                                value="No"
                                                checked={formData.seasonallyOperated === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 1 – Buildings Cover */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 1 – Buildings (Optional)</h2>
                            <div className="space-y-4">
                                <label className="block font-medium">
                                    1. Do you require cover for Buildings?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="requireCoverForBuildings"
                                            value="Yes"
                                            checked={formData.requireCoverForBuildings === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="requireCoverForBuildings"
                                            value="No"
                                            checked={formData.requireCoverForBuildings === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.requireCoverForBuildings === 'Yes' && (
                                    <div className="mt-2">
                                        <label className="block font-medium">
                                            a.  Please state Sum Insured being the estimated cost or rebuilding together with an allowance for removal debris,
                                            architects’ and surveyors’ fees and the extra cost of complying with building regulations following loss destruction or
                                            damage (usually 10% for each).  (GH¢):
                                        </label>
                                        <input
                                            type="number"
                                            name="sumInsuredBuildings"
                                            value={formData.sumInsuredBuildings}
                                            onChange={handleChange}
                                            className="w-full border rounded-[5px] p-2"
                                        />
                                    </div>
                                )}

                                <p>
                                    <b>Average</b><br />
                                    If the Sums Insured by Sections 1,2,3, and 4 do not represent the full cost of replacement of property / income any
                                    claims settlement will be proportionately reduced.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 – Contents */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 2 – Contents</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block font-medium">
                                        a. Stock and stock held in trust (GH¢)
                                    </label>
                                    <input
                                        type="number"
                                        name="sumInsuredStock"
                                        value={formData.sumInsuredStock}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        b. Land lord’s xtures and ttings and interior decorations for which you are responsible (GH¢)
                                    </label>
                                    <input
                                        type="number"
                                        name="sumInsuredFixtures"
                                        value={formData.sumInsuredFixtures}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        c. Tenants Improvements (GH¢)
                                    </label>
                                    <input
                                        type="number"
                                        name="sumInsuredTenants"
                                        value={formData.sumInsuredTenants}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        d. All Other Trade Contents (Including employees’ personal effects)  (GH¢)
                                    </label>
                                    <input
                                        type="number"
                                        name="sumInsuredOtherTrade"
                                        value={formData.sumInsuredOtherTrade}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block font-medium">
                                        TOTAL SUM INSURED – SECTION 2 (GH¢)
                                    </label>
                                    <input
                                        type="number"
                                        name="totalSumInsuredContents"
                                        value={formData.totalSumInsuredContents}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block font-medium">
                                    2. Is Theft cover required for Contents in Outbuildings?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="theftCoverForContents"
                                            value="Yes"
                                            checked={formData.theftCoverForContents === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="theftCoverForContents"
                                            value="No"
                                            checked={formData.theftCoverForContents === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.theftCoverForContents === 'Yes' && (
                                    <div className="mt-2">
                                        <label className="block font-medium">
                                            If “YES”, please specify items (Description & Sum Insured):
                                        </label>
                                        <textarea
                                            name="theftCoverDetails"
                                            value={formData.theftCoverDetails}
                                            onChange={handleChange}
                                            className="w-full border rounded-[5px] p-2"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Section 3 – Glass */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 3 – Glass</h2>
                            <div>
                                <label className="block font-medium">
                                    1. Is the standard policy limit of ¢2 million for lettering and decoration sufficient for your requirements?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="glassPolicySufficient"
                                            value="Yes"
                                            checked={formData.glassPolicySufficient === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="glassPolicySufficient"
                                            value="No"
                                            checked={formData.glassPolicySufficient === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.glassPolicySufficient === 'No' && (
                                    <div className="mt-2">
                                        <label className="block font-medium">
                                            If “NO”, please indicate your requirements (GH¢):
                                        </label>
                                        <input
                                            type="number"
                                            name="requiredGlassLimit"
                                            value={formData.requiredGlassLimit}
                                            onChange={handleChange}
                                            className="w-full border rounded-[5px] p-2"
                                        />
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Section 4 – Business Interruption */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 4 – Business Interruption</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        1. Is the standard Maximum Indemnity Period of 12 months sufficient for your requirements?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="maxIndemnitySufficient"
                                                value="Yes"
                                                checked={formData.maxIndemnitySufficient === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="maxIndemnitySufficient"
                                                value="No"
                                                checked={formData.maxIndemnitySufficient === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.maxIndemnitySufficient === 'No' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Tick the Maximum Indemnity Period you require:
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="maxIndemnityRequired"
                                                        value="18"
                                                        checked={formData.maxIndemnityRequired === '18'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> 18 months
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="maxIndemnityRequired"
                                                        value="24"
                                                        checked={formData.maxIndemnityRequired === '24'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> 24 months
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="maxIndemnityRequired"
                                                        value="36"
                                                        checked={formData.maxIndemnityRequired === '36'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> 36 months
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        2. Please state Sum Insured on Income (GH¢)
                                    </label>
                                    <input
                                        type="number"
                                        name="sumInsuredOnIncome"
                                        value={formData.sumInsuredOnIncome}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Section 5 – Money */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 5 – Money</h2>
                            <div>
                                <label className="block font-medium">
                                    1. Do you wish to vary the standard limits in respect of the under mentioned limits?
                                </label>
                                <div className="flex items-center space-x-4">
                                    <label>
                                        <input
                                            type="radio"
                                            name="varyMoneyLimits"
                                            value="Yes"
                                            checked={formData.varyMoneyLimits === 'Yes'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> Yes
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="varyMoneyLimits"
                                            value="No"
                                            checked={formData.varyMoneyLimits === 'No'}
                                            onChange={handleChange}
                                            className="mr-1"
                                        /> No
                                    </label>
                                </div>
                                {formData.varyMoneyLimits === 'Yes' && (
                                    <div className="mt-2 space-y-4">
                                        <div>
                                            <label className="block font-medium">
                                                a. Loss of money from locked safe(s) outside licensed hours (GH¢)
                                            </label>
                                            <input
                                                type="number"
                                                name="lossMoneyLockedSafe"
                                                value={formData.lossMoneyLockedSafe}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                If more than ¢… please give details of your safe(s)
                                            </label>
                                            <textarea
                                                name="safeDetails"
                                                value={formData.safeDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="2"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. Loss of money in transit (GH¢)
                                            </label>
                                            <input
                                                type="number"
                                                name="lossMoneyInTransit"
                                                value={formData.lossMoneyInTransit}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* Section 6 – Liability to Others */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 6 – Liability to Others (Public/Product Liability)</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        (1.i) Do you provide a restaurant service (other than bar snacks)?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="provideRestaurantService"
                                                value="Yes"
                                                checked={formData.provideRestaurantService === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="provideRestaurantService"
                                                value="No"
                                                checked={formData.provideRestaurantService === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.provideRestaurantService === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Maximum seating capacity:
                                            </label>
                                            <input
                                                type="number"
                                                name="maxSeatingCapacity"
                                                value={formData.maxSeatingCapacity}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        (1.ii) Do you provide, or intend to provide entertainment?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="provideEntertainment"
                                                value="Yes"
                                                checked={formData.provideEntertainment === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="provideEntertainment"
                                                value="No"
                                                checked={formData.provideEntertainment === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.provideEntertainment === 'Yes' && (
                                        <div className="mt-2 space-y-4">
                                            <div>
                                                <label className="block font-medium">
                                                    a. Type of entertainment provided:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="entertainmentType"
                                                    value={formData.entertainmentType}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    b. Number of events per month:
                                                </label>
                                                <input
                                                    type="number"
                                                    name="eventsPerMonth"
                                                    value={formData.eventsPerMonth}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    c. Maximum attendance permitted:
                                                </label>
                                                <input
                                                    type="number"
                                                    name="maxAttendance"
                                                    value={formData.maxAttendance}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    d. Entertainment hours:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="entertainmentHours"
                                                    value={formData.entertainmentHours}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    e. Is a separate charge made for the entertainment?
                                                </label>
                                                <div className="flex items-center space-x-4">
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="separateChargeEntertainment"
                                                            value="Yes"
                                                            checked={formData.separateChargeEntertainment === 'Yes'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> Yes
                                                    </label>
                                                    <label>
                                                        <input
                                                            type="radio"
                                                            name="separateChargeEntertainment"
                                                            value="No"
                                                            checked={formData.separateChargeEntertainment === 'No'}
                                                            onChange={handleChange}
                                                            className="mr-1"
                                                        /> No
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block font-medium">
                                                    f. Where does the entertainment take place?
                                                </label>
                                                <input
                                                    type="text"
                                                    name="entertainmentLocation"
                                                    value={formData.entertainmentLocation}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        (2) Do you, or your partner/director/employees carry out work away from the premises?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="workAwayFromPremises"
                                                value="Yes"
                                                checked={formData.workAwayFromPremises === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="workAwayFromPremises"
                                                value="No"
                                                checked={formData.workAwayFromPremises === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.workAwayFromPremises === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                i. Please give details:
                                            </label>
                                            <textarea
                                                name="workAwayDetails"
                                                value={formData.workAwayDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="2"
                                            ></textarea>
                                            <label className="block font-medium mt-2">
                                                ii. Estimate the number of occasions each year:
                                            </label>
                                            <input
                                                type="number"
                                                name="workAwayOccasions"
                                                value={formData.workAwayOccasions}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Section 7 – Personal Accident */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Section 7 – Personal Accident (Optional)</h2>
                            <div>
                                <label className="block font-medium">
                                    1. Do you require cover for Personal Accident?
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
                                    <div className="mt-2 space-y-4">
                                        <div>
                                            <label className="block font-medium">
                                                a. List of named persons (Title, Initials & Surname, Occupation, Date of Birth)
                                            </label>
                                            <input
                                                type="text"
                                                name="personTitle"
                                                placeholder="Title"
                                                value={formData.personTitle}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2 mb-2"
                                            />
                                            <input
                                                type="text"
                                                name="personName"
                                                placeholder="Initials & Surname"
                                                value={formData.personName}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2 mb-2"
                                            />
                                            <input
                                                type="text"
                                                name="personOccupation"
                                                placeholder="Occupation"
                                                value={formData.personOccupation}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2 mb-2"
                                            />
                                            <input
                                                type="date"
                                                name="personDOB"
                                                value={formData.personDOB}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. Details of any accident or illness preventing attendance (past 3 years)
                                            </label>
                                            <textarea
                                                name="accidentOrIllnessDetails"
                                                value={formData.accidentOrIllnessDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                c. Has any person to be insured suffered physical defect, infirmity or ill health?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="physicalDefect"
                                                        value="Yes"
                                                        checked={formData.physicalDefect === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="physicalDefect"
                                                        value="No"
                                                        checked={formData.physicalDefect === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                            {formData.physicalDefect === 'Yes' && (
                                                <textarea
                                                    name="defectDetails"
                                                    value={formData.defectDetails}
                                                    onChange={handleChange}
                                                    className="w-full border rounded-[5px] p-2 mt-2"
                                                    rows="3"
                                                    placeholder="Provide names and details"
                                                ></textarea>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* General Section */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">General – To be completed by all Proposers</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">
                                        1. Are you currently insured against any of the risks proposed?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="currentlyInsured"
                                                value="Yes"
                                                checked={formData.currentlyInsured === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="currentlyInsured"
                                                value="No"
                                                checked={formData.currentlyInsured === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.currentlyInsured === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                If “YES”, please state name of insurer:
                                            </label>
                                            <input
                                                type="text"
                                                name="insurerName"
                                                value={formData.insurerName}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        2. From what date do you wish this insurance to commence?
                                    </label>
                                    <input
                                        type="date"
                                        name="commencementDate"
                                        value={formData.commencementDate}
                                        onChange={handleChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        3. Are the premises and outbuildings:
                                    </label>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="block font-medium">
                                                a. Constructed of brick, stone or concrete and roofed with appropriate materials and in good repair?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="constructedAndRoofed"
                                                        value="Yes"
                                                        checked={formData.constructedAndRoofed === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="constructedAndRoofed"
                                                        value="No"
                                                        checked={formData.constructedAndRoofed === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. Occupied solely by you for the purposes of the business described?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="occupiedSolely"
                                                        value="Yes"
                                                        checked={formData.occupiedSolely === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="occupiedSolely"
                                                        value="No"
                                                        checked={formData.occupiedSolely === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        4. Are the keys of the safe and record of combination numbers:
                                    </label>
                                    <div className="space-y-2">
                                        <div>
                                            <label className="block font-medium">
                                                a. Kept on your person or that of an employee?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="keysOnPerson"
                                                        value="Yes"
                                                        checked={formData.keysOnPerson === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="keysOnPerson"
                                                        value="No"
                                                        checked={formData.keysOnPerson === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                b. Kept in a room with physical presence at all times?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="keysInRoom"
                                                        value="Yes"
                                                        checked={formData.keysInRoom === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="keysInRoom"
                                                        value="No"
                                                        checked={formData.keysInRoom === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block font-medium">
                                                c. Removed from the premises?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="keysRemoved"
                                                        value="Yes"
                                                        checked={formData.keysRemoved === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="keysRemoved"
                                                        value="No"
                                                        checked={formData.keysRemoved === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        5. Are stock and sales books regularly entered up?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="booksEntered"
                                                value="Yes"
                                                checked={formData.booksEntered === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="booksEntered"
                                                value="No"
                                                checked={formData.booksEntered === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        6. Are all protections maintained in proper working order?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="protectionsWorking"
                                                value="Yes"
                                                checked={formData.protectionsWorking === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="protectionsWorking"
                                                value="No"
                                                checked={formData.protectionsWorking === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.protectionsWorking === 'No' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                If “NO”, please give details:
                                            </label>
                                            <textarea
                                                name="protectionDetails"
                                                value={formData.protectionDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        7. Do you accept items for safe keeping from guests or customers?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="acceptItemsSafekeeping"
                                                value="Yes"
                                                checked={formData.acceptItemsSafekeeping === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="acceptItemsSafekeeping"
                                                value="No"
                                                checked={formData.acceptItemsSafekeeping === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.acceptItemsSafekeeping === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                Are all valuables kept in a locked safe?
                                            </label>
                                            <div className="flex items-center space-x-4">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="itemsInLockedSafe"
                                                        value="Yes"
                                                        checked={formData.itemsInLockedSafe === 'Yes'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> Yes
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="itemsInLockedSafe"
                                                        value="No"
                                                        checked={formData.itemsInLockedSafe === 'No'}
                                                        onChange={handleChange}
                                                        className="mr-1"
                                                    /> No
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        8. Has there been a history of flooding at the premises?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="historyOfFlooding"
                                                value="Yes"
                                                checked={formData.historyOfFlooding === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="historyOfFlooding"
                                                value="No"
                                                checked={formData.historyOfFlooding === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        9. In the last 5 years, have you or any director/partner suffered any loss or had any claims?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="lossClaimsLast5Years"
                                                value="Yes"
                                                checked={formData.lossClaimsLast5Years === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="lossClaimsLast5Years"
                                                value="No"
                                                checked={formData.lossClaimsLast5Years === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        10. Has any insurer declined, required special terms, or cancelled/renewed your policy?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="specialTermsDeclined"
                                                value="Yes"
                                                checked={formData.specialTermsDeclined === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="specialTermsDeclined"
                                                value="No"
                                                checked={formData.specialTermsDeclined === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium">
                                        11. Have you or any director/partner been declared bankrupt or convicted of offences against property?
                                    </label>
                                    <div className="flex items-center space-x-4">
                                        <label>
                                            <input
                                                type="radio"
                                                name="bankruptOrConvicted"
                                                value="Yes"
                                                checked={formData.bankruptOrConvicted === 'Yes'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> Yes
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="bankruptOrConvicted"
                                                value="No"
                                                checked={formData.bankruptOrConvicted === 'No'}
                                                onChange={handleChange}
                                                className="mr-1"
                                            /> No
                                        </label>
                                    </div>
                                    {formData.bankruptOrConvicted === 'Yes' && (
                                        <div className="mt-2">
                                            <label className="block font-medium">
                                                If “YES”, please give details:
                                            </label>
                                            <textarea
                                                name="additionalDetails"
                                                value={formData.additionalDetails}
                                                onChange={handleChange}
                                                className="w-full border rounded-[5px] p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {/* Declaration */}
                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Declaration</h2>
                            <p className="mb-4">
                                I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and ENTERPRISE INSURANCE, and that I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the Premium thereon.
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
                                    <label className="block font-medium">Signature(s) of Proposer(s)</label>
                                    <input
                                        type="file"
                                        name="declarationSignature"
                                        onChange={handleFileChange}
                                        className="w-full border rounded-[5px] p-2"
                                    />
                                </div>
                                <div>
                                    <label className="block font-medium">Agency Signature(s) of Proposer(s)</label>
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

                        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-[5px]">
                            Submit Proposal
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HotelInsurance;
