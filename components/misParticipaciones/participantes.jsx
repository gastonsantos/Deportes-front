import React, { useEffect, useState } from 'react';
import { Card, Typography, CardBody } from "@material-tailwind/react";
import { useRouter } from 'next/navigation';
const Participantes = ({ duenio, evento }) => {
    const router = useRouter();
    const { id, apellido, nombre, apodo, email } = evento;
    const [formData, setFormData] = useState({
        id: id,
        nombre: nombre,
        apellido: apellido,
        apodo: apodo,
        email: email,
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
    return (
        <div className="w-1/2 min-w-96 bg-white rounded-xl mt-4 text-justify ml-2">
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
                            </div>
                        ))}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default Participantes;
