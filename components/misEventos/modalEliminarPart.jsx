import React from "react";
import { useRouter } from 'next/navigation';
export default function ModalEliminarParticipante({ setShowModalEliminar, handleRechazar, idParticipante, actualizar }) {
    const router = useRouter();
    return (
        <>


            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="absolute w-auto my-6 mx-auto max-w-3xl ">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-white bg-gray-900 outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-3xl font-semibold ">
                                Eliminar participante del evento
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModalEliminar(false)}
                            >
                                <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4  text-lg leading-relaxed">
                                ¿Estás seguro que deseas eliminarlo del evento?
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className=" text-white active:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                onClick={() => setShowModalEliminar(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 "
                                type="button"
                                onClick={() => {
                                    setShowModalEliminar(false);
                                    handleRechazar(idParticipante);
                                    actualizar(); 
                                }}

                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>


        </>
    );
}