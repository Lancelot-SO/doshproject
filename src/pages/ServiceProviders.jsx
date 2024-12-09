import React, { useEffect, useState } from 'react';
import './ServiceProviders.css';
import services from '../images/clinic.png';
import { FaFilter } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import { hospitalData } from '../data'; // Import the hospital data
import FilterModal from '../components/FilterModal';
import CallModal from '../components/CallModal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HospitalTable from '../components/HospitalTable';

const ServiceProviders = () => {
    const [index, setIndex] = useState(0);
    const [showCallModal, setShowCallModal] = useState(false);
    const [showModal, setShowModal] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // State for search input

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleFilter = (filters) => {
        const { country, region, district } = filters;
        let filtered = [];

        if (country === 'Ghana') {
            if (region === 'Greater Accra') {
                filtered = hospitalData['Greater Accra'];
            } else if (region === 'Ashanti Region') {
                filtered = hospitalData['Ashanti'];
            } else if (region === 'Western Region') {
                filtered = hospitalData['Western'];
            } else if (region === 'Volta') {
                filtered = hospitalData['Volta'];
            } else if (region === 'Bono') {
                filtered = hospitalData['Bono'];
            }
            else if (region === 'Ahafo') {
                filtered = hospitalData['Ahafo'];
            }
            else if (region === 'Eastern') {
                filtered = hospitalData['Eastern'];
            }
            else if (region === 'Oti') {
                filtered = hospitalData['Oti'];
            }
            else if (region === 'Northern') {
                filtered = hospitalData['Northern'];
            }
            else if (region === 'Upper West') {
                filtered = hospitalData['Upper West'];
            }
            else if (region === 'Upper East') {
                filtered = hospitalData['Upper East'];
            }
            else if (region === 'Savannah') {
                filtered = hospitalData['Savannah'];
            }
            else if (region === 'Central') {
                filtered = hospitalData['Central'];
            }
            else if (region === 'North East') {
                filtered = hospitalData['North East'];
            }
            else if (region === 'Western North') {
                filtered = hospitalData['Western North'];
            }
            // Add conditions for other regions if needed
        }

        setFilteredData(filtered);
        toggleModal(); // Close the modal after filtering
    };

    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);

        const allHospitals = Object.values(hospitalData).flat();
        const filtered = allHospitals.filter(hospital =>
            (hospital.name && hospital.name.toLowerCase().includes(query)) ||
            (hospital.district && hospital.district.toLowerCase().includes(query)) ||
            (hospital.contact && hospital.contact.toLowerCase().includes(query)) ||
            (hospital.latitude && hospital.latitude.toLowerCase().includes(query)) ||
            (hospital.longitude && hospital.longitude.toLowerCase().includes(query)) ||
            (hospital.email && hospital.email.toLowerCase().includes(query))
        );

        setFilteredData(filtered);
    };


    useEffect(() => {
        const lastIndex = hospitalData['Greater Accra']?.length - 1 || 0;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 7000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

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
                    <span>DOSH guarantees instant payment of medical claims for Health Service providers.</span>
                </div>
            </div>

            <section className='provider-container'>
                <div className='container service__cards'>
                    <h4 className=''>Find the closest service provider on DOSH</h4>
                    <hr className='underline'></hr>

                    <section className='filter-section'>
                        <h1 className='hsp__text'>Click on filter to search for HSP</h1>

                        <div className='container filter__search'>
                            <button className="filter-button" onClick={toggleModal}><FaFilter /> Filter</button>
                            <div className="search-container">
                                <IoIosSearch className='search-icon' />
                                <input
                                    type="text"
                                    className="search-bar"
                                    placeholder="Search by hospital name or location"
                                    value={searchQuery}
                                    onChange={handleSearch}
                                />
                            </div>
                        </div>
                        <FilterModal showModal={showModal} onClose={toggleModal} onFilter={handleFilter} />
                    </section>

                    <section>
                        <div className='hospital__main'>
                            <HospitalTable data={filteredData} />
                        </div>
                    </section>


                    <div className='anime-sect'>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='empty-container'></div>
                        <div className='plan'>
                            <p>Need a plan today? Call us to Assist you.</p>
                            <button type='button' onClick={() => setShowCallModal(true)} className='plan-btn'>Request a call</button>
                        </div>
                    </div>
                    {showCallModal && <CallModal onClose={() => setShowCallModal(false)} />}
                </div>
            </section>
        </div>
    );
};

export default ServiceProviders;
