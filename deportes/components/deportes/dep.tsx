"use client";
import React, { useEffect, useState } from 'react';
import {SingleDeporte} from "./singleDeporte";
import {obtenerDeportes} from "@/services/deportes/api2";
import {Deportes} from "@/model/Deportes"

const Dep = () => {
const [deportes, setDeportes] = useState<Deportes[]>([]);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await obtenerDeportes();
        if (response) {
          console.log("obtenerDeportes", response);
          const data = response
          setDeportes(data); // Almacena los deportes en el estado local
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
      className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
    
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {deportes.map((deporte) => (
            <SingleDeporte key={deporte.id} deportes={deporte} />
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export {Dep};
