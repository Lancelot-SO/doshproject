import React, { useRef } from 'react'
import caller from "../images/caller.png"
import { BsPerson } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const CallModal = ({ onClose }) => {
    const modalRef = useRef();
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();


        emailjs
            .sendForm('service_rgob7xk', 'template_pwa1tyi', form.current, {
                publicKey: '6aG8jxTKE39zz493J',
                from_name: 'DOSH',
            })
            .then(
                () => {
                    toast.success('Message sent successfully!');
                },
                // eslint-disable-next-line no-unused-vars
                (error) => {
                    toast.error('Failed to send message. Please try again.');
                },
            );
        e.target.reset();
    };

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
    return (
        <div>
            <ToastContainer />
            <div ref={modalRef} onClick={closeModal} className='call-modal'>
                <div className='call__modal-content'>
                    <div className='call-left'>
                        <img src={caller} alt='caller' loading='lazy' />
                    </div>

                    <div className='call-right'>
                        <button type="button" onClick={onClose} className="call-close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="callmodal">
                            <p className='call-head'>Request a call back</p>
                            <span>Please provide your details for assistance.</span>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label for="fullName">Enter Full Name</label>
                                    <div className="input-group">
                                        <div className="input-icon">
                                            <BsPerson className='call-icon' />
                                        </div>
                                        <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Full Name" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label for="phoneNumber">Phone Number</label>
                                    <div className="input-group">
                                        <div className="input-icon">
                                            <HiOutlineDevicePhoneMobile className='call-icon' />
                                        </div>
                                        <input type="tel" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="Phone Number" required />
                                    </div>
                                </div>

                                <div className="time-group">
                                    <label for="hour">Preferred Time</label>
                                    <input type="time" id="hour" name="hour" className="time-control" required />
                                </div>

                                <div className="">
                                    <button type="submit" className="request">Send Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallModal
