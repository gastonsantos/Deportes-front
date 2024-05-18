"use client"
import Footer from "@/components/landing/footer";
import { NavBar } from "@/components/navBar/navBar";
import { aceptarNotificacion, rechazarNotificacion, traerTodasLasNotificaciones } from "@/services/notificaciones/api";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import NotificacionesCard from "@/components/notificaciones/notificacionCard"
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import useAuth from '@/services/customHooks/api';

const Notificaciones = () => {
    const router = useRouter();
    const [notificaciones, setNotificaciones] = useState([]);
    const [cantidad, setCantidad] = useState();
    //const [isAuthorized, setIsAuthorized] = useState(false);
    //const [checkedAuth, setCheckedAuth] = useState(false);



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

    const { isAuthorized, checkedAuth } = useAuth();

    if (!checkedAuth) {
      return null; 
    }
    
    if (!isAuthorized) {
      return <NoAutorizado />;
    }
    
    const handleAceptar = async (idParticipantes) => {
        const data = {
            idUsuario: idParticipantes
        }
        try {
            const response = await aceptarNotificacion(data)
            if (response == 200) {
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
                title: 'No se pudo aceptar la invitación',
                text: error.response.data.Message,
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
                title: 'No se pudo rechazar la invita',
                text: 'Puedes intentarlo mas tarde',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff'
            });
        }
    }
    return (
        <div className="items-center justify-center bg-black">
            <NavBar />
            <div className="w-full h-full py-10 flex flex-col gap-4 items-center justify-center bg-black dark:bg-black">
                <div className="sm:mx-auto sm:w-[45rem]  sm:mt-6 sm:p-10 text-sm bg-black">
                    <section className="header m-5">
                        <div className="container flex justify-between">
                            <p className="text-xl sm:text-2xl text-gray-200 font-bold sm:font-extrabold">Invitaciones <span className="px-4 ml-2 rounded-lg text-white bg-blue-900 sm:text-xl">{notificaciones.length}</span></p>
                            <p className="hover:text-[#0a317b] cursor-pointer text-[#5e6778]"></p>
                        </div>
                    </section>
                    {notificaciones.map((notificaciones) => (

                        <NotificacionesCard key={notificaciones.id} notificaciones={notificaciones} aceptar={handleAceptar} rechazar={handleRechazar} />


                    ))}

                </div>


            </div>
            <Footer />

        </div>




    );
}

export default Notificaciones

