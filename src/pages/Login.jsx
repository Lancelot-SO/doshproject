import React, { useEffect, useState } from 'react';
import login from "../images/login-image.png";
import { IoMdRefresh } from "react-icons/io";
import "./Login.css";
import { Link } from 'react-router-dom';
// import card from "../images/card.svg"

const Login = () => {
    const [captcha, setCaptcha] = useState('');
    const [userInput, setUserInput] = useState('');
    const [selectedRadio, setSelectedRadio] = useState(null);

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
    };

    const validateCaptcha = (e) => {

        if (captcha === userInput) {
            alert("Text is valid");
            e.preventDefault()
        } else {
            alert("Text is invalid");
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
                                    {["Dosh No.", "Phone", "Email",].map((option, index) => (
                                        <div key={index}>
                                            <input type='radio' className='main__radio' name='loginOption' onChange={() => handleRadioChange(index)} checked={selectedRadio === index} />
                                            <label>{option}</label>
                                        </div>
                                    ))}
                                </div>
                                <form className='log__form'>
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
                                            <input className='gen__cap' type='text' value={captcha} readOnly='readonly' />
                                            <div className='captcha'>
                                                <small>Can't See?</small>
                                                <IoMdRefresh className='refresh__icon' onClick={generateCaptcha} />
                                            </div>
                                        </div>
                                        <input className='cap' type='text' placeholder='Type text here...' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                                        <button className='check__btn' onClick={validateCaptcha}>Check</button>
                                    </div>
                                    <div className='form__log'>
                                        <button type='submit' className='log__btn'>Continue</button>
                                        <span>Don't have an account ? <Link to='/register' className='linker__signup'>Sign up</Link></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right__log'>
                    <div>
                        {/*<div className='right__overlay'>
                            <div className='right__content'>
                                <div className='right__grid'>
                                    <div className='grid__card'>
                                        <small>DOSH Pay</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <div className='grid__card'>
                                        <small>Load Account</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <div className='grid__card'>
                                        <small>Send Money</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <div className='grid__card'>
                                        <small>Bulk
                                            Disbursement</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <div className='grid__card'>
                                        <small>DOSH Pay</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <div className='grid__card'>
                                        <small>DOSH Pay</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                    <div className='grid__card'>
                                        <small>DOSH Pay</small>
                                        <div className='grid__pay'>
                                            <img src={card} alt='credit-card' />
                                            <span>View</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
