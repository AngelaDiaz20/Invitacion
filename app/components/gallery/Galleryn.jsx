"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import "./gallery.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Galleryn() {
    useEffect(() => {
        const next = document.querySelector('.next');
        const prev = document.querySelector('.prev');

        const nextClickHandler = () => {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        };

        const prevClickHandler = () => {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length - 1]);
        };

        if (next && prev) {
            next.addEventListener('click', nextClickHandler);
            prev.addEventListener('click', prevClickHandler);
        }

        return () => {
            if (next && prev) {
                next.removeEventListener('click', nextClickHandler);
                prev.removeEventListener('click', prevClickHandler);
            }
        };
    }, []);
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
        <div className="bg-[url('/assets/img/backgrounds/FONDO_01-01.jpg')] bg-no-repeat bg-cover py-10 mt-10 h-full">
            <div className="w-[90%] m-auto width-container">
                <Image
                    src="/assets/img/NUESTRA HISTORIA.png"
                    alt="Nuestra historia"
                    width={100}
                    height={100}
                    className="w-full max-w-[800px] m-auto"
                />
            </div>

            <section className='w-full container-g'></section>
            <div className="container-gallery">

                <div className="slide">
                    <div className="item bg-[url('https://i.postimg.cc/9F1pDN5y/foto1.jpg')]">
                        <div className="content">
                        </div>
                    </div>
                    <div className="item bg-[url('https://i.postimg.cc/q7WQkhfY/foto2.jpg')]">
                        <div className="content">
                        </div>
                    </div>
                    <div className="item bg-[url('https://i.postimg.cc/KY1JS7WB/foto3.jpg')]">
                        <div className="content">
                        </div>
                    </div>
                    <div className="item bg-[url('https://i.postimg.cc/Fz4ZLMHV/foto4.jpg')]">
                        <div className="content">
                        </div>
                    </div>
                    <div className="item bg-[url('https://i.postimg.cc/4dtPnfs3/foto5.jpg')]">
                        <div className="content">
                        </div>
                    </div>
                    <div className="item bg-[url('https://i.postimg.cc/NFkx7dyq/foto6.jpg')]">
                        <div className="content">
                        </div>
                    </div>

                </div>

                <div className="button">
                    <button className="prev bg-black text-white"><FaArrowLeft className='m-auto'/></button>
                    <button className="next bg-black text-white"><FaArrowRight className='m-auto'/></button>
                </div>

            </div>
        </div>
    );
}
