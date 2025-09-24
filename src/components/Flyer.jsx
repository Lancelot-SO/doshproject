import React from 'react';
import './Flyer.css';
import { FaDownload } from 'react-icons/fa';

const Flyer = ({ onClose }) => {
    return (
        <div className='flyer-modal'>
            <div className='flyer-content'>
                <div className='flyer-top'>
                    <select className='flyer_selector'>
                        <option value="">Select an option</option>
                        <option value="option1">Finance</option>
                        <option value="option2">Insurance</option>
                        <option value="option3">Loan</option>
                    </select>
                    <a href="/dosh_insurance.pdf" download="dosh_insurance.pdf" className='flyer_link flyer_link_mobile '>
                        <FaDownload />
                    </a>
                    <button onClick={onClose} className='flyer_close'>X</button>
                </div>
            </div>
        </div>
    );
};

export default Flyer;
