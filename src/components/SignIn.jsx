import React, { useState } from 'react';
import "./SignIn.css";
import sphoto from "../images/sphoto.png";
import { Link, useNavigate } from 'react-router-dom';

const SignIn = ({ username, onClose }) => {
    const [password, setPassword] = useState(''); // Track password state
    const [errorMessage, setErrorMessage] = useState(''); // Track error message
    const navigate = useNavigate(); // React Router navigation hook

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear any previous error message
        setErrorMessage('');

        try {
            console.log("Username:", username);
            console.log("Password:", password);

            // Replace this with your credentials
            const base64credentials = 'Basic ' + btoa(`${username}:${password}`);
            console.log("Base64 Credentials:", base64credentials);

            const apiUrl = 'https://opintech.onenet.xyz:40443/api/auth/session/?fields=sessionToken,principal';
            const options = {
                method: 'POST',
                headers: {
                    'Authorization': base64credentials,
                    'Content-Type': 'application/json',
                },
            };

            const response = await fetch(apiUrl, options);
            const data = await response.json();

            console.log('API Response:', data);

            if (response.ok && data.principal) {
                // Redirect to the dashboard if authentication is successful
                navigate('/dashboard');
            } else {
                setErrorMessage('Username or password is incorrect. Please try again.');
            }
        } catch (error) {
            console.error('Error during API request:', error);
            setErrorMessage('An error occurred while authenticating. Please try again.');
        }
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
                            <button onClick={onClose} className='signin__close'>X</button>
                        </div>
                        <div className='signin__name'>
                            {username} {/* Display the username */}
                            <hr />
                        </div>
                        <span>Please enter your password</span>

                        <div className='signin__input'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type='password'
                                name='password'
                                placeholder='************'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <a href='/' className='signin__link'>Forgot your password?</a>
                        </div>

                        {errorMessage && <div className="error-message">{errorMessage}</div>}

                        <div className='signin__login'>
                            <button onClick={handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
