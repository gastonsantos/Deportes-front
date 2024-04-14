"use client";
import React, { useEffect, useState } from 'react';
import {SingleDeporte} from "@/components/deportes/singleDeporte1";
import {obtenerEventos} from "@/services/evento/api";
import {Evento} from "@/model/Evento";


const Dep = () => {
const [evento, setEvento] = useState<Evento[]>([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await obtenerEventos();
        if (response) {
          console.log("obtenerDeportes", response);
          const data = response
          setEvento(data); // Almacena los deportes en el estado local
        }
      } catch (error) {
        console.error("Error al obtener deportes:", error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
    <section
      id="deporte"
      className="bg-primary/[.03] py-16 "
    >
      <div className="container">
    
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {evento.map((evento) => (
            <SingleDeporte key={evento.idEvento} evento={evento} />
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export {Dep};
