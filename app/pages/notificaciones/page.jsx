"use client"
import Footer from "@/components/landing/footer";
import { NavBar } from "@/components/navBar/navBar";
import { aceptarNotificacion, rechazarNotificacion, traerTodasLasNotificaciones } from "@/services/notificaciones/api";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
const Notificaciones = () => {
    const router = useRouter();
    const [notificaciones, setNotificaciones] = useState([]);
    const [cantidad, setCantidad] = useState();



    const fetchData = async () => {
        try {
            const response = await traerTodasLasNotificaciones();
            if (response) {
                const data = response
                console.log("Notificaciones", data);
                setNotificaciones(data);
            }
        } catch (error) {
            console.error("Error al obtener las notificaciones:", error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    const handleAceptar = async (idParticipantes) => {
        const data = {
            idUsuario: idParticipantes
        }
        try {
            const response = await aceptarNotificacion(data)
            if (response) {
                Swal.fire({
                    title: '¡Se acepto la notificación',
                    text: 'Te has unido al evento!',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: '#007bff', // Adjust color as needed
                }).then(() => {
                    fetchData();;

                });
            }
        } catch (error) {
            Swal.fire({
                title: 'No se pudo aceptar la notificación',
                text: 'Puedes intentarlo mas tarde',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff'
            });
        }
    }
    const handleRechazar = async (idParticipantes) => {
        const data = {
            idUsuario: idParticipantes
        }

        try {
            const response = await rechazarNotificacion(data)
            if (response) {
                Swal.fire({
                    title: '¡Se rechazó satisfactoriamente la invitación',
                    text: 'Has rechazado el evento',
                    icon: 'warning',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: '#007bff', // Adjust color as needed
                }).then(() => {
                    fetchData();;

                });
            }
        } catch (error) {
            Swal.fire({
                title: 'No se pudo aceptar la notificación',
                text: 'Puedes intentarlo mas tarde',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff'
            });
        }



    }
    return (
        <div className=" items-center justify-center">
            <NavBar />
            <div className="sm:bg-[#dde7ee]">
                <div className="sm:mx-auto sm:w-[45rem] sm:bg-[#ffffff] sm:mt-6 sm:p-10 text-sm ">
                    <section className="header m-5">
                        <div className="container flex justify-between">
                            <p className="text-xl sm:text-2xl text-gray-700 font-bold sm:font-extrabold">Invitaciones <span className="px-4 ml-2 rounded-lg text-white bg-blue-900 sm:text-xl">{notificaciones.length}</span></p>
                            <p className="hover:text-[#0a317b] cursor-pointer text-[#5e6778]">Borrar todas</p>
                        </div>
                    </section>
                    {notificaciones.map((notificaciones) => (
                        <section className="messages m-2">
                            {notificaciones.invitaEsDuenio ? (
                                <div className="profile_pic rounded-lg flex justify-start items-start gap-4 m-2 p-4 bg-[#f7fafd]">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Mark-Webber" className="pl-2 w-[13%] sm:w-[8%] rounded-full" />
                                    <div className="notification-msg hover:bg-gray-200">
                                        <div className="msg-1">
                                            <p className="text-gray-500 hover:text-[#0a317b] cursor-pointer">
                                                <b>{notificaciones.nombreUsuarioInvito} {notificaciones.apellidoUsuarioInvito}</b>
                                                <span className="text-gray-700"> &nbsp;
                                                    te invita a jugar {notificaciones.nombreDeporte}
                                                </span>
                                                <span className="text-[#5e6778] font-semibold hover:text-[#0a317b] cursor-pointer">
                                                    en {notificaciones.provincia}, {notificaciones.localidad} Direccion: {notificaciones.direccion} {notificaciones.numero} el día {notificaciones.fecha} a las {notificaciones.hora}
                                                </span>

                                                <span className="inline-flex items-center justify-center rounded-full bg-red-500 border-red-500 border-4"></span>
                                                <div className='inline-flex items-center justify-center'>
                                                    <button className='text-white bg-green-700 rounded p-1 mr-1 mt-1'
                                                        onClick={() => {
                                                            handleAceptar(notificaciones.idParticipantes)
                                                        }}

                                                    >Aceptar</button>
                                                    <button className='text-white bg-red-700 rounded p-1 mt-1'
                                                        onClick={() => {
                                                            handleRechazar(notificaciones.idParticipantes)
                                                        }}
                                                    >Rechazar</button>
                                                </div>
                                            </p>
                                            <p className="text-[#939dae]"></p>


                                            <Link href={`/pages/deportes/${notificaciones.idEvento}`} className="flex justify-center">
                                                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Ver evento</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="profile_pic rounded-lg flex justify-start items-start gap-4 m-2 p-4 bg-[#f7fafd]">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Mark-Webber" className="pl-2 w-[13%] sm:w-[8%] rounded-full" />
                                    <div className="notification-msg hover:bg-gray-200">
                                        <div className="msg-1">
                                            <p className="text-gray-500 hover:bg-gray-200 cursor-pointer">
                                                <b>{notificaciones.nombreUsuarioInvito} {notificaciones.apellidoUsuarioInvito}</b>
                                                <span className="text-gray-700"> &nbsp;
                                                    quiere unirse al partido  {notificaciones.nombreDeporte}
                                                </span>
                                                <span className="text-[#5e6778] font-semibold hover:text-[#0a317b] cursor-pointer">
                                                    en {notificaciones.provincia}, {notificaciones.localidad} Direccion: {notificaciones.direccion} {notificaciones.numero} el día {notificaciones.fecha} a las {notificaciones.hora}
                                                </span>
                                                <span className="inline-flex items-center justify-center rounded-full bg-red-500 border-red-500 border-4"></span>
                                            </p>
                                            <p className="text-[#939dae]"></p>


                                            <Link href={`/pages/deportes/${notificaciones.idEvento}`} className="flex justify-center">
                                                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Ver perfil</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                         
                            )}

                        </section>




                    ))}


                </div>


            </div>
            <Footer />

        </div>




    );
}

export default Notificaciones

