import React from 'react';
import "./SignIn.css";
import sphoto from "../images/sphoto.png";
import { Link } from 'react-router-dom';

const SignIn = ({ onClose }) => {


    return (
        <div className='signin__modal'>
            <div className='signin__content'>
                <div className='signin__left'>
                    <img src={sphoto} alt='otp' />
                </div>
                <div className='signin__right'>
                    <div className='signin__card'>
                        <div className='signin__enter'>
                            <h1>Welcome</h1>
                            <button onClick={onClose} className='signin__close'>X</button>
                        </div>
                        <div className='signin__name'>
                            JERRY SAM
                            <hr></hr>
                        </div>
                        <span>
                            Please enter your password
                        </span>

                        <div className='signin__input'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' placeholder='************' />
                            <a href='/' className='signin__link'>Forgot your password?</a>
                        </div>

                        <div className='signin__login'>
                            <Link to="/maindashboard">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
