import React, { useRef } from 'react';
import caller from "../images/caller.png";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CallModal = ({ onClose }) => {
    const modalRef = useRef();
    const formRef = useRef();


    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.fullName.value,
            phone: e.target.phoneNumber.value,
            time: e.target.hour.value,
        };

        console.log('📤 Sending form data:', formData);

        try {
            const response = await fetch('/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json(); // parse the PHP JSON response

            if (result.status === 'success') {
                console.log('✅ Response:', result);
                toast.success(result.message || 'Message sent successfully!');
                e.target.reset();
            } else {
                console.error('❌ Failed:', result);
                toast.error(result.message || 'Failed to send message.');
            }
        } catch (error) {
            console.error('⚠️ Error:', error);
            toast.error('An error occurred. Please try again.');
        }
    };



    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

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
                            <form ref={formRef} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label htmlFor="fullName">Enter Full Name</label>
                                    <div className="input-group">
                                        <div className="input-icon">
                                            <BsPerson className='call-icon' />
                                        </div>
                                        <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Full Name" required />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <div className="input-group">
                                        <div className="input-icon">
                                            <HiOutlineDevicePhoneMobile className='call-icon' />
                                        </div>
                                        <input type="tel" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="Phone Number" required />
                                    </div>
                                </div>

                                <div className="time-group">
                                    <label htmlFor="hour">Preferred Time</label>
                                    <input type="time" id="hour" name="hour" className="time-control" required />
                                </div>

                                <div>
                                    <button type="submit" className="request">Send Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallModal;
