import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import VideoPopup from "../components/VideoPopup.jsx";
import { IoIosArrowDown } from "react-icons/io";

import InsuranceDetails from "../components/InsuranceDetails.jsx";
import FinanceDetails from "../components/FinancialDetails.jsx";
import RiskDetails from "../components/RiskDetails.jsx";
import HeroSlider from "../components/HeroSlider.jsx";

const Home = () => {
    const [showInsuranceDetailModal, setInsuranceDetailModal] = useState(false);
    const [homeData, setHomeData] = useState(null);

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const sections = ["home", "money", "ride", "digital", "lastride"];

    const scrollToNextSection = (event) => {
        event.preventDefault();
        const nextIndex = currentSectionIndex + 1;
        if (nextIndex < sections.length) {
            setCurrentSectionIndex(nextIndex);
            const nextSectionId = sections[nextIndex];
            const section = document.getElementById(nextSectionId);
            if (section) section.scrollIntoView({ behavior: "smooth" });
        } else {
            setCurrentSectionIndex(0);
            const firstSection = document.getElementById(sections[0]);
            if (firstSection) firstSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const isMobile = /Mobi|Android/i.test(navigator.userAgent);

        if (isMobile) {
            let inactivityTimer;
            const handleScroll = () => {
                setShowButton(true);
                if (inactivityTimer) clearTimeout(inactivityTimer);
                inactivityTimer = setTimeout(() => setShowButton(false), 3000);
            };

            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
                if (inactivityTimer) clearTimeout(inactivityTimer);
            };
        } else {
            setShowButton(true);
        }
    }, []);

    const [showFinanceDetailModal, setShowFinanceDetailModal] = useState(false);
    const [showRiskModal, setShowRiskModal] = useState(false);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const showVideoPopup = queryParams.get("videopopup") === "true";

    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    // fetch api for homepage data
    useEffect(() => {
        const fetchHomeData = async () => {
            try {
                const response = await fetch(
                    "https://doshcms.interactivedigital.com.gh/api/show-home-sections"
                );
                const data = await response.json();
                setHomeData(data[0]);
            } catch (error) {
                console.error("Error fetching home data:", error);
            }
        };
        fetchHomeData();
    }, []);

    if (!homeData) return <div>Loading...</div>;

    return (
        <div id="text-content" className="main__hero">
            <div>
                <HeroSlider />
            </div>

            <div className="cream__hero" />

            {showButton && (
                <button className="scroll-button" onClick={scrollToNextSection}>
                    <IoIosArrowDown className="lg:text-[30px] text-[28px]" />
                </button>
            )}

            <section id="home" className="home__section">
                <div className="container home__student">
                    <div className="home__student-left">
                        <h4>HEALTH INSURANCE SERVICES:</h4>
                        <h3
                            className="elevate"
                            dangerouslySetInnerHTML={{ __html: homeData.health_insurance_caption }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: homeData.health_insurance_body }} />
                        <Link onClick={() => setInsuranceDetailModal(true)}>
                            Read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className="home__student-right">
                        <img
                            src={
                                homeData?.health_insurance_image
                                    ? `https://doshcms.interactivedigital.com.gh/${homeData.health_insurance_image}`
                                    : "assets/elevate.png"
                            }
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
                {showInsuranceDetailModal && (
                    <InsuranceDetails onClose={() => setInsuranceDetailModal(false)} />
                )}
            </section>

            <section id="home" className="home__section-next">
                <div className="container home__student">
                    <div className="home__student-left">
                        <h4>FINANCIAL SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.finance_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.finance_body }} />
                        <Link onClick={() => setShowFinanceDetailModal(true)}>
                            Read more
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className="home__student-right">
                        <img
                            src={
                                homeData?.finance_image
                                    ? `https://doshcms.interactivedigital.com.gh/${homeData.finance_image}`
                                    : "assets/elevate.png"
                            }
                            alt="student"
                            loading="lazy"
                            className="pl-2 lg:pl-0"
                        />
                    </div>
                </div>
                {showFinanceDetailModal && (
                    <FinanceDetails onClose={() => setShowFinanceDetailModal(false)} />
                )}
            </section>

            <section id="home" className="home__section">
                <div className="container home__student">
                    <div className="home__student-left">
                        <h4>INSURANCE BROKERAGE:</h4>
                        <h3
                            className="elevate"
                            dangerouslySetInnerHTML={{ __html: homeData.risk_caption }}
                        />
                        <p dangerouslySetInnerHTML={{ __html: homeData.risk_body }} />
                        <Link onClick={() => setShowRiskModal(true)} className="linkers">
                            Read More
                        </Link>
                    </div>
                    <div data-aos="zoom-in-left" className="home__student-right">
                        <img
                            src={
                                homeData?.risk_image
                                    ? `https://doshcms.interactivedigital.com.gh/${homeData.risk_image}`
                                    : "assets/elevate.png"
                            }
                            alt="digital"
                            loading="lazy"
                            className="pl-2 lg:pl-0"
                        />
                    </div>
                </div>
                {showRiskModal && <RiskDetails onClose={() => setShowRiskModal(false)} />}
            </section>

            <section id="home" className="home__section-next">
                <div className="container home__student">
                    <div className="home__student-left">
                        <h4>RIDE SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.ride_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.ride_body }} />
                        <Link className="linkers">Coming Soon</Link>
                    </div>
                    <div data-aos="zoom-in-left" className="home__student-right">
                        <img
                            src={
                                homeData?.ride_image
                                    ? `https://doshcms.interactivedigital.com.gh/${homeData.ride_image}`
                                    : "assets/elevate.png"
                            }
                            alt="ride"
                            loading="lazy"
                        />
                    </div>
                </div>
                {showInsuranceDetailModal && (
                    <InsuranceDetails onClose={() => setInsuranceDetailModal(false)} />
                )}
            </section>

            <section id="home" className="home__section">
                <div className="container home__student">
                    <div className="home__student-left">
                        <h4>ERP SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.erp_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.erp_body }} />
                        <Link>Coming Soon</Link>
                    </div>
                    <div data-aos="zoom-in-left" className="home__student-right">
                        <img
                            src={
                                homeData?.erp_image
                                    ? `https://doshcms.interactivedigital.com.gh/${homeData.erp_image}`
                                    : "assets/elevate.png"
                            }
                            alt="digital"
                            loading="lazy"
                            className="pl-2 lg:pl-0"
                        />
                    </div>
                </div>
            </section>

            <section id="home" className="home__section-next">
                <div className="container home__student">
                    <div className="home__student-left">
                        <h4>E-COMMERCE SERVICES:</h4>
                        <h3 dangerouslySetInnerHTML={{ __html: homeData.commerce_caption }} />
                        <p dangerouslySetInnerHTML={{ __html: homeData.commerce_body }} />
                        <Link>Coming Soon</Link>
                    </div>
                    <div data-aos="zoom-in-left" className="home__student-right">
                        <img
                            data-aos="zoom-in-right"
                            src={
                                homeData?.commerce_image
                                    ? `https://doshcms.interactivedigital.com.gh/${homeData.commerce_image}`
                                    : "assets/elevate.png"
                            }
                            alt="ride"
                            loading="lazy"
                            className="pl-2 lg:pl-0"
                        />
                    </div>
                </div>
            </section>

            <div className="ps__page">
                {showVideoPopup && <VideoPopup />}
            </div>
        </div>
    );
};

export default Home;
