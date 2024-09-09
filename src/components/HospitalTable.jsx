// HospitalTable.js
import React from 'react';
import "./HospitalTable.css";
// import doshlogo from "../images/hsp.png";

const HospitalTable = ({ data }) => {
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
                        <th>Latitude</th>
                        <th>Longitude</th>
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
                                <td>{hospital.email}</td>
                                <td>{hospital.latitude}</td>
                                <td>{hospital.longitude}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No hospitals found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HospitalTable;
