import React, { useEffect } from 'react'
import "./Contact.css"
import contact from '../images/contactdosh.png'
import logo from "../images/dosh_logo.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);
    return (
        <div className='cont'>
            <div className='contact__head'>
                <img data-aos="fade-down" src={contact} alt='about' loading='lazy' />
                <div className='contact__text'>
                    <p>
                        Contact Us
                    </p>
                </div>
            </div>
            <div className='contact__main'>
                <form action='#' className='form__main'>
                    <p>Get in touch with us</p>
                    <div>
                        <div className='input__form'>
                            <input type='text' name='name' placeholder='Your name*' required />
                            <input type='email' name='email' placeholder='Email*' required />

                        </div>
                        <div className='input__form'>
                            <input type='tel' name='phone' placeholder='Phone Number*' required />
                            <input type='text' name='city' placeholder='City*' required />

                        </div>
                        <textarea name="message" rows="4" placeholder='Your Message'></textarea>
                        <div className='form__btn'>
                            <button className='submit__btn' type='submit'>Submit Message</button>
                        </div>

                    </div>
                    <div className='contact__logo'>
                        <Link to='/' className="cont__logo">
                            <img src={logo} alt='navbar logo' />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
