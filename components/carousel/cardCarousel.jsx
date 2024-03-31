"use client"
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import React from "react";
import { useRouter } from 'next/navigation';



const CardCarrusel = ({deportes}) => {
    const { id, nombre, imagen, } = deportes;
    const router = useRouter(); // Usar useRouter en el componente

    const handleClick = () => {
        
        localStorage.setItem('selectedDeporteId', id);
        localStorage.setItem('selectedDeporteNombre', nombre);

        
        router.push('/pages/crearEvento/formulario');
    };
    return (
        
        <Card
            shadow={true}
            className="relative grid h-96 w-96 items-end justify-center text-center cursor-pointer"
            onClick={handleClick}
        >
            <CardHeader
                floated={true}
                shadow={true}
                color="transparent"
                className={`absolute inset-0 m-0 h-96 w-96 rounded-none bg-cover bg-center `}
                style={{ backgroundImage: `url(${imagen})` }}    >
                
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                    variant="h2"
                    color="white"
                    className="hidden sm:block mb-6 font-medium leading-[1.5] "
                >
                  
                </Typography>
                <Typography variant="h5" className="mb-1 text-gray-400">
                {nombre}
                </Typography>

            </CardBody>
        </Card>
       
    );
}
export default CardCarrusel;