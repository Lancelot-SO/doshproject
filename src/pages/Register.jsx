import React, { useState } from 'react';
import login from "../images/login-image.png";
import "./Login.css";
import './Register.css';
import { Link } from 'react-router-dom';
// import card from "../images/card.svg"
// import RegModal from '../components/RegModal';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Insurance from './Insurance';

const Register = () => {
    const [selectedOption, setSelectedOption] = useState("selfregister");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (selectedOption === "selfregister") {
            setShowModal(true);
            navigate('/insurance');
        }
    };
    const closeModal = () => {
        setShowModal(false);
    };


    return (
        <div>
            <div className='main__login'>
                <img src={login} alt='login' />
                <div className='log'>
                    {showModal && selectedOption === "selfregister" && (
                        <div className="reg__modal-overlay">
                            <div className="reg__modal-content">
                                <Insurance />
                                <button className="reg__close-modal" onClick={closeModal}>X</button>
                            </div>
                        </div>
                    )}
                    <div className='left__log'>
                        <div className='log__card'>
                            <span className='tag'>Welcome to </span>
                            <p className='dosh__account'><b>Dosh</b> Account</p>
                            <div className='log__underline'></div>
                            <div className='radio__btn'>
                                <p className='radio__tag'>How do you want to register your account?</p>
                                <div className='radios'>
                                    <div className='radio__reg'>
                                        <div className='reg__input'>
                                            <input type='radio' name='registerOption' id='selfregister' value='selfregister' checked={selectedOption === "selfregister"} onChange={handleOptionChange} />
                                            <label htmlFor='selfregister'>Self Register</label>
                                        </div>
                                        <div className='reg__input'>
                                            <input type='radio' name='registerOption' id='usevoucher' value='usevoucher' checked={selectedOption === "usevoucher"} onChange={handleOptionChange} />
                                            <label htmlFor='selfregister'>Enter Referral Code</label>
                                        </div>
                                    </div>
                                    <form className='log__form' onSubmit={handleFormSubmit}>
                                        <div className='form__log'>
                                            <button type='submit' className='log__btn'>Continue</button>
                                            <span>Already have an account ? <Link to='/login' className='linker__signup'>Login</Link></span>
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
        </div>
    );
};

export default Register;
