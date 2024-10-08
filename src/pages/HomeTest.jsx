import React, { useState, useEffect } from 'react';
import "./Home.css";
import { Link, useLocation } from "react-router-dom"
import slider1 from "../images/firsthero.png";
import slider3 from "../images/firsthero.png";
import slider4 from "../images/firsthero.png";
import slider5 from "../images/firsthero.png";
import slider6 from "../images/firsthero.png";
import slider7 from "../images/firsthero.png";
import slider2 from "../images/firsthero.png";
import slider8 from "../images/firsthero.png";

// import banner from '../images/dosh-banner.png'
import elevate2 from '../images/vector1.png'
import money from '../images/vector2.png';
// import seamless from "../images/seamless.png"
import ride from '../images/ride.png'
import reinvigorate from '../images/Vector334.png'
import scale from "../images/scale.png"

import AOS from "aos";
import "aos/dist/aos.css";
// import Draggable from 'react-draggable';

import VideoPopup from '../components/VideoPopup.jsx';
import { IoIosArrowDown } from 'react-icons/io';



const HomeTest = () => {

    const [slides, setSlides] = useState([]);




    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sections = ['home', 'money', 'ride', 'digital', 'lastride']; // Add more section IDs here if needed

    const scrollToNextSection = (event) => {
        event.preventDefault();
        const nextIndex = currentSectionIndex + 1;
        if (nextIndex < sections.length) {
            setCurrentSectionIndex(nextIndex);
            const nextSectionId = sections[nextIndex];
            const section = document.getElementById(nextSectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Reset to the first section when reaching the last section
            setCurrentSectionIndex(0);
            const firstSection = document.getElementById(sections[0]);
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };


    const [counter, setCounter] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const showVideoPopup = queryParams.get('videopopup') === 'true';


    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isPaused) {
                document.getElementById('radio' + counter).checked = true;
                setCounter(prevCounter => (prevCounter % 8) + 1);
            }
        }, 100000);

        return () => clearInterval(intervalId);
    }, [counter, isPaused]);

    const handleMouseDown = () => {
        setIsPaused(true);
    };

    const handleMouseUp = () => {
        setIsPaused(false);
    };

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    useEffect(() => {
        fetch('https://doshcms.interactivedigital.com.gh/api/show-slideshow')
            .then(response => response.json())
            .then(data => {
                setSlides(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const baseURL = 'https://doshcms.interactivedigital.com.gh/';
    const index = 1; //index of the items in my database

    // Check if the slides array has an item at the specified index
    const slide = slides.length > index ? slides[index] : null;

    if (!slide) {
        return <div>No slides available</div>;
    }

    return (
        <div className='main__hero'>
            <div className='hero'>
                <div className='slider'>
                    <div className='slides' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                        <input type="radio" name="radio-button" id="radio1" />
                        <input type="radio" name="radio-button" id="radio2" />
                        <input type="radio" name="radio-button" id="radio3" />
                        <input type="radio" name="radio-button" id="radio4" />
                        <input type="radio" name="radio-button" id="radio5" />
                        <input type="radio" name="radio-button" id="radio6" />
                        <input type="radio" name="radio-button" id="radio7" />
                        <input type="radio" name="radio-button" id="radio8" />


                        <div>
                            <div className='slide first' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='first_slider'>{slide.caption}</p>
                                    <p className='first_slider-p'>{slide.body}</p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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
                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='second_slider-h2'>{slide.caption}</p>
                                    <p className='second_slider'>{slide.body}
                                    </p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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
                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='ninth_slider'>{slide.caption}
                                    </p>
                                    <span className='ninth'>{slide.body}
                                    </span>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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
                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='third_slider'>{slide.caption}</p>
                                </div>

                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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
                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='fourth_slider'>{slide.caption}</p>
                                    <p className='fourth_slider_p'>{slides.body}
                                    </p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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
                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='fifth_slider'>{slide.caption}</p>
                                    <p className='fifth_slider_p'>
                                        {slide.body}
                                    </p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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
                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='sixth__slider'>
                                        {slide.caption}
                                    </p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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

                            <div className='slide' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='eight_slider'>{slide.caption}
                                    </p>
                                    <p className='eight_slider_p'>{slide.body}</p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
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

                        </div>


                        <div className='navigate_auto' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
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

                    <div className='navigate_manual' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
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

            <button className="scroll-button" onClick={scrollToNextSection}>
                <IoIosArrowDown size={30} />
            </button>

            {/*<section className='about__section'>
                <div className='about__banner'>
                    <Link to='https://dsp.onenet.xyz:50443/#/'><img src={banner} alt='banner' /></Link>
                </div>
    </section>*/}

            <section id='home' className='home__section'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>DOSH HEALTH INSURANCE:</h4>
                        <h3>Elevate your healthcare
                            experience</h3>
                        <p>
                            Take control of your healthcare the DOSH way. DOSH Health insurance is
                            an all-inclusive service that provides coverage for medical consultations,
                            surgical care, dental care, optical care, and prescription medication.
                            We have a vast network of accredited service providers that
                            ensure access to medical care, whenever and wherever you need it.
                        </p>
                        <Link to='https://dspm.onenet.xyz:50443/#/auth/login-type' target="_blank" rel="noopener noreferrer">Read more
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
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img src={elevate2} alt='student' loading='lazy' />
                    </div>
                </div>
            </section>
            <section id='money' className='money__section'>
                <div className='container home__money'>
                    <div data-aos="zoom-in-right" className='home__money-left'>
                        <img src={money} alt='student' loading='lazy' />
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
                        <Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Read more
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

            {/*<section className='digital__section'>
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
                        <Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Read more
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
                    <div data-aos="zoom-in-left" className='home__digital-right'>
                        <img src={seamless} alt='digital' loading='lazy' />
                    </div>
                </div>
    </section>*/}

            <section id='ride' className='ride__section'>
                <div className='container ride__adventure'>
                    <div data-aos="zoom-in-right" className='home__ride-left'>
                        <img src={ride} alt='ride' loading='lazy' />
                    </div>
                    <div className='home__ride-right'>
                        <h4>DOSH RIDE:</h4>
                        <h3>Where safety<br />
                            meets adventure</h3>
                        <p>
                            In our fast-paced world, DOSH Ride redefines transportation excellence.
                            With every booking, you enjoy secure travel, professional drivers,
                            and comfortable vehicles. At DOSH Ride, our goal is to ensure that every
                            journey is an extraordinary experience!
                        </p>
                        <Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Read more
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

            <section id='digital' className='digital__section'>
                <div className='container home__digital'>
                    <div className='home__digital-left'>
                        <h4>DOSH ERP:</h4>
                        <h3>Reinvigorate your<br />
                            business</h3>
                        <p>
                            Successful business enterprises are built on efficiency, agility, and proper
                            organization. Our comprehensive software will streamline your business
                            operations, bolster your supply chain management, optimize your human
                            resources, and unleash the full potential of your work processes. With
                            DOSH ERP solutions, your business will ignite growth and propel you to
                            unprecedented success.
                        </p>
                        <Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Read more
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
                    <div data-aos="zoom-in-left" className='home__digital2-right'>
                        <img src={reinvigorate} alt='digital' loading='lazy' />
                    </div>
                </div>
            </section>

            <section id='lastride' className='ride__section'>
                <div className='container ride__adventure'>
                    <div className='home__ride2-left'>
                        <img data-aos="zoom-in-right" src={scale} alt='ride' loading='lazy' />
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
                        <Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Read more
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

            <div className='ps__page'>
                {/* Your existing content */}

                {showVideoPopup && <VideoPopup />}
            </div>

        </div>
    )
}

export default HomeTest