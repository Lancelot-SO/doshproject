import React from 'react';

const PrivacyPolicy = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 overflow-y-auto h-[90vh]">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute lg:top-4 top-0 right-4 text-gray-500 hover:text-gray-800 text-4xl focus:outline-none"
                    aria-label="Close privacy policy"
                >
                    &times;
                </button>

                {/* Content */}
                <div className="text-gray-700 space-y-6">
                    <h2 className="text-2xl font-bold mb-4">DOSH Privacy Statement</h2>
                    <p>
                        DOSH values your privacy and is committed to protecting your personal information.
                        This Privacy Statement explains how we collect, use, and safeguard your data when you visit our
                        website or use our services.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
                        <p>
                            We may collect personal information such as your name, contact details, financial data, and
                            other information you provide directly to us.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">How We Use Your Information</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Provide and improve our services</li>
                            <li>Personalize your experience</li>
                            <li>Process transactions securely</li>
                            <li>Communicate important updates</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Data Sharing</h3>
                        <p>
                            We do not sell your personal information. We may share data with trusted partners for
                            operational purposes, always ensuring robust confidentiality agreements.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
                        <p>
                            You have the right to access, correct, or delete your personal data. You may also opt out of
                            certain data processing activities by contacting us.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Data Security</h3>
                        <p>
                            We implement industry-standard measures to protect your data from unauthorized access,
                            alteration, or loss.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                        <p>
                            For questions or concerns regarding your privacy, contact us at:
                        </p>
                        <p>Phone: <span className="font-medium">0800367463 (0800-DOSH-ME)</span></p>
                        <p>
                            Email: <a href="mailto:Helpdesk@0800dosh.me" className="text-[#A2865F]">Helpdesk@0800dosh.me</a>
                        </p>
                        <p>Fax: <span className="font-medium">0800367463</span></p>
                        <p>
                            By using our website, you consent to the terms of this Privacy Statement. Updates will be
                            posted here as needed.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
