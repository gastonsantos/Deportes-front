import { Evento } from "@/model/Evento";
import Image from "next/image";

const SingleEvento = ({ evento }) => {
  if (!evento) {
    return <div>Evento no encontrado</div>;
  }

  const { nombre, imagen, nombreDep, cantJugadores, provincia, localidad, direccion, numero } = evento;

  return (
    <div className="max-w-md w-full lg:max-w-full lg:flex mb-4 m-8">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${imagen})` }} title={nombre}>
      </div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="m-8">
          <p className="text-sm text-gray-600 mb-2">{nombreDep}</p>
          <p className="text-gray-900 font-bold text-xl mb-2">{nombre}</p>
          <p className="text-gray-700 text-base">Provincia: {provincia}</p>
          <p className="text-gray-700 text-base">Localidad: {localidad}</p>
          <p className="text-gray-700 text-base">Dirección: {direccion}</p>
          <p className="text-gray-700 text-base">Número: {numero}</p>
          <p className="text-gray-700 text-base">Jugadores: {cantJugadores}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEvento;
    