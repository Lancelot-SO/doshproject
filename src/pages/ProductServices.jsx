import React, { useEffect, useState } from 'react'
import './ProductServices.css';
import product from '../images/prodNew.png'
import productservice from "../images/productservice.png"
import doshdata from "../doshdata.js"
import doshvideo from '../images/dosh.mp4'

import dosh from "../images/dosh_logo.png"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Financial from '../components/Financial.jsx';

import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from 'react-icons/io';

const ProductServices = () => {

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sections = ['service', 'slider', 'video', 'insurance']; // Add more section IDs here if needed

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


    const [products] = useState(doshdata);
    const [index, setIndex] = useState(0);

    const [showFinanceModal, setshowFinanceModal] = useState(false);


    useEffect(() => {
        const lastIndex = products.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index, products]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 15000);
        return () => {
            clearInterval(slider)
        }
    }, [index])

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    // Function to handle mouse enter
    const handleMouseEnter = (e) => {
        e.target.play();
    };

    const handleMouseLeave = (e) => {
        e.target.pause();
    };


    return (
        <div className='ps__page'>
            <div className='main__product'>
                <img data-aos="fade-down" src={product} alt='product&services' loading='lazy' />
                <div className='product__text'>
                    <p>Protect your <b>future</b> with our
                        comprehensive health insurance packages
                    </p>
                </div>
            </div>
            <button className="scroll-button" onClick={scrollToNextSection}>
                <IoIosArrowDown size={30} />
            </button>
            <section id='service' className='product'>
                <div className='container products'>
                    <div data-aos="zoom-in" className='product-left'>
                        <img src={productservice} alt='productservice' loading='lazy' />
                    </div>
                    <div className='product-right'>
                        <h4>DOSH <br />SERVICES</h4>
                        <hr className='underline'></hr>
                        <p>
                            Financial inclusion is the key to participation
                            and advancement in the global economy. DOSH's mission
                            is to provide unrivaled solutions to individuals, SOHO
                            and SMB in emerging markets where access to financial
                            services has previously been inaccessible. DOSH has fabricated an unprecedented ecosystem of
                            leading-edge technologies that offer fast, reliable access to financial services at the lowest possible cost.
                            We empower markets to bridge the financial divide.
                        </p>
                    </div>
                </div>
            </section>

            <section id='slider' className='productslider'>
                <h1 className='title'>Streamlined Financial Solutions<br />
                    Achieve your Dreams with Seamless Funding Solutions
                </h1>
                <h2>Odio vulputate cras vel lacinia turpis volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.</h2>
                <div className='section1-center'>
                    {
                        products.map((item, indexPeople) => {
                            const { id, quote, image, title } = item;
                            let position = "nextSlide";
                            if (indexPeople === index) {
                                position = "activeSlide";
                            }
                            if (indexPeople === index - 1 || (index === 0 && indexPeople === products.length - 1)) {
                                position = "lastSlide"
                            }
                            return (
                                <div>
                                    <article className={position} key={id}>
                                        <div className='divider'>
                                            <div className='left'>
                                                <h4>{title}</h4>
                                                <hr className='underline'></hr>
                                                <p className='quote'>{quote}</p>
                                                <Link onClick={() => setshowFinanceModal(true)}>Read more
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="14"
                                                        height="14"
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
                                            <div className='right'>
                                                <img src={image} alt='person' className="person-img" loading='lazy' />
                                            </div>

                                        </div>

                                    </article>
                                    <button className='prev' onClick={() => setIndex(index - 1)}>
                                        <FaArrowLeftLong />
                                    </button>
                                    <button className='next' onClick={() => setIndex(index + 1)}>
                                        <FaArrowRightLong />
                                    </button>
                                </div>
                            )
                        })
                    }
                    {showFinanceModal && <Financial onClose={() => setshowFinanceModal(false)} />}

                </div>

            </section>

            <section id='video' className='video__section'>
                <div className='container video-main'>
                    <div className='video__left' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <video
                            className='video__left'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            src={doshvideo}
                            autoPlay={false} // Autoplay set to false to play only on hover
                            loop
                            muted
                            controls
                            loading='lazy'
                        />
                    </div>
                    <div className='video__right'>
                        <h4>SUCCESS STORIES VIDEO</h4>
                        <h6>“ Affordable health insurance for you and your loved ones.</h6>
                        <small>Dial *915# to sign up with as low as GHS 365 and get GHS 9000 worth of cover at any medical facility.<br />Join the DOSH Revolution!. ”</small>
                    </div>
                </div>
            </section>

            <section id='insurance' className='insurance'>
                <div className='prod-insure'>
                    <h2>DOSH <br />Health Insurance packages</h2>
                </div>
                <div className='main-insurance'>
                    <div className='glass-bg'>
                        <div className='glass-table'>
                            <table>
                                <tr>
                                    <td className='dosh'><img src={dosh} alt='Dosh Logo' loading='lazy' /></td>
                                    <td className='price'>
                                        <h3>Insurance</h3>
                                        <span>GHS365</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-like'>
                                        <h3>Enhanced</h3>
                                        <span>GHS365</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Insurance</h3>
                                        <span>GHS750</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Enhanced</h3>
                                        <span>GHS750</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Insurance</h3>
                                        <span>GHS1000</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Enhanced</h3>
                                        <span>GHS1200</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Insurance</h3>
                                        <span>GHS2500</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Enhanced</h3>
                                        <span>GHS2500</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Insurance</h3>
                                        <span>GHS5000</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Enhanced</h3>
                                        <span>GHS5000</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Insurance</h3>
                                        <span>GHS10000</span>
                                        <small><Link>Read More</Link></small>
                                    </td>
                                    <td className='price-next'>
                                        <h3>Enhanced</h3>
                                        <span>GHS10000</span>
                                        <small><Link>Read More</Link></small>
                                    </td>


                                </tr>
                                <tr>
                                    <td className='heading'>Annual Premium</td>
                                    <td className='row-center'>GHS 365</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>GHS 750</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 1000</td>
                                    <td className='row-center'>GHS 1200</td>
                                    <td className='row-center'>GHS 2500</td>
                                    <td className='row-center'>GHS 2800</td>
                                    <td className='row-center'>GHS 5000</td>
                                    <td className='row-center'>GHS 5500</td>
                                    <td className='row-center'>GHS 10000</td>
                                    <td className='row-center'>GHS 11000</td>

                                </tr>
                                <tr>
                                    <td className='heading-total'>Total sum assured</td>
                                    <td className='row-center-total'>GHS 9,000</td>
                                    <td className='row-center-total'>GHS 21,000</td>
                                    <td className='row-center-total'>GHS 18,000</td>
                                    <td className='row-center-total'>GHS 42,000</td>
                                    <td className='row-center-total'>GHS 30,000</td>
                                    <td className='row-center-total'>GHS 54,000</td>
                                    <td className='row-center-total'>GHS 60,000</td>
                                    <td className='row-center-total'>GHS 95,000</td>
                                    <td className='row-center-total'>GHS 108,000</td>
                                    <td className='row-center-total'>GHS 167,000</td>
                                    <td className='row-center-total'>GHS 190,000</td>
                                    <td className='row-center-total'>GHS 286,000</td>
                                </tr>
                                <tr>
                                    <td className='heading'>Out Patient Limit OP (member)</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 3,000</td>
                                    <td className='row-center'>GHS 3,000</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                    <td className='row-center-total'>GHS 40,000</td>
                                    <td className='row-center-total'>GHS 40,000</td>
                                </tr>
                                <tr>
                                    <td className='heading'>In Patient Limit IP (member)</td>
                                    <td className='row-center'>GHS 6,100</td>
                                    <td className='row-center'>GHS 6,100</td>
                                    <td className='row-center'>GHS 12,600</td>
                                    <td className='row-center'>GHS 12,500</td>
                                    <td className='row-center'>GHS 21,500</td>
                                    <td className='row-center'>GHS 21,500</td>
                                    <td className='row-center-total'>GHS 41,250</td>
                                    <td className='row-center-total'>GHS 41,250</td>
                                    <td className='row-center-total'>GHS 57,500</td>
                                    <td className='row-center-total'>GHS 57,500</td>
                                    <td className='row-center-total'>GHS 115,000</td>
                                    <td className='row-center-total'>GHS 115,000</td>
                                </tr>
                                <tr>
                                    <td className='heading'>Medication Limit OP/IP (member)</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center-total'>GHS 3,750</td>
                                    <td className='row-center-total'>GHS 3,750</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Lab/Scan Limit OP/IP (member)</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 2,000</td>
                                    <td className='row-center'>GHS 2,000</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Death (member)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Death (Spouse)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Death (2x Dependants)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,250</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Critical illness (member)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,250</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Permanent Disability (member)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,250</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Personal Accident (each person)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 200</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 2,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 3,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 4,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>** Partial Disability</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>3%-60%</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>3%-60%</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>3%-60%</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>3%-60%</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>3%-60%</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>3%-60%</td>
                                </tr>

                                <tr>
                                    <td className='heading-last'></td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td><td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td><td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td><td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td><td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductServices
