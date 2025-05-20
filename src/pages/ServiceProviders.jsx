import React, { useEffect, useState } from 'react';
import './ServiceProviders.css';
import services from '../images/clinic3.png';
import { FaFilter } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
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
    const [searchQuery, setSearchQuery] = useState('');
    const [serviceData, setServiceData] = useState(null);
    const [titleData, setTitleData] = useState(null);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleFilter = async (filters) => {
        const { region } = filters;

        if (region) {
            try {
                const resp = await fetch(
                    `https://doshcms.interactivedigital.com.gh/api/fetch-hsp-data/${encodeURIComponent(region)}`
                );
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                const data = await resp.json();
                console.log('hsp Data:', data);
                setFilteredData(data);
            } catch (err) {
                console.error('Error fetching hospitals for region:', err);
                setFilteredData([]);
            }
        } else {
            setFilteredData([]);
        }

        toggleModal();
    };

    const handleSearch = (e) => {
        const q = e.target.value.toLowerCase();
        setSearchQuery(q);

        const filtered = filteredData.filter(h =>
            h.hospital_name?.toLowerCase().includes(q) ||
            h.district?.toLowerCase().includes(q) ||
            h.phone_number1?.toLowerCase().includes(q) ||
            h.phone_number2?.toLowerCase().includes(q) ||
            h.latitude?.toLowerCase().includes(q) ||
            h.longitude?.toLowerCase().includes(q) ||
            h.email?.toLowerCase().includes(q)
        );

        setFilteredData(filtered);
    };

    useEffect(() => {
        const lastIndex = filteredData.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, filteredData]);

    useEffect(() => {
        const slider = setInterval(() => setIndex(i => i + 1), 7000);
        return () => clearInterval(slider);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const [hdrRes, titleRes] = await Promise.all([
                    fetch('https://doshcms.interactivedigital.com.gh/api/fetch-hsp-header'),
                    fetch('https://doshcms.interactivedigital.com.gh/api/fetch-hsp-page-titles'),
                ]);
                const [hdrJson, titleJson] = await Promise.all([hdrRes.json(), titleRes.json()]);
                setServiceData(hdrJson[0]);
                setTitleData(titleJson[0]);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    if (!titleData) return <div>Loading...</div>;

    return (
        <div className='main__package'>
            <div className='main__services'>
                <img
                    data-aos="fade-down"
                    src={serviceData?.image
                        ? `https://doshcms.interactivedigital.com.gh/${serviceData.image}`
                        : services}
                    alt='service providers'
                    loading='lazy'
                />
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
                    <hr className='underline' />

                    <section className='filter-section'>
                        <h1 className='hsp__text'>Click on filter to search for HSP</h1>
                        <div className='filter__search'>
                            <button className="filter-button" onClick={toggleModal}>
                                <FaFilter /> Filter
                            </button>
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
                        <FilterModal
                            showModal={showModal}
                            onClose={toggleModal}
                            onFilter={handleFilter}
                        />
                    </section>

                    <section>
                        <div className='hospital__main'>
                            <HospitalTable data={filteredData} />
                        </div>
                    </section>

                    <div className='anime-sect'>
                        <div className='empty-container' />
                        <div className='empty-container' />
                        <div className='empty-container' />
                        <div className='plan'>
                            <p>Need a plan today? Call us to assist you.</p>
                            <button
                                type='button'
                                onClick={() => setShowCallModal(true)}
                                className='plan-btn'
                            >
                                Request a call
                            </button>
                        </div>
                    </div>
                    {showCallModal && <CallModal onClose={() => setShowCallModal(false)} />}
                </div>
            </section>
        </div>
    );
};

export default ServiceProviders;
