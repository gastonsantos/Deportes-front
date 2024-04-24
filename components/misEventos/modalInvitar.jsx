import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { traerTodosLosUsuariosParaInvitacion } from "@/services/usuario/api";
import Swal from 'sweetalert2';
import { enviarNotificacion } from "@/services/notificaciones/api";
export default function ModalInvitar({ setShowModalInvitar, toggleCancelarEvento, evento }) {
    const router = useRouter();

    const [usuarios, setUsuarios] = useState([]);
    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [usuarioInvitado, setUsuarioInvitado] = useState();
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await traerTodosLosUsuariosParaInvitacion();
                if (response) {
                    console.log("obtengoUsuarios", response);
                    setUsuarios(response); // Almacena todos los usuarios en el estado
                    setUsuariosFiltrados(response); // Almacena todos los usuarios en el estado de filtrado inicial
                }
            } catch (error) {
                console.error("Error al obtener usuarios:", error);
            }
        };

        fetchData();
    }, []);

    const handleBusquedaChange = (event) => {
        const valorBusqueda = event.target.value;
        setBusqueda(valorBusqueda);
        // Filtra los usuarios basados en el email
        const usuariosFiltrados = usuarios.filter(usuario =>
            usuario.email.toLowerCase().includes(valorBusqueda.toLowerCase())
        );
        setUsuariosFiltrados(usuariosFiltrados);
    };

    const handleEnviarNotificacion = async (id) => {


        const data = {
            idUsuarioQueInvita: localStorage.getItem("id"),
            idUsuarioInvitado: id,
            idEvento: evento.idEvento
        }

        try {
            const response = await enviarNotificacion(data);
            if (response) {
                Swal.fire({
                    title: '¡Se ah enviado la Notificación',
                    text: 'Se ha enviado la notificación',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: '#007bff', // Adjust color as needed

                }).then(() => {


                });

            }
        } catch (error) {
            if (error.response) {
                console.log('Me da error', error.response.status);
                switch (error.response.status) {
                    case 423:
                        setError('Ya le enviaste una notificación, espera a que responda!');

                        break;
                    case 400:
                        setError('No podes invitarte una invitación a tu propio evento');

                        break;
                    default:
                        setError('Error en la petición al servidor');
                }
            } else {

                console.log('Me da error', error.response.status);
                setError('Error en la petición al servidor');
            }

        }
    }

    return (
        <>
            <div className="justify-center items-center flex fixed inset-0 z-50 ">
                <div className="text-white bg-gray-500 relative flex flex-col w-96 h-64 ">
                    <div className=" rounded relative p-2 flex-auto items-center justify-center bg-gray-900">
                        <div className="text-white text-2xl font-semibold">
                            <h2 className="">Buscá e invitá a tus amigos</h2>
                        </div>
                        <form className="max-w-md mx-auto mt-8">
                            <div className="flex">
                                <div className="relative w-full">
                                    <input
                                        type="search"
                                        className="block p-2.5 w-full z-20 font-semibold text-white bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Buscá a tus amigos por email..."
                                        required
                                        value={busqueda}
                                        onChange={handleBusquedaChange} // Actualiza el estado de la búsqueda
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
                        <div className="flex flex-col max-h-48 w-full overflow-x-auto text-sm text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500">
                            {busqueda.length > 0 ? (
                                usuariosFiltrados.map(usuario => (
                                    <div key={usuario.id} className="p-2 border-b border-gray-300">
                                        <span>{usuario.email}</span>
                                        <button
                                            className='bg-gray-600 text-white rounded p-2 ml-2 hover:bg-gray-400'

                                            onClick={() => {
                                                handleEnviarNotificacion(usuario.id)
                                            }
                                            }
                                        >

                                            <svg class="w-[15px] h-[15px] fill-[#e9e7e7] " viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                                                <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>

                                            </svg>
                                            </button>
                                    </div>
                                ))
                            ) : (
                                <></>

                            )}
                        </div>
                        <div className='flex justify-end mt-2'>
                            <button
                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                onClick={() => setShowModalInvitar(false)}
                            >
                                Cancelar
                            </button>
                        </div>

                        {error && (<div class="text-sm text-red-700 mt-2">{error}
                        </div>)}
                    </div>


                </div>
            </div>
        </>
    );
}
