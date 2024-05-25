"use client"
import { useRouter } from 'next/navigation';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import FormularioModificar from "@/components/misEventos/formModificar";
import ModalConfirmar from "@/components/misEventos/modalConfirmar";
import Participantes from "@/components/misEventos/participantes";
import ModalInvitar from "@/components/misEventos/modalInvitar";
import { cancelarEvento } from '@/services/evento/api';
import formatFecha from '@/services/customHooks/formatFecha';
const MisEventosCard = ({ evento, onDelete, actualizar }) => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [showModalInvitar, setShowModalInvitar] = useState(false);
    const { idEvento, nombre, imagen, nombreDep,nombreDuenio, idDeporte, cantJugadores, cantJugadoresAnotados, provincia, localidad, direccion, numero, fecha, hora } = evento;
    //const [fechaFormateada, setFechaFormateada] = useState("");
    const [open, setOpen] = useState(false);
    const [btnCrear, setBtnCrear] = useState(true);
    const [error, setError] = useState('');
    const toggleOpen = () => setOpen((cur) => !cur);
    const [formData, setFormData] = useState({
        id: evento.idEvento

    });

    const toggleCancelarEvento = async () => {


        try {
            const response = await cancelarEvento(formData);
            if (response) {
                onDelete(evento.idEvento);
            }
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 404:
                        setError('No se pudo cancelar el evento');
                        break;
                    default:
                        setError('Error en la petición al servidor');
                }
            } else {

                setError('Error en la petición al servidor');
            }
        }

    }
    const fechaFormateada  = formatFecha(evento);
 
    return (
        <>


            <div className="md:flex lg:flex ">
                <div className="flex-1 w-1/2 md:min-w-96 min-w-72 m-4 relative bg-white border shadow-sm rounded-xl transform transition duration-300 hover:translate-x-4 overflow-hidden ">
                    <div className=" image-container" style={{ width: '144px', height: '244px' }}>
                        <Image
                            src={imagen}
                            alt="Image Description"
                            layout="fill" // Use "fill" for responsive image scaling
                            className="border shadow-sm rounded-xl object-cover" // Maintain aspect ratio
                        />

                    </div>
                    <div className="absolute top-0 start-0 end-0 bg-neutral-700 shadow-sm rounded-xl rounded-b-none opacity-75">
                        <div className="p-4 md:p-5">
                            <h3 className="text-lg font-bold text-white">
                                {nombreDep}
                            </h3>
                            <h3 className="text-lg text-white">
                                {nombre}
                            </h3>
                            <div className="mt-2 flex items-center">
                                        <span className="m-1">jugadores {cantJugadores} &bull;</span>
                                        {(nombreDep =="Basquet" || nombreDep =="Basquet 2v2") &&
                                            (
                                                <span>🏀</span>
                                            )
                                        }
                                          {(nombreDep =="Paddle single" || nombreDep =="Paddle Dobles") &&
                                            (
                                                <span>🥎</span>
                                            )
                                        }
                                         {(nombreDep =="Futbol 5" || nombreDep =="Futbol 11") &&
                                            (
                                                <span>⚽</span>
                                            )
                                        }
                                         {(nombreDep =="Tenis Single" || nombreDep =="Tenis Dobles") &&
                                        (
                                            <span>🎾</span>
                                        )
                                    }
                                    
                                    </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#bebbbb] mr-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" clipRule="evenodd"></path>
                                </svg>

                                <span className="text-white">{provincia}, {localidad} </span>
                            </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#fb4141] mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>

                                </svg>
                                <span className="text-white"> {direccion} {numero} </span>
                            </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#0068b8] mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>

                                </svg>
                                <span className="text-white"> {fechaFormateada} </span>
                            </div>
                            <div className="mt-1 flex item-center">
                                <svg className="w-[20px] h-[20px] fill-[#018322] mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>

                                </svg>
                                <span className="text-white"> {hora} </span>
                            </div>
                            <div className="mt-1 flex item-center ">
                                <svg className="w-[20px] h-[20px] fill-[#fb9118] mr-2" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path>

                                </svg>
                                <span className="text-white"> {cantJugadoresAnotados} / {cantJugadores}</span>
                            </div>

                        </div>
                    </div >
                    <div className="mt-10 flex item-center mb-4">
                        <button onClick={toggleOpen} className="mb-3 ml-3 relative bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded-full rounded inline-flex items-center ">

                            <svg class="w-[15px] h-[15px] fill-[#dbdbdb] mr-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"></path>

                            </svg>
                            {
                                open ? (
                                    <span className='hidden sm:block'>Cancelar modificación</span>

                                ) : (
                                    <span className='hidden sm:block'>Modificar evento</span>
                                )
                            }


                        </button>
                        <button onClick={() => setShowModal(true)} className="mb-3 ml-3 relative bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full  rounded inline-flex items-center">

                            <svg class="w-[15px] h-[15px] fill-[#dbdbdb] mr-1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                                <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path>

                            </svg>
                            <span className='hidden sm:block'>Cancelar evento</span>
                        </button>

                        {cantJugadoresAnotados < cantJugadores && (

                            <button onClick={() => { setShowModalInvitar(true), setBtnCrear(false) }}
                                className="mb-3 ml-3 ml-auto mr-2 relative bg-orange-300 hover:bg-orange-500 text-white font-bold py-1 px-2 rounded-full  rounded inline-flex items-center">

                                <svg class="w-[20px] h-[20px] fill-[#e9e7e7]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>

                                </svg>


                            </button>
                        )}

                    </div>
                    {error && (
                        <div className="absolute mb-5 text-red" >
                            <label htmlFor="" className="text-red-500">{error}</label>
                        </div>
                    )}
                    {cantJugadoresAnotados >= cantJugadores && (
                        <div class="absolute top-5 -right-5 ">
                            <div class="w-56 h-8 absolute top-4 -right-8">
                                <div
                                    class="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                                    LLENO</div>
                            </div>
                        </div>
                    )}     
                </div>
                <div className="flex-1">
                    {
                        open ? (
                            <FormularioModificar evento={evento} />
                        ):( <Participantes duenio={nombreDuenio} evento={evento.dtoUsuarios} actualizar={actualizar} />)
                    }
                </div>
                
            </div>
            {showModal ? (
                <ModalConfirmar
                    setShowModal={setShowModal}
                    toggleCancelarEvento={toggleCancelarEvento}
                />
            ) : null}
            {showModalInvitar ? (
                <ModalInvitar
                    setShowModalInvitar={setShowModalInvitar}
                    toggleCancelarEvento={toggleCancelarEvento}
                    evento={evento}
                />
            ) : null}




        </>





    );
}

export default MisEventosCard;