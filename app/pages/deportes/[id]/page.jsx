"use client"

import { NavBar } from "@/components/navBar/navBar";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Footer from "@/components/landing/footer";
import { obtenerEventoDetalle } from '@/services/evento/api';
import SingleEvento from "@/components/deportes/singleEvento";
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import useAuth from '@/services/customHooks/api'

export default function EventoDetalle() {

  const { id } = useParams();
  const [evento, setEvento] = useState();

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await obtenerEventoDetalle(id);
        if (response) {
          setEvento(response);
        }
      } catch (error) {
      }
    };

    fetchData();
  }, []);

  const { isAuthorized, checkedAuth } = useAuth();

  if (!checkedAuth) {
    return null; 
  }
  
  if (!isAuthorized) {
    return <NoAutorizado />;
  }
  return (
    <>
    <NavBar />
    <div className="w-full min-h-96 items-center justify-center mt-8 mr-8 mb-8">
      <SingleEvento evento={evento} />
    </div>
    <Footer/>
    </>
  );
}
