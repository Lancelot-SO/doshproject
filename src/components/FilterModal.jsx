import React, { useRef } from 'react'
import '../App.css';

const FilterModal = ({ showModal, onClose }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }


    if (!showModal) return null;




    return (
        <div>
            <div ref={modalRef} onClick={closeModal} className=" modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">In this view show records</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            <p>Where</p>
                            <div className="country">
                                <select className="form-select" id="country">
                                    <option value="1">Select a Country</option>
                                    <option value="2">Ghana</option>
                                    <option value="3">Nigeria</option>
                                    <option value="4">Switzerland</option>
                                </select>
                            </div>
                            <div className="region">
                                <select className="form-select" id="region">
                                    <option value="1">Select a Region</option>
                                    <option value="2">Greater Accra</option>
                                    <option value="3">Western Region</option>
                                    <option value="4">Ashanti Region</option>
                                </select>
                            </div>
                            <div className="district">
                                <select className="form-select" id="district">
                                    <option value="1">Select a District</option>
                                    <option value="2">Kanda</option>
                                    <option value="3">Nungua</option>
                                    <option value="4">Tema</option>
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
    )
}

export default FilterModal
