"use client";
import { obtenerEventoQueParticipo } from "@/services/evento/api";
import { NavBar } from "@/components/navBar/navBar";
import MisParticipacionesCard from "@/components/misParticipaciones/misParticipaciones";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import Footer from "@/components/landing/footer";
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import Cookies from 'js-cookie';
import useAuth from '@/services/customHooks/api'
const Misventos = () => {
    const [evento, setEvento] = useState([]);
    // const [isAuthorized, setIsAuthorized] = useState(false);
    //const [checkedAuth, setCheckedAuth] = useState(false);
    const { isAuthorized, checkedAuth } = useAuth();


    useEffect(() => {
      

        if (isAuthorized) {
            const fetchData = async () => {
                try {
                    const response = await obtenerEventoQueParticipo();
                    if (response) {
                        const data = response;
                        if (data) {
                            setEvento(data);
                        }
                        console.log("EVENTOSSS", data.dtoUsuarios);
                    }
                } catch (error) {
                    console.error("Error al obtener deportes:", error);
                }
            };
            fetchData();
        }
    }, [isAuthorized]);

    const handleDelete = (eventId) => {
        setEvento(evento.filter(evento => evento.idEvento !== eventId));
    };


    if (!checkedAuth) {
        return null;
    }

    if (!isAuthorized) {
        return <NoAutorizado />;
    }


    return (
        <div className="items-center justify-center">
            <NavBar />
            <h2>Mis Participaciones</h2>

            {evento.length !== 0 ? (
                <div className="grid grid-cols-1 gap-x-10 gap-y-14">
                    {evento.map((evento) => (
                        <MisParticipacionesCard
                            key={evento.idEvento}
                            evento={evento}
                            onDelete={handleDelete}
                            actualizar={() => {
                                if (isAuthorized) {
                                    fetchData();
                                }
                            }}
                        />
                    ))}
                    <div className="flex-1"></div>
                </div>
            ) : (
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
            )}

            <Footer />
        </div>
    );
};

export default Misventos;
