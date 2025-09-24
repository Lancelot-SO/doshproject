import React, { useState, useEffect } from 'react';
import "./Home.css";
import { Link, useLocation } from "react-router-dom"
import slider1 from "../images/fourthhero.png";
import slider3 from "../images/fifthhero.png";
import slider4 from "../images/tenthhero.png";
import slider5 from "../images/sixthhero.png";
import slider6 from "../images/seventhhero.png";
import slider7 from "../images/secondhero.png";
import slider2 from "../images/thirdhero.png";
import slider8 from "../images/eighthero.png";
import slider10 from "../images/firsthero.png";



import slidermobile from "../images/eightmobile.png"
import slider1mobile from "../images/fourthmobile.png"
import slider2mobile from "../images/thirdmobile.png"
import slider3mobile from "../images/fifthmobile.png"
import slider4mobile from "../images/tenthmobile.png"
import slider5mobile from "../images/sixthmobile.png"
import slider6mobile from "../images/seventhmobile.png"
import slider7mobile from "../images/secondmobile.png"
import slider10mobile from "../images/firstmobile.png"






// import banner from '../images/dosh-banner.png'
// import elevate2 from '../images/vector1.png'
// import money from '../images/img1.png';
// import seamless from "../images/seamless.png"
// import ride from '../images/ridenew.png'
// import reinvigorate from '../images/erpImg1.png'
// import scale from "../images/e-commerce1.png"

import AOS from "aos";
import "aos/dist/aos.css";
// import Draggable from 'react-draggable';

import VideoPopup from '../components/VideoPopup.jsx';
import { IoIosArrowDown } from 'react-icons/io';
// import Financial from '../components/Financial.jsx';
// import Insure from '../components/Insure.jsx';
// import Ride from '../components/Ride.jsx';
// import Ecommerce from '../components/Ecommerce.jsx';
// import Erp from '../components/Erp.jsx';


// import Insure from '../components/InsuranceDetails.jsx';
// import FinanceSideModal from '../components/FinanceSideModal.jsx';
import InsuranceDetails from '../components/InsuranceDetails.jsx';
import FinanceDetails from '../components/FinancialDetails.jsx';
import RiskDetails from '../components/RiskDetails.jsx';


const Home = () => {

    const [showInsuranceDetailModal, setInsuranceDetailModal] = useState(false);

    const [homeData, sethomeData] = useState(null);

    const [activePackage, setActivePackage] = useState('');

    const setInitialItem = (itemName) => {
        setActivePackage(itemName); // Set the active package based on the link clicked
    };


    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);

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

    useEffect(() => {
        // Check if the device is mobile
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        if (isMobile) {
            let inactivityTimer;

            const handleScroll = () => {
                // Show button immediately when scrolling
                setShowButton(true);
                // Clear any previously set timer
                if (inactivityTimer) {
                    clearTimeout(inactivityTimer);
                }
                // Set timer to hide the button after 3 seconds of inactivity
                inactivityTimer = setTimeout(() => {
                    setShowButton(false);
                }, 3000);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                if (inactivityTimer) {
                    clearTimeout(inactivityTimer);
                }
            };
        } else {
            // For non-mobile devices, keep the button visible (or adjust as needed)
            setShowButton(true);
        }
    }, []);


    const [showFinanceDetailModal, setShowFinanceDetailModal] = useState(false);
    const [showRiskModal, setShowRiskModal] = useState(false);
    // const [showRideModal, setShowRideModal] = useState(false);
    // const [showEcommerceModal, setShowEcommerceModal] = useState(false);
    // const [showErpModal, setShowErpModal] = useState(false);



    const [initialItem] = useState('');


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
        }, 10000);

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


    //fetch api for homepage data
    useEffect(() => {
        const fetchhomeData = async () => {
            try {
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/show-home-sections');
                const data = await response.json();
                console.log('home Data:', data);
                sethomeData(data[0]);
            } catch (error) {
                console.error('Error fetching home data:', error);
            }
        };
        fetchhomeData();
    }, []);

    if (!homeData) {
        return <div>Loading...</div>;
    }

    return (
        <div id="text-content" className='main__hero '>
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
                        <input type="radio" name="radio-button" id="radio9" />


                        <div className='slide first'>
                            <img src={slider1} alt='hero' loading='lazy' className='slide-one-laptop' />
                            <img src={slider1mobile} alt='hero' loading='lazy' className='slide-one-mobile' />

                            <div className='hero__text'>
                                <p className='first_slider'>Health <b>insurance</b> for the <br />
                                    years you need it the most.</p>
                                <p className='first_slider-p'>Live your retirement worry-free with an insurance plan made just for you.
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <img src={slider2} alt='hero' loading='lazy' className='slide-two-laptop' />
                            <img src={slider2mobile} alt='hero' loading='lazy' className='slide-two-mobile' />

                            <div className='hero__text'>
                                <p className='second_slider-h2'>We've got <b>insurance</b> for <br /> your old girl.</p>
                                <p className='second_slider'>Securing comprehensive health insurance for your folks is a thoughtful
                                    investment in their health and your savings. <p>Dosh provides quality healthcare insurance anywhere in the country. It's Available, Accessible and Affordable.</p>
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <div className='overlay-container'>
                                <img src={slider8} alt='hero' loading='lazy' className='sliderslaptop' />
                                <img src={slidermobile} alt='hero' loading='lazy' className='slidersmobile' />
                                <div className='image-overlay'></div>
                            </div>
                            <div className='hero__text'>
                                <p className='ninth_sliders'>Get an <b className='ninth__sliders__bold'>insurance</b> cover
                                    <br />that’s got your back.
                                </p>
                                <span className='ninth'>The only health insurance that
                                    covers chiropractic services.
                                </span>
                                <p className='caption'>The only health insurance that
                                    covers chiropractic <br />services. </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <img src={slider3} alt='hero' loading='lazy' className='slide-three-laptop' />
                            <img src={slider3mobile} alt='hero' loading='lazy' className='slide-three-mobile' />

                            <div className='hero__text'>
                                <p className='third_slider'>Choose <b>comprehensive </b><br />
                                    coverage that leaves no one behind.</p>
                            </div>

                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <img src={slider4} alt='hero' loading='lazy' className='slide-four-laptop' />
                            <img src={slider4mobile} alt='hero' loading='lazy' className='slide-four-mobile' />

                            <div className='hero__text'>
                                <p className='fourth_slider'>Keep the <b>DAD</b> jokes coming</p>
                                <p className='fourth_slider_p'>Protect old boy's health with DOSH insurance while protecting your savings.
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <img src={slider5} alt='hero' loading='lazy' className='slide-five-laptop' />
                            <img src={slider5mobile} alt='hero' loading='lazy' className='slide-five-mobile' />

                            <div className='hero__text'>
                                <div className='overlay-container'>
                                    <p className='fifth_slider'>Health insurance that covers <b>EYE, <br />
                                        DENTAL, MENTAL HEALTH</b> care and more</p>
                                    <p className='fifth_slider_p'>
                                        With as little as <b>GHS 365</b>, you get up to <b>GHS 9000</b> worth of quality <br />
                                        healthcare at any medical facility. <span>You also get safe and instant access<br />
                                            to medical claims. No delays.</span>
                                    </p>
                                    <div className='imageoverlay'></div>

                                </div>

                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <div className='relative'>
                                <img src={slider6} alt='hero' loading='lazy' className='slide-six-laptop' />
                                <div className='absolute inset-0 bg-black/15'></div>
                            </div>
                            <img src={slider6mobile} alt='hero' loading='lazy' className='slide-six-mobile' />

                            <div className='hero__text'>
                                <p className='sixth__slider'>
                                    Dial <b>*915#</b><br />to join the DOSH Revolution
                                </p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <img src={slider7} alt='hero' loading='lazy' className='slide-seven-laptop' />
                            <img src={slider7mobile} alt='hero' loading='lazy' className='slide-seven-mobile' />

                            <div className='hero__text'>
                                <p className='eight_slider'>Overall wellness includes <b>Mental health.</b><br />
                                    We’ve got you covered.
                                </p>
                                <p className='eight_slider_p'>The only health insurance with mental health coverage</p>
                            </div>
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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
                            <img src={slider10} alt='hero' loading='lazy' className='slide-ten-laptop' />
                            <img src={slider10mobile} alt='hero' loading='lazy' className='slide-ten-mobile' />
                            <div className='slide-text'>
                                <h3>People are signing  with us</h3>
                                <div className="slide-arrow">
                                    <Link to='/register' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                        <small>Join the Revolution</small>
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


                        <div className='navigate_auto' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                            <div className='auto-btn1'></div>
                            <div className='auto-btn2'></div>
                            <div className='auto-btn3'></div>
                            <div className='auto-btn4'></div>
                            <div className='auto-btn5'></div>
                            <div className='auto-btn6'></div>
                            <div className='auto-btn7'></div>
                            <div className='auto-btn8'></div>
                            <div className='auto-btn9'></div>
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
                        <label htmlFor='radio9' className='manual-btn'></label>
                    </div>
                </div>

            </div>

            <div className='cream__hero'></div>
            {showButton && (
                <button className="scroll-button" onClick={scrollToNextSection}>
                    <IoIosArrowDown className='lg:text-[30px] text-[28px]' />
                </button>
            )}

            {/*<section className='about__section'>
                <div className='about__banner'>
                    <Link to='https://dsp.onenet.xyz:50443/#/'><img src={banner} alt='banner' /></Link>
                </div>
            </section>*/}

            <section id='home' className='home__section'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>HEALTH INSURANCE SERVICES:</h4>
                        <h3 className="elevate" dangerouslySetInnerHTML={{ __html: homeData.health_insurance_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.health_insurance_body }} />
                        <Link onClick={() => { setInsuranceDetailModal(true) }}>
                            Read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img
                            src={homeData?.health_insurance_image ? `https://doshcms.interactivedigital.com.gh/${homeData.health_insurance_image}` : "assets/elevate.png"}
                            alt=''
                            loading='lazy' />
                    </div>
                </div>
                {showInsuranceDetailModal && <InsuranceDetails onClose={() => setInsuranceDetailModal(false)} />}


            </section>

            <section id='home' className='home__section-next'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>FINANCIAL SERVICES:</h4>
                        <h3 className='' dangerouslySetInnerHTML={{ __html: homeData.finance_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.finance_body }} />
                        <Link onClick={() => { setShowFinanceDetailModal(true) }}>Read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img
                            src={homeData?.finance_image ? `https://doshcms.interactivedigital.com.gh/${homeData.finance_image}` : "assets/elevate.png"}
                            alt='student'
                            loading='lazy'
                            className='pl-2 lg:pl-0' />
                    </div>
                </div>
                {showFinanceDetailModal && <FinanceDetails onClose={() => setShowFinanceDetailModal(false)} />}
            </section>

            <section id='home' className='home__section'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>INSURANCE BROKERAGE:</h4>
                        <h3 className="elevate" dangerouslySetInnerHTML={{ __html: homeData.risk_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.risk_body }} />
                        <Link onClick={() => { setShowRiskModal(true) }} className='linkers'>Read More
                            {/*<svg
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
                            </svg>*/}
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img
                            src={homeData?.risk_image ? `https://doshcms.interactivedigital.com.gh/${homeData.risk_image}` : "assets/elevate.png"}
                            alt='digital'
                            loading='lazy'
                            className='pl-2 lg:pl-0' />
                    </div>
                </div>
                {showRiskModal && <RiskDetails onClose={() => setShowRiskModal(false)} />}


            </section>

            <section id='home' className='home__section-next'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>RIDE SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.ride_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.ride_body }} />
                        <Link className='linkers'>Coming Soon
                            {/*<svg
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
                            </svg>*/}
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img
                            src={homeData?.ride_image ? `https://doshcms.interactivedigital.com.gh/${homeData.ride_image}` : "assets/elevate.png"}
                            alt='ride' loading='lazy' />
                    </div>
                </div>
                {showInsuranceDetailModal && <InsuranceDetails onClose={() => setInsuranceDetailModal(false)} />}


            </section>

            <section id='home' className='home__section'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>ERP SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.erp_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.erp_body }} />
                        <Link>Coming Soon
                            {/*<svg
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
                            </svg>*/}
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img
                            src={homeData?.erp_image ? `https://doshcms.interactivedigital.com.gh/${homeData.erp_image}` : "assets/elevate.png"}
                            alt='digital'
                            loading='lazy'
                            className='pl-2 lg:pl-0' />
                    </div>
                </div>


            </section>

            <section id='home' className='home__section-next'>
                <div className='container home__student'>
                    <div className='home__student-left'>
                        <h4>E-COMMERCE SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.commerce_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.commerce_body }} />
                        <Link>Coming Soon
                            {/*<svg
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
                            </svg>*/}
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className='home__student-right'>
                        <img data-aos="zoom-in-right"
                            src={homeData?.commerce_image ? `https://doshcms.interactivedigital.com.gh/${homeData.commerce_image}` : "assets/elevate.png"}
                            alt='ride'
                            loading='lazy'
                            className='pl-2 lg:pl-0' />
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

export default Home
