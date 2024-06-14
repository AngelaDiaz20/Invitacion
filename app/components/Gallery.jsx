"use client";
import Carousel from './Carousel';
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import GalleryImage from './Galleryimage';

export default function Gallery() {
    const images = [
        'https://i.postimg.cc/9F1pDN5y/foto1.jpg',
        'https://i.postimg.cc/q7WQkhfY/foto2.jpg',
        'https://i.postimg.cc/KY1JS7WB/foto3.jpg',
        'https://i.postimg.cc/Fz4ZLMHV/foto4.jpg',
        'https://i.postimg.cc/4dtPnfs3/foto5.jpg',
        'https://i.postimg.cc/NFkx7dyq/foto6.jpg',
        'https://i.postimg.cc/J7NKLzp6/7.jpg',
        'https://i.postimg.cc/8PT4Pg31/8.jpg',
    ];

    const [active, setActive] = React.useState(
        "https://i.postimg.cc/9F1pDN5y/foto1.jpg",
    );

    return (
        <div className="bg-[url('/assets/img/backgrounds/FONDO_01-01.jpg')] bg-no-repeat bg-cover py-10 mt-10">
            <div className="w-[90%] m-auto width-container">
                {/* <Image
                    src="/assets/img/NUESTRA HISTORIA.png"
                    alt="Nuestra historia"
                    width={100}
                    height={100}
                    className="w-full max-w-[800px] m-auto"
                /> */}
                <img src="/assets/img/NUESTRA HISTORIA.png" alt="Nuestra historia" className="w-full max-w-[800px] m-auto"/>
            </div>
            {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {images.map((src, index) => (
                    <GalleryImage key={index} src={src} alt={`gallery-photo-${index}`} />
                ))}
            </div>   */}
            
            <Carousel images={images} />
        </div>
    );
}
