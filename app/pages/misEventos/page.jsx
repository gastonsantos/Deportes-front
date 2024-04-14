"use client"
import { obtenerEventoPorIdUsuario } from "@/services/evento/api";
import { NavBar } from "@/components/navBar/navBar";
import MisEventosCard from "@/components/misEventos/misEventos";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Footer from "@/components/landing/footer";

const Misventos = () => {

    const [evento, setEvento] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await obtenerEventoPorIdUsuario();
                if (response) {
                    console.log("obtengoEventos", response);
                    const data = response
                    setEvento(data);
                }
            } catch (error) {
                console.error("Error al obtener deportes:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className=" items-center justify-center">
            <NavBar />


            {
                evento.length != 0 ? (

                    <div className="grid grid-cols-1 gap-x-10 gap-y-14">
                        {evento.map((evento) => (
                            <MisEventosCard key={evento.idEvento} evento={evento} />
                        ))}
                    </div>
                ) : (


                    <>


                        <div class="flex flex-col items-center justify-center h-screen -mt-10">
                           
                            <div class="relative">
                                <Image
                                    src="/images/no-eventos.jpg"
                                    alt="Image Description"
                                    width={600}
                                    height={600}
                                    className="shadow-sm rounded-xl object-cover grayscale"
                                />
                                <button class="absolute mb-4 bottom-0 left-1/2 transform -translate-x-1/2 bg-emerald-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
                                    <svg class="w-5 h-5 fill-[#f0f0f0] mr-1" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                                    </svg>
                                    <span>Crear evento</span>
                                </button>
                            </div>
                        </div>



                    </>

                )}

<Footer/>

        </div>




    );
}

export default Misventos

