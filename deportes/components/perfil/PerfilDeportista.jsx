"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import {EstadisticasJugador} from '@/components/perfil/estadisticasJugador';
import { MenuPerfiles } from '@/components/perfil/menuPerfiles';
import {PerfilJugador} from '@/components/perfil/perfilJugador';
const PerfilDeportista = () =>{

    
  return (
    <div className="bg-gray-100 min-h-screen flex relative">
      <div className="absolute inset-0">
      <Image
        src="/images/imagen-login.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="w-full h-full object-cover"
      />
    </div>
    {/* Sidebar */}
    <MenuPerfiles/>
    {/* Content */}
    <div className="flex-1 w-5/6 p-8 md:pl-60 grid grid-cols-1 md:grid-cols-2 gap-4" >
      
     <PerfilJugador/>
         
  
      <div>
          <EstadisticasJugador/> 
      </div>
         
     
        
     
    </div>
  </div>


  );
}

export {PerfilDeportista};

