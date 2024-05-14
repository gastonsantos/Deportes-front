
import React, { useEffect, useState } from 'react';
import { obtenerCoordenadas } from "@/services/mapa/api";
import { enviarNotificacion } from "@/services/notificaciones/api";
import { APIMAP } from "@/config/constants";
import Swal from 'sweetalert2';
import Image from "next/image";
import Participantes from '@/components/deportes/participantes';
const SingleEvento = ({ evento }) => {
  const [coordenadas, setCoordenadas] = useState(null);
  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();
  const [fechaFormateada, setFechaFormateada] = useState("");
  const [seEnvioNoificacion, setSeEnvioNotificacion] = useState(false);
  const [error, setError] = useState("");
  const [mostrarJugadores, setMostrarJugadores] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (evento) {
        const direccionCompleta = `${provincia}, ${localidad}, ${direccion} ${numero}`;
        try {
          const response = await obtenerCoordenadas(direccionCompleta);
          if (response) {
            console.log("obtenerDeportes", response);
            const data = response
            const latitud = parseFloat(data[0].lat);
            const longitud = parseFloat(data[0].lon);

            setLatitud(latitud);
            setLongitud(longitud);

            setCoordenadas({ latitud, longitud });
            console.log("Latitud", latitud);
            console.log("longitud", longitud);
            // Cargar la API de Google Maps JavaScript de forma asíncrona
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=` + APIMAP + `&callback=initMap`;

            script.defer = true;
            document.head.appendChild(script);


            // Función de inicialización del mapa
            window.initMap = () => {
              const map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: latitud, lng: longitud }, // Latitud y longitud del centro del mapa
                zoom: 15, // Nivel de zoom
              });

              // Crear un marcador en una ubicación específica
              new window.google.maps.Marker({
                position: { lat: latitud, lng: longitud }, // Latitud y longitud del marcador
                map: map,
                title: 'Aca se Juega', // Texto al pasar el mouse sobre el marcador
              });
            };


          }
        } catch (error) {
          console.error("Error al obtener deportes:", error);
        }
      };

    }

    if (evento && evento.fecha) {
      const fecha = new Date(evento.fecha);
      const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
      const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
      setFechaFormateada(fechaFormateada);
      console.log("evento", evento.cantJugadoresAnotados)
    }


    fetchData();
  }, [evento]);

  if (!evento) {
    return <div>Evento no encontrado</div>;
  }
  const {
    id,
    nombre,
    imagen,
    nombreDep,
    cantJugadores,
    cantJugadoresAnotados,
    provincia,
    localidad,
    direccion,
    numero,
    hora,
    idUsusarioDuenio,
    nombreDuenio
  } = evento;

  const handleEnviarNotificacion = async () => {
    const data = {
      idUsuarioQueInvita: localStorage.getItem("id"),
      idUsuarioInvitado: evento.idUsuarioDuenio,
      idEvento: evento.idEvento
    }

    try {
      const response = await enviarNotificacion(data);
      if (response) {
        Swal.fire({
          title: '¡Se ah enviado la Notificación',
          text: 'Se ha enviado la notificación',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#007bff', // Adjust color as needed

        }).then(() => {

          setSeEnvioNotificacion(true);
        });
        setSeEnvioNotificacion(true);
      }
    } catch (error) {
      if (error.response) {
        console.log('Me da error', error.response.status);
        switch (error.response.status) {
          case 423:
            setError('Ya hay una invitación en curso');
            setSeEnvioNotificacion(true);
            break;
          case 400:
            setError('No podes invitarte una invitación a tu propio evento');
            setSeEnvioNotificacion(true);
            break;
          default:
            setError('Error en la petición al servidor');
        }
      } else {

        console.log('Me da error', error.response.status);
        setError('Error en la petición al servidor');
      }

    }





  }



  return (
    <div className='flex flex-wrap'>

      <div className="flex-auto w-96 m-10 bg-transparent p-2">
        <div class="w-full lg:max-w-full lg:flex">
          <div class="h-48 w lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imagen})` }} title={nombre}>
          </div>
          <div class="border-r border-b border-l  border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class="text-sm text-gray-600 flex items-center">
                <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Solo para usuarios registrados
              </p>
              <div class="text-gray-900 font-bold text-xl mb-2">¿Querés ser parte?</div>
              <p className="text-sm text-gray-600 mb-2 pb-2">{nombreDep}</p>
              <p className="text-gray-900 font-bold text-xl mb-2">{nombre}</p>

              <div className="mt-1 flex item-center text-gray-800">
                <svg className="w-[20px] h-[20px] fill-[#0068b8] mr-2" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                  <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path>

                </svg>
                <span> {fechaFormateada} </span>
              </div>
              <div className="mt-1 flex item-center text-gray-800">
                <svg className="w-[20px] h-[20px] fill-[#018322] mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">

                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>

                </svg>
                <span> {hora} </span>
              </div>
              <div className="mt-1 flex item-center text-gray-800">
                <svg className="w-[20px] h-[20px] fill-[#fb4141] mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">

                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>

                </svg>
                <span>{provincia}, {localidad} </span>
              </div>
              <div className="mt-1 flex item-center text-gray-800">
                <svg className="w-[20px] h-[20px] fill-#252825] mr-2" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">

                  <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z"></path>

                </svg>
                <span> {direccion} {numero} </span>
              </div>
              <div className="">
                <button className="mt-1 flex item-center text-gray-800" onClick={() =>setMostrarJugadores(!mostrarJugadores)}  >
                  <svg className="w-[20px] h-[20px] fill-[#fb9118] mr-2" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg">

                    <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"></path>

                  </svg>
                  <span> {cantJugadoresAnotados} / {cantJugadores}</span>
                </button>

              </div>


            </div>
            <div className="flex items-center">

              <div className="text-sm">
                <p className="text-gray-900 font-bold mb-2">Dueño</p>
                <p className="text-gray-900 leading-none">{nombreDuenio}</p>

                <p className="text-gray-600">{latitud},{longitud}</p>
              </div>
            </div>

            {!seEnvioNoificacion && cantJugadoresAnotados < cantJugadores && (
              <button
                type="button"
                onClick={handleEnviarNotificacion}
                className="py-2.5 px-5 me-2 mb-2 mt-4 text-sm font-medium text-gray-900 focus:outline-none bg-gray-400 rounded-lg border border-gray-200 hover:bg-gray-600 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Unirse
              </button>
            )}



            {error && (<div class="text-sm text-red-700">{error}
            </div>)}
          </div>
        </div>
            {mostrarJugadores&&(<Participantes evento={evento.dtoUsuarios}/>)}

      </div>
      



      {latitud && longitud ? (
        <div className='flex-auto md:w-96 sm:w-80 w-96 h-auto m-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r ' id="map" />
      ) : (
        <div className='flex-auto w-96 h-auto m-12 bg-white rounded-b lg:rounded-b-none lg:rounded-r'>

          <Image
            src="/images/evento-no-encontrado1.jpg"
            alt="Image Description"
            width={600}
            height={600}
            className="shadow-sm rounded-xl object-cover grayscale"
          />
        </div>
      )}






    </div>
  );
};

export default SingleEvento;
