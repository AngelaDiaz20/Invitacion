import Image from "next/image";

export default function Location() {

    return (
        <section className="bg-[url('/assets/img/TEXTO-01.png')] bg-no-repeat bg-contain bg-left max-w-[500px] m-auto flex justify-end">
           <a href="https://www.google.com/maps/dir/4.6923776,-74.0950016/Dg.+42a+%2322-40,+Bogot%C3%A1/@4.664094,-74.1267994,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8e3f9a2cf1422631:0xb6c529e6b709a63!2m2!1d-74.0745173!2d4.6333755?entry=ttu" target="_blank" className="w-[75%]">
           <Image
                src="/assets/img/celular_ubicacion.png"
                alt="Ubicación"
                width={100}
                height={100}
                className="w-full max-w-[800px] m-auto"
            />
                {/* <img src="/assets/img/INVITACION MATRIMONIO (2).png" alt="" /> */}
            </a> 
        </section>
    );
}
