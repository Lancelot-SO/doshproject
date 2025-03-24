import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/publicliability.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';

const PublicLiability = ({ onClose, userData }) => {
    const [formData, setFormData] = useState({
        proposerName: '',
        address: '',
        mobile: '',
        businessTrade: '',
        goodsDescription: '',
        SeparatePolicies: '',
        thirdPartyCover: '',
        inspectedBy: '',
        thoroughfare: '',
        trapdoors: '',
        seatingCapacity: '',
        natureOfClub: '',
        numberofmembers: '',
        theatre: '',
        refreshments: '',
        schoolDescription: '',
        numberOfPupils: '',
        management: '',
        entertainments: '',
        indemnity: '',
        foodPoisoning: '',
        machineryDetails: '',
        explosivesUsage: '',
        subContractors: '',
        contractPrices: '',
        employment: '',
        particulars: '',
        presentInsured: '',
        company: '',
        proposalStatus: '',
        refusedRenewal: '',
        policyCancelled: '',
        premium: '',
        policy: '',
        nature: '',
        otherWork: '',
        workDetails: '',
        annualamount: '',
        numberofemployees: '',
        principal: '',
        numberofpartners: '',
        date: '',
        agency: '',
        codenumber: '',
        signature: '',
    });

    // Update fields from parent's userData when it changes
    useEffect(() => {
        if (userData) {
            setFormData(prev => ({
                ...prev,
                // Here, we assume the parent's keys are: firstname, surname, othernames, email, phone
                proposerName: userData.fullname || "",
                mobile: userData.phone || "",
            }));
        }
    }, [userData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare template parameters for EmailJS (keys should match your EmailJS template placeholders)
        const templateParams = {
            proposerName: formData.proposerName,
            address: formData.address,
            mobile: formData.mobile,
            businessTrade: formData.businessTrade,
            goodsDescription: formData.goodsDescription,
            SeparatePolicies: formData.SeparatePolicies,
            thirdPartyCover: formData.thirdPartyCover,
            inspectedBy: formData.inspectedBy,
            thoroughfare: formData.thoroughfare,
            trapdoors: formData.trapdoors,
            seatingCapacity: formData.seatingCapacity,
            natureOfClub: formData.natureOfClub,
            numberofmembers: formData.numberofmembers,
            theatre: formData.theatre,
            refreshments: formData.refreshments,
            schoolDescription: formData.schoolDescription,
            numberOfPupils: formData.numberOfPupils,
            management: formData.management,
            entertainments: formData.entertainments,
            indemnity: formData.indemnity,
            foodPoisoning: formData.foodPoisoning,
            machineryDetails: formData.machineryDetails,
            explosivesUsage: formData.explosivesUsage,
            subContractors: formData.subContractors,
            contractPrices: formData.contractPrices,
            employment: formData.employment,
            particulars: formData.particulars,
            presentInsured: formData.presentInsured,
            company: formData.company,
            proposalStatus: formData.proposalStatus,
            refusedRenewal: formData.refusedRenewal,
            policyCancelled: formData.policyCancelled,
            premium: formData.premium,
            policy: formData.policy,
            nature: formData.nature,
            otherWork: formData.otherWork,
            workDetails: formData.workDetails,
            annualamount: formData.annualamount,
            numberofemployees: formData.numberofemployees,
            principal: formData.principal,
            numberofpartners: formData.numberofpartners,
            date: formData.date,
            agency: formData.agency,
            codenumber: formData.codenumber,
            signature: formData.signature,
        };

        emailjs
            .send(
                'service_9bstnqc',    // Replace with your EmailJS service ID
                'template_qtoppo2',   // Replace with your EmailJS template ID (e.g., "PublicLiabilityProposal")
                templateParams,
                'aV-FvEfOZg7fbxTN2'     // Replace with your EmailJS public key
            )
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                    toast.success('Form submitted successfully via Email!');
                    // Reset the form
                    setFormData({
                        proposerName: '',
                        address: '',
                        mobile: '',
                        businessTrade: '',
                        goodsDescription: '',
                        SeparatePolicies: '',
                        thirdPartyCover: '',
                        inspectedBy: '',
                        thoroughfare: '',
                        trapdoors: '',
                        seatingCapacity: '',
                        natureOfClub: '',
                        numberofmembers: '',
                        theatre: '',
                        refreshments: '',
                        schoolDescription: '',
                        numberOfPupils: '',
                        management: '',
                        entertainments: '',
                        indemnity: '',
                        foodPoisoning: '',
                        machineryDetails: '',
                        explosivesUsage: '',
                        subContractors: '',
                        contractPrices: '',
                        employment: '',
                        particulars: '',
                        presentInsured: '',
                        company: '',
                        proposalStatus: '',
                        refusedRenewal: '',
                        policyCancelled: '',
                        premium: '',
                        policy: '',
                        nature: '',
                        otherWork: '',
                        workDetails: '',
                        annualamount: '',
                        numberofemployees: '',
                        principal: '',
                        numberofpartners: '',
                        date: '',
                        agency: '',
                        codenumber: '',
                        signature: '',
                    });
                    if (onClose) onClose();
                },
                (error) => {
                    console.error('Failed to send email:', error.text);
                    toast.error('Failed to submit form. Please try again.');
                }
            );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6">
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
                        className="absolute top-4 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-2xl text-gray-800 font-bold mb-4">Public Liability Insurance Proposal Request</h2>


                    <p className="text-gray-800 mb-4"> Unless specially mentioned, policies do not cover injury or damage caused by hoists, cranes. Separate policies must be
                        effected if it is desired to cover liability in respect to cycles by the proposers, horse-drawn or mechanically propelled
                        vehicles, passenger lifts and boilers.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h3 className="font-bold text-gray-800">Insured's Details</h3>
                        <label className="block">
                            Proposer's Name (In Full)
                            <input
                                type="text"
                                name="proposerName"
                                value={formData.proposerName}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                                required
                            />
                        </label>
                        <label className="block">
                            Address
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Phone Number
                            <input
                                type="tel"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Business/ Trade (Full description)
                            <input
                                type="text"
                                name="businessTrade"
                                value={formData.businessTrade}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <h3 className="font-bold text-gray-800">Offices, Shops, Warehouses and Industrial Risks</h3>
                        <label className="block">
                            Number and description of Goods, Lifts, Hoists or Cranes
                            <input
                                type="text"
                                name="goodsDescription"
                                value={formData.goodsDescription}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Are they insured under separate policies?
                            <select
                                name="SeparatePolicies"
                                value={formData.SeparatePolicies}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <label className="block">
                            If not, do you require Third Party Cover under this Insurance?
                            <select
                                name="thirdPartyCover"
                                value={formData.thirdPartyCover}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>
                        <label className="block">
                            By whom are they inspected?
                            <input
                                type="text"
                                name="inspectedBy"
                                value={formData.inspectedBy}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Are any of the cranes or hoists in the public thoroughfare?
                            <select
                                name="thoroughfare"
                                value={formData.thoroughfare}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            Particulars of Trap doors, Cellar aps or other openings in oor or pavements.
                            <input
                                type="text"
                                name=" trapdoors"
                                value={formData.trapdoors}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <h3 className="font-bold text-gray-800">Restaurants and Clubs</h3>
                        <label className="block">
                            State seating capacity in restaurant
                            <input
                                type="text"
                                name="seatingCapacity"
                                value={formData.seatingCapacity}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            State nature of club
                            <input
                                type="text"
                                name="natureOfClub"
                                value={formData.natureOfClub}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Number of Members
                            <input
                                type="text"
                                name="numberofmembers"
                                value={formData.numberofmembers}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <h3 className="font-bold text-gray-800"> Theaters, Concerts, Public halls and  all places of Amusement</h3>
                        <label className="block">
                            State the capacity of Theatre, Hall, etc. (In number of persons)
                            <input
                                type="text"
                                name="theatre"
                                value={formData.theatre}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Are refreshments served?
                            <select
                                name="refreshments"
                                value={formData.refreshments}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            If so, is the service under your own management?
                            <select
                                name="management"
                                value={formData.management}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            What side shows or other entertainments are provided?
                            <input
                                type="text"
                                name="entertainments"
                                value={formData.entertainments}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <h3 className="font-bold text-gray-800">Schools</h3>
                        <label className="block">
                            Give description (Day, Boarding, Private, etc.)
                            <input
                                type="text"
                                name="schoolDescription"
                                value={formData.schoolDescription}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Number of Pupils
                            <input
                                type="text"
                                name="numberOfPupils"
                                value={formData.numberOfPupils}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <h3 className="font-bold text-gray-800">General Information (Applicable to all the above)</h3>
                        <label className="block">
                            Indemnity for any one accident  GH¢
                            <input
                                type="text"
                                name="indemnity"
                                value={formData.indemnity}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Food poisoning - do you desire the risk of ptomaine poisoning to be included?
                            <select
                                name="foodPoisoning"
                                value={formData.foodPoisoning}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            What machinery have you with which persons not in your service can come into contact, and what is the motive power?                            <input
                                type="text"
                                name="machineryDetails"
                                value={formData.machineryDetails}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Do you use or store any explosives, chemical, chemical gases or radioactive substances?                            <select
                                name="explosivesUsage"
                                value={formData.explosivesUsage}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            Do you employ sub-contractors?
                            <select
                                name="subContractors"
                                value={formData.subContractors}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            If you wish for the policy to be extended to indemnify you for your liability, please state estimated annual contract prices
                            of sub-contracts.
                            <input
                                type="text"
                                name="contractPrices"
                                value={formData.contractPrices}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Have any claims been made upon you by persons not in your employment?
                            <select
                                name="employment"
                                value={formData.employment}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            If yes, give particulars
                            <input
                                type="text"
                                name="particulars"
                                value={formData.particulars}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Are you at present Insured, or have you ever proposed for an insurance in respect of this risk?                             <select
                                name="presentInsured"
                                value={formData.presentInsured}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            If yes, give name of the Company
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Has any such proposal been:
                            <div className="flex space-x-4">
                                <label>
                                    <input
                                        type="radio"
                                        name="proposalStatus"
                                        value="Declined"
                                        checked={formData.proposalStatus === 'Declined'}
                                        onChange={(e) =>
                                            setFormData({ ...formData, proposalStatus: e.target.value })
                                        }
                                    />
                                    Declined
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="proposalStatus"
                                        value="Withdrawn"
                                        checked={formData.proposalStatus === 'Withdrawn'}
                                        onChange={(e) =>
                                            setFormData({ ...formData, proposalStatus: e.target.value })
                                        }
                                    />
                                    Withdrawn
                                </label>
                            </div>

                        </label>

                        <label className="block">
                            Has any Company or Underwriter at any time:
                            <div className="space-y-2">
                                <div>
                                    Refused to renew:
                                    <select
                                        name="refusedRenewal"
                                        value={formData.refusedRenewal}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-[5px]"
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div>
                                    Cancelled your policy:
                                    <select
                                        name="policyCancelled"
                                        value={formData.policyCancelled}
                                        onChange={handleChange}
                                        className="w-full p-2 border rounded-[5px]"
                                    >
                                        <option value="">Select</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>
                        </label>

                        <label className="block">
                            Required and increased premium at renewal
                            <select
                                name="premium"
                                value={formData.premium}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            Do you have any other Policy with the Company?
                            <select
                                name="policy"
                                value={formData.policy}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            If yes, give details
                            <input
                                type="text"
                                name="nature"
                                value={formData.nature}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Do you undertake work elsewhere than on your premises?
                            <select
                                name="otherWork"
                                value={formData.otherWork}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            If yes, state fully its nature and whether you require cover:
                            <input
                                type="text"
                                name="workDetails"
                                value={formData.workDetails}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Estimated annual amount of wages and salaries paid to employees and number of employees
                            (excluding clerical staff).  GH¢
                            <input
                                type="text"
                                name="annualamount"
                                value={formData.annualamount}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            No. of employees
                            <input
                                type="text"
                                name="numberofemployees"
                                value={formData.numberofemployees}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Estimated annual earnings of any Principal Director or Partner who will engage in manual labour?  GH¢
                            <input
                                type="text"
                                name="principal"
                                value={formData.principal}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            No. of Directors/ Partners
                            <input
                                type="text"
                                name="numberofpartners"
                                value={formData.numberofpartners}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <h3 className="font-bold text-gray-800">DECLARATION</h3>
                        <p className='text-gray-800'>
                            I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory
                            and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and
                            DOSH Risk and I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the
                            Premium thereon.
                        </p>

                        <label className="block">
                            Date
                            <input
                                type="date"
                                name="Date"
                                value={formData.Date}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Agency
                            <input
                                type="text"
                                name="agency"
                                value={formData.agency}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Code Number
                            <input
                                type="text"
                                name="codenumber"
                                value={formData.codenumber}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>
                        <label className="block">
                            Signature
                            <input
                                type="file"
                                name="signature"
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-[#b5996e] text-white py-2 rounded-[5px] hover:bg-[#7b6441]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PublicLiability;
