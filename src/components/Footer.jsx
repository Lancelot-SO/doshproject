import React, { useEffect, useState } from 'react'
import logo from "../images/dosh-footer-logo.png"
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaTimes } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import bg from "../images/footer-bg.png"
import "../App.css"

// 2-letter country codes as returned by ipapi.co (GB → UK)
const ADDRESS_MAP = {
    US: {
        text: `2 Park Place<br/>Hartford CT 06106<br/>USA`,
        mapUrl: 'https://maps.app.goo.gl/WAL6SMGMBJWJHhBu7'
    },
    GH: {
        text: `10 MIREKU WE LP<br/>Dansoman-Accra<br/>GA-504-4280 <br/>Ghana`,
        mapUrl: 'https://maps.app.goo.gl/d7qvqRwCwEeuM5Le6'
    },
    IE: {
        text: `Ground Floor,<br/>71 Baggot Street Lower,<br/>Dublin 2,<br/>D02 P593,<br/>Ireland`,
        mapUrl: 'https://maps.app.goo.gl/qkCh5ZRjgQoc1hCbA'
    },
    UK: {
        text: `5th Floor,<br/>167-169 Great Portland Street<br/>London<br/>W1W 5PF<br/>United Kingdom`,
        mapUrl: 'https://maps.app.goo.gl/7RfBeVto112Uxcaj6'
    },
    DEFAULT: {
        text: `10 MIREKU WE LP<br/>Dansoman-Accra<br/>GA-504-4280`,
        mapUrl: 'https://maps.app.goo.gl/d7qvqRwCwEeuM5Le6'
    }
}

const Footer = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
    const [privacyStatement, setPrivacyStatement] = useState(null)
    const [countryKey, setCountryKey] = useState('DEFAULT')

    // 1️⃣ Fetch privacy-statement from CMS
    useEffect(() => {
        const fetchPrivacyData = async () => {
            try {
                // remove stray trailing space
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/privacy-statement')
                const data = await response.json()
                console.log('privacy Data:', data)
                // pull the actual field from the returned JSON
                setPrivacyStatement(data.privacy_statement)
            } catch (error) {
                console.error('Error fetching privacy data:', error)
                setPrivacyStatement('<p>Unable to load privacy policy at this time.</p>')
            }
        }
        fetchPrivacyData()
    }, [])

    // 2️⃣ Fetch geo-IP for address
    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                let code = data.country  // e.g. "US", "GB", "IE", "GH"
                if (code === 'GB') code = 'UK'    // our map uses UK
                setCountryKey(ADDRESS_MAP[code] ? code : 'DEFAULT')
            })
            .catch(() => {
                // on error, stick with DEFAULT
            })
    }, [])

    // show a loading state until we have the privacyStatement
    if (privacyStatement === null) {
        return <div>Loading...</div>
    }

    const togglePrivacyPolicy = () => {
        setShowPrivacyPolicy(prev => !prev)
    }

    const { text, mapUrl } = ADDRESS_MAP[countryKey]

    return (
        <div className='main__footer'>
            <img src={bg} alt='footerbg' className='bg_image' />

            <footer>
                <div className='container footer__container'>
                    <div className='contact__logo2'>
                        <div className='footer__logo'>
                            <img src={logo} alt='dosh-logo' />
                        </div>
                        <div className="footer__text">
                            <Link to={mapUrl} target="_blank" rel="noopener noreferrer">
                                <p dangerouslySetInnerHTML={{ __html: text }} />
                            </Link>
                        </div>
                        <div className='contacts'>
                            <h3>CONTACTS</h3>
                            <div className='location'>
                                <p>Phone: 0800-DOSH-ME (0800367463)</p>
                                <p>Fax: 0800-DOSH-ME (0800367463)</p>
                                <Link to="/contact">Online Support</Link>
                                <p
                                    className='text-white cursor-pointer hover:text-[#987c55]'
                                    onClick={togglePrivacyPolicy}
                                >
                                    Privacy Policy
                                </p>
                            </div>
                        </div>
                        <div className='socials'>
                            <Link to='https://x.com/dosh_revolution?s=21&t=-BrXbfatLtONPkJKS4q8HQ' target="_blank" rel="noopener noreferrer">
                                <FaXTwitter size={24} />
                            </Link>
                            <Link to='https://www.facebook.com/DOSH.Revolution?mibextid=LQQJ4d' target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} />
                            </Link>
                            <Link to='https://www.linkedin.com/company/dosh-revolution/' target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} />
                            </Link>
                            <Link to='https://www.instagram.com/dosh_revolution?igsh=MXQ3Z2d6aTMxMHA3ZA%3D%3D&utm_source=qr' target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} />
                            </Link>
                            <Link to='https://youtube.com/@DOSHRevolution?si=H6MOS8Wj6Se8eegI' target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={24} />
                            </Link>
                            <Link to='https://www.tiktok.com/@dosh.revolution?_t=8kJif6YpYMX&_r=1' target="_blank" rel="noopener noreferrer">
                                <FaTiktok size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='footer__gold'></div>
            <div className='copyright'>
                <p>Powered by OPIN Technologies ®</p>
            </div>

            {showPrivacyPolicy && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="no-scrollbar bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto relative mt-8">
                        <button
                            onClick={togglePrivacyPolicy}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                            aria-label="Close privacy policy"
                        >
                            <FaTimes size={24} />
                        </button>
                        <div dangerouslySetInnerHTML={{ __html: privacyStatement }} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Footer
