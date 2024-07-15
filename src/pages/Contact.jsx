import React, { useEffect } from 'react'
import "./Contact.css"
import contact from '../images/doshContact.png'
import logo from "../images/dosh_logo.png"
import contactImage from "../images/contactImage.png"

import AOS from "aos";
import "aos/dist/aos.css";

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

            <div className='dosh-main-container'>
                <div className='dosh-form-container'>
                    <form className='dosh-form-card'>
                        <div className='dosh-form'>
                            <div className='dosh-label-input'>
                                <label>First Name</label>
                                <input type='text' name='firstname' className='dosh-first' placeholder='Enter your first name' />
                            </div>
                            <div className='dosh-label-input'>
                                <label>Last Name</label>
                                <input type='text' name='lastname' className='dosh-last' placeholder='Enter your last name' />
                            </div>
                        </div>
                        <div className='dosh-label-input'>
                            <label>Email</label>
                            <input type='text' name='email' className='dosh-email' placeholder='Enter your email address' />
                        </div>
                        <div className='dosh-label-input'>
                            <label>Phone Number</label>
                            <input type='tel' name='telephone' className="dosh-phone" placeholder='223 456 7890' />
                        </div>

                        <div className='dosh-label-input'>
                            <label>City</label>
                            <select className='dosh-select'>
                                <option>--Select a city--</option>
                                <option>Accra</option>
                                <option>Accra</option>
                                <option>Kumasi</option>
                                <option>Cape Coast</option>

                            </select>
                        </div>
                        <div className='dosh-label-input'>
                            <label>Message</label>
                            <textarea type='text' name='message' className='dosh-textarea' placeholder='Type your message here'></textarea>
                        </div>

                        <div className='dosh-button'>
                            <button>SEND MESSAGE</button>
                        </div>

                        <img src={logo} alt='logo' className='dosh-contact-logo' />
                    </form>
                    <div className='dosh-contact-image'>
                        <img src={contactImage} alt='dosh' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
