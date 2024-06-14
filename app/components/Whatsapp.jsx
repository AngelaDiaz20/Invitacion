"use client";

import Modal from "../ui/Modal";



export default function Whatsapp() {
    

    return (
        <section>
            <div className="bg-[url('/assets/img/logo_whatsapp.png')] bg-no-repeat bg-contain bg-right h-[250px] max-w-[500px] mx-auto flex flex-col justify-around text-left card-wapp">
                <h3 className="max-w-[50%]"> Envíanos las fotos que más te gustaron al grupo de WhatsApp</h3>
                <Modal buttonText={"Ingresar al grupo"}/>
            </div>
        </section>
    );
}
