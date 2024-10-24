import React, { useEffect, useState } from 'react'
import './About.css'
import about from '../images/business.png'
import handshake from "../images/about-handshake.png"
import board from "../images/about-board.png"
import settings from "../images/about-settings.png"
import banner from '../images/dosh-banner.png'
import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from 'react-icons/io'

const About = () => {

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const sections = ['handshake', 'mission', 'values', 'expertise', 'banner']; // Add more section IDs here if needed

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
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);
    return (
        <div className='sect'>
            <section data-aos="fade-down" className='about__header'>
                <img src={about} alt='about' loading='lazy' />
            </section>
            <button className="scroll-button" onClick={scrollToNextSection}>
                <IoIosArrowDown size={30} />
            </button>
            <section id='handshake' className='about__section'>
                <div className='container about__hand-shake'>
                    <div className='about_left'>
                        <h3>Who we are </h3>
                        <p><b>Empowering your Financial Wellness.</b><br />
                            In today’s ultra-competitive business world, true leadership demands ambition, focus, and an unerring drive.
                            At DOSH, we recognize and seek out like-minded businesses and individuals. With over 20 years of financial and insurance expertise,
                            we provide essential support via an accessible, affordable, and available service-specific ecosystem. The DOSH mandate is simple:
                            To provide industry-leading solutions and services to our clients, while bridging the financial divide that hinders true inclusion.
                        </p>
                    </div>
                    <div data-aos="zoom-in" className='about__right'>
                        <img src={handshake} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                </div>
            </section>
            <section id='mission' className='about__section'>
                <div data-aos="zoom-in" className='container next-about__hand-shake'>
                    <div className='next-about_left'>
                        <img src={board} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                    <div className='next-about__right'>
                        <h3>Our Mission</h3>
                        <p>
                            To provide valuable insight and financial solutions that empower you to maximize your economic opportunities.
                        </p>
                    </div>
                </div>
            </section>
            <section id='values' className='about__section'>
                <div data-aos="fade-up" className='container next-about__settings'>
                    <div className='next-about-settings_left'>
                        <img src={settings} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                    <div className='next-about-settings__right'>
                        <h3>Our Core Values</h3>
                        <p><b>Partnership:</b>  DOSH is committed to working with you every step of the way, ensuring we thoroughly understand your needs, so we can offer specific and practical solutions that work for you.
                        </p>
                        <p><b>Support:</b> DOSH is devoted to assisting you in navigating your financial landscape, ensuring you have access to the necessary support and infrastructure to maximize your economic potential.
                        </p>
                        <p><b>Innovation:</b> DOSH continuously evaluates and develops new avenues in financial management. We employ industry best practices and leading technological innovation that enhance our commitment to ensuring your financial success.

                        </p>
                        <p>At DOSH, we believe that financial stability should be accessible to everyone. Join the DOSH Revolution and unlock the full potential of your financial portfolio.
                        </p>
                    </div>
                </div>
            </section>

            <section id='expertise' className='about__section'>
                <div data-aos="flip-left" className='container about__cards'>
                    <div className='about__cards-left'>
                        <h3>OUR EXPERTISE</h3>
                        A DOSH client is unique. More importantly, a DOSH client is the ONLY client.
                        At DOSH this bedrock tenant is the pillar of our business philosophy.
                        We have built a vertically integrated network of insurance and finance managers, who design solutions that are client-specific and tailored to enhance your personal life and business operations. Our only goal is to provide expert guidance and premium service that ensures DOSH clients attain their financial goals.
                    </div>
                    <div className='about__cards-right'>
                        <h3>Our Inspiration</h3>
                        <p>
                            When you succeed as a DOSH client, it inspires us because we know that DOSH is delivering the core financial framework that supports your stability and well-being. This empowers you to pursue your goals without limitations, and we are proud to be part of that journey.                            </p>
                    </div>

                </div>
            </section>

            <section className='about__section'>
                <div className='about__banner'>
                    <Link to='https://dsp.onenet.xyz:50443/#/'><img src={banner} alt='banner' /></Link>
                </div>
            </section>
        </div>
    )
}

export default About
