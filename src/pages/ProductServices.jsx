import React, { useEffect, useState } from 'react';
import './ProductServices.css';
import Slider from "react-slick";
import doshdata from "../doshdata.js";
import doshvideo from '../images/dosh.mp4';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InsuranceTable from '../components/InsuranceTable.jsx';
import FinanceTable from '../components/FinanceTable.jsx';

// import { useNavigate } from 'react-router-dom';
import Insure from '../components/Insure.jsx';
import InsuranceDetails from '../components/InsuranceDetails.jsx';
import FinancialDetails from '../components/FinancialDetails.jsx';
import FinanceSideModal from '../components/FinanceSideModal.jsx';
import RiskDetails from '../components/RiskDetails.jsx';

const ProductServices = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isInsureOpen, setInsureOpen] = useState(false);  // State for Insure modal
    const [currentModal, setCurrentModal] = useState(null);  // State to handle which modal is open
    const [isRiskDetailsOpen, setRiskDetailsOpen] = useState(false);  // State for RiskDetails popup


    const NextArrow = ({ onClick }) => (
        <button
            className="absolute bottom-2 lg:bottom-4 left-[60%] md:left-[55%] lg:left-[60%] transform -translate-x-1/2 bg-transparent text-[#9E825B] text-2xl p-4 hover:bg-[#9E825B] hover:text-white transition duration-300 z-10 rounded-full border"
            onClick={onClick}
        >
            <FaArrowRightLong />
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute bottom-2 lg:bottom-4 left-[37%] md:left-[45%] lg:left-[40%] transform -translate-x-1/2 bg-transparent text-[#9E825B] text-2xl p-4 hover:bg-[#9E825B] hover:text-white transition duration-300 z-10 rounded-full border"
            onClick={onClick}
        >
            <FaArrowLeftLong />
        </button>
    );

    // const navigate = useNavigate();

    //popup for the table
    const openPopup = (productIndex) => {
        const product = products[productIndex];
        if (product.id === 2) {  // Finance Services ID
            setFinanceTableOpen(true);  // Open FinanceTable for finance services
        } else {
            setPopupOpen(true);  // Open InsuranceTable for other services
        }
    };

    const closePopup = () => {
        setPopupOpen(false);
        setFinanceTableOpen(false);
    };

    // const closePopup = () => {
    //     setPopupOpen(false);
    // };

    // Open Insure modal when "Pick a Package" is clicked
    const openInsure = () => {
        setInsureOpen(true);
    };

    const closeInsure = () => {
        setInsureOpen(false);
    };

    const [isFinancialPopupOpen, setFinancialPopupOpen] = useState(false);  // State for Financial popup
    const [isFinanceTableOpen, setFinanceTableOpen] = useState(false);  // State for FinanceTable


    // Open Financial popup when "Pick a Package" for Financial Services is clicked
    const openFinancialPopup = () => {
        setFinancialPopupOpen(true);
    };

    const closeFinancialPopup = () => {
        setFinancialPopupOpen(false);
    };

    // Open the appropriate modal based on current slide index
    const openModal = (index) => {
        if (index === 0) {
            setCurrentModal('insurance');  // Open InsuranceDetails modal
        } else if (index === 1) {
            setCurrentModal('finance');    // Open FinancialDetails modal
        } else if (index === 2) {  // Assuming the DOSH Risk is the 3rd slide
            setCurrentModal('risk');      // Open RiskDetails modal
        }
    };


    const closeModal = () => {
        setCurrentModal(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => setIndex(newIndex), // Update index on slide change
    };

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sections = ['service', 'slider', 'video', 'insurance'];

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
            setCurrentSectionIndex(0);
            const firstSection = document.getElementById(sections[0]);
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const [products] = useState(doshdata);
    const [index, setIndex] = useState(0);

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
            setIndex(index + 1);
        }, 15000);
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

    const handleMouseEnter = (e) => {
        e.target.play();
    };

    const handleMouseLeave = (e) => {
        e.target.pause();
    };

    return (
        <div className='ps__page'>
            <div className='main__product'>
                <img data-aos="fade-down" src={require('../images/ppp.jpg')} alt='product&services' className='object-cover' loading='lazy' />
                <div className='product__text'>
                    <p>Protect your <b>future</b> with our
                        comprehensive health insurance packages
                    </p>
                </div>
            </div>
            <button className="scroll-button" onClick={scrollToNextSection}>
                <IoIosArrowDown size={30} />
            </button>

            <section id="slider" className="psl relative">
                <Slider {...settings}>
                    {products.map((product, productIndex) => (
                        <div
                            key={product.id}
                            className={`w-full h-full flex items-center justify-center lg:px-16 pr-4 lg:h-full ${!product.comparetext && !product.picker ? 'bg-none' : 'bg-default'}`}
                        >
                            <div className="container mx-auto px-4">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                    {/* Text section */}
                                    <div className="flex-1 text-white space-y-4">
                                        <h4 className="text-[24px] md:text-[32px] lg:text-[44px] font-bold text-[#9E825B] mb-2">
                                            {product.title}
                                        </h4>
                                        <p className="text-sm lg:text-[16px] leading-relaxed text-align-justify">
                                            {product.quote}
                                        </p>
                                        <div className="flex lg:space-x-4 space-x-2 mt-4">
                                            <button
                                                onClick={() => openModal(productIndex)}
                                                className="bg-white text-[#9E825B] py-2 px-4 md:px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                                            >
                                                {product.read}
                                            </button>
                                            {/* Conditionally render comparetext and picker buttons */}
                                            {product.comparetext && (
                                                <button onClick={() => openPopup(productIndex)} className="bg-white text-[#9E825B] py-2 px-4 md:px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                                    {product.comparetext}
                                                </button>
                                            )}
                                            {product.picker && product.id === 1 && (
                                                <button onClick={openInsure} className="bg-white text-[#9E825B] py-2 px-4 md:px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                                    {product.picker}
                                                </button>
                                            )}
                                            {product.picker && product.id === 2 && (
                                                <button onClick={openFinancialPopup} className="bg-white text-[#9E825B] py-2 px-4 md:px-6 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                                                    {product.picker}
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Image section */}
                                    <div className="flex-1 w-full">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-40 lg:h-full object-cover rounded-lg shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Arrows with text in between */}
                <div className="absolute lg:bottom-4 bottom-14 left-[50%] transform -translate-x-1/2 text-center text-[#9E825B] text-lg py-4">
                    <p>More Services</p>
                </div>

                {isPopupOpen && <InsuranceTable closePopup={closePopup} />}
                {isFinanceTableOpen && <FinanceTable closePopup={closePopup} />}

                {isInsureOpen && <Insure onClose={closeInsure} />}
                {isFinancialPopupOpen && <FinanceSideModal onClose={closeFinancialPopup} />}

                {/* Render InsuranceDetails or FinancialDetails modals based on currentModal state */}
                {currentModal === 'insurance' && <InsuranceDetails onClose={closeModal} />}
                {currentModal === 'finance' && <FinancialDetails onClose={closeModal} />}
                {currentModal === 'risk' && <RiskDetails onClose={closeModal} />}
            </section>


            <section id='video' className='video__section'>
                <div className='container video-main'>
                    <div className='video__left' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <video
                            className='video__left'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            src={doshvideo}
                            autoPlay={false}
                            loop
                            muted
                            controls
                            loading='lazy'
                        />
                    </div>
                    <div className='video__right'>
                        <h4>SUCCESS STORIES VIDEO</h4>
                        <h6>Affordable health insurance for you and your loved ones.</h6>
                        <small>Dial *915# to sign up with as low as GHS 365 and get GHS 9000 worth of cover at any medical facility.<br />Join the DOSH Revolution!.</small>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProductServices;
