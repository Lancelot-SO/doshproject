import React, { useState } from 'react';
import "./Insurance.css";
import newAnime from "../images/sphoto.png";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import ReactFlagsSelect from "react-flags-select";


const Insurance = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const [selectedFlag, setSelecteFlag] = useState("");


    const [showSecondSelector, setShowSecondSelector] = useState(false);
    const [formStepsNum, setFormStepsNum] = useState(0);

    const handleFirstSelectorChange = (event) => {
        const selectedValue = event.target.value;
        setShowSecondSelector(selectedValue !== "");
    };

    const formSteps = document.querySelectorAll('.form__step');
    const progressSteps = document.querySelectorAll('.progress__step');

    const handleNextStep = () => {
        setFormStepsNum(prevNum => {
            const nextNum = prevNum + 1;
            updateFormSteps(nextNum);
            updateProgressbar(nextNum);
            return nextNum;
        });
    };

    const handlePrevStep = () => {
        setFormStepsNum(prevNum => {
            const nextNum = prevNum - 1;
            updateFormSteps(nextNum);
            updateProgressbar(nextNum);
            return nextNum;
        });
    };

    const updateFormSteps = (stepNum) => {
        formSteps.forEach((formStep, index) => {
            if (index === stepNum) {
                formStep.classList.add('active');
            } else {
                formStep.classList.remove('active');
            }
        });
    };

    const updateProgressbar = (stepNum) => {
        progressSteps.forEach((progressStep, index) => {
            if (index < stepNum + 1) {
                progressStep.classList.add('active');
            } else {
                progressStep.classList.remove('active');
            }
        });

        const progressActive = document.querySelectorAll('.progress__step.active');
        const progress = document.getElementById('progress');
        progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + '%';
    };

    return (
        <div className='insurance'>
            <div className='insurance__container'>
                <div className='insurance__left'>
                    <img src={newAnime} alt='anime' />
                </div>
                <div className='insurance__right'>
                    <h2>DOSH Insurance Signup</h2>

                    <div className='progressbar'>
                        <div className='progress' id='progress'></div>
                        <div className='progress__step active' data-title="Payment"></div>
                        <div className='progress__step' data-title="ID Verification"></div>
                        <div className='progress__step' data-title="Personalize"></div>
                    </div>
                    <form className='insurance__form'>
                        <div className={`form__step ${formStepsNum === 0 ? 'active' : ''}`}>
                            <div className='firststep_data'>
                                <label htmlFor='insurance'>Insurance Category Type</label>
                                <select className="firststep_selector">
                                    <option value="option1">Family</option>
                                    <option value="option2">Personal</option>
                                    <option value="option3">SOHO</option>
                                    <option value="option4">SMB</option>
                                    <option value="option3">Enterprise</option>
                                </select>
                            </div>

                            <div className='firststep_data'>
                                <label htmlFor='insurance'>Insurance Type</label>
                                <select className="firststep_selector">
                                    <option value="option1">DOSH 365</option>
                                    <option value="option2">DOSH 750</option>
                                    <option value="option3">DOSH 1000</option>
                                    <option value="option4">DOSH 2500</option>
                                    <option value="option4">DOSH 5000</option>
                                    <option value="option4">DOSH 10000</option>
                                </select>
                            </div>

                            <p className='firststep_condition'>
                                Diagnosed with any pre-existing condition in the past 5 years
                            </p>
                            <div className='firststep_radiobtn'>
                                <input type="radio" id="firststep_radio1" name="firststep" />
                                <span>Yes</span>
                                <input type="radio" id="firststep_radio2" name="firststep" />
                                <span>No</span>
                            </div>

                            <div className='firststep_data'>
                                <label htmlFor='paymentMethod'>Payment Method</label>
                                <select className="firststep_selector" id="paymentMethod" onChange={handleFirstSelectorChange} required>
                                    <option value="">-- Select Payment Method --</option>
                                    <option value="daily">Daily</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>

                            {showSecondSelector && (
                                <div className='firststep_data'>
                                    <label htmlFor='insuranceOption'>Choose the option that applies to you</label>
                                    <select className="firststep_selector" id="insuranceOption">
                                        <option value="account">Already have a Dosh financial account</option>
                                        <option value="plan">No, create one for my payment plan</option>
                                        <option value="insuranceOnly">Create insurance-only account</option>
                                    </select>
                                </div>
                            )}

                            <div className='firststep_data'>
                                <label htmlFor='insurance'>Financial Account Type</label>
                                <select className="firststep_selector">
                                    <option value="option1">Family</option>
                                    <option value="option2">Personal</option>
                                    <option value="option3">SMB</option>
                                    <option value="option4">SOHO</option>
                                    <option value="option4">Enterprise</option>
                                </select>
                            </div>

                            <div className='firststep_data'>
                                <label htmlFor='insurance'>Payment Mode</label>
                                <select
                                    className="firststep_selector"
                                    id="paymentMode"
                                    required
                                    value={paymentMethod}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                >
                                    <option value="">-- Select Payment Method --</option>
                                    <option value="DOSH">DOSH</option>
                                    <option value="MTN Mobile Money">MTN Mobile Money</option>
                                    <option value="AirtelTigo Money">AirtelTigo Money</option>
                                    <option value="Telecel Cash">Telecel Cash</option>
                                    <option value="Debit and Credit Cards">Debit and Credit Cards</option>
                                </select>
                            </div>

                            {paymentMethod && (
                                <div className='firststep_data'>
                                    <label htmlFor='accountNumber'>Account Number</label>
                                    <div>
                                        <PhoneInput
                                            defaultCountry='GH'
                                            required
                                            value={phoneNumber}
                                            onChange={setPhoneNumber}
                                            placeholder="233 54868650"
                                            className='phone_number'
                                        />
                                    </div>
                                </div>
                            )}

                            <button type='button' onClick={handleNextStep} className='btn step__btn'>GO TO NEXT STEP</button>
                        </div>

                        <div className={`form__step ${formStepsNum === 1 ? 'active' : ''}`}>
                            <div className='Payment__type'>
                                <label htmlFor='insurance'>Country</label>
                                <select className="mySelect">
                                    <option value="option1">Ghana</option>
                                    <option value="option2">Nigeria</option>
                                    <option value="option3">India</option>
                                    <option value="option4">Belgium</option>
                                </select>
                            </div>

                            <div className='Payment__type'>
                                <label htmlFor='insurance'>ID Type</label>
                                <select className="mySelect">
                                    <option value="">-- Select ID Type --</option>
                                    <option value="option1">Ghana Card</option>
                                    <option value="option2">Passport</option>
                                    <option value="option3">Driver's License</option>
                                </select>
                            </div>

                            <div className='Username__type'>
                                <label htmlFor='insurance'>ID Number</label>
                                <input type='text' className='user__input' name='username' placeholder='************' />
                            </div>

                            <div className='financial__type'>
                                <label htmlFor='insurance'>Email</label>
                                <input type='email' className='finance__input' name='accountType' placeholder='Example@gmail.com' />
                            </div>
                            <div className='Payment__type'>
                                <label htmlFor='insurance'>Region</label>
                                <select className="mySelect">
                                    <option value="">-- Select Region --</option>
                                    <option value="option1">Accra</option>
                                    <option value="option2">Kumasi</option>
                                    <option value="option3">Takoradi</option>
                                    <option value="option4">Cape Coast</option>
                                </select>
                            </div>

                            <button type='button' onClick={handleNextStep} className='btn step__btn'>NEXT STEP</button>
                            <button type='button' onClick={handlePrevStep} className='btn steps__btn'>Back</button>
                        </div>

                        <div className={`form__step ${formStepsNum === 2 ? 'active' : ''}`}>
                            <div className='Username__type'>
                                <label htmlFor='insurance'>First Name</label>
                                <input type='text' className='user__input' name='username' placeholder='Enter your first name here' />
                            </div>
                            <div className='Username__type'>
                                <label htmlFor='insurance'>Last Name</label>
                                <input type='text' className='user__input' name='username' placeholder='Enter your Last name here' />
                            </div>
                            <div className='Payment__type'>
                                <label htmlFor='insurance'>Gender</label>
                                <select className="mySelect">
                                    <option value="">--Select your Gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>


                            <div className='financial__type'>
                                <label htmlFor='insurance'>Email</label>
                                <input type='email' className='finance__input' name='accountType' placeholder='Enter Email Address' />
                            </div>
                            <div className='Payment__type'>
                                <label htmlFor='insurance'>Date of Birth</label>
                                <input type='date' className='finance__input' name='accountType' />
                            </div>

                            <div className='Username__type'>
                                <label htmlFor='insurance'>Password</label>
                                <input type='password' name="password" className='user__input' placeholder='Enter your password' />
                            </div>

                            <div className='Username__type'>
                                <label htmlFor='insurance'>Confirm Password</label>
                                <input type='password' name="confirmPassword" className='user__input' placeholder='Enter your password' />
                            </div>

                            <button type='button' className='step__btn'>Submit</button>
                            <button type='button' onClick={handlePrevStep} className='btn steps__btn'>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Insurance;
