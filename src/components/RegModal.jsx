import React, { useState } from 'react'
import './RegModal.css'
import { Link } from 'react-router-dom'
import animefive from "../images/dosh-5000.png"
import animetwo from "../images/dosh-2500.png"
import animeth from "../images/dosh-1000.png"
import animesev from "../images/dosh-750.png"
import animethr from "../images/dosh-365.png"
import animeten from "../images/dosh-10000.png"
import animeper from "../images/dosh-personal.png"
import animefam from "../images/dosh-family.png"
import animesoho from "../images/SOHO.png"
import animesmb from "../images/SMB.png"
import animeent from "../images/Enterprise.png"

const RegModal = () => {
    const [selectedPackage, setSelectedPackage] = useState("dosh__thr");
    const [showPackDetails, setShowPackDetails] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (link) => {
        setShowPackDetails(!showPackDetails);
        setActiveLink(link);
    };

    return (
        <div className='reg__modal'>
            <div className='reg__container'>
                <div className='sect'>
                    <h4>hello</h4>
                    <select className='select'>
                        <option value="">Select an option</option>
                        <option value="option1">Finance</option>
                        <option value="option2">Insurance</option>
                        <option value="option3">Loan</option>
                    </select>
                </div>
                <div className='dosh__list'>
                    <ul className='dosh__lists'>
                        <Link><li className={`single__list ${activeLink === 'Dosh Insurance' ? 'activer' : ''}`} onClick={() => handleClick('Dosh Insurance')}>Dosh Insurance</li></Link>
                        <Link><li className={`single__list ${activeLink === 'Dosh Financial' ? 'activer' : ''}`} onClick={() => handleClick('Dosh Financial')}>Dosh Financial</li></Link>
                        <Link><li className='single__list'>Dosh Ride</li></Link>
                        <Link><li className='single__list'>Dosh E-Commerce</li></Link>
                        <Link><li className='single__list'>Dosh ERP</li></Link>
                    </ul>
                </div>
                {!showPackDetails ? (
                    <div className='pack'>
                        <div className='dosh__prices'>
                            <ul className='price__lists'>
                                <li className={`price__list ${selectedPackage === 'dosh__thr' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__thr')}>Dosh 365</li>
                                <li className={`price__list ${selectedPackage === 'dosh__sev' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__sev')}>Dosh 750</li>
                                <li className={`price__list ${selectedPackage === 'dosh__th' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__th')}>Dosh 1000</li>
                                <li className={`price__list ${selectedPackage === 'dosh__tw' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__tw')}>Dosh 2500</li>
                                <li className={`price__list ${selectedPackage === 'dosh__fiv' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__fiv')}>Dosh 5000</li>
                                <li className={`price__list ${selectedPackage === 'dosh__ten' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__ten')}>Dosh 10000</li>
                            </ul>
                        </div>
                        <div className='pack__details'>
                            <div className='dosh__thr' style={{ display: selectedPackage === 'dosh__thr' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animethr} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>DOSH</span>
                                        <h2>365</h2>
                                        <h3>Description</h3>
                                        <p>EDOSH 365 package births an array of hope for individuals who
                                            hitherto are unable to access health insurance services due to the
                                            absence of affordable packages one the market.
                                            Dosh is changing the narrative on health insurance provision with the
                                            DOSH365 package, which is highly affordable and offering a new health insurance experience,
                                            designed with the individual in mind.
                                            An amount of GHS 1 per day or a total of GHS 365 per year, provides a
                                            membership cover of GHS 9,000 annually. Out of the GHS 9,000, an amount of GHS 7,500 is
                                            allocated towards In-Patient services and the remaining GHS 1,500 for
                                            Out-Patient services.
                                            DOSH 365 is specifically designed to shoulder the unforeseen medical
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__sev' style={{ display: selectedPackage === 'dosh__sev' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animesev} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>DOSH</span>
                                        <h2>750</h2>
                                        <h3>Description</h3>
                                        <p>DOSH 750 comes with add-ons and quintessential incentives targeted at individuals, families and their dependents with a slightly higher premium. It is gratifying to know that with DOSH, your family and dependents’ health care needs are furnished with a cover up to GHS 18,000 for only GHS 750 annual premium. This package is specially recommended for new employees or young families seeking affordable and cost-effective health insurance products. An annual premium of GHS 750 comes with health insurance cover of up to GHS 15,000 for In-Patient and GHS 3,000 for Out-Patient services respectively.

                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__th' style={{ display: selectedPackage === 'dosh__th' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animeth} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>DOSH</span>
                                        <h2>1000</h2>
                                        <h3>Description</h3>
                                        <p>The package is distinctively designed to offer members absolute serenity with regards to their health care needs offering an extended cover of up to a whopping GHS 30,000 for an annual premium of only GHS1,000. DOSH1000 offers an In-Patient Limit of GHS 25,000 and Out-Patient Limit of GHS 5,000, offering members value for their investments.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__tw' style={{ display: selectedPackage === 'dosh__tw' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animetwo} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>DOSH</span>
                                        <h2>2500</h2>
                                        <h3>Description</h3>
                                        <p>For Individuals and Corporate organizations interested in prudent financial planning in all crucial areas of life or business with the rainy-days in mind, DOSH 2500 health insurance plan comes highly recommended with an annual cover up to GHS 60,000. DOSH 2500 offers GHS 50,000 In-Patient and GHS 10,000 Out-Patient services for an annual premium of GHS 2,500.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__fiv' style={{ display: selectedPackage === 'dosh__fiv' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animefive} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>DOSH</span>
                                        <h2>5000</h2>
                                        <h3>Description</h3>
                                        <p>This premium offer is bespoke to coddle the health insurance needs of our high value clients. It is an exclusive package exceptionally centered on delivering superb healthcare services to our valued clients, offering a total annual cover of up to GHS 95,000 with GHS 75,000 and GHS 20,000 In-Patient and Out-Patient allocations respectively. This package is recommended to individuals or businesses with amplified health care needs.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__ten' style={{ display: selectedPackage === 'dosh__ten' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animeten} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>DOSH</span>
                                        <h2>10000</h2>
                                        <h3>Description</h3>
                                        <p>DOS 10,000 delivers health care services cover of up to GHS 190,000, and is highly suited for clients who desire peace of mind with regards to 360 healthcare delivery. This esteemed package provides up to GHS 150,000 for In-Patient and GHS 40,000 Out-Patient health care services at an annual premium of GHS 10,000 and accessible nationwide at all the major health care service providers.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='packer'>
                        <div className='dosh__prices'>
                            <ul className='price__lists'>
                                <li className={`price__list ${selectedPackage === 'dosh__thr' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__thr')}>Personal</li>
                                <li className={`price__list ${selectedPackage === 'dosh__sev' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__sev')}>Family</li>
                                <li className={`price__list ${selectedPackage === 'dosh__th' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__th')}>SOHO</li>
                                <li className={`price__list ${selectedPackage === 'dosh__tw' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__tw')}>SMB</li>
                                <li className={`price__list ${selectedPackage === 'dosh__fiv' ? 'active' : ''}`} onClick={() => setSelectedPackage('dosh__fiv')}>Enterprise</li>
                            </ul>
                        </div>
                        <div className='pack__details'>
                            <div className='dosh__thr' style={{ display: selectedPackage === 'dosh__thr' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animeper} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>Personal</span>
                                        <h3>Description</h3>
                                        <p>Whether at home or at work, banking shouldn’t be a problem with Dosh. Our uniquely designed and tailor-made personal account offers 1 user with 5 different types of accounts, making it easy for our clients to always stay on top of their personal finances. We have the option of additional accounts at configurable fee per each additional account.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__sev' style={{ display: selectedPackage === 'dosh__sev' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animefam} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>Family</span>
                                        <h3>Description</h3>
                                        <p>DOSH 750 comes with add-ons and quintessential incentives targeted at individuals, families and their dependents with a slightly higher premium. It is gratifying to know that with DOSH, your family and dependents’ health care needs are furnished with a cover up to GHS 18,000 for only GHS 750 annual premium. This package is specially recommended for new employees or young families seeking affordable and cost-effective health insurance products.
                                            An annual premium of GHS 750 comes with health insurance cover of up to GHS 15,000 for In-Patient and GHS 3,000 for Out-Patient services respectively.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__th' style={{ display: selectedPackage === 'dosh__th' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animesoho} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>SOHO</span>
                                        <h3>Description</h3>
                                        <p>Your SOHO Account comes with multiple perks, positioning your business for growth. With the SOHO account, you have access to loan and credit facilities as well as protecting your personal assets by separating them from your business transactions. This package comes with our default 5 accounts with 5 additional current sub-accounts and 2 other departmental or cost centers. The departments or cost centers are configured with different levels of access for you and your employees within the SOHO set up. The access levels help in assigning and controlling staff who for instance, can create new users, add bank accounts, perform financial transactions, view and move money from any account, audit accounts and set limits on sub-accounts among others.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__tw' style={{ display: selectedPackage === 'dosh__tw' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animesmb} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>SMB</span>
                                        <h3>Description</h3>
                                        <p>This account has advanced benefits and features compared to the SOHO Account. It comes with 5 additional users and a total of 5 departments or cost centers with the convenient option of adding more users as the business grows. In effect, the SMB Account offers subscribers 10 sub accounts and 5 departments or call centers with different levels of access and control.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dosh__fiv' style={{ display: selectedPackage === 'dosh__fiv' ? 'block' : 'none' }}>
                                <div className='reg__section'>
                                    <div className="reg__left">
                                        <img src={animeent} alt='anime' />
                                    </div>
                                    <div className="reg__right">
                                        <span>Enterprise</span>
                                        <h3>Description</h3>
                                        <p>The Enterprise Account is designed to provide financial solutions to large corporations and comes with same features as the SMB Account with added offerings: 20 additional users 5 additional departments or call centers. The enterprise account therefore offers customers with the convenience of 30 users and 10 departments or call centers; in addition to all the default benefits embedded in our SOHO Account.
                                        </p>
                                        <div className='icon__button'>
                                            <button type='submit' className='dosh__btn'>Continue</button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
                                                fill="#fff"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RegModal