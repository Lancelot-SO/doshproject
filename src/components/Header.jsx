import React, { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../images/dosh_logo.png";
import '../App.css'
import { RiMenu4Fill } from "react-icons/ri";
import { FaTimes } from 'react-icons/fa'

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);
    const [nav, setNav] = useState(false);


    const handleLinkClick = (index) => {
        setActiveLink(index);
        setNav(false);
    };
    return (
        <nav>
            <div className='container nav__container'>
                <Link to='/' className="nav__logo">
                    <img src={logo} alt='navbar logo' />
                </Link>
                <ul className='nav__menu'>
                    <li>
                        <Link
                            to="/"
                            className={activeLink === 0 ? 'active' : ''}
                            onClick={() => handleLinkClick(0)}
                        >
                            Home
                        </Link>
                    </li><li>
                        <Link
                            to="/about"
                            className={activeLink === 1 ? 'active' : ''}
                            onClick={() => handleLinkClick(1)}
                        >
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/productservices"
                            className={activeLink === 2 ? 'active' : ''}
                            onClick={() => handleLinkClick(2)}
                        >
                            Product & Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/serviceproviders"
                            className={activeLink === 3 ? 'active' : ''}
                            onClick={() => handleLinkClick(3)}
                        >
                            Service Providers
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={activeLink === 4 ? 'active' : ''}
                            onClick={() => handleLinkClick(4)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className='nav__signup-container'>
                    <Link to='/login' className='nav__login'>Login</Link>
                    <Link to='/register'>
                        <div className='nav__signup'>
                            Sign up
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-arrow-right"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                />
                            </svg>
                        </div>
                    </Link>

                </div>

                <div onClick={() => setNav(!nav)} className='bars'>
                    {nav ? <FaTimes size={30} /> : <RiMenu4Fill size={30} />}
                </div>

                {
                    nav && (
                        <div className='nav__links'>
                            <ul class="mobile-nav-links">
                                <li className='mobile-menu-link'>
                                    <Link
                                        to="/"
                                        className={activeLink === 0 ? 'active' : ''}
                                        onClick={() => handleLinkClick(0)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className='mobile-menu-link'>
                                    <Link
                                        to="/about"
                                        className={activeLink === 1 ? 'active' : ''}
                                        onClick={() => handleLinkClick(1)}
                                    >
                                        About us
                                    </Link>
                                </li>
                                <li className='mobile-menu-link'>
                                    <Link
                                        to="/productservices"
                                        className={activeLink === 2 ? 'active' : ''}
                                        onClick={() => handleLinkClick(2)}
                                    >
                                        Product & Services
                                    </Link>
                                </li>
                                <li className='mobile-menu-link'>
                                    <Link
                                        to="/serviceproviders"
                                        className={activeLink === 3 ? 'active' : ''}
                                        onClick={() => handleLinkClick(3)}
                                    >
                                        Service Providers
                                    </Link>
                                </li>
                                <li className='mobile-menu-link'>
                                    <Link
                                        to="/contact"
                                        className={activeLink === 4 ? 'active' : ''}
                                        onClick={() => handleLinkClick(4)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <div className='nav-mobile__signup'>
                                <Link to='/login' className='nav__login-mobile'>Login</Link>
                                <Link to='/register'>
                                    <div className='nav__signup-mobile'>
                                        Sign up
                                    </div>
                                </Link>
                            </div>
                        </div>

                    )
                }

            </div>
        </nav>
    )
}

export default Header
