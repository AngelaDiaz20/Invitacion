"use client";
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousel = ({ images }) => {
    const carouselTrack1Ref = useRef(null);
    const carouselTrack2Ref = useRef(null);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='carousel-container-wrapper'>
            <div className='carousel-container' data-aos="fade-up">
                <div className='carousel-track' ref={carouselTrack1Ref}>
                    {[...images, ...images].map((src, index) => (
                        <img key={`1-${index}`} src={src} alt={`Image ${index}`} />
                    ))}
                </div>
            </div>
            <div className='carousel-container' data-aos="fade-up">
                <div className='carousel-track' ref={carouselTrack2Ref} style={{ animationDelay: '25s' }}>
                    {[...images, ...images].map((src, index) => (
                        <img key={`2-${index}`} src={src} alt={`Image ${index}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
