"use client"
import { useEffect,useState } from 'react';
import { useParams } from 'next/navigation';

import {obtenerEventoDetalle} from '@/services/evento/api';
import SingleEvento from "@/components/deportes/singleEvento";
import {Evento} from "@/model/Evento";

export default function EventoDetalle() {

  const  { id } = useParams();
  
  const [evento, setEvento] = useState();
 
    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await obtenerEventoDetalle(id);
            if (response) {
               
              console.log("que hay en response.data", response.data);
              setEvento(response);
              console.log("Que hay en Evento", evento)
             
            }
          } catch (error) {
          
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      <SingleEvento evento={evento} />
  </div>

    
  );
}
