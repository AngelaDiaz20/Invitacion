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
import "./ui/home.css";
import { ephesis } from "./ui/fonts";

export default function Home() {
  const targetDate = '2024-07-06T09:00:00';

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
      <section className="cont-timeline">
        <h1 className={`text-[40px] sm:text-[45px] md:text-[50px] lg:text-[100px] my-4 px-8 ${ephesis.className} title-text`}>Este es el plan:</h1>
        <Timeline /></section>
      <div className="bg-[url('/assets/img/backgrounds/flower.png')] bg-no-repeat bg-cover py-4 leading-none font-bold">
        <h1 className={`text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] my-4 px-8 text-black ${ephesis.className}`}>Gracias por acompañarnos</h1>
        <Dates />
      </div>
      <h1 className={`px-8 m-10 text-[40px] sm:text-[45px] md:text-[50px] lg:text-[70px] ${ephesis.className} title-text leading-none font-bold`}>Recordemos el momento</h1>
      <Whatsapp/>
      <section className="gallery-section">
        <Galleryn />
      </section>
      <section className="bg-white px-8">
      <Location/></section>
      <Palette />
      <Letter />

    </main>
  );
}
