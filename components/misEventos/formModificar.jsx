"use client"
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import { Card, Typography, CardBody } from "@material-tailwind/react";
import { modificarEvento } from '@/services/evento/api';
import Swal from 'sweetalert2';
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

const FormularioModificar = ({ evento }) => {

    const { idEvento, nombre, imagen, nombreDep, idDeporte, cantJugadores, provincia, localidad, direccion, numero, fecha, hora } = evento;
    const [fechaFormateada, setFechaFormateada] = useState("");
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        idEvento: idEvento,
        //idEvento: 5000,
        nombre: nombre,
        provincia: provincia,
        localidad: localidad,
        direccion: direccion,
        numero: numero,
        idDeporte: idDeporte,
        idUsuarioCreador: localStorage.getItem("id"),
        fecha: fecha,
        hora: hora
    });

    console.log("Evento", evento);
    
    useEffect(() => {
        if (evento && evento.fecha) {
          // Convert the date string to a Date object
          const fecha = new Date(evento.fecha);
    
          // Format the date in the desired format (e.g., YYYY-MM-DD)
          const fechaFormateada = fecha.toISOString().split('T')[0];
    
          // Update the formData state with the formatted date
          setFormData(prevFormData => ({
            ...prevFormData,
            fecha: fechaFormateada
          }));
        }
      }, [evento]);

    //Handle de Modificar Evento
    const handleChange = (e) => {
        console.log(e.target, "que tiene e")
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
        console.log("AVERR", formData);
    };
    const isFechaValida = (fecha) => {
        const fechaSeleccionada = new Date(fecha);
        const fechaActual = new Date();
        return fechaSeleccionada >= fechaActual;
    };


    const handleSubmit1 = async () => {
        try {
            if (!isFechaValida(formData.fecha)) {
                Swal.fire({
                    title: 'Fecha Inválida',
                    text: 'La fecha seleccionada no puede ser anterior a la fecha actual',
                    icon: 'error',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#007bff',
                    allowOutsideClick: false,
                });
                return;
            }

            const response = await modificarEvento(formData);

            if (response) {
                console.log("me active");
                
                Swal.fire({
                    title: '¡Evento Modificado',
                    text: 'Se ha modificado correctamente el evento',
                    icon: 'success',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: '#007bff', // Adjust color as needed
                    allowOutsideClick: true,
                }).then(() => {
                    console.log("Cualquier cosa")
                    router.push('/pages/misEventos');
                });
            }
        } catch (error) {
            if (error.response) {
                switch (error.response.status) {
                    case 404:
                        setError('No se pudo modificar el evento');
                        break;
                    default:
                        setError('Error en la petición al servidor');
                }
            } else {
                
                setError('Error en la petición al servidor');
            }
        }
    };


   

    return (
        <>

            <div className="">
                <motion.div
                    initial={{ opacity: 0, x: "-50%" }}
                    animate={{ opacity: 0.8, x: 0 }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    className={"md:absolute lg:absolute relative md:w-1/2 text-center z-40 p-4 bg-black rounded-lg overflow-hidden text-justify"}
                >
                    <div className="w-1/2 min-w-96 bg-white rounded-xl cursor-pointer ">
                        <Card className="">
                            <CardBody>
                                <Typography>
                                    <form >
                                        <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-2 mb-1">
                                            <div>
                                                <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-2 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1"
                                                    placeholder={nombre} />
                                            </div>
                                            <div>
                                                <select name="idDeporte" id="deporte" value={formData.idDeporte} onChange={handleChange} className="w-full px-2 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1">
                                                    <option value="0">Deporte</option>
                                                    <option value="1">Fútbol 5</option>
                                                    <option value="2">Fútbol 11</option>
                                                    <option value="3">Tenis single</option>
                                                    <option value="4">Tenis dobles</option>
                                                    <option value="5">Padel singles</option>
                                                    <option value="6">Padel dobles</option>
                                                    <option value="7">Básquet</option>
                                                    <option value="1002">Básquet 2v2</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-2 mb-1">
                                            <div>
                                                <label htmlFor="fecha" className="block text-gray-500 text-sm font-bold mb-1 text-center md:text-left pb-1">Fecha</label>
                                                <input
                                                    type="date"
                                                    className=" w-full px-2 py-1 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1"
                                                    name="fecha"
                                                    id="fecha"
                                                    value={formData.fecha || ""}
                                                    onChange={handleChange}
                                                    required
                                                    
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="hora" className="block text-gray-500 text-sm font-bold mb-1 text-center md:text-left pb-1">Hora</label>
                                                <input type="time"
                                                    id="hora"
                                                    name="hora"
                                                    className="w-full px-2 py-1 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1"
                                                    min="09:00"
                                                    max="24:00"
                                                    value={formData.hora}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-1">
                                            <div>
                                                <label htmlFor="provincia" className="block text-gray-500 text-sm font-bold mb-1 text-center md:text-left pb-1">Provincia</label>
                                                <input type="text" name="provincia" id="provincia" value={formData.provincia} onChange={handleChange} className="w-full px-2 py-1 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1" />
                                            </div>
                                            <div>
                                                <label htmlFor="localidad" className="block text-gray-500 text-sm font-bold mb-1 text-center md:text-left pb-1">Localidad</label>
                                                <input type="text" name="localidad" id="localidad" value={formData.localidad} onChange={handleChange} className="w-full px-2 py-1 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="direccion" className="block text-gray-500 text-sm font-bold mb-1 text-center md:text-left pb-1">Direccion</label>
                                                <input type="text" placeholder="Dirección" name="direccion" id="direccion" value={formData.direccion} onChange={handleChange} className="w-full px-2 py-1 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1" />
                                            </div>
                                            <div>
                                                <label htmlFor="numero" className="block text-gray-500 text-sm font-bold mb-1 text-center md:text-left pb-1">Numero</label>
                                                <input type="text" placeholder="Numero" name="numero" id="numero" value={formData.numero} onChange={handleChange} className="w-full px-2 py-1 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-1" />
                                            </div>
                                        </div>
                                        {/* Buttons */}
                                        <div className="flex justify-center md:justify-end mt-1">

                                            <button onClick={handleSubmit1} className="ml-3 relative bg-neutral-500 hover:bg-neutral-700 text-white font-bold py-1 px-2 rounded-full rounded inline-flex items-center">

                                                <svg className="w-[15px] h-[15px] fill-[#dbdbdb]" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

                                                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"></path>

                                                </svg>

                                                <span>Guardar</span>

                                            </button>
                                        </div>
                                        {error && (
                                            <div className=" mb-5 text-red" >
                                                <label htmlFor="" className="text-red-500">{error}</label>
                                            </div>
                                        )}
                                    </form>

                                </Typography>
                            </CardBody>
                        </Card>
                    </div>
                </motion.div>
            </div>


        </>
    )
}

export default FormularioModificar