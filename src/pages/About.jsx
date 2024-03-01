import React, { useEffect } from 'react'
import './About.css'
import about from '../images/business.png'
import handshake from "../images/about-handshake.png"
import board from "../images/about-board.png"
import settings from "../images/about-settings.png"
import student from '../images/student-photo.png'
import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

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
            <section className='about__section'>
                <div className='container about__hand-shake'>
                    <div className='about_left'>
                        <h3>Who we are? </h3>
                        <p>Empowering Financial Wellness.<br />
                            In today’s ultra-competitive business world,
                            true leadership demands ambition, focus,
                            and an unerring drive.
                            At DOSH, we recognize and seek out like-minded
                            businesses and individuals.
                            With over 20 years of financial and insurance expertise, we provide essential support and guidance, via an accessible,
                            affordable, and convenient service-specific ecosystem. The DOSH mandate is simple; To provide industry-leading solutions and services to our clients,
                            while bridging the financial divide that hinders true inclusion.
                        </p>
                    </div>
                    <div data-aos="zoom-in" className='about__right'>
                        <img src={handshake} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                </div>
            </section>
            <section className='about__section'>
                <div data-aos="zoom-in" className='container next-about__hand-shake'>
                    <div className='next-about_left'>
                        <img src={board} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                    <div className='next-about__right'>
                        <h3>Our Mission</h3>
                        <p>We are dedicated to safeguarding your financial status,
                            by ensuring the decisions you make are well-informed. DOSH provides valuable insight and financial solutions that empower you to maximize your economic opportunities.
                        </p>
                    </div>
                </div>
            </section>
            <section className='about__section'>
                <div data-aos="fade-up" className='container next-about__settings'>
                    <div className='next-about-settings_left'>
                        <img src={settings} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                    <div className='next-about-settings__right'>
                        <h3>Our Core Value</h3>
                        <p><b>Partnership:</b> DOSH is committed to working with you every step of the way, ensuring we thoroughly
                            understand your needs, so we can offer specific and practical solutions that work for you.
                        </p>
                        <p><b>Support:</b> DOSH is devoted to assisting you in navigating your financial landscape, ensuring you have access to the necessary support and infrastructure to maximize your economic potential.
                        </p>
                        <p><b>Innovation:</b> DOSH continuously evaluates and develops new avenues in financial management. We employ “industry best practices”, and class-leading technological innovation, which serves to enhance our commitment to ensuring your financial success.
                        </p>
                        <p>At DOSH we believe that financial viability should be accessible to everyone. Join the DOSH revolution and unlock the full potential of your financial portfolio.
                        </p>
                    </div>
                </div>
            </section>

            <section className='about__section'>
                <div data-aos="flip-left" className='container about__cards'>
                    <div className='about__cards-left'>
                        <h3>OUR EXPERTISE</h3>
                        <p>Tenant: A DOSH client is unique.
                            More importantly, a DOSH client is the ONLY client.
                        </p>
                        <p>At DOSH this bedrock tenant is the pillar of our business philosophy.
                            We have built a vertically integrated network of insurance and finance
                            managers, who design solutions that are client-specific and tailored to
                            enhance your personal life and business operations. Our only goal is to
                            provide expert guidance and premium service that ensures DOSH clients attain
                            their financial goals.
                        </p>
                    </div>
                    <div className='about__cards-right'>
                        <h3>WHAT INSPIRES US</h3>
                        <p>When you are a successful DOSH client,
                            we are inspired because we know that DOSH is providing the foundational system
                            that fosters your financial stability and well-being, thus allowing you to continue
                            the pursuit of all your goals, without constraint.
                        </p>
                    </div>

                </div>
            </section>

            <section className='about__section'>
                <div className='container about__student'>
                    <div className='about__student-left'>
                        <h3>Join the<br /><b>Revolution !</b></h3>

                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer">Get Started</Link>
                    </div>
                    <div data-aos="zoom-in" className='about__student-right'>
                        <img src={student} alt='student' loading='lazy' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
