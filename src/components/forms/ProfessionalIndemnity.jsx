import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import image from "../../images/prof.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';

const ProfessionalIndemnity = ({ onClose }) => {
    const formRef = useRef();

    const [formData, setFormData] = useState({
        firmName: '',
        address: '',
        establishmentYear: '',
        profession: '',
        staffCount: '',
        indemnityRequired: '',
        libelSlander: '',
        lossOfDocument: '',
        previousInsuranceIssues: '',
        professionally: '',
        others: '',
        typist: '',
        previousClaims: '',
        awareOfClaim: '',
        awareOfClaimDetails: '',
        signature: '',
        agency: '',
        date: '',
        directors: [
            { name: '', qualification: '', dateObtained: '', practiceDuration: '' }
        ]
    });


    // Handle text/radio/select changes for simple fields
    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }));
    };

    // Handle changes in the directors array
    const handleDirectorChange = (index, field, value) => {
        const updatedDirectors = [...formData.directors];
        updatedDirectors[index][field] = value;
        setFormData((prev) => ({ ...prev, directors: updatedDirectors }));
    };

    const addDirector = () => {
        setFormData((prev) => ({
            ...prev,
            directors: [
                ...prev.directors,
                { name: '', qualification: '', dateObtained: '', practiceDuration: '' }
            ]
        }));
    };

    // A separate handler for file input (signature)
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // We'll store the file name in state if we want to display it or keep track
        setFormData((prev) => ({
            ...prev,
            signature: file ? file.name : ''
        }));
    };

    // 3. On submit, send via EmailJS
    const handleSubmit = (e) => {
        e.preventDefault();

        // (A) Build a single string out of the directors array so it prints “one by one” in the email
        const directorsFormatted = formData.directors.map((director, idx) => {
            return `Director #${idx + 1}:
            Name: ${director.name}
            Qualification: ${director.qualification}
            Date Obtained: ${director.dateObtained}
            Practice Duration: ${director.practiceDuration}`;
        }).join('\n\n');

        // (B) We can insert that into a hidden field so "sendForm" picks it up
        const directorsInput = document.getElementById('directorsData');
        directorsInput.value = directorsFormatted;

        // (C) Call emailjs.sendForm
        // Replace with your actual EmailJS values
        const serviceID = 'service_fpajktb';
        const templateID = 'template_kqj714r';
        const publicKey = 'aV-FvEfOZg7fbxTN2';

        emailjs.sendForm(
            serviceID,
            templateID,
            formRef.current,  // the form DOM node
            publicKey
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Form submitted successfully!');

                // Reset local state
                setFormData({
                    firmName: '',
                    address: '',
                    establishmentYear: '',
                    profession: '',
                    staffCount: '',
                    indemnityRequired: '',
                    libelSlander: '',
                    lossOfDocument: '',
                    previousInsuranceIssues: '',
                    professionally: '',
                    others: '',
                    typist: '',
                    previousClaims: '',
                    awareOfClaim: '',
                    awareOfClaimDetails: '',
                    signature: '',
                    agency: '',
                    date: '',
                    directors: [
                        { name: '', qualification: '', dateObtained: '', practiceDuration: '' }
                    ]
                });

                // Also reset the DOM form fields
                e.target.reset();
                setTimeout(() => onClose(), 5000);

            })
            .catch((err) => {
                console.error('FAILED...', err);
                toast.error('Failed to submit form. Please try again.');
            });
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
                        className="absolute top-4 right-2 text-[#687588] font-bold rounded-full w-6 h-6 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                    <h2 className="text-xl font-bold mb-4">Enterprise Professional Indemnity Request</h2>
                    <p>Please kindly fill out the form fields below.</p>


                    {/* 4. Use formRef, encType for file uploads */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        encType="multipart/form-data"
                    >
                        {/* Hidden input to store directors one-by-one string */}
                        <input
                            type="hidden"
                            name="directors"       // must match {{directors}} in template
                            id="directorsData"
                        />

                        {/* Name Of Firm */}
                        <label className="block">
                            Name Of Firm:
                            <input
                                type="text"
                                name="firmName"
                                value={formData.firmName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Address(es):
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-[5px]"
                            ></textarea>
                        </label>

                        <label className="block">
                            When Was The Firm Established?
                            <input
                                type="text"
                                name="establishmentYear"
                                value={formData.establishmentYear}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            State Firm’s Profession
                            <input
                                type="text"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        {/* Directors/Partners */}
                        <h3 className="text-lg font-semibold mt-4">Directors/Partners</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-white">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="border p-2">Directors/Partners</th>
                                        <th className="border p-2">Qualifications</th>
                                        <th className="border p-2">Date Obtained</th>
                                        <th className="border p-2">How Long In Practice?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {formData.directors.map((director, index) => (
                                        <tr key={index}>
                                            <td className="border">
                                                <input
                                                    type="text"
                                                    value={director.name}
                                                    onChange={(e) => handleDirectorChange(index, 'name', e.target.value)}
                                                    className="w-full p-2 border rounded-[5px]"

                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    value={director.qualification}
                                                    onChange={(e) => handleDirectorChange(index, 'qualification', e.target.value)}
                                                    className="w-full p-2 border rounded-[5px]"

                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="date"
                                                    value={director.dateObtained}
                                                    onChange={(e) => handleDirectorChange(index, 'dateObtained', e.target.value)}
                                                    className="w-full p-2 border rounded-[5px]"
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    value={director.practiceDuration}
                                                    onChange={(e) => handleDirectorChange(index, 'practiceDuration', e.target.value)}
                                                    className="w-full p-2 border rounded-[5px]"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                type="button"
                                onClick={addDirector}
                                className="mt-2 bg-[#b5996e] text-white p-2 rounded-[5px] hover:bg-[#77603d]"
                            >
                                Add Another Director
                            </button>
                        </div>

                        <label className="block">
                            Total Number of Staff:
                            <input
                                type="number"
                                name="staffCount"
                                value={formData.staffCount}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Professionally Qualified
                            <input
                                type="number"
                                name="professionally"
                                value={formData.professionally}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Others
                            <input
                                type="number"
                                name="others"
                                value={formData.others}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Typist And Office Boys
                            <input
                                type="number"
                                name="typist"
                                value={formData.typist}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Total Indemnity Required (Inclusive Of Any Extensions)
                            <input
                                type="text"
                                name="indemnityRequired"
                                value={formData.indemnityRequired}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <p>If Available Does The Firm Require: Insert ‘Yes’ Or ‘No’</p>
                        <label className="block">
                            Libel and Slander Extension:
                            <select
                                name="libelSlander"
                                value={formData.libelSlander}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            Loss of Document Extension:
                            <select
                                name="lossOfDocument"
                                value={formData.lossOfDocument}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        <label className="block">
                            Has Any Application For Insurance Of This Nature ... (Declined/Cancelled/etc.)?
                            <textarea
                                name="previousInsuranceIssues"
                                value={formData.previousInsuranceIssues}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            ></textarea>
                        </label>

                        <label className="block">
                            Have Any Claim Ever Been Made ... ?
                            <textarea
                                name="previousClaims"
                                value={formData.previousClaims}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            ></textarea>
                        </label>

                        <label className="block">
                            Are Any Of The Partners/directors ... Aware Of A Circumstance Likely To Give Rise To A Claim?
                            <select
                                name="awareOfClaim"
                                value={formData.awareOfClaim}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </label>

                        {formData.awareOfClaim === 'Yes' && (
                            <label className="block">
                                If So Please, Give Full Particulars.
                                <textarea
                                    name="awareOfClaimDetails"
                                    value={formData.awareOfClaimDetails}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-[5px]"
                                ></textarea>
                            </label>
                        )}

                        <h2 className="text-xl font-semibold mb-4">Declaration</h2>
                        <p className="mb-4">
                            I warrant that the above statements and particulars are true...
                        </p>

                        <label className="block">
                            Date:
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Agency:
                            <input
                                type="text"
                                name="agency"
                                value={formData.agency}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <label className="block">
                            Signature (Typed Name/File):
                            <input
                                type="file"
                                name="signature"
                                onChange={handleFileChange}    // separate handler for files
                                className="w-full p-2 border rounded-[5px]"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-[#b5996e] text-white p-2 rounded-[5px] hover:bg-[#766140]"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalIndemnity;
