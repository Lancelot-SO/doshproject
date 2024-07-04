import React, { useEffect, useState } from 'react';
import login from "../images/login-image.png";
import { IoMdRefresh } from "react-icons/io";
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const [captcha, setCaptcha] = useState('');
    const [userInput, setUserInput] = useState('');
    const [selectedRadio, setSelectedRadio] = useState(null);
    const [isValidCaptcha, setIsValidCaptcha] = useState(null);

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
        var sum = '';
        for (var i = 0; i < 6; i++) {
            sum += alpha[Math.floor(Math.random() * alpha.length)];
        }
        setCaptcha(sum);
        setIsValidCaptcha(null);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent form submission to handle validation
        validateCaptcha();
    };

    const validateCaptcha = () => {
        if (captcha === userInput) {
            setIsValidCaptcha(true);
            // alert("Text is valid");
            // You can add further form submission logic here
        } else {
            setIsValidCaptcha(false);
            // alert("Text is invalid");
        }
    };

    const handleRadioChange = (index) => {
        setSelectedRadio(index);
    };

    const renderInputs = () => {
        switch (selectedRadio) {
            case 0:
                return (
                    <div className='log__input'>
                        <label htmlFor='dosh'>Dosh No.</label>
                        <input type='text' name='doshnum' placeholder='Dosh Number' className='inp' />
                    </div>
                );
            case 1:
                return (
                    <div className='log__input'>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type='tel' name='phone' placeholder='Phone Number' className='inp' />
                    </div>
                );
            case 2:
                return (
                    <div className='log__input'>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' name='email' placeholder='Enter your email' className='inp' />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='main__login'>
            <img src={login} alt='login' />
            <div className='log'>
                <div className='left__log'>
                    <div className='log__card'>
                        <span className='tag'>Login to your </span>
                        <p className='dosh__account'><b>Dosh</b> Account</p>
                        <div className='log__underline'></div>
                        <div className='radio__btn'>
                            <p className='radio__tag'>Login with</p>
                            <div className='radios'>
                                <div className='radio'>
                                    {["Dosh No.", "Phone", "Email"].map((option, index) => (
                                        <div key={index}>
                                            <input type='radio' className='main__radio' name='loginOption' onChange={() => handleRadioChange(index)} checked={selectedRadio === index} />
                                            <label>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <form className='log__form' onSubmit={handleFormSubmit}>
                                    <div className='log__fin'>
                                        <label htmlFor='service'>Service type</label>
                                        <select className='select'>
                                            <option value="">Select an option</option>
                                            <option value="option1">Finance</option>
                                            <option value="option2">Insurance</option>
                                            <option value="option3">Loan</option>
                                        </select>
                                    </div>
                                    <div className='log__fin'>
                                        <label htmlFor='service'>Account type</label>
                                        <select className='select'>
                                            <option value="">Select an option</option>
                                            <option value="option1">Finance</option>
                                            <option value="option2">Insurance</option>
                                            <option value="option3">Loan</option>
                                        </select>
                                    </div>
                                    {selectedRadio !== null && renderInputs()}

                                    <div className='capture'>
                                        <div className='refresh'>
                                            <input className='gen__cap' type='text' value={captcha} readOnly />
                                            <div className='captcha'>
                                                <small>Can't See?</small>
                                                <IoMdRefresh className='refresh__icon' onClick={generateCaptcha} />
                                            </div>
                                        </div>
                                        <label htmlFor='capture'>Enter Captcha text</label>
                                        <input
                                            className={`cap ${isValidCaptcha === null ? '' : isValidCaptcha ? 'input-valid' : 'input-invalid'}`} // Apply class for border color
                                            type='text'
                                            placeholder='Type text here...'
                                            value={userInput}
                                            onChange={(e) => setUserInput(e.target.value)}
                                        />
                                    </div>
                                    <div className='form__log'>
                                        <button type='submit' className='log__btn'>Continue</button>
                                        <span>Don't have an account? <Link to='/register' className='linker__signup'>Sign up</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right__log'>
                </div>
            </div>
        </div>
    );
};

export default Login;
