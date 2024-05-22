import React, { useEffect, useState } from 'react';
import { Card, Typography, CardBody } from "@material-tailwind/react";

const Participantes = ({ duenio, evento }) => {
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

    return (
        <div className="md:w-1/2 md:min-w-96 w-72 bg-white rounded-xl mt-4 ml-4 text-justify ml-2">
            <Card className="">
                <CardBody>
                    <Typography>
                        <p>Jugadores: </p>
                        <div>{duenio}</div>
                        {evento.map((evento) => (
                            <div key={evento.id}>{evento.nombre} {evento.apellido} </div> 
                        ))}
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default Participantes;
