import React, { useRef, useState } from 'react';
import '../App.css';

// Move countryRegions and regionDistricts outside the component
const countryRegions = {
    'Ghana': ['Greater Accra', 'Western', 'Ashanti', 'Western North', 'Central', 'Eastern', 'Volta', 'Oti', 'Bono East', 'Bono', 'Ahafo', 'Northern', 'Savannah', 'North East', 'Upper East', 'Upper West'],
    'Nigeria': ['Lagos', 'Kano', 'Kaduna', 'Rivers', 'Oyo'],
    'South Africa': ['Gauteng', 'KwaZulu-Natal', 'Western Cape', 'Eastern Cape', 'Free State'],
};

const regionDistricts = {
    'Ghana': {
        'Greater Accra': ['Accra', 'Tema', 'Nungua', 'Teshie', 'Madina', 'Adenta', 'Dome', 'Ga West', 'Ga East', 'Ga South'],
        'Ashanti Region': [],
        'Western Region': [],
        // Add other regions' districts similarly...
    },
};

const FilterModal = ({ showModal, onClose, onFilter }) => {
    const modalRef = useRef();
    const [selectedCountry, setSelectedCountry] = useState('Ghana'); // Default to 'Ghana'
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [regions, setRegions] = useState(countryRegions['Ghana']); // Set initial regions to Ghana's regions
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
        setSelectedRegion(''); // Reset region when country changes
    };

    const handleRegionChange = (e) => {
        const region = e.target.value;
        setSelectedRegion(region);
        setDistricts(regionDistricts[selectedCountry]?.[region] || []);
        setSelectedDistrict(''); // Reset district when region changes
    };

    const handleSearch = () => {
        onFilter({
            country: selectedCountry,
            region: selectedRegion,
            district: selectedDistrict,
        });
    };

    if (!showModal) return null;

    return (
        <div>
            <div ref={modalRef} onClick={closeModal} className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Records to be shown</h5>
                    </div>
                    <div className="modal-body">
                        <form className='hsp__form'>
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
                                <select className="form-select" id="district" value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                                    <option value="">Select a District</option>
                                    {districts.map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                        </form>

                        <div className="modal-footer">
                            <button type="button" className="search-btn" onClick={handleSearch}>SEARCH</button>
                            <button type="button" className="clear-btn" onClick={onClose}>Clear All filter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
