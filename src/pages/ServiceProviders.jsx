import React, { useEffect, useState } from 'react'
import "./ServiceProviders.css"
import services from "../images/services.png"
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import anime from '../images/anime.png'
import data from "../data"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FilterModal from '../components/FilterModal';
import CallModal from '../components/CallModal';
import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

const ServiceProviders = () => {

    const [people] = useState(data);
    const [index, setIndex] = useState(0);
    const [showCallModal, setshowCallModal] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }

    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 7000);
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


    return (
        <div className='main__package'>
            <div className='main__services'>
                <img data-aos="fade-down" src={services} alt='servicesproviders' loading='lazy' />
                <div className='service__text'>
                    <h1>Greater Accra</h1>
                    <p>
                        We offer a wide range of healthcare covers for our clients.<br />
                        Our clients benefit by getting personalized, quality service that is beyond comparison.
                    </p>
                </div>
            </div>
            <section className='filter-section'>
                <div className='container filter__search'>
                    <button className="filter-button" onClick={toggleModal}><FaFilter /> Filter</button>
                    <div className="search-container">
                        <IoIosSearch className='search-icon' />
                        <input type="text" className="search-bar" placeholder="Search users by country, Region or District" />
                    </div>
                </div>
                <FilterModal showModal={showModal} onClose={toggleModal} />
            </section>

            <section className='provider-container'>
                <div className='container service__cards'>
                    <h4>DOSH <br />INSURANCE PACKAGES</h4>
                    <hr className='underline'></hr>

                    <div className='anime'>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" loading='lazy' />
                            <p>DOSH 365</p>
                            <small>Plan</small>
                            <button className='anime-btn'><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign up</Link></button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" loading='lazy' />
                            <p>DOSH 750</p>
                            <small>Plan</small>
                            <button className='anime-btn'><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign up</Link></button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" loading='lazy' />
                            <p>DOSH 1000</p>
                            <small>Plan</small>
                            <button className='anime-btn'><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign up</Link></button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" loading='lazy' />
                            <p>DOSH 2500</p>
                            <small>Plan</small>
                            <button className='anime-btn'><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign up</Link></button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" loading='lazy' />
                            <p>DOSH 5000</p>
                            <small>Plan</small>
                            <button className='anime-btn'><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign up</Link></button>
                        </div>
                        <div className='anime-card'>
                            <img src={anime} alt="anime" loading='lazy' />
                            <p>DOSH 10000</p>
                            <small>Plan</small>
                            <button className='anime-btn'><Link to='https://dspm.onenet.xyz:50443/' target="_blank" rel="noopener noreferrer">Sign up</Link></button>
                        </div>
                    </div>
                    <div className='anime-sect'>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='plan'>
                            <p>Need a plan today ? Call us to Assist you.</p>
                            <button type='button' onClick={() => setshowCallModal(true)} className='plan-btn'>Call us</button>
                        </div>
                    </div>
                    {showCallModal && <CallModal onClose={() => setshowCallModal(false)} />}

                </div>
            </section>

            <section className='serviceslider'>
                <div className='section-center'>
                    <h1 className='testimonial'>Testimonials</h1>

                    {people.map((item, indexPeople) => {
                        const { id } = item;
                        let position = "nextSlide";
                        if (indexPeople === index) {
                            position = "activeSlide";
                        }
                        if (indexPeople === index - 1 || (index === 0 && indexPeople === people.length - 1)) {
                            position = "lastSlide";
                        }
                        return (
                            <article className={position} key={id}>
                                <div className='divide'>
                                    <img src={item.pic} alt='person' className="service-img" />
                                    <div className='service-name-quote'>
                                        <span className='service-name'>{item.name}</span>
                                        <p className='service-quote'>Dosh insurance company prioritizes customer satisfaction and is committed to providing exceptional service to our clients.</p>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                    <button className='previous' onClick={() => setIndex(index - 1)}>
                        <IoIosArrowBack size={30} />
                    </button>
                    <button className='nextitem' onClick={() => setIndex(index + 1)}>
                        <IoIosArrowForward size={30} />
                    </button>
                    <div className="slider-indicators">
                        <span className='slider-total'>{`${(index + 1).toString().padStart(2, '0')}/${people.length.toString().padStart(2, '0')}`}</span>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default ServiceProviders
