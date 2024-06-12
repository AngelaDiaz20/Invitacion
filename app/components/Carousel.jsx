import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="carousel-container mx-auto my-10">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="w-[400px] h-[200px] flex justify-center items-center">
                        <Image 
                            src={src}
                            alt={`carousel-image-${index}`}
                            width={400}
                            height={200}
                            className="object-cover"
                            priority={true}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
