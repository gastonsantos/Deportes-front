import React from "react";
import { useRouter } from 'next/navigation';
export default function ModalInvitar({ setShowModalInvitar, toggleCancelarEvento }) {
    const router = useRouter();
    return (
        <>


            <div
                className="mb-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >

                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-96 h-80 bg-white outline-none focus:outline-none items-center justify-center">

                    <div className="relative p-2 flex-auto items-center justify-center">
                        <div className="text-gray-700 text-justify justify-center items-center">
                        <h2 className=" ">Buscá e invitá a tus amigos</h2>
                        </div>
                        
                        <form className="max-w-md mx-auto mt-8">
                            <div className="flex">
                                
                                <div className="relative w-96">
                                    <input
                                        type="search"
                                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Buscá a tus amigos por email..."
                                        required
                                        value={""}
                                        onChange={""}
                                    />
                                    <button
                                        type="submit"
                                        className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-gray-700 rounded-e-lg border border-gray-700 hover:bg-blue-gray focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                    >
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                        <span className="sr-only">Buscar</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModalInvitar(false)}
                        >
                            Cancelar
                        </button>

                    </div>
                </div>

            </div>



        </>
    );
}