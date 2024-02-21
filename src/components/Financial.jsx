import React, { useEffect, useRef, useState } from 'react'

import { projectLinks } from '../doshdata';
import { projectDetails } from '../doshdata'
import { Link } from 'react-router-dom';



const Financial = ({ onClose }) => {
    const modalRef = useRef();

    const [item, setItem] = useState({ name: 'finance' })
    const [proj, setProj] = useState([]);
    const [active, setActive] = useState(0)

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    //set links based on iteems clicked

    useEffect(() => {
        const filteredProjects = projectDetails.filter(project => {
            return item.name === 'finance' ? project.category === 'finance' : project.category === item.name;
        });
        setProj(filteredProjects);
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent })
        setActive(index)
    }
    return (
        <div>
            <div ref={modalRef} onClick={closeModal} className='finance-modal'>
                <div className='finance-modal-content'>
                    <ul className='menu-links'>
                        {
                            projectLinks.map((item, index) => {
                                return <Link className={`${active === index ? 'active' : ""
                                    }`} onClick={(e) => {
                                        handleClick(e, index)
                                    }} key={index}><li>{item.name}</li></Link>
                            })
                        }
                    </ul>
                    <button type="button" onClick={onClose} className="finance-close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div>
                        {
                            proj.map((item) => {
                                return <div key={item.id} className='finance-about__hand-shake'>
                                    <div className='finance-about_left'>
                                        <img src={item.img} className='finance-about__image' alt='handshake' />
                                    </div>
                                    <div className='finance-about__right'>
                                        <h5>{item.title}</h5>
                                        <span>{item.desc}</span>
                                        <p>{item.details}</p>
                                        <span>{item.lastdesc}</span>
                                        <Link to="/register">Sign up
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="14"
                                                height="14"
                                                fill="currentColor"
                                                class="bi bi-arrow-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Financial
