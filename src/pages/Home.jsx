import React, { useState, useEffect } from 'react';
import "./Home.css"
import { Link } from "react-router-dom"
import slider1 from "../images/granny.png";
import slider3 from "../images/slider3.png";
import slider4 from "../images/slider4.png";
import slider5 from "../images/slider5.png";
import slider6 from "../images/slider6.png";
import slider8 from "../images/slider8.png";
import slider2 from "../images/slider.png";
import slider7 from '../images/slider7.png'

import student from '../images/student-photo.png'
import elevate from '../images/elevate.png'
import money from '../images/money.png';
import seamless from "../images/seamless.png"
import ride from '../images/ride.png'
import reinvigorate from '../images/reinvigorate.png'
import scale from "../images/scale.png"



const Home = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            setCounter(prevCounter => (prevCounter % 8) + 1);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [counter]);

    return (
        <div className='main__hero'>
            <div className='hero'>
                <div className='slider'>
                    <div className='slides'>
                        <input type="radio" name="radio-button" id="radio1" />
                        <input type="radio" name="radio-button" id="radio2" />
                        <input type="radio" name="radio-button" id="radio3" />
                        <input type="radio" name="radio-button" id="radio4" />
                        <input type="radio" name="radio-button" id="radio5" />
                        <input type="radio" name="radio-button" id="radio6" />
                        <input type="radio" name="radio-button" id="radio7" />
                        <input type="radio" name="radio-button" id="radio8" />


                        <div className='slide first'>
                            <img src={slider1} alt='hero' />
                            <div className='hero__text'>
                                <p className='first_slider'>Health <b>insurance</b> for the<br />
                                    years you need it the most.</p>
                                <p className='first_slider-p'>Your sixties must not be spent navigating arthritis and other medical
                                    emergencies. Allow DOSH to assist you with comprehensive health coverage
                                    while you enjoy the love of family and friends. Dial *915# now to sign up
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider2} alt='hero' />
                            <div className='hero__text'>
                                <p className='second_slider-h2'>We've got <b>insurance</b> for your<br /> old girl.</p>
                                <p className='second_slider'>Securing comprehensive health insurance for your folks is a thoughtful
                                    investment in their health and your savings. DOSH provides affordable yet
                                    quality health insurance that allows them to access healthcare services
                                    anywhere in the country.
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider3} alt='hero' />
                            <div className='hero__text'>
                                <p className='third_slider'>Choose <b>comprehensive</b><br />
                                    coverage that leaves no one<br />
                                    behind.</p>
                            </div>

                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider4} alt='hero' />
                            <div className='hero__text'>
                                <p className='fourth_slider'>Keep the <b>DAD</b> jokes coming</p>
                                <p className='fourth_slider_p'>Protect old boy's health with DOSH insurance while protecting your savings.
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider5} alt='hero' />
                            <div className='hero__text'>
                                <p className='fifth_slider'>Health insurance that covers <b>EYE<br />
                                    DENTAL, MENTAL HEALTH</b> care and more</p>
                                <p className='fifth_slider_p'>
                                    With as little as <b>GHS 365</b>, you get up to <b>GHS 9000</b> WORTH OF QUALITY<br />
                                    healthcare at any medical facility. You also get safe and instant access<br />
                                    to medical claims. No delays..
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider6} alt='hero' />
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider7} alt='hero' />
                            <div className='hero__text'>
                                <p className='seventh_slider'> Another <b>round?</b><br />
                                    The only health insurance that<br />
                                    covers erectile dysfudysfunctions treatment </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='slide'>
                            <img src={slider8} alt='hero' />
                            <div className='hero__text'>
                                <p className='eight_slider'>Overall wellness includes <b>Metal health.</b><br />
                                    We’ve got you covered.
                                </p>
                                <p className='eight_slider_p'>The only health insurance with metal health coverage</p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to="/" className='slide__link'>
                                        <small>Join DOSH</small>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="28"
                                            fill="currentColor"
                                            class="bi bi-arrow-right"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className='navigate_auto'>
                            <div className='auto-btn1'></div>
                            <div className='auto-btn2'></div>
                            <div className='auto-btn3'></div>
                            <div className='auto-btn4'></div>
                            <div className='auto-btn5'></div>
                            <div className='auto-btn6'></div>
                            <div className='auto-btn7'></div>
                            <div className='auto-btn8'></div>


                        </div>

                    </div>

                    <div className='navigate_manual'>
                        <label htmlFor='radio1' className='manual-btn'></label>
                        <label htmlFor='radio2' className='manual-btn'></label>
                        <label htmlFor='radio3' className='manual-btn'></label>
                        <label htmlFor='radio4' className='manual-btn'></label>
                        <label htmlFor='radio5' className='manual-btn'></label>
                        <label htmlFor='radio6' className='manual-btn'></label>
                        <label htmlFor='radio7' className='manual-btn'></label>
                        <label htmlFor='radio8' className='manual-btn'></label>


                    </div>

                </div>

            </div>

            <div className='cream__hero'></div>

            <section className='home__section'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>DOSH HEALTH INSURANCE:</h4>
                        <h3>Elevate your Healthcare
                            Experience</h3>
                        <p>
                            Take control of your healthcare the DOSH way. DOSH Health insurance is
                            an all-inclusive service that provides coverage for medical consultations,
                            surgical care, dental care, optical care, and prescription medication.
                            Globally, we have a vast network of accredited service providers that
                            ensure access to medical care, whenever and wherever you need it.
                        </p>
                        <Link to='/'>Discover more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className='home__student-right'>
                        <img src={elevate} alt='student' />
                    </div>
                </div>
            </section>
            <section className='money__section'>
                <div className='container home__money'>
                    <div className='home__money-left'>
                        <img src={money} alt='student' />
                    </div>
                    <div className='home__money-right'>
                        <h4>DOSH FINANCE:</h4>
                        <h3>Make your money<br />
                            work for you</h3>
                        <p>
                            DOSH Finance provides access to personalized financial solutions,
                            including financial advisory, investment guidance, and wealth
                            management services. We provide you and your business with the tools
                            and expertise to achieve your financial objectives. Secure long-term
                            financial stability as you experience unparalleled growth with the unique
                            DOSH approach.
                        </p>
                        <Link to='/'>Signup
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='digital__section'>
                <div className='container home__digital'>
                    <div className='home__digital-left'>
                        <h4>DOSH PAY:</h4>
                        <h3>Seamless Digital<br />
                            Transfers</h3>
                        <p>
                            Access a world of secure transactions with DOSH Pay. Experience
                            the convenience of easy bill payments and real-time money transfers.
                            DOSH Pay is a hassle-free, integrated digital platform, designed to
                            simplify your everyday financial needs.
                        </p>
                        <Link to='/'>Signup
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className='home__digital-right'>
                        <img src={seamless} alt='digital' />
                    </div>
                </div>
            </section>

            <section className='ride__section'>
                <div className='container ride__adventure'>
                    <div className='home__ride-left'>
                        <img src={ride} alt='ride' />
                    </div>
                    <div className='home__ride-right'>
                        <h4>DOSH RIDE:</h4>
                        <h3>Where safety<br />
                            meet adventure</h3>
                        <p>
                            In our fast-paced world, DOSH Ride redefines transportation excellence.
                            With every booking, you enjoy secure travel, professional drivers,
                            and comfortable vehicles. At DOSH Ride, our goal is to ensure that every
                            journey is an extraordinary experience!
                        </p>
                        <Link to='/'>Signup
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='digital__section'>
                <div className='container home__digital'>
                    <div className='home__digital-left'>
                        <h4>DOSH ERP:</h4>
                        <h3>Reinvigorate your<br />
                            business growth</h3>
                        <p>
                            Successful business enterprises are built on efficiency, agility, and proper
                            organization. Our comprehensive software will streamline your business
                            operations, bolster your Supply Chain Management, optimize your Human
                            Resources, and unleash the full potential of your work processes. With
                            DOSH ERP solutions, your business will ignite growth and propel you to
                            unprecedented success.
                        </p>
                        <Link to='/'>Signup
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div className='home__digital2-right'>
                        <img src={reinvigorate} alt='digital' />
                    </div>
                </div>
            </section>

            <section className='ride__section'>
                <div className='container ride__adventure'>
                    <div className='home__ride2-left'>
                        <img src={scale} alt='ride' />
                    </div>
                    <div className='home__ride2-right'>
                        <h4>DOSH-COMMERCE:</h4>
                        <h3>Scale to new heights<br />
                            reach new markets</h3>
                        <p>
                            DOSH e-commerce is your gateway to unrivaled success
                            in the digital world. Unleash the full potential of
                            your business in the DOSH e-commerce marketplace.
                            Leverage our vast customer base, effortless inventory
                            management systems, optimized returns processes,
                            and delivery systems.
                        </p>
                        <Link to='/'>Signup
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section className='about__section'>
                <div className='container about__student'>
                    <div className='about__student-left'>
                        <h3>Join the<br /><b>Revolution !</b></h3>
                        <p>
                            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat congue orci, eget tellus pellentesque aliquet.
                            Felis fringilla morbi dui ac consequat risus pharetra odio pulvinar. Id pellentesque in tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet sit risus elementum scelerisque.
                        </p>
                        <Link to='/'>Get Started</Link>
                    </div>
                    <div className='about__student-right'>
                        <img src={student} alt='student' />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
