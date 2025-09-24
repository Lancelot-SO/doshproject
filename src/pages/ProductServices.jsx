import React, { useEffect, useState } from 'react';
import './ProductServices.css';
import Slider from "react-slick";
// import doshvideo from '../images/dosh.mp4';
import { FaArrowLeftLong, FaArrowRightLong, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowDown } from 'react-icons/io';
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InsuranceTable from '../components/InsuranceTable.jsx';
import FinanceTable from '../components/FinanceTable.jsx';
import RiskForm from '../components/RiskForm.jsx';
import Insure from '../components/Insure.jsx';
import InsuranceDetails from '../components/InsuranceDetails.jsx';
import FinancialDetails from '../components/FinancialDetails.jsx';
import FinanceSideModal from '../components/FinanceSideModal.jsx';
import RiskDetails from '../components/RiskDetails.jsx';
import Terms from '../components/Terms.jsx';
import { Link, useLocation } from 'react-router-dom';

const ProductServices = () => {
    // Modal and UI states
    const location = useLocation();

    const [currentModal, setCurrentModal] = useState(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isInsureOpen, setInsureOpen] = useState(false);
    const [isFinancialPopupOpen, setFinancialPopupOpen] = useState(false);
    const [isFinanceTableOpen, setFinanceTableOpen] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);


    // State for slider and API data replacing static products
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);

    // State for scroll button
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);

    //video state
    const [videoData, setVideoData] = useState(false);

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

    useEffect(() => {
        // Check if the device is mobile
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        if (isMobile) {
            let inactivityTimer;
            const handleScroll = () => {
                // Show button immediately when scrolling
                setShowButton(true);
                if (inactivityTimer) {
                    clearTimeout(inactivityTimer);
                }
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
            // For non-mobile devices, keep the button visible
            setShowButton(true);
        }
    }, []);

    // Fetch API data and update products array
    useEffect(() => {
        fetch('https://doshcms.interactivedigital.com.gh/api/fetch-pns-slider-sec')
            .then(response => response.json())
            .then(apiData => {
                const newProducts = [
                    {
                        id: 1,
                        title: 'Health Insurance',
                        subtitle: 'Protecting Your Health, Empowering Your Life',
                        // Use API data for health insurance content
                        quote: apiData.financial_slide.section_body,
                        caption: apiData.financial_slide.section_caption,
                        terms: "/terms",
                        image: apiData.financial_slide.section_image,
                        read: 'READ MORE',
                        comparetext: 'COMPARE',
                        picker: 'PICK A PACKAGE',
                    },
                    {
                        id: 2,
                        title: 'Financial Services',
                        subtitle: 'Financial Solutions That Match Your Ambitions',
                        // Use API data for financial services content
                        quote: apiData.health_slide.section_body,
                        caption: apiData.health_slide.section_caption,
                        image: apiData.health_slide.section_image,
                        read: 'READ MORE',
                        comparetext: 'COMPARE',
                        picker: 'PICK A PACKAGE',
                    },
                    {
                        id: 3,
                        title: 'Insurance Brokerage',
                        subtitle: 'Your Guide Through Insurance Complexity',
                        // Use API data for DOSH Risk content
                        quote: apiData.risk_slide.section_body,
                        caption: apiData.risk_slide.section_caption,
                        image: apiData.risk_slide.section_image,
                        read: 'READ MORE',
                        riskform: 'SUBMIT A REQUEST',
                    },
                ];
                setProducts(newProducts);
            })
            .catch(error => console.error("Error fetching slider data:", error));
    }, []);

    //fetch api for video data
    useEffect(() => {
        const fetchVideoData = async () => {
            try {
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/fetch-pns-video-sec');
                const data = await response.json();
                console.log('video Data:', data);
                setVideoData(data);
            } catch (error) {
                console.error('Error fetching video data:', error);
            }
        };
        fetchVideoData();
    }, []);

    // Slider arrow components and settings
    const NextArrow = ({ onClick }) => (
        <button
            className="block absolute top-6 lg:top-[90%] left-[82%] md:left-[70%] md:top-[2.5%] lg:left-[44%] transform -translate-x-1/2 bg-transparent text-[#C8AD84] text-[14px] p-1 md:p-4 lg:p-4 transition duration-300 z-10 rounded-full border-2 border-[#C8AD84]"
            onClick={onClick}
        >
            < FaArrowLeftLong />
        </button>
    );

    const PrevArrow = ({ onClick }) => (
        <button
            className=" absolute top-6 lg:top-[90%] left-[92%] md:left-[55%] lg:left-[50%] transform -translate-x-1/2 bg-transparent text-[#C8AD84] text-[14px] p-1 md:p-4 transition duration-300 z-10 rounded-full border-2 border-[#C8AD84]"
            onClick={onClick}
        >
            < FaArrowRightLong />
        </button>
    );
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <PrevArrow />,
        prevArrow: < NextArrow />,
        beforeChange: (oldIndex, newIndex) => setIndex(newIndex),

        // desktop: let clicks and text-selection work
        draggable: false,
        swipe: false,
        touchMove: false,
    };


    // Unified modal function to handle all products
    const openModal = (index) => {
        const product = products[index];
        if (product) {
            if (product.id === 1) {
                setCurrentModal({ type: 'insurance', data: product });
            } else if (product.id === 2) {
                setCurrentModal({ type: 'finance', data: product });
            } else if (product.id === 3) {
                setCurrentModal({ type: 'risk', data: product });
            }
        }
    };

    const closeModal = () => setCurrentModal(null);

    // Other modal functions
    const openInsure = () => setInsureOpen(true);
    const closeInsure = () => setInsureOpen(false);
    const openPopup = (productIndex) => {
        const product = products[productIndex];
        if (product && product.id === 2) {
            setFinanceTableOpen(true);
        } else {
            setPopupOpen(true);
        }
    };
    const closePopup = () => {
        setPopupOpen(false);
        setFinanceTableOpen(false);
    };
    const openFinancialPopup = () => setFinancialPopupOpen(true);
    const closeFinancialPopup = () => setFinancialPopupOpen(false);

    useEffect(() => {
        const lastIndex = products.length - 1;
        if (index < 0) setIndex(lastIndex);
        if (index > lastIndex) setIndex(0);
    }, [index, products]);

    useEffect(() => {
        const sliderTimer = setInterval(() => {
            setIndex(prevIndex => prevIndex + 1);
        }, 15000);
        return () => clearInterval(sliderTimer);
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);

    const handleMouseEnter = (e) => e.target.play();
    const handleMouseLeave = (e) => e.target.pause();

    return (
        <div className='ps__page'>
            <div className='main__product'>
                <img
                    data-aos="fade-down"
                    src={require('../images/pnsheader.png')}
                    alt='product & services'
                    className='object-cover'
                    loading='lazy'
                />
                <div className='product__text'>
                    <p>
                        Protect your <b>future</b> with our comprehensive health insurance packages
                    </p>
                </div>
            </div>
            {showButton && (
                <button className="scroll-button" onClick={scrollToNextSection}>
                    <IoIosArrowDown size={30} />
                </button>
            )}

            <section id="slider" className="psl relative extralarge:px-[160px]">
                <Slider {...settings}>
                    {products.length > 0 ? (
                        products.map((product, productIndex) => (
                            <div
                                key={product.id}
                                className={`w-full h-full flex items-center justify-center lg:px-16 pr-4 lg:h-auto ${(!product.comparetext && !product.picker) ? 'bg-none' : 'bg-default'}`}
                            >
                                <div className="container mx-auto px-4">
                                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                                        {/* Text Section */}
                                        <div className="flex-1 text-white space-y-4 user-select">
                                            <h4 className="text-[24px] md:text-[32px] lg:text-[44px] font-bold text-[#9E825B] mb-2">
                                                {product.title}
                                            </h4>
                                            <p className='text-[16px] font-bold uppercase pt-2 lg:pt-0' dangerouslySetInnerHTML={{ __html: product.caption }} />
                                            <div>
                                                <div className="text-sm lg:text-[14px] leading-[28px] text-align-left pr-4" dangerouslySetInnerHTML={{ __html: product.quote }} />
                                            </div>
                                            <p className="cursor-pointer text-[#9E825B]">
                                                <Link
                                                    to="/terms"
                                                    state={{ background: location }}
                                                    className=""
                                                >
                                                    Terms, Conditions and Exclusions
                                                </Link>
                                            </p>

                                            <div className="flex lg:space-x-4 space-x-2 mt-4">
                                                {product.id === 3 ? (
                                                    <>
                                                        <button
                                                            onClick={() => openModal(productIndex)}
                                                            className="flex items-center gap-4 text-white capitalize text-[15px] font-bold"
                                                        >
                                                            {product.read}
                                                            <FaArrowRight />
                                                        </button>
                                                        <button
                                                            onClick={() => setCurrentModal({ type: 'riskForm', data: product })}
                                                            className="flex items-center gap-4 text-white capitalize text-[15px] font-bold"
                                                        >
                                                            {product.riskform}
                                                            <FaArrowRight />
                                                        </button>
                                                    </>
                                                ) : (
                                                    <div className="flex flex-row flex-wrap gap-2 lg:gap-4">
                                                        <button
                                                            onClick={() => openModal(productIndex)}
                                                            className="flex items-center gap-2 w-auto text-white capitalize text-[14px] sm:text-[15px] font-bold"
                                                        >
                                                            {product.read}
                                                            <FaArrowRight />
                                                        </button>
                                                        {product.comparetext && (
                                                            <button
                                                                onClick={() => openPopup(productIndex)}
                                                                className="flex items-center gap-2 w-auto text-white capitalize text-[14px] sm:text-[15px] font-bold"
                                                            >
                                                                {product.comparetext}
                                                                <FaArrowRight />
                                                            </button>
                                                        )}
                                                        {product.picker && product.id === 1 && (
                                                            <button
                                                                onClick={openInsure}
                                                                className="flex items-center gap-2 w-auto text-white capitalize text-[14px] sm:text-[15px] font-bold"
                                                            >
                                                                {product.picker}
                                                                <FaArrowRight />
                                                            </button>
                                                        )}
                                                        {product.picker && product.id === 2 && (
                                                            <button
                                                                onClick={openFinancialPopup}
                                                                className="flex items-center gap-2 w-auto text-white capitalize text-[14px] sm:text-[15px] font-bold"
                                                            >
                                                                {product.picker}
                                                                <FaArrowRight />
                                                            </button>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* Image Section */}
                                        <div className="flex-1 w-full pr-4 pl-1 lg:pr-6">
                                            <img
                                                src={product?.image ? `https://doshcms.interactivedigital.com.gh/${product.image}` : ""}
                                                alt={product.title}
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading slider...</p>
                    )}
                </Slider>

                {isPopupOpen && <InsuranceTable closePopup={closePopup} />}
                {isFinanceTableOpen && <FinanceTable closePopup={closePopup} />}
                {isInsureOpen && <Insure onClose={closeInsure} />}
                {isFinancialPopupOpen && <FinanceSideModal onClose={closeFinancialPopup} />}
                {currentModal?.type === 'insurance' && <InsuranceDetails product={currentModal.data} onClose={closeModal} />}
                {currentModal?.type === 'finance' && <FinancialDetails product={currentModal.data} onClose={closeModal} />}
                {currentModal?.type === 'risk' && <RiskDetails product={currentModal.data} onClose={closeModal} />}
                {currentModal?.type === 'riskForm' && <RiskForm product={currentModal.data} onClose={closeModal} />}
                {showTermsModal && <Terms onClose={() => setShowTermsModal(false)} />}

            </section>

            <section id='video' className='video__section'>
                <div className='container video-main'>
                    <div className='video__left' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <video
                            className='video__left'
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            src={videoData?.video_url ? `https://doshcms.interactivedigital.com.gh/${videoData.video_url}` : "video section"}
                            autoPlay={false}
                            loop
                            muted
                            controls
                            loading='lazy'
                        />
                    </div>
                    <div className='video__right'>
                        <h4 dangerouslySetInnerHTML={{ __html: videoData.video_title }} />
                        <h6 dangerouslySetInnerHTML={{ __html: videoData.video_subtitle }} />
                        <small dangerouslySetInnerHTML={{
                            __html: videoData.video_description
                        }} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductServices;
