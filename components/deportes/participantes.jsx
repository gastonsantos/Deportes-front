import React, { useEffect, useState } from 'react';

import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
  } from "@material-tailwind/react";

const Participantes = ({ evento }) => {
    
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

  
    
    
    return (
        <div className="w-1/2 min-w-96 bg-white rounded-xl mt-4 ml-4 text-justify ml-2">
            <Card className="">
                <CardBody>
                    <Typography>
                        <p>Participantes: </p>
                       
                        {evento.map((evento) => (
                            <div key={evento.id}>
                                {evento.nombre} {evento.apellido}

                            </div>
                        ))}
                    </Typography>
                </CardBody>
            </Card>

        </div>
    );
};

export default Participantes;
