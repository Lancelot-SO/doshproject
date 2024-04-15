import React, { useEffect } from 'react'
import './About.css'
import about from '../images/business.png'
import handshake from "../images/about-handshake.png"
import board from "../images/about-board.png"
import settings from "../images/about-settings.png"
import banner from '../images/dosh-banner.png'
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
                        <h3>Who we are </h3>
                        <p>Empowering Financial Wellness.<br />
                            In today’s ultra-competitive business world,
                            true leadership demands ambition, focus,
                            and an unerring drive.
                            At DOSH, we recognize and seek out like-minded
                            businesses and individuals.
                            With over 20 years of financial and insurance expertise, we provide essential support via an accessible,
                            affordable, and convenient service-specific ecosystem. The DOSH mandate is simple: To provide industry-leading solutions and services to our clients,
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
                        <p>We empower you to maximize your economic opportunities.The DOSH mandate is to provide fast, reliable and dependable
                            access to cutting edge tech-enabled solutions at the lowest possible cost.
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
                        <h3>Our Core Values</h3>
                        <p><b>Partnership:</b> DOSH is committed to working with you every step of the way, ensuring we thoroughly
                            understand your needs, so we can offer specific and practical solutions that work for you.
                        </p>
                        <p><b>Support:</b> DOSH is devoted to assisting you in navigating your financial landscape, ensuring you have access to the necessary support and infrastructure to maximize your economic potential.
                        </p>
                        <p><b>Innovation:</b> DOSH continuously evaluates and develops new avenues in financial management. We employ industry best practices, and class-leading technological innovation, which serves to enhance our commitment to ensuring your financial success.
                        </p>
                        <p>At DOSH, we believe that financial viability should be accessible to everyone. Join the DOSH Revolution and unlock the full potential of your financial portfolio.
                        </p>
                    </div>
                </div>
            </section>

            <section className='about__section'>
                <div data-aos="flip-left" className='container about__cards'>
                    <div className='about__cards-left'>
                        <h3>OUR EXPERTISE</h3>
                        <p>A DOSH client is unique.
                            More importantly, a DOSH client is the ONLY client.
                        </p>
                        <p>At DOSH this bedrock tenant is the pillar of our business philosophy.
                            We have built a vertically integrated network of insurance and finance
                            managers, who design solutions that are client-specifi. Our only goal is to
                            enhance your personal life and business operative through expert guidance and premium
                            solutions.
                        </p>
                    </div>
                    <div className='about__cards-right'>
                        <h3>Our Inspiration</h3>
                        <p>Your success. DOSH is committed to providing the fundational system that fosters your
                            financial stability and well-being. With us you can continue the pursuit of your goals without constraint.
                        </p>
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
