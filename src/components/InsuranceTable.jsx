import React from 'react';
import { Link } from 'react-router-dom';
import dosh from "../images/dosh_logo.png";
import "./InsuranceTable.css";


const InsuranceTable = ({ closePopup }) => {


    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50 glass-bg">
            <div className="relative rounded-lg shadow-lg w-full h-[100%] flex flex-col">
                <div className="lg:p-4 h-full flex flex-col justify-between overflow-scroll">
                    {/* Header section */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="lg:text-[44px] text-[20px] text-[#A2865F] font-bold">
                            DOSH Health Insurance Packages
                        </h2>
                        <button
                            type="button"
                            className="bg-[#A2865F] text-white w-[40px] h-[40px] rounded-full"
                            onClick={closePopup}
                        >
                            <span className="text-[40px]">&times;</span>
                        </button>
                    </div>

                    {/* Table Section */}
                    <div className="flex-grow">
                        <div className="glass-table ">{/* a class called no-scrollbar was here */}

                            <table className={`w-full`}>
                                {/* Row content here */}
                                <tr>
                                    <td className='dosh'>
                                        <img src={dosh} alt='Dosh Logo' loading='lazy' /></td>
                                    <td className='price'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span>DOSH-365</span>
                                    </td>
                                    <td className='price-like'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>DOSH-500</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>DOSH-750</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>DOSH-900</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>DOSH-1000</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>DOSH-1200</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>DOSH-2500</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>DOSH-2800</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>DOSH-5000</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>DOSH-5500</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>DOSH-10000</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>DOSH-11000</span>
                                    </td>


                                </tr>
                                <tr>
                                    <td className='heading'>Annual Premium</td>
                                    <td className='row-center'>GHS 365</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>GHS 750</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center'>GHS 1,200</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>GHS 2,800</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>GHS 5,500</td>
                                    <td className='row-center'>GHS 10,000</td>
                                    <td className='row-center'>GHS 11,000</td>

                                </tr>
                                <tr>
                                    <td className='heading-total'>Total sum assured</td>
                                    <td className='row-center-total'>GHS 9,000</td>
                                    <td className='row-center-total'>GHS 21,000</td>
                                    <td className='row-center-total'>GHS18,000</td>
                                    <td className='row-center-total'>GHS 42,000</td>
                                    <td className='row-center-total'>GHS 30,000</td>
                                    <td className='row-center-total'>GHS 54,000</td>
                                    <td className='row-center-total'>GHS 60,000</td>
                                    <td className='row-center-total'>GHS 108,000</td>
                                    <td className='row-center-total'>GHS 95,000</td>
                                    <td className='row-center-total'>GHS 167,000</td>
                                    <td className='row-center-total'>GHS 190,000</td>
                                    <td className='row-center-total'>GHS 286,000</td>
                                </tr>
                                <tr>
                                    <td className='heading'>Out Patient Limit OP (Member)</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 3,000</td>
                                    <td className='row-center'>GHS 3,000</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                    <td className='row-center-total'>GHS 40,000</td>
                                    <td className='row-center-total'>GHS 40,000</td>
                                </tr>
                                <tr>
                                    <td className='heading'>In Patient Limit IP (Member)</td>
                                    <td className='row-center'>GHS 6,100</td>
                                    <td className='row-center'>GHS 6,100</td>
                                    <td className='row-center'>GHS 12,600</td>
                                    <td className='row-center'>GHS 12,600</td>
                                    <td className='row-center'>GHS 21,500</td>
                                    <td className='row-center'>GHS 21,500</td>
                                    <td className='row-center-total'>GHS 41,250</td>
                                    <td className='row-center-total'>GHS 41,250</td>
                                    <td className='row-center-total'>GHS 57,000</td>
                                    <td className='row-center-total'>GHS 57,000</td>
                                    <td className='row-center-total'>GHS 115,000</td>
                                    <td className='row-center-total'>GHS 115,000</td>
                                </tr>
                                <tr>
                                    <td className='heading'>Medication Limit OP/IP (Member)</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center-total'>GHS 3,750</td>
                                    <td className='row-center-total'>GHS 3,750</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Lab/Scan Limit OP/IP (Member)</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 900</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 1,500</td>
                                    <td className='row-center'>GHS 2,000</td>
                                    <td className='row-center'>GHS 2,000</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Death (member)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Death (Spouse)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 15,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 20,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Death (2x Dependants)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,250</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Critical illness (member)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,250</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Permanent Disability (member)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,250</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 2,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 5,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 7,500</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 10,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>Personal Accident (each person)</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 500</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>GHS 1,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 2,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 3,000</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>GHS 4,000</td>
                                </tr>
                                <tr >
                                    <td className='heading'>** Partial Disability</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>3%-60%</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>3%-60%</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>3%-60%</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>3%-60%</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>3%-60%</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>3%-60%</td>
                                </tr>

                                <tr>
                                    <td className='heading-last'></td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' target="_blank" rel="noopener noreferrer">Sign Up</Link></button>
                                    </td>
                                </tr>
                                {/* Add more rows */}
                            </table>
                            {/* Toggle Button */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsuranceTable;
