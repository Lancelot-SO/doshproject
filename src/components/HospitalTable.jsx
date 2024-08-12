import React from 'react'
import "./HospitalTable.css"

import doshlogo from "../images/hsp.png"

const HospitalTable = () => {
    return (
        <div>
            <div className="containertabs">
                <div className="tabs">
                    <button className="tab-button">Country</button>
                    <button className="tab-button">Region</button>
                    <button className="tab-button">District</button>
                </div>

                <table className="hospital-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name of Hospital</th>
                            <th>Speciality</th>
                            <th>Contacts</th>
                            <th>Location</th>
                            <th>Plan Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={doshlogo} alt="logo" className="logo" /></td>
                            <td> Total House Clinic</td>
                            <td>PAED/GP</td>
                            <td>0302-664921</td>
                            <td>ACCRA CENTRAL</td>
                            <td>AREGULAR/MERCURY/PLATINUM PLUS</td>
                        </tr>
                        <tr>
                            <td><img src={doshlogo} alt="logo" className="logo" /></td>
                            <td> Ghan Post Clinic</td>
                            <td>GP</td>
                            <td>0302-668291</td>
                            <td>ACCRA CENTRAL</td>
                            <td>AREGULAR/MERCURY/PLATINUM PLUS</td>
                        </tr>
                        <tr>
                            <td><img src={doshlogo} alt="logo" className="logo" /></td>
                            <td> MAPLE LEAF CHEMISTS</td>
                            <td>PHARMACY</td>
                            <td>0302-668291</td>
                            <td>ACCRA CENTRAL</td>
                            <td>AREGULAR/MERCURY/PLATINUM PLUS</td>
                        </tr>
                        <tr>
                            <td><img src={doshlogo} alt="logo" className="logo" /></td>
                            <td> RICH EYE CENTER</td>
                            <td>OPTICAL SERVICES</td>
                            <td>0302-668291</td>
                            <td>ACCRA CENTRAL</td>
                            <td>AREGULAR/MERCURY/PLATINUM PLUS</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HospitalTable