import React from 'react'
import { FaTimes } from 'react-icons/fa'

const PrivacyPolicy = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center rounded-[25px] bg-black bg-opacity-50 z-50">
            <div
                className="relative bg-cover bg-center w-[386px] h-[440px] p-6 rounded-[25px]"
                style={{
                    borderImageSource: 'linear-gradient(135.59deg, rgba(88, 130, 193, 0.49) 1.28%, rgba(88, 130, 193, 0.11) 96.26%)',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60 rounded-[25px]"></div>
                <button className="absolute top-4 right-4 text-white text-[32px] font-bold" onClick={onClose}>
                    &times;
                </button>
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="no-scrollbar bg-white text-black p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto relative mt-8">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            aria-label="Close privacy policy"
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">DOSH Services Ghana Limited Privacy Statement</h2>
                        <p className="mb-4">DOSH Services Ghana Limited values your privacy and is committed to protecting your personal information.
                            This Privacy Statement explains how we collect, use, and safeguard your data when you visit our website or use our services.</p>
                        <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
                        <p className="mb-4">We may collect personal information such as your name, contact details, financial data, and other information you provide directly to us.</p>
                        <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
                        <p className="mb-4">We use your information to:</p>
                        <ul className="list-disc pl-5 mb-4">
                            <li>Provide and improve our services</li>
                            <li>Personalize your experience</li>
                            <li>Process transactions securely</li>
                            <li>Communicate important updates</li>
                        </ul>
                        <h3 className="text-xl font-semibold mb-2">Data Sharing</h3>
                        <p className="mb-4">We do not sell your personal information. We may share data with trusted partners for operational purposes, always ensuring robust confidentiality agreements.</p>
                        <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
                        <p className="mb-4">You have the right to access, correct, or delete your personal data. You may also opt out of certain data processing activities by contacting us.</p>
                        <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                        <p className="mb-4">We implement industry-standard measures to protect your data from unauthorized access, alteration, or loss.</p>
                        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                        <p className="mb-4">For questions or concerns regarding your privacy, email us at Phone: 0800-DOSH-ME, Fax: 0800-DOSH-ME</p>
                        <p className="mb-4">By using our website, you consent to the terms of this Privacy Statement. Updates will be posted here as needed.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy