import React, { useRef, useState } from 'react';
import '../App.css';

const FilterModal = ({ showModal, onClose }) => {
    const modalRef = useRef();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setRegions(countryRegions[country] || []);
        setDistricts([]);
    };

    const handleRegionChange = (e) => {
        const region = e.target.value;
        setSelectedRegion(region);
        setDistricts(regionDistricts[selectedCountry]?.[region] || []);
    };

    const countryRegions = {
        'Ghana': ['Greater Accra', 'Western Region', 'Ashanti Region', 'Western North', 'Central', 'Eastern', 'Volta', 'Oti', 'Bono East', 'Bono', 'Ahafo', 'Northern', 'Savannah', 'North East', 'Upper East', 'Upper West'],
        'Nigeria': ['Lagos', 'Kano', 'Kaduna', 'Rivers', 'Oyo'],
        'South Africa': ['Gauteng', 'KwaZulu-Natal', 'Western Cape', 'Eastern Cape', 'Free State'],
        'Egypt': ['Cairo', 'Alexandria', 'Giza', 'Aswan', 'Luxor'],
        'India': ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'West Bengal'],
        'United States of America': ['California', 'Texas', 'Florida', 'New York', 'Illinois'],
        'Britain': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
        'Germany': ['Bavaria', 'Berlin', 'Hamburg', 'Hesse', 'Saxony'],
        'Japan': ['Tokyo', 'Osaka', 'Kyoto', 'Hokkaido', 'Fukuoka'],
        'Italy': ['Lombardy', 'Lazio', 'Campania', 'Sicily', 'Veneto'],
        'Tanzania': ['Dar es Salaam', 'Arusha', 'Zanzibar', 'Kilimanjaro', 'Mwanza'],
    };

    const regionDistricts = {
        'Ghana': {
            'Greater Accra': ['Accra', 'Tema', 'Nungua', 'Teshie', 'Madina', 'Adenta', 'Dome', 'Ga West', 'Ga East', 'Ga South'],
            'Western Region': ['Takoradi', 'Sekondi', 'Shama', 'Ahanta West', 'Nzema East', 'Jomoro', 'Prestea-Huni Valley', 'Tarkwa-Nsuaem', 'Ellembelle', 'Wassa Amenfi East'],
            'Ashanti Region': ['Kumasi', 'Obuasi', 'Ejisu', 'Mampong', 'Bekwai', 'Asante-Akim North', 'Asante-Akim South', 'Atwima Nwabiagya', 'Bosome Freho', 'Kwabre East'],
            'Western North': ['Sefwi Wiawso', 'Bibiani-Anhwiaso-Bekwai', 'Juaboso', 'Bia East', 'Bia West', 'Aowin', 'Suaman'],
            'Central': ['Cape Coast', 'Mfantsiman', 'Komenda/Edina/Eguafo/Abirem', 'Abura/Asebu/Kwamankese', 'Gomoa East', 'Agona West', 'Effutu', 'Assin South', 'Twifo/Heman/Lower Denkyira'],
            'Eastern': ['Koforidua', 'New Juaben South', 'Akyemansa', 'Kwahu West', 'Abetifi', 'Birim Central', 'Akyem Oda', 'Suhum', 'Nsawam-Adoagyiri'],
            'Volta': ['Ho', 'Ketu South', 'Kpando', 'Hohoe', 'Jasikan', 'North Tongu', 'Central Tongu', 'South Tongu', 'Akatsi South'],
            'Oti': ['Dambai', 'Kadjebi', 'Jasikan', 'Krachi East', 'Krachi West', 'Biakoye', 'Nkwanta South', 'Nkwanta North'],
            'Bono East': ['Techiman', 'Kintampo South', 'Kintampo North', 'Nkoranza South', 'Nkoranza North', 'Atebubu-Amantin', 'Pru East', 'Pru West'],
            'Bono': ['Sunyani', 'Berekum', 'Dormaa East', 'Dormaa West', 'Tain', 'Jaman North', 'Jaman South', 'Banda', 'Wenchi'],
            'Ahafo': ['Goaso', 'Asunafo North', 'Asunafo South', 'Asutifi North', 'Asutifi South', 'Tano North', 'Tano South'],
            'Northern': ['Tamale', 'Yendi', 'Savelugu', 'Gushegu', 'Karaga', 'Kpandai', 'Saboba', 'Sagnarigu', 'Sang', 'Tolon'],
            'Savannah': ['Damongo', 'Bole', 'West Gonja', 'East Gonja', 'Central Gonja', 'North Gonja', 'North East Gonja'],
            'North East': ['Nalerigu', 'Bunkpurugu', 'Chereponi', 'East Mamprusi', 'West Mamprusi', 'Mamprugu Moagduri', 'Yunyoo Nasuan'],
            'Upper East': ['Bolgatanga', 'Bawku', 'Kassena Nankana', 'Bongo', 'Builsa', 'Garu-Tempane', 'Talensi', 'Nabdam'],
            'Upper West': ['Wa', 'Jirapa', 'Lambussie', 'Lawra', 'Nandom', 'Nadowli-Kaleo', 'Sissala East', 'Sissala West'],
        },
        'Nigeria': {
            'Lagos': ['Ikeja', 'Lekki', 'Surulere', 'Yaba', 'Victoria Island'],
            'Kano': ['Nasarawa', 'Fagge', 'Tarauni', 'Dala', 'Gwale'],
            'Kaduna': ['Chikun', 'Kaduna North', 'Kaduna South', 'Igabi', 'Zaria'],
            'Rivers': ['Port Harcourt', 'Obio/Akpor', 'Ikwerre', 'Eleme', 'Oyigbo'],
            'Oyo': ['Ibadan', 'Ogbomosho', 'Oyo Town', 'Iseyin', 'Saki'],
        },
        'South Africa': {
            'Gauteng': ['Johannesburg', 'Pretoria', 'Midrand', 'Soweto', 'Benoni'],
            // Add other regions' districts similarly...
        },
        'Egypt': {
            'Cairo': ['Nasr City', 'Maadi', 'Zamalek', 'Heliopolis', 'Dokki'],
            // Add other regions' districts similarly...
        },
        'India': {
            'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
            // Add other regions' districts similarly...
        },
        'United States of America': {
            'California': ['Los Angeles', 'San Francisco', 'San Diego', 'Sacramento', 'Fresno'],
            // Add other regions' districts similarly...
        },
        'Britain': {
            'England': ['London', 'Manchester', 'Birmingham', 'Leeds', 'Liverpool'],
            // Add other regions' districts similarly...
        },
        'Germany': {
            'Bavaria': ['Munich', 'Nuremberg', 'Augsburg', 'Regensburg', 'Ingolstadt'],
            // Add other regions' districts similarly...
        },
        'Japan': {
            'Tokyo': ['Shinjuku', 'Shibuya', 'Chiyoda', 'Minato', 'Bunkyo'],
            // Add other regions' districts similarly...
        },
        'Italy': {
            'Lombardy': ['Milan', 'Bergamo', 'Brescia', 'Monza', 'Varese'],
            // Add other regions' districts similarly...
        },
        'Tanzania': {
            'Dar es Salaam': ['Ilala', 'Kinondoni', 'Temeke', 'Ubungo', 'Kigamboni'],
            // Add other regions' districts similarly...
        },
    };

    if (!showModal) return null;

    return (
        <div>
            <div ref={modalRef} onClick={closeModal} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">In this view show records</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <p>Where</p>
                            <div className="country">
                                <select className="form-select" id="country" value={selectedCountry} onChange={handleCountryChange}>
                                    <option value="">Select a Country</option>
                                    {Object.keys(countryRegions).map((country, index) => (
                                        <option key={index} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="region">
                                <select
                                    className="form-select"
                                    id="region"
                                    value={selectedRegion}
                                    onChange={handleRegionChange}
                                >
                                    <option value="">Select a Region</option>
                                    {regions.map((region, index) => (
                                        <option key={index} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="district">
                                <select className="form-select" id="district">
                                    <option value="">Select a District</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                        </form>

                        <div className="modal-footer">
                            <button type="button" className="search-btn">SEARCH</button>
                            <button type="button" className="clear-btn" data-dismiss="modal">Clear All filter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
