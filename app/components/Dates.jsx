"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';


function DateItem({ imageUrl, description }) {
    useEffect(() => {
        AOS.init(); 
    }, []);
    return (
        <div className="flex flex-col items-center mb-8  bg-[url('/assets/img/backgrounds/bg-date.png')] bg-no-repeat bg-cover bg-center py-10" data-aos="fade-up">
            <div className="z-20 bg-[#202723] shadow-xl w-20 h-20 rounded-full">
                <Image
                    src={imageUrl}
                    alt={description}
                    height={100}
                    width={100}
                    className="mx-auto rounded-full"
                />
            </div>
            <div className="bg-[#202723] rounded-lg shadow-xl w-full mt-4">
                <p className="text-sm leading-snug tracking-wide text-white text-opacity-100 md:text-base p-4 font-bold">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default function Dates() {
    return (
        <div className="container mx-auto px-4 py-8 width-container">
            <div className="grid gap-8 md:grid-cols-3">
                {/* Primer item */}
                <DateItem
                    imageUrl="/assets/img/A_01 elemets-01-05.png"
                    description="07 - 07 - 2020"
                />

                {/* Segundo item */}
                <DateItem
                    imageUrl="/assets/img/A_01 elemets-01-06.png"
                    description="09 - 25 - 2023"
                />

                {/* Tercer item */}
                <DateItem
                    imageUrl="/assets/img/A_01 elemets-01-07.png"
                    description="06 - 07 - 2024"
                />
            </div>
        </div>
    );
}
