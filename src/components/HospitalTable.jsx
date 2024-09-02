// HospitalTable.js
import React from 'react';
import "./HospitalTable.css";
import doshlogo from "../images/hsp.png";

const HospitalTable = ({ data }) => {
    return (
        <div className="hospital-table-container">
            <table className="hospital-table">
                <thead>
                    <tr>
                        <th>Hospital Name</th>
                        <th>Region Name</th>
                        <th>Location</th>
                        <th>Contact Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((hospital, index) => (
                            <tr key={index}>
                                <td>{hospital.name}</td>
                                <td>{hospital.regionName}</td>
                                <td>{hospital.location}</td>
                                <td>{hospital.contactNumber}</td>
                                <td>{hospital.email}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No hospitals found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HospitalTable;
