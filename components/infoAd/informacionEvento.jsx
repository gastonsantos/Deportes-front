import React, { useState } from 'react';
import { motion } from "framer-motion";

const Informacion = ({reglas}) => {
  const [visible, setVisible] = useState(false);
  
  const mostrarInfo = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button
        className={`relative top-4 left-4 z-50 rounded-md bg-black/20 py-1 px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/30 dark:bg-gray/30 dark:text-white dark:hover:bg-gray/30 flex items-center justify-center ${visible ? 'translate-y--0' : ''} `}
        onClick={mostrarInfo}
      >
        {visible ? "Ocultar" : "Info"}
      </button>

      {visible && (
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className={"absolute md:w-1/4 lg:w-1/4 xl:w-1/4 text-center z-40 p-4 mt-4 md:mt-6 bg-black shadow-lg rounded-lg overflow-hidden text-justify" } 
        >
          <div className="rounded-md  max-w-sm flex-col py-1 px-4 text-base font-semibold duration-300 ease-in-out ">
            <h1 className="text-white dark:text-white">Información:</h1>
            <p className="text-white dark:text-white justify-center text-aling">
            Recuerda que todos los campos son obligatorios. Asegúrate de ingresar correctamente la fecha y hora del evento que estás creando, así como los datos de ubicación. La precisión en la información de la ubicación es crucial, ya que se mostrará en un mapa del lugar del evento.
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Informacion;
