import React, { useEffect, useState } from 'react';
import { Card, Typography, CardBody } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { rechazarNotificacion } from "@/services/notificaciones/api";
import ModalEliminarParticipante from "@/components/misEventos/modalEliminarPart";
const Participantes = ({ duenio, evento,actualizar }) => {
    const router = useRouter();
    const [showModalEliminar, setShowModalEliminar] = useState(false);
    const { id, apellido, nombre, apodo, email, idParticipante } = evento;
    const [formData, setFormData] = useState({
        id: id,
        nombre: nombre,
        apellido: apellido,
        apodo: apodo,
        email: email,
        idParticipante: idParticipante
    });

    useEffect(() => {
        if (evento) {
            setFormData(evento);
        }
    }, [evento]);

    const idAlLocalStorage = async (idQueMandaSolicitud) => {
        localStorage.setItem("idQueMandaSol", idQueMandaSolicitud)
        router.push("/pages/notificaciones/invitacionPerfil");
    }
    const handleRechazar = async (idParticipantes) => {
        const data = {
            idUsuario: idParticipantes
        }


        try {
            const response = await rechazarNotificacion(data)
            if (response) {
                Swal.fire({
                    title: '¡Se elimino el usuario',
                    text: 'Has rechazado el usuario',
                    icon: 'warning',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: '#007bff', // Adjust color as needed
                }).then(() => {
                    actualizar();

                });
            }
        } catch (error) {
            Swal.fire({
                title: 'No se pudo eliminar el usuario',
                text: 'Puedes intentarlo mas tarde',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff'
            });
        }
    }
    return (
        <div className="md:w-1/2 md:min-w-96 w-72 bg-white rounded-xl mt-4 ml-4 text-justify ml-2">
            <Card className="">
                <CardBody>
                    <Typography>
                        <p>Participantes: </p>
                        <div className='font-bold'>{duenio}</div>
                        {evento.map((evento) => (
                            <div key={evento.id}>{evento.nombre} {evento.apellido}
                                <button className="mt-1 relative font-bold py-2 px-4 rounded-full rounded inline-flex items-center "
                                    onClick={() => {
                                        idAlLocalStorage(evento.id)
                                    }}>

                                    <svg className="w-[15px] h-[15px] fill-[#242323]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M0 96l576 0c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm0 32V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128H0zM64 405.3c0-29.5 23.9-53.3 53.3-53.3H234.7c29.5 0 53.3 23.9 53.3 53.3c0 5.9-4.8 10.7-10.7 10.7H74.7c-5.9 0-10.7-4.8-10.7-10.7zM176 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm176 16c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16z"></path>

                                    </svg>
                                </button>
                                <button className="mt-1 relative font-bold py-1 px-2 rounded-full rounded inline-flex items-center "
                                    onClick={() => setShowModalEliminar(true)}
                                >

                                    <svg class="w-[16px] h-[16px] fill-[#bd0000]" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                                        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L353.3 251.6C407.9 237 448 187.2 448 128C448 57.3 390.7 0 320 0C250.2 0 193.5 55.8 192 125.2L38.8 5.1zM264.3 304.3C170.5 309.4 96 387.2 96 482.3c0 16.4 13.3 29.7 29.7 29.7H514.3c3.9 0 7.6-.7 11-2.1l-261-205.6z"></path>

                                    </svg>
                                </button>
                                {showModalEliminar ? (
                                    <ModalEliminarParticipante
                                        setShowModalEliminar={setShowModalEliminar}
                                        handleRechazar={handleRechazar}
                                        idParticipante={evento.idParticipante}
                                        actualizar={actualizar}
                                        nombre= {evento.nombre}
                                        apellido = {evento.apellido}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </Typography>
                </CardBody>
            </Card>

        </div>
    );
};

export default Participantes;
