import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HomePreview = () => {

    const [slides, setSlides] = useState([]);


    const [counter, setCounter] = useState(1);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isPaused) {
                document.getElementById('radio' + counter).checked = true;
                setCounter(prevCounter => (prevCounter % 8) + 1);
            }
        }, 100000);

        return () => clearInterval(intervalId);
    }, [counter, isPaused]);

    const handleMouseDown = () => {
        setIsPaused(true);
    };

    const handleMouseUp = () => {
        setIsPaused(false);
    };

    useEffect(() => {
        fetch('https://doshcms.interactivedigital.com.gh/api/show-slideshow')
            .then(response => response.json())
            .then(data => {
                setSlides(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const baseURL = 'https://doshcms.interactivedigital.com.gh/';
    const index = 1; //index of the items in my database

    // Check if the slides array has an item at the specified index
    const slide = slides.length > index ? slides[index] : null;

    if (!slide) {
        return <div>No slides available</div>;
    }
    return (
        <div className='main__hero'>
            <div className='hero'>
                <div className='slider'>
                    <div className='slides' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                        <input type="radio" name="radio-button" id="radio1" />
                        <div>
                            <div className='slide first' key={index}>
                                <img src={`${baseURL}${slide.slideshow_image.replace(/\\/g, '')}`} alt='bing' loading='lazy' />
                                <div className='hero__text'>
                                    <p className='first_slider'>{slide.caption}</p>
                                    <p className='first_slider-p'>{slide.body}</p>
                                </div>
                                <div className='slide-text'>
                                    <h3>People are signing  with us</h3>
                                    <div className="slide-arrow">
                                        <Link to='https://dsp.onenet.xyz:50443/#/' target="_blank" rel="noopener noreferrer" className='slide__link'>
                                            <small>Join DOSH</small>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="28"
                                                height="28"
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePreview