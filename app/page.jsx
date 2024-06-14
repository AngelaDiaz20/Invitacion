"use client";
import { useEffect } from "react";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Dates from "./components/Dates";
import Gallery from "./components/Gallery";
import Galleryn from "./components/gallery/Galleryn"
import Quote from "./components/Quote";
import Location from "./components/Location";
import Letter from "./components/Letter";
import Palette from "./components/Palette";
import Video from "./components/Video";
import Whatsapp from "./components/Whatsapp";
import Modal from "./ui/Modal";
import DinosaurGame from "./components/videogame/DinosaurGame"
import "./ui/home.css";
import { ephesis } from "./ui/fonts";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const targetDate = '2024-07-06T09:00:00';
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className="text-center">
      <section>
        <Video src="/assets/video/INICIO.mp4" />
      </section>
      <div className="cont-countdown py-4">
        <h1 className={`text-[50px] sm:text-[65px] md:text-[80px] lg:text-[100px] my-5 px-8 ${ephesis.className} title-text`}>¡Ya falta poco!</h1>
        <Countdown targetDate={targetDate} />
        <h3 className="my-8 mx-auto px-8 text-base max-w-80">ESTAMOS ESPERANDO <br /><span className="text-xl font-bold">ESTE DÍA HACE MUCHO</span></h3>
      </div>
      <section className="cont-quote width-container">
        <Quote />
      </section>
      <section className="bg-[url('/assets/img/backgrounds/bg-invitation.png')] bg-repeat bg-contain bg-right h-[120px] bg-[#D27345] flex justify-center items-center" data-aos="fade-up">
        <div className="bg-black px-5 py-3 rounded-md"><p>Escríbenos y</p>
          <Modal buttonText={"Confirma tu asistencia aquí"}/>
        </div>
      </section>
      <section className="cont-timeline">
        <h1 className={`text-[40px] sm:text-[45px] md:text-[50px] lg:text-[100px] my-4 px-8 ${ephesis.className} title-text`}>Este es el plan:</h1>
        <Timeline /></section>
      <div className="bg-[#BDD7C9] py-4 leading-none font-bold">
        <h1 className={`text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] font-bold my-4 px-8 text-black ${ephesis.className}`}>Gracias por acompañarnos</h1>
        <Dates />
      </div>
      <h1 className={`px-8 m-10 text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] ${ephesis.className} title-text leading-none font-bold`} data-aos="fade-up">Recordemos el momento</h1>
      <Whatsapp/>
      <section className="gallery-section" data-aos="fade-up">
        <Galleryn />
      </section>
      <section className="bg-white" data-aos="fade-up">
      <Location/></section>
      <Palette data-aos="fade-up" />
      {/* <section className="dinosaur-game-section m-auto">
        <h1>Juego de boda</h1>
        <DinosaurGame />
      </section> */}
      <Letter data-aos="fade-up" />

    </main>
  );
}
