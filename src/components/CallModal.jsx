import React, { useRef } from 'react'
import caller from "../images/caller.png"
import { BsPerson } from "react-icons/bs";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";



const CallModal = ({ onClose }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
    return (
        <div>
            <div ref={modalRef} onClick={closeModal} className='call-modal'>
                <div className='call__modal-content'>
                    <div className='call-left'>
                        <img src={caller} alt='caller' />
                    </div>
                    <div className='call-right'>
                        <button type="button" onClick={onClose} className="call-close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="call__modal-body">
                            <p className='call-head'>Request a call back</p>
                            <span>Thanks for your interest in our service. Please provide details to assists reach out to you.</span>
                            <form>
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
                                    <label for="phoneNumber">Enter Phone Number</label>
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
                                    <button type="button" className="request">Send Request</button>
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
