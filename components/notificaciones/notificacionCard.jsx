"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotifiacionCard = ({ notificaciones , aceptar, rechazar}) => {
    const [fechaFormateada, setFechaFormateada] = useState("");
    const router = useRouter();
    useEffect(() => {
        if (notificaciones && notificaciones.fecha) {
            const fecha = new Date(notificaciones.fecha);
            const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' }; // Asegurarse de que las opciones sean del tipo correcto
            const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
            setFechaFormateada(fechaFormateada);
        }
    }, [notificaciones]);
    const idAlLocalStorage = async (idQueMandaSolicitud) => {
        localStorage.setItem("idQueMandaSol", idQueMandaSolicitud)
        router.push("/pages/notificaciones/invitacionPerfil");
    }
    if (!notificaciones || notificaciones.length === 0) {
        return <p>No hay notificaciones</p>;
    }
    return (

        <section className="" key={notificaciones.id}>
            {notificaciones.invitaEsDuenio ? (
                <div className="sm:w-[60%] md:w-[100%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center mb-2 relative">
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTExMTEzODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="profile" class="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-sky-700/40 rounded-full" />
                    <div className="w-[80%] flex flex-col gap-1">
                        <div className="text-lg font-semibold font-serif text-white dark:text-black">{notificaciones.nombreUsuarioInvito} {notificaciones.apellidoUsuarioInvito}</div>
                        <p className="text-sm dark:text-gray-600 text-gray-300">Te invita a jugar el partido  {notificaciones.nombreDeporte}  en {notificaciones.provincia}, {notificaciones.localidad} Direccion: {notificaciones.direccion} {notificaciones.numero} el día {fechaFormateada} a las {notificaciones.hora}</p>
                        <p className="text-[12px] text-semibold dark:text-gray-700 text-gray-400 text-right"></p>
                        <div className='inline-flex items-center justify-center'>
                            <button className='text-white bg-zinc-500 rounded p-1 mr-1 mt-1'
                                onClick={() => {
                                    aceptar(notificaciones.idParticipantes)
                                }}
                            >Aceptar</button>
                            <button className='text-white bg-amber-700 rounded p-1 mt-1'
                                onClick={() => {
                                    rechazar(notificaciones.idParticipantes)
                                }}
                            >Rechazar</button>
                        </div>
                        <Link href={`/pages/deportes/${notificaciones.idEvento}`} className="absolute top-0 right-0 mt-2 mr-2" title="Ver evento">
                            <svg class="w-[25px] h-[25px] fill-[#383852]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"></path>

                            </svg>
                        </Link>
                    </div>
                </div>

            ) : (
                <div className="sm:w-[60%] md:w-[100%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center mb-2 relative">
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTExMTEzODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="profile" className="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-sky-700/40 rounded-full" />
                    <div className="w-[80%] flex flex-col gap-1">
                        <div className="text-lg font-semibold font-serif text-white dark:text-black">{notificaciones.nombreUsuarioInvito} {notificaciones.apellidoUsuarioInvito}</div>
                        <p className="text-sm dark:text-gray-600 text-gray-300"> Quiere unirse al partido  {notificaciones.nombreDeporte}  en {notificaciones.provincia}, {notificaciones.localidad} Direccion: {notificaciones.direccion} {notificaciones.numero} el día {fechaFormateada} a las {notificaciones.hora}</p>
                        <p className="text-[12px] text-semibold dark:text-gray-700 text-gray-400 text-right"></p>
                        <div className='inline-flex items-center justify-center'>
                            <button className='text-white bg-zinc-500 rounded p-1 mr-1 mt-1'
                                onClick={() => {
                                    aceptar(notificaciones.idParticipantes)
                                }}
                            >Aceptar</button>
                            <button className='text-white bg-amber-700 rounded p-1 mt-1'
                                onClick={() => {
                                    rechazar(notificaciones.idParticipantes)
                                }}
                            >Rechazar</button>
                        </div>
                        <Link href={`/pages/notificaciones/invitacionPerfil`} className="absolute top-0 right-0 mt-2 mr-2" title="Ver perfil">
                            
                            <svg class="w-[25px] h-[25px] fill-[#383852]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" 
                             onClick={() => {
                                idAlLocalStorage(notificaciones.idElQueInvita)
                            }}>

                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>

                            </svg>
                        </Link>
                    </div>
                </div>

            )}

        </section>

    )
}
export default NotifiacionCard;