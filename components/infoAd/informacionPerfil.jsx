import React, { useState } from 'react';
import { motion } from "framer-motion";
import useToggle from "@/services/customHooks/trueFalse";
const Informacion = () => {
  
  const [condicion, setFalse, setTrue, cambiar] = useToggle(); // le tengo que traer todas los metodos que tnga el customHook

  return (
    <>
      <button
        className={`fixed top-20 right-4 z-50 rounded-md bg-black py-1 px-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black dark:bg-black dark:text-white dark:hover:bg-black flex items-center justify-center ${condicion ? 'translate-y--0' : ''} `}
        onClick={cambiar}
      >
        {condicion ? "Ocultar" : "Info"}
      </button>

      {condicion && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1.0, x: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className={"fixed md:w-1/4 text-center z-40 p-4 mt-4 md:mt-6 bg-black shadow-lg rounded-lg overflow-hidden text-justify right-4 top-14"}
        >
          <div className="rounded-md max-w-sm flex-col py-1 px-4 text-base font-semibold duration-300 ease-in-out ">
            <h1 className="text-white dark:text-white">Información:</h1>
            <p className="text-white dark:text-white justify-center text-align">
              Ten en cuenta que los atributos y estadísticas son puramente informativos y no reflejan ninguna precisión real. Están aquí para que cada uno asigne valores según su percepción de competitividad y ganas de divertirse. ¡No te tomes estos valores en serio, a menos que quieras! Todo depende de cada jugador.
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Informacion;
