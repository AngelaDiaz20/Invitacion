import Image from "next/image";
import Modal from "../ui/Modal";

export default function Location() {

    return (
        <section className="m-auto flex justify-center items-center relative location sm:flex-col">
           <a href="https://www.google.com/maps/dir//Dg.+42a+%2322-40,+Bogot%C3%A1/@4.6311892,-74.0881689,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3f9a2cf7863ffb:0x80096f1b107a282f!2m2!1d-74.0745159!2d4.6333773?entry=ttu" target="_blank">
           <Image
                src="/assets/img/celular_ubicacion.png"
                alt="Ubicación"
                width={100}
                height={100}
                className="w-full min-w-[320px] max-w-[800px] m-auto"
            /></a>
             <a href="https://www.google.com/maps/dir//Dg.+42a+%2322-40,+Bogot%C3%A1/@4.6311892,-74.0881689,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3f9a2cf7863ffb:0x80096f1b107a282f!2m2!1d-74.0745159!2d4.6333773?entry=ttu" target="_blank">
            <div className="text-white cont-location flex flex-col items-center justify-center p-4"> 
            <p className="text-[15px] sm:text-[15px] font-bold pb-4"> IGLESIA CRISTIANA <br /> DIOS ESTÁ FORMANDO UN PUEBLO </p>
            <button className="cta text-white">
                <span>Ver ubicación</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
            </div></a>
            
            {/* <Modal buttonText={"¡Confirmar asistencia!"} textColor={"text-black"}/> */}

        </section>
    );
}
