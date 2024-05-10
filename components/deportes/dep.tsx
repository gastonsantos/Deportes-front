"use client";
import React, { useEffect, useState } from 'react';
import {SingleDeporte} from "@/components/deportes/singleDeporte1";
import {obtenerEventos, buscarEventoPorDeporteCiudad} from "@/services/evento/api";
import {Evento} from "@/model/Evento";
import Buscador from "@/components/buscador/buscador";

const Dep = () => {
const [evento, setEvento] = useState<Evento[]>([]);
const [searchTerm, setSearchTerm] = useState<string>('');
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await obtenerEventos();
        if (response) {
          console.log("obtenerDeportes", response);
          const data = response
          setEvento(data); 
        }
      } catch (error) {
        console.error("Error al obtener deportes:", error);
      }
    };

    fetchData();
  }, []);
  const searchEvent = async (searchTerm: string) => {
    try {
      const response = await buscarEventoPorDeporteCiudad(searchTerm);
      if (response.data) {
        console.log("buscarEventoPorNombre", response.data);
        setEvento(response.data as Evento[]);
      }
    } catch (error) {
      console.error("Error al buscar eventos:", error);
    }
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
    setEvento([]);
  };


  const filteredEventos = evento.filter(evento =>
    evento.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evento.nombreDep.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evento.provincia.toLowerCase().includes(searchTerm.toLowerCase()) ||
    evento.localidad.toLowerCase().includes(searchTerm.toLowerCase()) 
);

  return (
    <>
     <Buscador setSearchTerm={setSearchTerm} searchEvent={searchEvent} />
            <section id="deporte" className="bg-primary/[.03] py-16 ">
                <div className="container">
                    <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {filteredEventos.map(evento => (
                            <SingleDeporte key={evento.idEvento} evento={evento} />
                        ))}
                    </div>
                </div>
            </section>
  </>
  );
};

export {Dep};
