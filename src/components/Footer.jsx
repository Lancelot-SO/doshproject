import React from 'react'
import logo from "../images/dosh-footer-logo.png";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import bg from "../images/footer-bg.png";
//




const Footer = () => {
    return (
        <div className='main__footer'>
            <img src={bg} alt='footerbg' />

            <footer>
                <div className='container footer__container'>
                    <div className='contact__logo2'>
                        <div className='footer__logo'>
                            <img src={logo} alt='dosh-logo' />
                        </div>
                        <div className='footer__text'>
                            <p>8 Sir Arku Korsah <br /> Rd. Airport <br />Residential Area <br />Accra, Ghana</p>
                        </div>
                        <div className='contacts'>
                            <h3>    CONTACTS</h3>
                            <div className='location'>
                                <p>Phone: 0800-DOSH-ME</p>
                                <p>Fax: 0800-DOSH-ME</p>
                                <Link to="/contact">Online Support</Link>
                            </div>
                        </div>
                    </div>
                    <div className='socials'>
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

            </footer>
            <div className='footer__gold'></div>
            <div className='container copyright'>
                <p>Powered by OPIN Technologies ®</p>
            </div>
        </div>
    )
}

export default Footer
