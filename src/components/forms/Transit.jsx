import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import image from "../../images/transit.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';

const Transit = ({ onClose, userData }) => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        business: "",
        contact: "",
        email: "",
        period: "",
        description: "",
        packaging: "",
        containerInsured: "No",
        containerValue: "",
        propertyOwnership: "",
        itinerary: "",
        mode: "",
        conveyanceType: "",
        estimate: "",
        conveyance: "",
        accountCarrying: "",
        previousLosses: "",
        lossDetails: "",
        date: "",
        agency: "",
        message: ""
    });

    // Prefill name/contact/email if provided
    useEffect(() => {
        if (userData) {
            setFormData(fd => ({
                ...fd,
                name: userData.fullname || fd.name,
                contact: userData.phone || fd.contact,
                email: userData.email || fd.email
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fd => ({ ...fd, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const res = await fetch("/send-email.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    emailType: "transit",
                    ...formData
                })
            });
            const json = await res.json();
            if (json.status === "success") {
                toast.success(json.message || "Message sent successfully!");
                // reset
                setFormData({
                    name: "",
                    address: "",
                    business: "",
                    contact: "",
                    email: "",
                    period: "",
                    description: "",
                    packaging: "",
                    containerInsured: "No",
                    containerValue: "",
                    propertyOwnership: "",
                    itinerary: "",
                    mode: "",
                    conveyanceType: "",
                    estimate: "",
                    conveyance: "",
                    accountCarrying: "",
                    previousLosses: "",
                    lossDetails: "",
                    date: "",
                    agency: "",
                    message: ""
                });
                formRef.current.reset();
                setTimeout(onClose, 6000);
            } else {
                toast.error(json.message || "Failed to send message.");
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 lg:mt-0 mt-6 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-lg shadow-lg flex overflow-hidden">


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
                    <h2 className="text-xl font-bold mb-4">Goods In Transit Insurance Proposal Request</h2>
                    <p>Please kindly fill out the form fields below.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold">Name of Proposer (Mr/Ms/Mrs/Dr/Prof).</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Postal Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Business/Occupation</label>
                            <input type="text" name="business" value={formData.business} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Telephone/Fax</label>
                            <input type="text" name="contact" value={formData.contact} onChange={handleChange} className="w-full border p-2 rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Period of Cover Required</label>
                            <input type="text" name="period" value={formData.period} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Description of Merchandise</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">How are they packaged?</label>
                            <input type="text" name="packaging" value={formData.packaging} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">If in Containers, do you wish to insure the Container(s)?</label>
                            <select name="containerInsured" value={formData.containerInsured} onChange={handleChange} className="w-full border p-2 rounded-[5px]">
                                <option value="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>

                        {formData.containerInsured === "Yes" && (
                            <div>
                                <label className="block text-sm font-semibold">If so, what is the Value of the Container(s)</label>
                                <input type="number" name="containerValue" value={formData.containerValue} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-semibold">Are the goods your own property? or otherwise?</label>
                            <input type="text" name="propertyOwnership" value={formData.propertyOwnership} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <p className="font-bold">Details of journey involved:</p>

                        <div>
                            <label className="block text-sm font-semibold">Itinerary</label>
                            <input type="text" name="itinerary" value={formData.itinerary} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Mode of conveyance (by Road, Sea or Land)</label>
                            <input type="text" name="mode" value={formData.mode} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Means of conveyance (Owned/Hired)</label>
                            <input type="text" name="conveyanceType" value={formData.conveyanceType} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <p className="text-red-500"> (Please note that this cover excludes carriage by fare paying passenger vehicles)</p>

                        <div>
                            <label className="block text-sm font-semibold">Estimated Annual carrying during the period of insurance.</label>
                            <input type="text" name="estimate" value={formData.estimate} onChange={handleChange} className="w-full border p-2 rounded-[5px]" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold">Limit any one conveyance</label>
                            <input type="text" name="conveyance" value={formData.conveyance} onChange={handleChange} className="w-full border p-2 rounded-[5px]" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold">Do you keep proper accounts of carryings made?</label>
                            <input type="text" name="accountCarrying" value={formData.accountCarrying} onChange={handleChange} className="w-full border p-2 rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Any previous losses?</label>
                            <input type="text" name="previousLosses" value={formData.previousLosses} onChange={handleChange} className="w-full border p-2 rounded-[5px]" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Date & Place of Loss, Cause and Nature</label>
                            <textarea name="lossDetails" value={formData.lossDetails} onChange={handleChange} className="w-full border p-2 rounded-[5px]"></textarea>
                        </div>


                        <h3 className="font-bold text-gray-800">DECLARATION</h3>
                        <p className='text-gray-800'>
                            I warrant that the above statements and particulars are true and I hereby agree that this Declaration shall be held to be promissory
                            and of continuing effect and shall form the basis of and be deemed to be incorporated in the Contract between me and
                            DOSH Risk and I am willing to accept a policy subject to the Terms prescribed by the Company herein, and to pay the
                            Premium thereon.
                        </p>

                        <div>
                            <label className="block text-sm font-semibold">Date</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold">Agency</label>
                            <input type="text" name="agency" value={formData.agency} onChange={handleChange} className="w-full border p-2 rounded-[5px]" required />
                        </div>

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

                        <button type="submit" className="w-full bg-[#b5996e] text-white p-2 rounded-[5px] hover:bg-[#7d6642]">Submit</button>
                    </form>
                </div>
            </div></div>
    );
};

export default Transit;
