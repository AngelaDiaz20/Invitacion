"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

function TimelineItem({ time, imageUrl, title, sideCont, sideClass, sideText, sideTitle }) {
    useEffect(() => {
        AOS.init(); 
    }, []);

    return (
        <div className={`mb-8 flex justify-between items-center w-full ${sideClass}`} data-aos="fade-up">
            <div className={`order-1 w-5/12 flex ${sideText}`}>
                <h1 className="font-semibold text-sm text-white bg-[#AA4018] rounded-lg px-4 py-2 w-fit">{time}</h1>
            </div>
            <div className="z-20 flex items-center justify-center content-center order-1 bg-black shadow-xl rounded-full sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-42 xl:h-42">
                <Image
                    src={imageUrl}
                    alt={title}
                    height={120}
                    width={120}
                    className='mx-auto rounded-full'
                />
            </div>
            <div className={`order-1 shadow-xl w-5/12 py-4 flex ${sideCont}`}>
                <h3 className={`mb-3 font-bold text-white text-xl text-[15px] sm:text-[24px] max-w-40 ${sideTitle}`}>{title}</h3>
            </div>
        </div>
    );
}
export default function Timeliner() {
    return (
        <div className="container mx-auto px-4 py-8 width-container ">
            <div className="relative wrap overflow-hidden p-0 h-full">
                <div className="line-timeline"></div>

                {/* Primer item */}
                <TimelineItem
                    time="9:30 am"
                    imageUrl="/assets/img/A_01 elemets-01-02.png"
                    title="Ceremonia en la iglesia"
                    sideClass="left-timeline"
                    sideText="justify-end"
                    sideTitle="text-left"
                    sideCont="justify-start"
                />

                {/* Segundo item */}
                <TimelineItem
                    time="11:00 am"
                    imageUrl="/assets/img/A_01 elemets-01-01.png"
                    title="Sesión de fotos"
                    sideClass="flex-row-reverse"
                    sideText="text-left"
                    sideTitle="text-right"
                    sideCont="justify-end"
                />

                {/* Tercer item */}
                <TimelineItem
                    time="12:30 pm"
                    imageUrl="/assets/img/A_01 elemets-01-08.png"
                    title="Pastel e integración"
                    sideClass="left-timeline"
                    sideText="justify-end"
                    sideTitle="text-left"
                    sideCont="justify-start"
                />

                {/* Cuarto item */}
                <TimelineItem
                    time="2:00 pm"
                    imageUrl="/assets/img/A_01 elemets-01-07.png"
                    title="Primer baile"
                    sideClass="flex-row-reverse"
                    sideText="text-left"
                    sideTitle="text-right"
                    sideCont="justify-end"
                />

                {/* Quinto item */}
                <TimelineItem
                    time="12:30 pm"
                    imageUrl="/assets/img/A_01 elemets-01-03.png"
                    title="Brindis"
                    sideClass="left-timeline"
                    sideText="justify-end"
                    sideTitle="text-left"
                    sideCont="justify-start"
                />
            </div>
        </div>
    );
}
