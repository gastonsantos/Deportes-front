"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { cambioContransenia } from '@/services/usuario/api';
import Swal from 'sweetalert2';
export default function CambioContraseniaForm() {

  const router = useRouter();

  const [email, setEmail] = useState('');

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault(); 


    try {
      const response = await cambioContransenia(email);

      console.log("Entro a cambio de contrasenia, que tiene response", response);
      if(response === true){
    
        Swal.fire({
          title: '¡Se ah enviado un email a su casilla!',
          text: 'Para el cambio de contrasenia.',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#007bff', // Adjust color as needed
        }).then(() => {
          // Optional behavior after success (e.g., redirect to login)
          router.push('/pages/login');
        });

      }else{
        
        console.log("No se agrego una garcha!");

        Swal.fire({
          title: 'Error al enviar email',
          text: 'Ha ocurrido un error al enviar el email.', // Replace with specific error message if available
          icon: 'error',
          confirmButtonColor: '#dc3545', // Adjust color as needed
        });
      }  
    } catch (error) {
      console.error('Error registering user:', error);
      

      Swal.fire({
        title: 'Error inesperado',
        text: 'Se ha producido un error inesperado. Inténtelo nuevamente más tarde.',
        icon: 'error',
        confirmButtonColor: '#dc3545', // Adjust color as needed
      });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute w-screen h-screen">
        <Image
          src="/images/herramientas-deportivas.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute w-screen h-screen"
        />
      </div>
  <div className="absolute inset-0 flex flex-col items-center justify-center ">
  <div className="absolute z-10 flex flex-col items-center w-96 p-4 mx-auto bg-gray-800 bg-opacity-90 rounded-lg shadow-md">
  <h2 className="text-center text-sm text-gray-400 dark:text-gray-400 p-4">
        Escriba su email, para recuperar la contraseña
  </h2>  
  <form className="w-full" method="POST" onSubmit={enviar}>
 
  

  <div className="relative z-0 w-full mb-5 group">
      <input  onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email </label>
  </div>

  
 
  <button type="submit" className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Enviar</button>
</form>

</div>
  </div>
  </div>
  );
}
