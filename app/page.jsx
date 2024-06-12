import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";
import Dates from "./components/Dates";
import Gallery from "./components/Gallery";
import Quote from "./components/Quote";
import Location from "./components/Location";
import Letter from "./components/Letter";
import Palette from "./components/Palette";
import Video from "./components/Video";
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
        <h1 className={`text-[40px] sm:text-[45px] md:text-[50px] lg:text-[100px] my-5 px-8 ${ephesis.className} title-text`}>¡Ya falta poco!</h1>
        <Countdown targetDate={targetDate} />
        <h3 className="my-8 mx-auto px-8 text-base max-w-80">ESTAMOS ESPERANDO <br /><span className="text-xl font-bold">ESTE DÍA HACE MUCHO</span></h3>
      </div>
      <section className="cont-quote width-container">
        <Quote />
      </section>
      <section className="cont-timeline">
        <h1 className={`text-[40px] sm:text-[45px] md:text-[50px] lg:text-[100px] my-4 px-8 ${ephesis.className} title-text`}>Este es el plan:</h1>
        <Timeline /></section>
      <div className="bg-[url('/assets/img/backgrounds/flower.png')] bg-no-repeat bg-cover">
        <h1 className={`text-[20px] sm:text-[20px] md:text-[30px] lg:text-[50px] my-4 px-8 text-black ${ephesis.className}`}>Gracias por acompañarnos</h1>
        <Dates />
      </div>
      <h1 className={`px-8 m-10 text-[20px] sm:text-[20px] md:text-[30px] lg:text-[70px] ${ephesis.className} title-text`}>Recordemos el momento</h1>
      <div className="bg-[url('/assets/img/logo_whatsapp.png')] bg-no-repeat bg-contain bg-right h-[250px] max-w-[500px] mx-auto flex flex-col justify-around text-left card-wapp">
        <h3 className="max-w-[50%]"> Envíanos las fotos que más te gustaron al grupo de WhatsApp</h3>
        <button className="cta">
          <span>Ingresar al grupo</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </div>
      <Gallery />
      <section className="bg-white px-8">
      <Location/></section>
      <Palette />
      <Letter />

    </main>
  );
}
