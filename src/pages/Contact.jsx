import React from 'react'
import caller from "../images/caller.png"
import "./Contact.css"
const Contact = () => {
    return (
        <div>
            <div className='contact'>
                <div className='contact__content'>
                    <div className='call'>
                        <img src={caller} alt='caller' loading='lazy' />
                        <div className="call__modal-body">
                            <p className='call-head'>Send Us A Message</p>
                            <form>
                                <div className="">
                                    <div className="input-group">

                                        <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Full Name" required />
                                    </div>
                                </div>

                                <div className="">
                                    <div className="input-group">

                                        <input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" required />
                                    </div>
                                </div>

                                <textarea id="message" name="message" className='textarea' rows="4" placeholder="Enter your message here"></textarea>


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

export default Contact
