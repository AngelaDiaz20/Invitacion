import Image from "next/image";
import Modal from "../ui/Modal";

export default function Location() {

    return (
        <section className="m-auto flex justify-center items-center relative location sm:flex-col">
           <a href="https://www.google.com/maps/dir/4.6923776,-74.0950016/Dg.+42a+%2322-40,+Bogot%C3%A1/@4.664094,-74.1267994,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f9a2cf1422631:0xb6c529e6b709a63!2m2!1d-74.0745173!2d4.6333755?entry=ttu" target="_blank">
           <Image
                src="/assets/img/celular_ubicacion.png"
                alt="Ubicación"
                width={100}
                height={100}
                className="w-full max-w-[800px] m-auto"
            /></a>
            <div className="text-white cont-location flex flex-col items-center justify-center p-4"> 
            <p className="text-[15px] sm:text-[15px] font-bold pb-4"> IGLESIA CRISTIANA <br /> DIOS ESTÁ FORMANDO UN PUEBLO </p>
            <button className="cta text-white">
                <span>Ver ubicación</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
            </div>
            
            {/* <Modal buttonText={"¡Confirmar asistencia!"} textColor={"text-black"}/> */}

        </section>
    );
}
