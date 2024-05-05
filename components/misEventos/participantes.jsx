"use client"

import React, { useEffect, useState } from 'react';
import { Card, Typography, CardBody } from "@material-tailwind/react";


const Participantes = ({ duenio, evento }) => {

    const { id, apellido , nombre , apodo, email } = evento;
    const [fechaFormateada, setFechaFormateada] = useState("");
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        id: id,
        nombre: nombre,
        apellido: apellido,
        apodo: apodo,
        email: email,
    });

    console.log("Evento En Participantes", evento);

    useEffect(() => {
        if(evento){
            setFormData(evento);
        }
      
    }, [evento]);





    return (
        <div className="w-1/2 min-w-96 bg-white rounded-xl mt-4 text-justify ml-2">
            <Card className="">
                <CardBody>
                    <Typography>
                        <p>Participantes: </p>
                        <div>{duenio}</div>
                    {evento.map((evento) => (
                        <div key={evento.id}>{evento.nombre} {evento.apellido}</div>

                    ) )}

                    </Typography>
                </CardBody>
            </Card>
        </div>




    )
}

export default Participantes