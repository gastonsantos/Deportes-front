import { Evento } from "@/model/Evento";
import Link from 'next/link'; // Importar Link de next/link
import Image from "next/image";
import React, { useEffect, useState } from 'react';
const SingleDeporte = ({ evento }: { evento: Evento }) => {
    const { idEvento, nombre, imagen, nombreDep, cantJugadores, cantJugadoresAnotados, provincia, localidad, direccion, numero, fecha, hora, idUsusarioDuenio, nombreDuenio } = evento;
    const [fechaFormateada, setFechaFormateada] = useState("");
    useEffect(() => {
        if (evento && evento.fecha) {
            const fecha = new Date(evento.fecha);
            const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' } as const; // Asegurarse de que las opciones sean del tipo correcto
            const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
            setFechaFormateada(fechaFormateada);
        }
    }, [evento]);


    return (
        <div className="transform transition duration-300 hover:scale-105 ">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

            <div className="antialiased text-gray-900  ">
                <div className="bg-transparent min-h-96 min-w-full p-8 flex items-center justify-center overflow-hidden">
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-96 lg:w-96 md:w-1/2 sm:w-1/2 ">
                        {cantJugadoresAnotados >= cantJugadores && (
                            <div className="relative top-2 -right-5 ">
                                <div className="w-56 h-8 absolute top-4 -right-12">
                                    <div
                                        className="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                                        LLENO</div>
                                </div>
                            </div>
                        )}
                        <img className="h-48 w-full object-cover object-end" src={imagen} alt="Home in Countryside" />

                        <div className="p-6">
                            <div className="flex items-baseline">
                                <span
                                    className="inline-block bg-gray-400 text-white py-1 px-2 text-xs rounded-full uppercase font-semibold tracking-wide">
                                    {nombreDep}
                                </span>
                                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">

                                    <div className="mt-2 flex items-center">
                                        <span className="m-1">jugadores {cantJugadores} &bull;</span>
                                        <span>🏀</span>
                                        <span>🥎</span>
                                        <span>🎾</span>
                                        <span>⚽</span>

                                    </div>

                                </div>
                            </div>
                            <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{
                                nombre}</h4>

                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#fb4141] mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>

                                </svg>
                                <span className="">{provincia}, {localidad} </span>
                            </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-#252825] mr-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"></path>

                                </svg>
                                <span> {direccion} {numero} </span>
                            </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#0068b8] mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>

                                </svg>
                                <span> {fechaFormateada} </span>
                            </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#018322] mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>

                                </svg>
                                <span> {hora} </span>
                            </div>
                            <div className="mt-1 flex item-center text-gray-800">
                                <svg className="w-[20px] h-[20px] fill-[#fb9118] mr-2 " viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path>

                                </svg>
                                <span> {cantJugadoresAnotados} / {cantJugadores}</span>
                            </div>
                            <div className="mt-1 mb-1 flex item-center text-gray-800">
                                <span className="font-bold mr-1">Dueño:  </span>
                                <span className=""> {nombreDuenio}</span>
                            </div>
                            <Link href={`/pages/deportes/${idEvento}`} className="flex justify-center">
                                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Ver más</button>
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export { SingleDeporte };
