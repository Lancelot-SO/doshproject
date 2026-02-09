import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from "../../images/theft.png";
import formlogo from "../../images/formlogo.png";

const TheftInsurance = ({ onClose, userData }) => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        declarationDate: "",
        agency: "",
        message: "",
        signature: "",
        firstname: '',
        middlename: '',
        lastname: '',
    });

    // (Optional) prefill user data
    useEffect(() => {
        if (userData) {
            setFormData(fd => ({
                ...fd,
                firstname: userData.firstname || '',
                middlename: userData.middlename || '',
                lastname: userData.lastname || '',
            }));
        }
    }, [userData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fd => ({ ...fd, [name]: value }));
    };

    const handleFileChange = e => {
        const file = e.target.files[0];
        setFormData(fd => ({
            ...fd,
            signature: file ? file.name : ""
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        // build payload
        const payload = {
            emailType: "theftInsurance",
            ...formData
        };

        try {
            const res = await fetch('/send-email.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            const json = await res.json();
            if (json.status === 'success') {
                toast.success(json.message);
                setFormData({
                    declarationDate: "",
                    agency: "",
                    message: "",
                    signature: "",
                    firstname: '',
                    middlename: '',
                    lastname: '',
                });
                formRef.current.reset();
                setTimeout(onClose, 6000);
            } else {
                toast.error(json.message);
            }
        } catch (err) {
            console.error(err);
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
            />
            <div className="bg-white w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-h-[90vh] rounded-lg shadow-lg flex overflow-hidden">
                {/* Left Side */}
                <div className="hidden md:flex w-1/2 flex-col">
                    <img src={image} alt="Theft Insurance" className="w-full h-full object-cover" />
                    <div className="p-4 bg-black text-white">
                        <img src={formlogo} alt="Logo" className="w-28 mb-2" />
                        <h2 className="font-bold text-lg">Theft Insurance</h2>
                        <p className="text-sm">Cover your property against theft.</p>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-6 relative overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>
                    <h2 className="text-2xl font-semibold mb-4 text-black">Theft Insurance Request</h2>
                    <p className="mb-4 text-black">Please fill out the declaration below.</p>

                    <form ref={formRef} onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 text-black">
                        {/* Personal Details */}
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium">
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
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium">
                                Middle Name
                            </label>
                            <input
                                type="text"
                                id="middlename"
                                name="middlename"
                                value={formData.middlename}
                                onChange={handleChange}
                                required
                                placeholder="Enter middle name"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="fullname" className="block text-sm font-medium">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                placeholder="Enter last name"
                                className="w-full mt-1 p-3 border rounded-[5px] text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <label className="block">
                            Declaration Date
                            <input
                                type="date"
                                name="declarationDate"
                                value={formData.declarationDate}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </label>

                        <label className="block">
                            Agency
                            <input
                                type="text"
                                name="agency"
                                value={formData.agency}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border rounded"
                            />
                        </label>

                        <label className="block">
                            Signature (upload file)
                            <input
                                type="file"
                                name="signatureFile"
                                onChange={handleFileChange}
                                className="w-full p-2 border rounded"
                            />
                        </label>

                        <label className="block">
                            Request Details
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                minLength={15}
                                required
                                className="w-full p-2 border rounded resize-none"
                                placeholder="Enter a message"
                            />
                        </label>

                        <button
                            type="submit"
                            className="w-full bg-[#b5996e] text-white py-2 rounded hover:bg-[#a28253]"
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