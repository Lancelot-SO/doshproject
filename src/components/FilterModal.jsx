import React, { useRef, useState } from 'react';
import '../App.css';

const FilterModal = ({ showModal, onClose }) => {
    const modalRef = useRef();
    const [selectedRegion, setSelectedRegion] = useState('');
    const [districts, setDistricts] = useState([]);

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    const handleRegionChange = (e) => {
        const region = e.target.value;
        setSelectedRegion(region);

        // You can replace this with actual district data for each region
        const regionDistricts = {
            'Greater Accra': ['Accra', 'Tema', 'Nungua', 'Teshie', 'Madina', 'Adenta', 'Dome', 'Ga West', 'Ga East', 'Ga South'],
            'Western Region': ['Takoradi', 'Sekondi', 'Shama', 'Ahanta West', 'Nzema East', 'Jomoro', 'Prestea-Huni Valley', 'Tarkwa-Nsuaem', 'Ellembelle', 'Wassa Amenfi East'],
            'Ashanti Region': ['Kumasi', 'Obuasi', 'Ejisu', 'Mampong', 'Bekwai', 'Asante-Akim North', 'Asante-Akim South', 'Atwima Nwabiagya', 'Bosome Freho', 'Kwabre East'],
            // Add more regions and their corresponding districts here
        };

        setDistricts(regionDistricts[region] || []);
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
                                <select className="form-select" id="country">
                                    <option value="">Select a Country</option>
                                    <option value="Ghana">Ghana</option>
                                    {/* Add more countries if needed */}
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
                                    <option value="Greater Accra">Greater Accra</option>
                                    <option value="Western Region">Western Region</option>
                                    <option value="Western North">Western North  </option>
                                    <option value="Ashanti Region">Ashanti Region</option>
                                    <option value="Central">Central Region</option>
                                    <option value="Eastern">Eastern Region</option>
                                    <option value="Volta">Volta Region</option>
                                    <option value="Oti">Oti Region</option>
                                    <option value="Bono East">Bono East Region</option>
                                    <option value="Bono">Bono Region</option>
                                    <option value="Ahafo">Ahafo Region</option>
                                    <option value="Northern">Northern Region</option>
                                    <option value="Savannah">Savannah Region</option>
                                    <option value="North East">North East Region</option>
                                    <option value="Upper East">Upper East Region</option>
                                    <option value="Upper West">Upper West Region</option>
                                    {/* Add more regions here */}
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
