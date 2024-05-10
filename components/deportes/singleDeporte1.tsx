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
                                        <svg className="w-[20px] h-[20px] fill-[#e49c49]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M86.6 64l85.2 85.2C194.5 121.7 208 86.4 208 48c0-14.7-2-28.9-5.7-42.4C158.6 15 119 35.5 86.6 64zM64 86.6C35.5 119 15 158.6 5.6 202.3C19.1 206 33.3 208 48 208c38.4 0 73.7-13.5 101.3-36.1L64 86.6zM256 0c-7.3 0-14.6 .3-21.8 .9C238 16 240 31.8 240 48c0 47.3-17.1 90.5-45.4 124L256 233.4 425.4 64C380.2 24.2 320.9 0 256 0zM48 240c-16.2 0-32-2-47.1-5.8C.3 241.4 0 248.7 0 256c0 64.9 24.2 124.2 64 169.4L233.4 256 172 194.6C138.5 222.9 95.3 240 48 240zm463.1 37.8c.6-7.2 .9-14.5 .9-21.8c0-64.9-24.2-124.2-64-169.4L278.6 256 340 317.4c33.4-28.3 76.7-45.4 124-45.4c16.2 0 32 2 47.1 5.8zm-4.7 31.9C492.9 306 478.7 304 464 304c-38.4 0-73.7 13.5-101.3 36.1L448 425.4c28.5-32.3 49.1-71.9 58.4-115.7zM340.1 362.7C317.5 390.3 304 425.6 304 464c0 14.7 2 28.9 5.7 42.4C353.4 497 393 476.5 425.4 448l-85.2-85.2zM317.4 340L256 278.6 86.6 448c45.1 39.8 104.4 64 169.4 64c7.3 0 14.6-.3 21.8-.9C274 496 272 480.2 272 464c0-47.3 17.1-90.5 45.4-124z"></path>
                                        </svg>
                                        <svg className="w-[20px] h-[20px] fill-[#000000]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                            <path d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"></path>

                                        </svg>
                                        <svg className="w-[20px] h-[20px] fill-[#f5d847]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                                            <path d="M480 288c-50.1 0-93.6 28.8-114.6 70.8L132.9 126.3l.6-.6 60.1-60.1c87.5-87.5 229.3-87.5 316.8 0c67.1 67.1 82.7 166.3 46.8 248.3C535.8 297.6 509 288 480 288zM113.3 151.9L354.1 392.7c-1.4 7.5-2.1 15.3-2.1 23.3c0 23.2 6.2 44.9 16.9 63.7c-3 .2-6.1 .3-9.2 .3H357c-33.9 0-66.5-13.5-90.5-37.5l-9.8-9.8c-13.1-13.1-34.6-12.4-46.8 1.7L152.2 501c-5.8 6.7-14.2 10.7-23 11s-17.5-3.1-23.8-9.4l-32-32c-6.3-6.3-9.7-14.9-9.4-23.8s4.3-17.2 11-23l66.6-57.7c14-12.2 14.8-33.7 1.7-46.8l-9.8-9.8c-24-24-37.5-56.6-37.5-90.5v-2.7c0-22.8 6.1-44.9 17.3-64.3zM480 320a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>

                                        </svg>

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
                                <svg className="w-[20px] h-[20px] fill-[#fb9118] mr-2" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

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
