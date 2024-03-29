import React from 'react'
import './RegModal.css'
import { Link } from 'react-router-dom'
import anime from '../images/anime.png'

const RegModal = () => {
    return (
        <div className='reg__modal'>
            <div className='reg__container'>
                <div className='sect'>
                    <h4>hello</h4>
                    <select className='select'>
                        <option value="">Select an option</option>
                        <option value="option1">Finance</option>
                        <option value="option2">Insurance</option>
                        <option value="option3">Loan</option>
                    </select>
                </div>
                <div className='dosh__list'>
                    <ul className='dosh__lists'>
                        <Link><li className='single__list'>Dosh Insurance</li></Link>
                        <Link><li className='single__list'>Dosh Finance</li></Link>
                        <Link><li className='single__list'>Dosh Ride</li></Link>
                        <Link><li className='single__list'>Dosh E-Commerce</li></Link>
                        <Link><li className='single__list'>Dosh ERP</li></Link>
                    </ul>
                </div>
                <div className='dosh__prices'>
                    <ul className='price__lists'>
                        <Link><li className='price__list'>DOSH 365</li></Link>
                        <Link><li className='price__list'>Dosh 750</li></Link>
                        <Link><li className='price__list'>Dosh 1000</li></Link>
                        <Link><li className='price__list'>Dosh 5000</li></Link>
                        <Link><li className='price__list'>Dosh 10000</li></Link>
                    </ul>
                </div>

                <div className='reg__section'>
                    <div className="reg__left">
                        <img src={anime} alt='anime' />
                    </div>
                    <div className="reg__right">
                        <span>DOSH</span>
                        <h2>365</h2>
                        <h3>Description</h3>
                        <p>EDOSH 365 package births an array of hope for individuals who
                            hitherto are unable to access health insurance services due to the
                            absence of affordable packages one the market.
                            Dosh is changing the narrative on health insurance provision with the
                            DOSH365 package, which is highly affordable and offering a new health insurance experience,
                            designed with the individual in mind.
                            An amount of GHS 1 per day or a total of GHS 365 per year, provides a
                            membership cover of GHS 9,000 annually. Out of the GHS 9,000, an amount of GHS 7,500 is
                            allocated towards In-Patient services and the remaining GHS 1,500 for
                            Out-Patient services.
                            DOSH 365 is specifically designed to shoulder the unforeseen medical
                        </p>
                        <div className='icon__button'>
                            <button type='submit' className='dosh__btn'>Continue</button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="#fff"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegModal