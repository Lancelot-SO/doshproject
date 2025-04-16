import React, { useState } from 'react'
import logo from "../images/dosh-footer-logo.png"
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaTimes } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import bg from "../images/footer-bg.png"
import "../App.css"

const Footer = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)

    const togglePrivacyPolicy = () => {
        setShowPrivacyPolicy(!showPrivacyPolicy)
    }

    return (
        <div className='main__footer'>
            <img src={bg} alt='footerbg' className='bg_image' />

            <footer>
                <div className='container footer__container'>
                    <div className='contact__logo2'>
                        <div className='footer__logo'>
                            <img src={logo} alt='dosh-logo' />
                        </div>
                        <div className='footer__text'>
                            <Link to="https://maps.app.goo.gl/d7qvqRwCwEeuM5Le6"
                                target='_blank' rel="noopener noreferrer"
                            >
                                <p>10 MIREKU WE <br className='flex' />LP, Dansoman-Accra <br className='flex' />GA-504-4280 </p>
                            </Link>
                        </div>
                        <div className='contacts'>
                            <h3>CONTACTS</h3>
                            <div className='location'>
                                <p>Phone: 0800-DOSH-ME (0800367463)</p>
                                <p>Fax: 0800-DOSH-ME (0800367463)</p>
                                <Link to="/contact">Online Support</Link>
                                <p className='text-white cursor-pointer hover:text-[#987c55]' onClick={togglePrivacyPolicy}>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                    <div className='socials'>
                        <Link to='https://x.com/dosh_revolution?s=21&t=-BrXbfatLtONPkJKS4q8HQ' target="_blank" rel="noopener noreferrer">
                            <FaXTwitter size={24} />
                        </Link>
                        <Link to='https://www.facebook.com/DOSH.Revolution?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={24} />
                        </Link>
                        <Link to='https://www.linkedin.com/company/dosh-revolution/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={24} />
                        </Link>
                        <Link to='https://www.instagram.com/dosh_revolution?igsh=MXQ3Z2d6aTMxMHA3ZA%3D%3D&utm_source=qr' target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} />
                        </Link>
                        <Link to='https://youtube.com/@DOSHRevolution?si=H6MOS8Wj6Se8eegI' target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={24} />
                        </Link>
                        <Link to='https://www.tiktok.com/@dosh.revolution?_t=8kJif6YpYMX&_r=1' target="_blank" rel="noopener noreferrer">
                            <FaTiktok size={24} />
                        </Link>
                    </div>
                </div>
            </footer>
            <div className='footer__gold'></div>
            <div className='copyright'>
                <p>Powered by OPIN Technologies ®</p>
            </div>

            {showPrivacyPolicy && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="no-scrollbar bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto relative mt-8">
                        <button
                            onClick={togglePrivacyPolicy}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            aria-label="Close privacy policy"
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">DOSH Privacy Statement</h2>
                        <p className="mb-4">DOSH values your privacy and is committed to protecting your personal information.
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
                        <p className="mb-4">For questions or concerns regarding your privacy, contact us at:</p>
                        <p>Phone: 0800367463 (0800-DOSH-ME)</p>
                        <p className='text-[#987c55]'>Email: <a href="mailto:Helpdesk@0800dosh.me">Helpdesk@0800dosh.me</a></p>
                        <p>Fax: 0800367463</p>
                        <p className="mb-4">By using our website, you consent to the terms of this Privacy Statement. Updates will be posted here as needed.</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer