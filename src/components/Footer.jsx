import React from 'react'
import logo from "../images/dosh_logo.png";
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
//




const Footer = () => {
    return (
        <div>
            <div className='footer__gold'></div>
            <footer>
                <div className='container footer__container'>
                    <div className='footer__logo'>
                        <Link to='/' className='nav__logo'>
                            <img src={logo} alt='navbar logo' />
                        </Link>
                        <div className='footer__contacts'>
                            <div className='footer__icon-texts'>
                                <div className='footer__icon-text1'>
                                    <MdLocationOn size={30} />
                                    <h4>8 Sir Arku Korsah, Rd Airport,
                                        Residential Area  Accra, Ghana</h4>
                                </div>
                                <div>
                                    <div className='footer__icon-text2'>
                                        <FaMobileAlt />
                                        <h4>0800-DOSH-ME</h4>
                                    </div>
                                    <div className='footer__icon-text3'>
                                        <IoIosMail />
                                        <h4>info@0800dosh.me</h4>
                                    </div>
                                    <div className='footer__icon-text3'>
                                        <FaWhatsapp />
                                        <h4>+1 (203) 293-9850</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='social__icons'>
                                <Link to='https://x.com/dosh_revolution?s=21&t=-BrXbfatLtONPkJKS4q8HQ' target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={24} />
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

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
