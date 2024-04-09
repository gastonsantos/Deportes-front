import { Evento } from "@/model/Evento";
import Link from 'next/link'; // Importar Link de next/link
import Image from "next/image";

const SingleDeporte = ({ evento }: { evento: Evento }) => {
  const { idEvento, nombre, imagen, nombreDep, cantJugadores, provincia, localidad, direccion, numero } = evento;

  return (
    <div className="sm:mr-2 ml-2 border-2 border-gray-400 wow fadeInUp relative overflow-hidden rounded-md bg-primary/[3%] shadow-one dark:bg-primary/10" data-wow-delay=".1s">
      <Link href={`/pages/deportes/${idEvento}`}>
        
          <div className="relative h-48">
            <Image
              src={imagen}
              alt="imagen deporte"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-t-lg object-cover cursor-pointer"
            />
          </div>
        
      </Link>
      <div className="p-6 ">
        <div>
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{nombre}</h5>
        <h6 className="mb-2 text-xl font-small leading-tight text-neutral-800 dark:text-neutral-50">{provincia}, {localidad}</h6>
        <h6 className="mb-2 text-xl font-small leading-tight text-neutral-800 dark:text-neutral-50">{direccion} {numero}</h6>
        <h6 className="mb-2 text-xl font-small leading-tight text-neutral-800 dark:text-neutral-50">Jugadores: {cantJugadores}</h6>
        </div>
        <Link href={`/pages/deportes/${idEvento}`} className="flex justify-center">
          <button
            type="button"
            className=" py-2.5 px-5 rounded-md bg-primary m-2  text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
            data-te-ripple-init
            data-te-ripple-color="light">
            Ver
          </button>
        </Link>
      </div>
    </div>
  );
};

export { SingleDeporte };
