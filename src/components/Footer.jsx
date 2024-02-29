import React from 'react'
import logo from "../images/dosh_logo.png";
import { MdLocationOn } from "react-icons/md";
import { FaMobileAlt, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
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
                                        <h4>000-Dash-Me</h4>
                                    </div>
                                    <div className='footer__icon-text3'>
                                        <IoIosMail />
                                        <h4>000-Dash-Me</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='social__icons'>
                                <FaTwitter size={24} />
                                <FaFacebook size={24} />
                                <FaLinkedin size={24} />
                                <FaInstagram size={24} />
                                <FaYoutube size={24} />
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
