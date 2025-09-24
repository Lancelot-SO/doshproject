// SignIn.jsx
import React, { useState } from 'react';
import "./SignIn.css";
import sphoto from "../images/sphoto.png";
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ username, onClose }) => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (errorMessage) setErrorMessage('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        // --- Static/mock validation ---
        if (!password.trim()) {
            setErrorMessage('Please enter your password.');
            return;
        }

        // If you use a PrivateRoute that reads localStorage, set these first:
        localStorage.setItem('isAuthenticated', 'true'); // must be the string 'true'
        // Optional: mock a role so your dashboard content picks one
        if (!localStorage.getItem('userRole')) {
            localStorage.setItem('userRole', 'user'); // or 'admin'
        }

        // Go to Dashboard (replace so back button won't return to /login)
        navigate('/dashboard', { replace: true });
    };

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
                            <button onClick={() => onClose?.()} className='signin__close'>X</button>
                        </div>

                        <div className='signin__name'>
                            {username || 'User'}
                            <hr />
                        </div>

                        <span>Please enter your password</span>

                        <form className='signin__input' onSubmit={handleSubmit} noValidate>
                            <label htmlFor='password'>Password</label>
                            <input
                                id='password'
                                type='password'
                                name='password'
                                placeholder='************'
                                value={password}
                                onChange={handlePasswordChange}
                                autoComplete='current-password'
                            />
                            <Link to='/' className='signin__link'>Forgot your password?</Link>

                            {errorMessage && <div className="error-message">{errorMessage}</div>}

                            <div className='signin__login'>
                                <button type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
