'use client'
import React from "react";
import AsideComponent from "@/components/navegation/AsideComponent";
import { NavBar } from "@/components/navBar/navBar";
import PerfilesStats from "@/components/perfiles/PerfilesStats";
import PerfilesInfo from "@/components/perfiles/PerfilesInfo";
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import useAuth from '@/services/customHooks/api';
import Informacion from "@/components/infoAd/informacionPerfil";

export default function PerfilMedia() {
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
      <div className="relative hidden sm:block">
        <Informacion />
      </div>
      <div className="bg-black flex flex-col min-h-screen">

        <AsideComponent />

        <div className="w-full bg-black p-8 rounded shadow-md mt-0 mb-10 flex flex-col md:flex-row items-center justify-center sm:-mt-40 sm:ml-24">
          
            <PerfilesStats />
          
        </div>
      </div>
    </>
  );
}
