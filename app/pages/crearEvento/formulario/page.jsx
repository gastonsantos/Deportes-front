"use client"
import { useRouter } from 'next/navigation';
import { NavBar } from "@/components/navBar/navBar";
import { useEffect, useState } from 'react';
import { agregarEvento } from '@/services/evento/api';
import Swal from 'sweetalert2';
import Image from "next/image";
import Informacion from "@/components/infoAd/informacionEvento";
export default function Formulario() {
  const [deporteCreado, setDeporteCreado] = useState();
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    provincia: '',
    localidad: '',
    direccion: '',
    numero: 0,
    idUsuarioCreador: localStorage.getItem("id"),
    idDeporte: localStorage.getItem("selectedDeporteId"),
    fecha: '',
    hora: ''
  });

  const handleChange = (e) => {
    console.log(e.target, "que tiene e")
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    console.log("AVERR", formData);
  };

  useEffect(() => {
    setDeporteCreado(localStorage.getItem("selectedDeporteNombre"));
  })

  const isFechaValida = (fecha) => {
    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();
    return fechaSeleccionada >= fechaActual;
  };



  const handleSubmit = async () => {
    try {
      const horaInicio = new Date();
      horaInicio.setHours(7, 0, 0); // Establece la hora de inicio permitida a las 07:00

      const horaFin = new Date();
      horaFin.setHours(0, 0, 0); // Establece la hora de fin permitida a las 00:00 del día siguiente

      const horaSeleccionada = new Date(`2000-01-01T${formData.hora}`);
      /*
      if (horaSeleccionada < horaInicio || horaSeleccionada >= horaFin) {
        Swal.fire({
          title: 'Hora Inválida',
          text: 'La hora seleccionada debe estar entre las 07:00 y las 00:00',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#007bff'
        });
        return; // Evita enviar el formulario si la hora no es válida
      }
  */
      if (!isFechaValida(formData.fecha)) {
        Swal.fire({
          title: 'Fecha Inválida',
          text: 'La fecha seleccionada no puede ser anterior a la fecha actual',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#007bff'
        });
        return; // Evita enviar el formulario si la fecha no es válida
      }
      const response = await agregarEvento(formData);

      if (response) {
        Swal.fire({
          title: '¡Evento Creado',
          text: 'Se ha creado el evento satisfactoriamente',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#007bff', // Adjust color as needed
        }).then(() => {
          router.push('/pages/deportes');

        });
      }
    } catch (error) {
      console.error('Error al actualizar la ficha deportista:', error);
    }
  };


  return (

    <div>
      <NavBar />
      <div className="absolute w-screen h-screen">
        <Image
          src="/images/imagen-login.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute w-screen h-screen"
        />
      </div>
      <div className="container fluid items-center justify-center">
        <div className="relative hidden sm:block">
          <Informacion />
        </div>

        <div className="container fluid items-center justify-center flex flex-wrap m-4 text-white">

          <div className="relative w-1/2 ">

            <h2>¿Qué vas a jugar?</h2>
            <h4>Van a jugar a {deporteCreado}</h4>
            <form >
              <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="nombre" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Nombre</label>
                  <input type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 pb-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                </div>
              </div>
              <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="fecha" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Fecha</label>
                  <input
                    type="date"
                    className=" w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2"
                    name="fecha"
                    id="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hora" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Hora</label>
                  <input type="time"
                    id="hora"
                    name="hora"
                    className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2"
                    min="09:00"
                    max="24:00"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="provincia" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Provincia</label>
                  <input type="text" name="provincia" id="provincia" value={formData.provincia} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                </div>
                <div>
                  <label htmlFor="localidad" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Localidad</label>
                  <input type="text" name="localidad" id="localidad" value={formData.localidad} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                </div>
              </div>
              <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="direccion" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Direccion</label>
                  <input type="text" name="direccion" id="direccion" value={formData.direccion} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                </div>
                <div>
                  <label htmlFor="numero" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Numero</label>
                  <input type="text" name="numero" id="numero" value={formData.numero} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                </div>




              </div>
              {/* Buttons */}
              <div className="flex justify-center md:justify-end mt-4">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
                  type="button"
                  onClick={handleSubmit}
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}