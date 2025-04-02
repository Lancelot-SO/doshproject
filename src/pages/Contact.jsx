import React, { useEffect, useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from '../images/doshContact.png';
import logo from '../images/dosh_logo.png';
import contactImage from '../images/contactImage.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const form = useRef();
    // const [contactData, setContactData] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_50j5zce', 'template_us60peo', form.current, {
                publicKey: 'od2vIhbdFel9_otjO',
                from_name: 'DOSH',
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                },
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                }
            );
        e.target.reset();
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="cont">
            <ToastContainer />
            <div className="contact__head">
                <img data-aos="fade-down" src={contact} alt="about" loading="lazy" />
                <div className="contact__text">
                    <p>Contact Us</p>
                </div>
            </div>

            <div className="dosh-main-container">
                <div className="dosh-form-container">
                    <form ref={form} onSubmit={sendEmail} className="dosh-form-card">
                        <div className="dosh-form">
                            <div className="dosh-label-input">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    name="firstname"
                                    className="dosh-first"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>
                            <div className="dosh-label-input">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    name="lastname"
                                    className="dosh-last"
                                    placeholder="Enter your last name"
                                    required
                                />
                            </div>
                        </div>
                        <div className="dosh-label-input">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                className="dosh-email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        <div className="dosh-label-input">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="telephone"
                                className="dosh-phone"
                                placeholder="223 456 7890"
                                required
                            />
                        </div>

                        <div className="dosh-label-input">
                            <label>Region</label>
                            <select name="city" className="dosh-select">
                                <option>--Select a region--</option>
                                <option>Ahafo</option>
                                <option>Ashanti</option>
                                <option>Bono</option>
                                <option>Bono East</option>
                                <option>Central</option>
                                <option>Eastern</option>
                                <option>Greater Accra</option>
                                <option>Northern</option>
                                <option>North East</option>
                                <option>Oti</option>
                                <option>Savannah</option>
                                <option>Upper East</option>
                                <option>Upper West</option>
                                <option>Volta</option>
                                <option>Western</option>
                                <option>Western North</option>
                            </select>
                        </div>

                        <div className="dosh-label-input">
                            <label>Message</label>
                            <textarea
                                type="text"
                                name="message"
                                className="dosh-textarea"
                                placeholder="Type your message here"
                                required
                            ></textarea>
                        </div>

                        <div className="dosh-button">
                            <button type="submit">SEND MESSAGE</button>
                        </div>

                        <img src={logo} alt="logo" className="dosh-contact-logo" />
                    </form>
                    <div className="dosh-contact-image">
                        <img src={contactImage} alt="dosh" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
