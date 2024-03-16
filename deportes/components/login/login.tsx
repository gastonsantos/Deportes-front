"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/login/login2';
import Image from "next/image";
const LoginForm = () => {

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    async function enviarLoginAlBackend() {
      const data = {
        email: email,
        clave: password
      };
    
      try {
        const response = await login(data);
        if (response) {
          router.push('/pages/deportes');
        } else {
          console.error('No se Pudieron Enviar los datos al backend');
        }
      } catch (error:any) {
        // Manejar excepciones específicas
        if (error.message === 'El usuario no pudo ser encontrado.') {
          // Mostrar mensaje de error: "Usuario o contraseña incorrecta"
          console.error('Usuario o contraseña incorrecta');
        } else if (error.message === 'EmailNoValidadoException') {
          // Mostrar mensaje de error: "El email no está validado"
          console.error('El email no está validado');
        } else {
          // Mensaje de error genérico
          console.error('Error al iniciar sesión:', error.message);
        }
      }
    }
    

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
    <div className="absolute w-screen h-screen">
      <Image
        src="/images/imagen-login.jpg"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute w-screen h-screen"
      />
    </div>
  
    <div className="absolute inset-0 flex flex-col items-center justify-center">
    <div className="absolute z-10 flex flex-col items-center w-96 p-4 mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
    <h2 className="text-center text-sm text-gray-400 dark:text-gray-400 p-4">
        Login
  </h2> 
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tú email</label>
    <input onChange={(e) => { setEmail(e.target.value) }} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tú password</label>
    <input onChange={(e) => { setPassword(e.target.value) }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  <div className="mb-5">
  <button onClick={() => { enviarLoginAlBackend() }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
 
  <div className="mb-5">
  <a href="/pages/cambioContraseniaForm" >¿Olvidaste tu contraseña?</a>
  </div>
  <div className="mb-5">
  <a href="/pages/registro" >Crear cuenta</a>
  </div>
  </div>
  
  </div>
 
  </div>
  );
}
export { LoginForm };