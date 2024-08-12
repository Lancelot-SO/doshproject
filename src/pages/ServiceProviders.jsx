import React, { useEffect, useState } from 'react'
import "./ServiceProviders.css"
import services from "../images/clinic.png"
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
// import anime from '../images/Enterprise1.png'
import data from "../data"
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FilterModal from '../components/FilterModal';
import CallModal from '../components/CallModal';
// import { Link } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";
import HospitalTable from '../components/HospitalTable';



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
                    <h1>Everything is seamless on <b>DOSH</b></h1>
                    <span>
                        DOSH guarantees instant payment of medical claims for Health Service providers.
                    </span>
                </div>
            </div>


            <section className='provider-container'>
                <div className='container service__cards'>
                    <h4>Find the closest service provider on DOSH</h4>
                    <hr className='underline'></hr>

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

                    <section>
                        <div>
                            {/* <div>
                                <div>
                                    <p>Country</p>
                                    <p>Region</p>
                                    <p>District</p>
                                </div>
                            </div> */}
                            <HospitalTable />
                        </div>
                    </section>

                    <div className='anime-sect'>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='plan'>
                            <p>Need a plan today ? Call us to Assist you.</p>
                            <button type='button' onClick={() => setshowCallModal(true)} className='plan-btn'>Request a call</button>
                        </div>
                    </div>
                    {showCallModal && <CallModal onClose={() => setshowCallModal(false)} />}

                </div>
            </section>


        </div>
    )
}

export default ServiceProviders
