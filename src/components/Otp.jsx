import React, { useState } from 'react';
import "./Otp.css";
import sphoto from "../images/sphoto.png";
import SignIn from './SignIn';

const Otp = ({ onClose }) => {

    const [showSignInModal, setShowSignInModal] = useState(false)

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value) || value === '') { // Allow only digits
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Focus on the next input if value is not empty and it's not the last input
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    return (
        <div className='otp__modal'>
            <div className='otp__content'>
                <div className='otp__left'>
                    <img src={sphoto} alt='otp' />
                </div>
                <div className='otp__right'>
                    <div className='otp__card'>
                        <div className='otp__enter'>
                            <h1>Enter OTP</h1>
                            <button onClick={onClose} className='otp__close'>X</button>
                        </div>
                        <span>
                            A 6 digit code has been sent to
                            +233 9995380399
                        </span>
                        <div className='otp__area'>
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        className='otp__input'
                                        type='text'
                                        name='otp'
                                        maxLength="1"
                                        key={index}
                                        id={`otp-input-${index}`}
                                        value={data}
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                );
                            })}
                        </div>

                        <div onClick={() => setShowSignInModal(true)} className='otp__login'>
                            Login
                        </div>
                        {showSignInModal && <SignIn onClose={() => setShowSignInModal(false)} />}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Otp;
