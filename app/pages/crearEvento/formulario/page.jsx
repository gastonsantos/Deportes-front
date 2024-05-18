"use client"
import { useRouter } from 'next/navigation';
import { NavBar } from "@/components/navBar/navBar";
import { useEffect, useState } from 'react';
import { agregarEvento } from '@/services/evento/api';
import Swal from 'sweetalert2';
import Image from "next/image";
import Informacion from "@/components/infoAd/informacionEvento";
import Cookies from 'js-cookie';
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import useAuth from '@/services/customHooks/api'

export default function Formulario() {
  //const [isAuthorized, setIsAuthorized] = useState(false);
  //const [checkedAuth, setCheckedAuth] = useState(false);
  const [deporteCreado, setDeporteCreado] = useState();
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    provincia: '',
    localidad: '',
    direccion: '',
    numero: 0,
    idUsuarioCreador: typeof window !== 'undefined' ? Cookies.get('id') : '',
    idDeporte: typeof window !== 'undefined' ? localStorage.getItem("selectedDeporteId") : '',
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
  const { isAuthorized, checkedAuth } = useAuth();
  if (!checkedAuth) {
    return null;
  }

  if (!isAuthorized) {
    return <NoAutorizado />;
  }
 
/*
  useEffect(() => {
    setDeporteCreado(localStorage.getItem("selectedDeporteNombre"));
  })*/

  const isFechaValida = (fecha) => {
    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();
    if (fechaSeleccionada > fechaActual) {
      return true;
    } else {
      return false;
    }
  };

  const isFechaActual = (fecha) => {
    // Obteniendo la fecha actual
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1; // El mes está indexado desde 0, por lo que sumamos 1
    const diaActual = fechaActual.getDate();

    // Creando un objeto Date para la fecha ingresada
    const fechaSeleccionada = new Date(fecha);
    const añoSeleccionado = fechaSeleccionada.getFullYear();
    const mesSeleccionado = fechaSeleccionada.getMonth() + 1; // El mes está indexado desde 0, por lo que sumamos 1
    const diaSeleccionado = fechaSeleccionada.getDate()+ 1 ;

    console.log("fechaActual", `${añoActual}-${mesActual}-${diaActual}`);
    console.log("fechaSeleccionada", `${añoSeleccionado}-${mesSeleccionado}-${diaSeleccionado}`);

    // Comparando fechas
    if (añoSeleccionado === añoActual && mesSeleccionado === mesActual && diaSeleccionado === diaActual) {
      return true; // La fecha seleccionada es la fecha actual
    } else {
      return false; // La fecha seleccionada no es la fecha actual
    }
  }



  const irHoraValida = (horaIngresada) => {
    // Obteniendo la hora actual
    const horaActual = new Date();

    // Creando un objeto Date para la hora ingresada
    const horaIngresadaObj = new Date();
    horaIngresadaObj.setHours(parseInt(horaIngresada.split(':')[0]), parseInt(horaIngresada.split(':')[1]), 0); // Estableciendo horas y minutos, segundos a 0

    // Comparando las horas
    if (horaIngresadaObj <= horaActual) {
      return false; // La hora ingresada ya pasó
    } else {
      return true; // La hora ingresada es válida
    }
  }



  const esFechaValidaParaEvento = (fecha, hora) => {
    console.log("Que devuelve irHoraValida", irHoraValida(hora))
    console.log("Que devuelve isFechaActual", isFechaActual(fecha))
    if (isFechaValida(fecha)) {
      return true
    } else if (!isFechaValida(fecha)) {
      if (isFechaActual(fecha) && irHoraValida(hora)) {
        return true
      } else {
        return false
      }

    }

  }

  const handleSubmit = async () => {

    try {


      if (!esFechaValidaParaEvento(formData.fecha, formData.hora)) {
        Swal.fire({
          title: 'Hora o fecha invalida',
          text: 'Revise la fecha y hora del evento.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#007bff'
        });
        return; // Evita enviar el formulario si la hora no es válida
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
                  <input type="text" name="nombre" id="nombre" required value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 pb-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                  {formData.nombre === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}
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
                  {formData.fecha === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}
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
                  {formData.hora === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}
                </div>
                
              </div>
              <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
                <div>
                  <label htmlFor="provincia" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Provincia</label>
                  <input type="text" name="provincia" id="provincia" required value={formData.provincia} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                  {formData.provincia === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}
                </div>
                <div>
                  <label htmlFor="localidad" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Localidad</label>
                  <input type="text" name="localidad" id="localidad" required value={formData.localidad} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                  {formData.localidad === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}
                </div>
              </div>
              <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="direccion" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Direccion</label>
                  <input type="text" name="direccion" id="direccion" required value={formData.direccion} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                  {formData.direccion === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}

                </div>
                <div>
                  <label htmlFor="numero" className="block text-gray-500 text-sm font-bold mb-2 text-center md:text-left pb-2">Numero</label>
                  <input type="text" name="numero" id="numero" required  value={formData.numero} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500 pb-2" />
                  {formData.numero === '' && <p className="text-red-500 text-xs italic">Este campo es obligatorio</p>}
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