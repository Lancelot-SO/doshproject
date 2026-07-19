import React, { useEffect, useState } from 'react'
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaTiktok, FaTimes } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from 'react-router-dom'
import "../App.css"
const logo = "https://res.cloudinary.com/dcqd4u6ux/image/upload/f_auto,q_auto/v1779560514/dosh-footer-logo_x9sxdj.png";
const bg = "https://res.cloudinary.com/dcqd4u6ux/image/upload/f_auto,q_auto/v1779560599/footer-bg_wq9xh7.png";
const appStoreBadge = "https://res.cloudinary.com/dcqd4u6ux/image/upload/f_auto,q_auto/v1779560473/app_store_jmoora.jpg";
const googlePlayBadge = "https://res.cloudinary.com/dcqd4u6ux/image/upload/f_auto,q_auto/v1779560639/play_store_vphww8.png";

// 2-letter country codes as returned by ipapi.co (GB → UK)
const ADDRESS_MAP = {
    US: {
        text: `2 Park Place<br/>Hartford CT 06106<br/>USA`,
        mapUrl: 'https://maps.app.goo.gl/WAL6SMGMBJWJHhBu7',
        phone: '+1 844-367-4630',
        fax: '+1 844-367-4630',
    },
    GH: {
        text: `10 MIREKU WE LP<br/>Dansoman-Accra<br/>GA-504-4280 <br/>Ghana`,
        mapUrl: 'https://maps.app.goo.gl/d7qvqRwCwEeuM5Le6',
        phone: '0800-DOSH-ME (0800367463)',
        fax: '0800-DOSH-ME (0800367463)',
    },
    IE: {
        text: `Ground Floor,<br/>71 Baggot Street Lower,<br/>Dublin 2,<br/>D02 P593,<br/>Ireland`,
        mapUrl: 'https://maps.app.goo.gl/qkCh5ZRjgQoc1hCbA',
        phone: '+353 (01) 726 6403',
        fax: '+353 (01) 726 6403',
    },
    UK: {
        text: `124 City Road,<br/>EC1V 2NX<br/>London<br/>United Kingdom`,
        mapUrl: 'https://maps.app.goo.gl/eLokT3UfRzGnqiSRA',
        phone: '+44 20 7566 1191',
        fax: '+44 20 7566 1191',
    },
    // Catch-all for other European countries — uses Ireland office
    EU: {
        text: `Ground Floor,<br/>71 Baggot Street Lower,<br/>Dublin 2,<br/>D02 P593,<br/>Ireland`,
        mapUrl: 'https://maps.app.goo.gl/qkCh5ZRjgQoc1hCbA',
        phone: '+353 (01) 726 6403',
        fax: '+353 (01) 726 6403',
    },
    DEFAULT: {
        text: `10 MIREKU WE LP<br/>Dansoman-Accra<br/>GA-504-4280`,
        mapUrl: 'https://maps.app.goo.gl/d7qvqRwCwEeuM5Le6',
        phone: '0800-DOSH-ME (0800367463)',
        fax: '0800-DOSH-ME (0800367463)',
    }
}

// European country codes → display names (excludes GB and IE — they have their own entries)
const EUROPEAN_COUNTRY_NAMES = {
    AL: 'Albania', AD: 'Andorra', AT: 'Austria', BY: 'Belarus', BE: 'Belgium',
    BA: 'Bosnia and Herzegovina', BG: 'Bulgaria', HR: 'Croatia', CY: 'Cyprus',
    CZ: 'Czech Republic', DK: 'Denmark', EE: 'Estonia', FI: 'Finland', FR: 'France',
    DE: 'Germany', GR: 'Greece', HU: 'Hungary', IS: 'Iceland', IT: 'Italy',
    XK: 'Kosovo', LV: 'Latvia', LI: 'Liechtenstein', LT: 'Lithuania', LU: 'Luxembourg',
    MT: 'Malta', MD: 'Moldova', MC: 'Monaco', ME: 'Montenegro', NL: 'Netherlands',
    MK: 'North Macedonia', NO: 'Norway', PL: 'Poland', PT: 'Portugal', RO: 'Romania',
    RU: 'Russia', SM: 'San Marino', RS: 'Serbia', SK: 'Slovakia', SI: 'Slovenia',
    ES: 'Spain', SE: 'Sweden', CH: 'Switzerland', UA: 'Ukraine', VA: 'Vatican City',
}

const Footer = () => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false)
    const [privacyStatement, setPrivacyStatement] = useState(null)
    const [countryKey, setCountryKey] = useState('DEFAULT')
    const [euCountryName, setEuCountryName] = useState('')

    // 1️⃣ Fetch privacy-statement from CMS
    useEffect(() => {
        const fetchPrivacyData = async () => {
            try {
                // remove stray trailing space
                const response = await fetch('https://doshcms.interactivedigital.com.gh/api/privacy-statement')
                const data = await response.json()

                // pull the actual field from the returned JSON
                setPrivacyStatement(data.privacy_statement)
            } catch (error) {

                setPrivacyStatement('<p>Unable to load privacy policy at this time.</p>')
            }
        }
        fetchPrivacyData()
    }, [])

    // 2️⃣ Fetch geo-IP for address (with fallback providers)
    useEffect(() => {
        const geoProviders = [
            {
                url: 'https://ipapi.co/json/',
                extract: (data) => data.country,       // "US", "GB", "IE", "GH"
            },
            {
                url: 'https://ipwho.is/',
                extract: (data) => data.country_code,   // "US", "GB", "IE", "GH"
            },
            {
                url: 'https://api.country.is/',
                extract: (data) => data.country,        // "US", "GB", "IE", "GH"
            },
        ]

        const fetchGeoIP = async () => {
            for (const provider of geoProviders) {
                try {
                    const res = await fetch(provider.url)
                    if (!res.ok) {
                        console.warn(`[Footer GeoIP] ${provider.url} returned HTTP ${res.status}`)
                        continue
                    }
                    const data = await res.json()
                    let code = provider.extract(data)
                    if (!code) {
                        console.warn(`[Footer GeoIP] ${provider.url} returned no country code`, data)
                        continue
                    }
                    if (code === 'GB') code = 'UK'  // our ADDRESS_MAP uses "UK"
                    // Resolve to a key: direct match → European fallback → DEFAULT
                    let key = 'DEFAULT'
                    if (ADDRESS_MAP[code]) {
                        key = code
                    } else if (EUROPEAN_COUNTRY_NAMES[code]) {
                        key = 'EU'
                        setEuCountryName(EUROPEAN_COUNTRY_NAMES[code])
                    }
                    console.info(`[Footer GeoIP] Detected country: ${code} → key: ${key} (via ${provider.url})`)
                    setCountryKey(key)
                    return  // success — stop trying further providers
                } catch (err) {
                    console.warn(`[Footer GeoIP] ${provider.url} failed:`, err.message)
                }
            }
            console.warn('[Footer GeoIP] All providers failed — defaulting to Ghana address')
        }

        fetchGeoIP()
    }, [])

    // show a loading state until we have the privacyStatement
    if (privacyStatement === null) {
        return <div>Loading...</div>
    }

    const togglePrivacyPolicy = () => {
        setShowPrivacyPolicy(prev => !prev)
    }

    const { text, mapUrl, phone, fax } = ADDRESS_MAP[countryKey]
    // For EU countries, show the country name instead of the Ireland address
    const displayText = countryKey === 'EU' && euCountryName ? euCountryName : text

    return (
        <div className='main__footer'>
            <img src={bg} alt='footerbg' className='bg_image' width="1920" height="300" />
            <div className="flex flex-col lg:flex-row gap-3 absolute top-[170px] lg:top-[102px] right-10 lg:right-[150px] 3xl:right-[275px] 4xl:right-[330px] z-40">
                <Link to="https://apps.apple.com/in/app/dosh-is-life/id6757186583" target="_blank" rel="noopener noreferrer">
                    <img src={appStoreBadge} alt="App Store" className="rounded-lg w-[130px] h-auto object-contain hover:scale-105 transition-transform border-2 border-[#987c55]" />
                </Link>
                <Link to="https://play.google.com/store/apps/details?id=com.opintechnologies.mobiledosh" target="_blank" rel="noopener noreferrer">
                    <img src={googlePlayBadge} alt="Google Play" className="rounded-lg w-[130px] h-auto lg:h-[46px] object-contain hover:scale-105 transition-transform border-2 border-[#987c55]" />
                </Link>
            </div>

            <footer>
                <div className='container footer__container'>
                    <div className='contact__logo2'>
                        <div className='footer__logo'>
                            <img src={logo} alt='dosh-logo' width="112" height="56" />
                        </div>
                        <div className="footer__text">
                            <Link to={mapUrl} target="_blank" rel="noopener noreferrer">
                                <p dangerouslySetInnerHTML={{ __html: displayText }} />
                            </Link>
                        </div>
                        <div className='contacts'>
                            <h3>CONTACTS</h3>
                            <div className='location'>
                                <p>Phone: {phone}</p>
                                <p>Fax: {fax}</p>
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
