import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import image from "../../images/theft.png";
import formlogo from "../../images/formlogo.png";
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';

const TheftInsurance = ({ onClose }) => {
    const [formData, setFormData] = useState({
        declarationDate: "",
        agency: "",
        signature: "",
    });

    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            signature: file ? file.name : "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceID = 'service_tz2kkqc';
        const templateID = 'template_cds3i3k';
        const publicKey = 'aV-FvEfOZg7fbxTN2';

        emailjs.sendForm(
            serviceID,
            templateID,
            formRef.current,
            publicKey
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Form submitted successfully!');

                setFormData({
                    declarationDate: "",
                    agency: "",
                    signature: "",
                });

                e.target.reset();
            })
            .catch((err) => {
                console.error('FAILED...', err);
                toast.error('Failed to submit form. Please try again.');
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 text-gray-800">
            <div className="bg-white w-full mt-16 sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[90vh] rounded-[20px]-lg shadow-lg flex overflow-hidden">


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

                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-[#9E825B] text-white rounded-full w-8 h-8 flex items-center justify-center"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>

                    <h2 className="text-2xl font-semibold mb-4">
                        Household Content Insurance Proposal Request
                    </h2>

                    {/* 6. Attach formRef, onSubmit, and use encType for file upload */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        encType="multipart/form-data"
                    >
                        <p className='text-red-500'>
                            Note: The Policy will not cover deeds, bonds, bills of exchange, ...
                        </p>
                        <h2 className="text-xl font-semibold mb-4">Declaration</h2>
                        <p className="mb-4">
                            I warrant that the above statements and particulars are true ...
                        </p>

                        {/* Declaration Date */}
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
                                className="mt-1 p-2 border rounded-[20px] w-full"
                            />
                        </div>

                        {/* Signature as file */}
                        <div>
                            <label className="block font-medium" htmlFor="signature">
                                Signature
                            </label>
                            <input
                                type="file"
                                id="signature"
                                name="signature"         // Must match your EmailJS placeholder {{signature}}
                                onChange={handleFileChange}
                                className="mt-1 p-2 border rounded-[20px] w-full"
                            // We do NOT do: value={formData.signature} for file inputs
                            />
                        </div>

                        {/* Agency */}
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
                                className="mt-1 p-2 border rounded-[20px] w-full"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#a58b63] text-white p-2 rounded w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TheftInsurance;
