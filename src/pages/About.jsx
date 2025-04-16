import React, { useEffect, useState } from 'react'
import './About.css'
// import about from '../images/business.png'
// import handshake from "../images/about-handshake.png"
import board from "../images/about-board.png"
import settings from "../images/about-settings.png"
// import banner from '../images/dosh-banner.png'
import { Link } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowDown } from 'react-icons/io'

const About = () => {

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [showButton, setShowButton] = useState(false)
    const [aboutData, setAboutDta] = useState(null);

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

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    //fetch api for about data
    useEffect(() => {
        const fetchaboutData = async () => {
            try {
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/fetch-about-data');
                const data = await response.json();
                console.log('about Data:', data);
                setAboutDta(data[0]);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };
        fetchaboutData();
    }, []);

    if (!aboutData) {
        return <div>Loading...</div>;
    }
    return (
        <div className='sect'>
            <section data-aos="fade-down" className='about__header'>
                <img
                    src={aboutData?.aboutus_header_image ? `https://doshcms.interactivedigital.com.gh/${aboutData.aboutus_header_image}` : "assets/elevate.png"}
                    alt='about' className='object-cover' loading='lazy' />
            </section>
            {showButton && (
                <button className="scroll-button" onClick={scrollToNextSection}>
                    <IoIosArrowDown size={30} />
                </button>
            )}
            <section id='handshake' className='about__section'>
                <div className='container about__hand-shake'>
                    <div className='about_left'>
                        <h3>Who we are </h3>
                        <p className='text-justify' dangerouslySetInnerHTML={{ __html: aboutData.who_we_are_body }} />
                    </div>
                    <div data-aos="zoom-in" className='about__right'>
                        <img
                            src={aboutData?.who_we_are_image ? `https://doshcms.interactivedigital.com.gh/${aboutData.who_we_are_image}` : "assets/elevate.png"}
                            className='about__image' alt='handshake' loading='lazy' />
                    </div>
                </div>
            </section>
            <section id='mission' className='about__section'>
                <div data-aos="zoom-in" className='container next-about__hand-shake'>
                    <div className='next-about_left'>
                        <img
                            src={aboutData?.mission_image ? `https://doshcms.interactivedigital.com.gh/${aboutData.mission_image}` : "assets/elevate.png"}
                            className='about__image object-cover'
                            alt='handshake'
                            loading='lazy' />
                    </div>
                    <div className='next-about__right'>
                        <h3 dangerouslySetInnerHTML={{ __html: aboutData.mission_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: aboutData.mission_body }} />
                    </div>
                </div>
            </section>
            <section id='values' className='about__section'>
                <div data-aos="fade-up" className='container next-about__settings'>
                    <div className='next-about-settings_left'>
                        <img src={settings} className='about__image' alt='handshake' loading='lazy' />
                    </div>
                    <div className='next-about-settings__right'>
                        <h3 dangerouslySetInnerHTML={{ __html: aboutData.values_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: aboutData.values_body }} />
                    </div>
                </div>
            </section>

            <section id='expertise' className='about__section'>
                <div data-aos="flip-left" className='container about__cards'>
                    <div className='about__cards-left'>
                        <h3 dangerouslySetInnerHTML={{ __html: aboutData.expertise_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: aboutData.expertise_body }} />
                    </div>
                    <div className='about__cards-right'>
                        <h3 dangerouslySetInnerHTML={{ __html: aboutData.inspiration_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: aboutData.inspiration_body }} />
                    </div>

                </div>
            </section>

            <section className='about__section'>
                <div className='about__banner'>
                    <Link to=''>
                        <img
                            src={aboutData?.banner_image ? `https://doshcms.interactivedigital.com.gh/${aboutData.banner_image}` : "assets/elevate.png"}
                            alt='banner'
                            loading='lazy' />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default About
