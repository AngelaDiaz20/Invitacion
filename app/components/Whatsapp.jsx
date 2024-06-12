"use client";
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Card,
} from "@material-tailwind/react";

import { FaRegCalendarCheck, FaRegImages, FaMusic } from "react-icons/fa";

export default function Whatsapp() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <section>
            <div className="bg-[url('/assets/img/logo_whatsapp.png')] bg-no-repeat bg-contain bg-right h-[250px] max-w-[500px] mx-auto flex flex-col justify-around text-left card-wapp">
                <h3 className="max-w-[50%]"> Envíanos las fotos que más te gustaron al grupo de WhatsApp</h3>
                <button className="cta" onClick={handleOpen}>
                    <span>Ingresar al grupo</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                overlayProps={{
                    className: "fixed inset-0 bg-black bg-opacity-50",
                }}
                className="bg-slate-900 p-3 w-[90%] max-w-[600px] m-auto"
            >
                <DialogHeader>¡Lo que puedes hacer en este grupo!</DialogHeader>
                <DialogBody>
                    <Card className="w-[100%] overflow-hidden rounded-md bg-slate-900">
                        <List className="my-2 p-0">
                            <ListItem className="rounded-none py-1.5 px-3 text-sm font-normal text-white">
                                <ListItemPrefix>
                                    <FaRegCalendarCheck />
                                </ListItemPrefix>
                                Confirmar asistencia al evento
                                <ListItemSuffix>
                                </ListItemSuffix>
                            </ListItem>
                            <ListItem className="rounded-none py-1.5 px-3 text-sm font-normal text-white">
                                <ListItemPrefix>
                                    <FaRegImages />
                                </ListItemPrefix>
                                Compartir los mejores recuerdos capturados en fotos y/o vídeos
                            </ListItem>
                            <ListItem className="rounded-none py-1.5 px-3 text-sm font-normal text-white">
                                <ListItemPrefix>
                                    <FaMusic />
                                </ListItemPrefix>
                                Sugerir una canción para el evento
                            </ListItem>
                        </List>
                    </Card>
                </DialogBody>
                <DialogFooter>
                    <a href="https://wa.link/mqterf" target="_blank">
                    <Button className="flex items-center gap-2 bg-[#3E4D45]" onClick={handleOpen}>
                        ¡Lo tengo!{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button></a>
                </DialogFooter>
            </Dialog>
        </section>
    );
}
