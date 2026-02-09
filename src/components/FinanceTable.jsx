import React from 'react';
import { Link } from 'react-router-dom';
import dosh from "../images/dosh_logo.png";
import "./InsuranceTable.css";


const FinanceTable = ({ closePopup }) => {


    return (
        <div className="fixed top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center z-50 glass-bg">
            <div className="relative rounded-lg shadow-lg w-full h-[100%] flex flex-col">
                <div className="lg:p-4 h-full flex flex-col justify-between overflow-scroll">
                    {/* Header section */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="lg:text-[44px] text-[24px] text-[#A2865F] font-bold">DOSH Finance Packages</h2>

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
                        <div className="glass-table no-scrollbar">
                            <table className='w-full'>
                                <tr>
                                    <td className='dosh'>
                                        <img src={dosh} alt='Dosh Logo' loading='lazy' /></td>
                                    <td className='price'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span>Personal</span>
                                    </td>
                                    <td className='price-like'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>Family</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>SOHO</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Enhanced</h3>
                                        <span>SMB</span>
                                    </td>
                                    <td className='price-next'>
                                        <h3 className='hide'>Insurance</h3>
                                        <span className='push'>Enterprise</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='finance__heading'>Main Account</td>
                                    <td className='row-center'>1</td>
                                    <td className='row-center'>1</td>
                                    <td className='row-center'>1</td>
                                    <td className='row-center'>1</td>
                                    <td className='row-center'>1</td>

                                </tr>
                                <tr>
                                    <td className='heading-totals'>Sub-User Accounts</td>
                                    <td className='row-center-total'>-</td>
                                    <td className='row-center-total'>5</td>
                                    <td className='row-center-total'>5</td>
                                    <td className='row-center-total'>10</td>
                                    <td className='row-center-total'>30</td>
                                </tr>
                                <tr>
                                    <td className='finance__heading'>Departmental Accounts</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>-</td>
                                    <td className='row-center'>2</td>
                                    <td className='row-center'>5</td>
                                    <td className='row-center'>10</td>
                                </tr>
                                <tr>
                                    <td className='finance__heading'>Loan Limit</td>
                                    <td className='row-center'>GHS 50,000</td>
                                    <td className='row-center'>GHS 100,000</td>
                                    <td className='row-center'>GHS 200,000</td>
                                    <td className='row-center'>GHS 300,000</td>
                                    <td className='row-center'>GHS 300,000 +</td>

                                </tr>
                                <tr>
                                    <td className='heading-last'></td>
                                    <td className="signup-button">
                                        <button><Link to='/register' state={{ plan: 'Personal' }}>Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' state={{ plan: 'Family' }}>Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' state={{ plan: 'SOHO' }}>Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' state={{ plan: 'SMB' }}>Sign Up</Link></button>
                                    </td>
                                    <td className="signup-button">
                                        <button><Link to='/register' state={{ plan: 'Enterprise' }}>Sign Up</Link></button>
                                    </td>
                                </tr>
                            </table>
                            {/* Toggle Button */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinanceTable;
