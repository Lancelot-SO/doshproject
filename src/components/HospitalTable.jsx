import React from 'react';
import './HospitalTable.css';
import { Link } from 'react-router-dom';

const HospitalTable = ({ data }) => {
    // Function to get Google Maps link based on latitude and longitude
    const getGoogleMapsLink = (latitude, longitude) => {
        if (!latitude || !longitude) return "N/A";
        const lat = encodeURIComponent(latitude);
        const long = encodeURIComponent(longitude);
        return `https://www.google.com/maps?q=${lat},${long}`;
    };

    // Function to generate a mailto link for email addresses
    const getMailToLink = (email) => {
        if (!email) return "N/A";
        return `mailto:${email}`;
    };

    return (
        <div className="hospital-table-container">
            <table className="hospital-table">
                <thead>
                    <tr>
                        <th>Hospital Name</th>
                        <th>Region Name</th>
                        <th>District</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Google Maps</th> {/* New column for the Google Maps link */}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((hospital, index) => (
                            <tr key={index}>
                                <td>{hospital.name}</td>
                                <td>{hospital.region}</td>
                                <td>{hospital.district}</td>
                                <td>{hospital.contact}</td>
                                <td>
                                    {hospital.email ? (
                                        <a
                                            href={getMailToLink(hospital.email)}
                                            className="email_link"
                                        >
                                            {hospital.email}
                                        </a>
                                    ) : (
                                        "N/A"
                                    )}
                                </td>
                                <td>
                                    {hospital.latitude && hospital.longitude ? (
                                        <Link
                                            to={getGoogleMapsLink(hospital.latitude, hospital.longitude)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="view_maps"
                                        >
                                            View on Map
                                        </Link>
                                    ) : (
                                        "N/A"
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No hospitals found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HospitalTable;
