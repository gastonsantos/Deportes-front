"use client"
import { NavBar } from "@/components/navBar/navBar";
import Image from "next/image";
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Footer from "@/components/landing/footer";
import PerfilesStats from "@/components/invitacionesPerfil/PerfilesStats";
import { obtenerFichaDeportistaPorId, obtengoPerfilFutbolPorId, ObtenerUsuarioParaPerfilInvitacion } from "@/services/login/perfiles/api";
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import useAuth from '@/services/customHooks/api';

export default function InvitacionPerfilCard() {
    const [usuario, setUsuario] = useState();
    const [fichaDeportista, setFichaDeportista] = useState();
    const [fichaFutbol, setFichaFutbol] = useState();
    //const [isAuthorized, setIsAuthorized] = useState(false);
    //const [checkedAuth, setCheckedAuth] = useState(false);
 
 
    useEffect(() => {
     
        const fetchData = async () => {
            try {

                const response = await ObtenerUsuarioParaPerfilInvitacion(localStorage.getItem("idQueMandaSol"));
                if (response) {


                    const data = response
                    setUsuario(data);

                }
            } catch (error) {
                console.error("Error al obtener deportes:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await obtenerFichaDeportistaPorId(localStorage.getItem("idQueMandaSol"));
                if (response) {
                    //console.log("que trae la respuesta", response);

                    const data = response

                    setFichaDeportista(data); // Almacena los datos
                }
            } catch (error) {
                console.error("Error al obtener Deportista:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await obtengoPerfilFutbolPorId(localStorage.getItem("idQueMandaSol"));
                if (response) {

                    const data = response

                    setFichaFutbol(data);
                }
            } catch (error) {
                console.error("Error al obtener deportes:", error);
            }
        };

        fetchData();
    }, []);

    const player = {
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        id: usuario ? usuario.id : "",
        name: usuario ? usuario.nombre + " " + usuario.apellido : " ",
        edad: fichaDeportista ? fichaDeportista.edad : " ",
        altura: fichaDeportista ? fichaDeportista.altura : "",
        pieHabil: fichaDeportista ? fichaDeportista.pieHabil : "",
        manoHabil: fichaDeportista ? fichaDeportista.manoHabil : "",
        position: fichaDeportista ? fichaDeportista.posicion : "",
        media: fichaFutbol ? fichaFutbol.media : "",
        velocidad: fichaFutbol ? fichaFutbol.velocidad : "",
        resistencia: fichaFutbol ? fichaFutbol.resistencia : "",
        precision: fichaFutbol ? fichaFutbol.precision : "",
        fuerza: fichaFutbol ? fichaFutbol.fuerza : "",
        tecnica: fichaFutbol ? fichaFutbol.tecnica : "",
        agilidad: fichaFutbol ? fichaFutbol.agilidad : "",

        deporte: "Fútbol"

    };



    const { isAuthorized, checkedAuth } = useAuth();

    if (!checkedAuth) {
      return null; 
    }
    
    if (!isAuthorized) {
      return <NoAutorizado />;
    }

    return (
        <div>
            <NavBar />
            <div className="container fluid flex lg:flex items-center justify-center ">
                <div className="flex-1  min-w-96 max-w-96 shadow-md -mt-9">
                    <div className="bg-gray-900 rounded-lg shadow-md p-9 text-white" style={{ backgroundImage: `url('/images/Fondo1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

                        <p className="text-white-500 ml-10 pt-1">Ficha<span> </span> </p>

                        <div className="flex items-center justify-between p-4">

                            <div className="flex items-center p-2">
                                <img src={player.image} alt={player.name} className="w-10 h-10 rounded-full" />
                                <div className="ml-4 ">
                                    <h3 className="text-sm font-medium bg-amber-700 rounded-e-full pl-6 pr-4 pt-1 pb-1">{player.name}</h3>

                                </div>
                            </div>
                            <div className="flex items-center justify-center font-bold text-lg text-white-500 mr-1 bg-amber-700 w-12 h-12 rounded-full -mt-14">{player.media}</div>


                        </div>
                        <div className="grid grid-cols-2 gap-2 p-8 ml-2 flex items-center justify-center -mt-10">
                            <div className="relative mt-1 flex items-center">
                                <Image src="/images/person.png" alt="Imagen del jugador" width={32} height={32} className="mr-2" />
                                <span className="font-bold ">{player.edad}</span>
                            </div>
                            <div className="relative mt-1 flex items-center">
                                <Image src="/images/altura.png" alt="Imagen del jugador" width={32} height={32} className="mr-4" />
                                <span className="font-bold">{player.altura} cm</span>
                            </div>
                            <div className="relative mt-1 flex items-center">
                                <Image src="/images/pie.png" alt="Imagen del jugador" width={32} height={32} className="mr-1" />
                                <span className="font-bold">{player.pieHabil}</span>
                            </div>
                            <div className="relative mt-1 flex items-center">
                                <Image src="/images/hand.png" alt="Imagen del jugador" width={32} height={32} className="mr-2" />
                                <span className="font-bold">{player.manoHabil}</span>
                            </div>
                        </div>
                        <div class="flex gap-0.5 flex items-center justify-center -mt-2">
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                            <svg className="h-8 w-8 shrink-0 fill-amber-400" viewBox="0 0 256 256">
                                <path
                                    d="M239.2 97.4A16.4 16.4.0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4.0 00128 16h0a16.4 16.4.0 00-15.2 10.4L90.4 82.2 31.4 86A16.5 16.5.0 0016.8 97.4 16.8 16.8.0 0022 115.5l45.4 38.4L53.9 207a18.5 18.5.0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1.0 008.7 2.6 16.5 16.5.0 0015.8-20.8l-14.3-58.1L234 115.5A16.8 16.8.0 00239.2 97.4z">
                                </path>
                            </svg>
                        </div>

                        <div className="grid grid-cols-2 gap-4 p-2 ">
                            <div className="relative w-32 h-4">
                                <p className="text-white-600">Velocidad</p>
                                <span className="inline-block w-full bg-white rounded-md relative p-3">
                                    <span style={{ width: `${player.velocidad}%` }} className="absolute top-0 left-0 h-full bg-blue-800 rounded-md">
                                        <span className="text-sm m-2">{player.velocidad}</span>
                                    </span>
                                </span>
                            </div>


                            <div className="relative">
                                <p className="text-white-600">Resistencia</p>
                                <span className="inline-block w-full  bg-white rounded-md relative p-3">
                                    <span style={{ width: `${player.resistencia}%` }} className="absolute top-0 left-0 h-full bg-blue-800 rounded-md">
                                        <span className="text-sm m-2">{player.resistencia}</span>
                                    </span>
                                </span>
                            </div>

                            <div className="relative">
                                <p className="text-white-600">Precision</p>
                                <span className="inline-block w-full bg-white rounded-md relative p-3">
                                    <span style={{ width: `${player.precision}%` }} className="absolute top-0 left-0 h-full bg-blue-800 rounded-md">
                                        <span className="text-sm m-2">{player.precision}</span>
                                    </span>
                                </span>
                            </div>
                            <div className="relative">
                                <p className="text-white-600">Fuerza</p>
                                <span className="inline-block w-full  bg-white rounded-md relative p-3">
                                    <span style={{ width: `${player.fuerza}%` }} className="absolute top-0 left-0 h-full bg-blue-800 rounded-md">
                                        <span className="text-sm m-2">{player.fuerza}</span>
                                    </span>
                                </span>
                            </div>
                            <div className="relative">
                                <p className="text-white-600">Tecnica</p>
                                <span className="inline-block w-full bg-white rounded-md relative p-3">
                                    <span style={{ width: `${player.tecnica}%` }} className="absolute top-0 left-0 h-full bg-blue-800 rounded-md">
                                        <span className="text-sm m-2">{player.tecnica}</span>
                                    </span>
                                </span>
                            </div>
                            <div className="relative">
                                <p className="text-white-600">Agilidad</p>
                                <span className="inline-block w-full  bg-white rounded-md relative p-3">
                                    <span style={{ width: `${player.agilidad}%` }} className="absolute top-0 left-0 h-full bg-blue-800 rounded-md">
                                        <span className="text-sm m-2">{player.agilidad}</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>


                <PerfilesStats statsFutbol={fichaFutbol} />

            </div>
            <Footer />
        </div>



    );
}