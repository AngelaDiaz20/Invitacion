"use client";
import Carousel from './Carousel';

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

    return (
        <div className="bg-[url('/assets/img/backgrounds/FONDO_01-01.jpg')] bg-no-repeat bg-cover py-10 mt-10">
            <div className="w-[80%] m-auto width-container">
                <img src="/assets/img/NUESTRA HISTORIA.png" alt="Nuestra historia" />
            </div>
            <Carousel images={images} />
        </div>
    );
}
