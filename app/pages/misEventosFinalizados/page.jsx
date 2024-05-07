"use client"
import { obtenerEventosPorUsuarioFinalizados,obtenerEventosQueParticipoFinalizados } from "@/services/evento/api";
import { NavBar } from "@/components/navBar/navBar";
import MisEventosFinalizadosCard from "@/components/misEventosFinalizados/misEventosFinalizados";
import Participantes from "@/components/misEventos/participantes";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Footer from "@/components/landing/footer";
import Link from 'next/link';
const MisEventosFinalizados = () => {

    const [evento, setEvento] = useState([]);


    const handleDelete = (eventId) => {
        setEvento(evento.filter(evento => evento.idEvento !== eventId));
    };
    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await obtenerEventosPorUsuarioFinalizados();
                if (response) {
                    
                    const data = response
                    if(data){
                        setEvento(data);
                    }
                    console.log("EVENTOS FINALIZADOS", data.dtoUsuarios
                )
                    
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
            <h2>Mis Participaciones</h2>

            {
                evento.length != 0 ? (

                    <div className="grid grid-cols-1 gap-x-10 gap-y-14">
                        {evento.map((evento) => (
                            <MisEventosFinalizadosCard key={evento.idEvento} evento={evento} onDelete={handleDelete} />
                        ))}
                        <div className="flex-1">


                            

                        </div>
                    </div>

                ) : (
                    <>

                        <div className="flex flex-col items-center justify-center h-screen -mt-10">

                            <div className="relative">
                                <h2>No tienes participaciones</h2>
                                <Image
                                    src="/images/no-eventos.jpg"
                                    alt="Image Description"
                                    width={600}
                                    height={600}
                                    className="shadow-sm rounded-xl object-cover grayscale"
                                />

                            </div>
                        </div>



                    </>

                )}

            <Footer />

        </div>




    );
}

export default MisEventosFinalizados

