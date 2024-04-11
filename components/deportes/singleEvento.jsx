import { useEffect, useState } from 'react';
import Mapa from "@/components/deportes/mapa";
const SingleEvento = ({ evento }) => {
  const [coordenadas, setCoordenadas] = useState(null);
  const [latitud, setLatitud] = useState();
  const [longitud, setLongitud] = useState();

  useEffect(() => {
    const obtenerCoordenadas = async (direccion1) => {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(direccion1)}&format=json`;

      try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.length > 0) {
          const latitud = parseFloat(datos[0].lat);
          const longitud = parseFloat(datos[0].lon);
          setLatitud(latitud);
          setLongitud(longitud);
          setCoordenadas({ latitud, longitud });
        } else {
          throw new Error('No se pudo obtener la latitud y longitud de la dirección.');
        }
      } catch (error) {
        console.error('Error al obtener la latitud y longitud:', error);
        setCoordenadas(null);
      }
    };

    if (evento) {
      const { provincia, localidad, direccion, numero } = evento;
      const direccionCompleta = `${provincia}, ${localidad}, ${direccion} ${numero}`;
      obtenerCoordenadas(direccionCompleta);
    }
  }, [evento]);

  if (!evento) {
    return <div>Evento no encontrado</div>;
  }

  const {
    nombre,
    imagen,
    nombreDep,
    cantJugadores,
    provincia,
    localidad,
    direccion,
    numero
  } = evento;

  return (
    <div className='grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-2'>
      <div className="max-w-md w-full lg:max-w-full lg:flex">
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imagen})` }} title={nombre}>
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="">
            <p className="text-sm text-gray-600 mb-2 pb-2">{nombreDep}</p>
            <p className="text-gray-900 font-bold text-xl mb-2">{nombre}</p>
            <p className="text-gray-700 text-base pb-2">Provincia: {provincia}</p>
            <p className="text-gray-700 text-base pb-2">Localidad: {localidad}</p>
            <p className="text-gray-700 text-base pb-2">Dirección: {direccion}</p>
            <p className="text-gray-700 text-base pb-2">Número: {numero}</p>
            <p className="text-gray-700 text-base pb-2">Jugadores: {cantJugadores}</p>
            <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Unirse</button>
          </div>
        
        </div>

      </div>
      
      <div className="max-w-md">
      
        {latitud && longitud &&
          <Mapa latitud={latitud} longitud={longitud} />}
      </div>
    </div>
  );
};

export default SingleEvento;
