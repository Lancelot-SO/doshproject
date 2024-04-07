import React from 'react'
import "./Insurance.css"
import newAnime from "../images/dosh-365.png"
// import bginsure from "../images/insurance-dosh.png"

const Insurance = () => {
    return (
        <div className='insurance'>
            <div className='insurance__container'>
                <div className='insurance__left'>
                    <img src={newAnime} alt='anime' />
                </div>
                <div className='insurance__right'>
                    <h2>DOSH Insurance Signup</h2>
                    <form className='insurance__form'>
                        <div className='insurance__type'>
                            <label htmlFor='insurance'>Insurance Type</label>
                            <select className="mySelect">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                        </div>
                        <div className='account__buttons'>
                            <p>
                                Diagnosed with any pre-existing condition in
                                the past 5 years
                            </p>
                            <div className='decision'>
                                <input type='radio' className='radio' name='condition' />
                                <label htmlFor='yes'>Yes</label>
                                <input type='radio' className='radio' name='condition' />
                                <label htmlFor='no'>No</label>
                            </div>
                        </div>
                        <div className='Payment__type'>
                            <label htmlFor='insurance'>Payment Method</label>
                            <select className="mySelect">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                                <option value="option4">Option 4</option>
                            </select>
                        </div>

                        <div className='account__button'>
                            <p>
                                Do you have Financial account?
                            </p>
                            <div className='decision'>
                                <input type='radio' className='radio' name='condition' />
                                <label htmlFor='yes'>Yes</label>
                                <input type='radio' className='radio' name='condition' />
                                <label htmlFor='no'>No</label>
                            </div>
                        </div>

                        <div className='financial__type'>
                            <label htmlFor='insurance'>Financial Account type</label>
                            <input type='number' className='finance__input' name='accountType' placeholder='********' />
                        </div>
                        <div className='Username__type'>
                            <label htmlFor='insurance'>Create Username</label>
                            <input type='text' className='user__input' name='username' placeholder='Enter Username' />
                        </div>

                        <button type='button' className='step__btn'>GO TO NEXT STEP</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Insurance