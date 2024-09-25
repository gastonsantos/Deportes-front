"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/login/login2';
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showCredentials, setShowCredentials] = useState(true);

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
        console.log("Hay algo", response);
        console.error('No se Pudieron Enviar los datos al backend');
      }
    } catch (error: any) {
      if (error.response) {
        switch (error.response.status) {
          case 404:
            setError('No coinciden Email y/o Contraseña');
            break;
          case 409:
            setError('Email no verificado, revisa tu casilla de correo');
            break;
          default:
            setError('Error en la petición al servidor');
        }
      } else {
        console.error('Error al iniciar sesión:', error.message);
        setError('Error en la petición al servidor');
      }
    }
  }

  // Manejar el evento de envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevenir el comportamiento por defecto del formulario
    enviarLoginAlBackend();
  };

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
        <div className="absolute top-4 left-4">
          <button
            onClick={() => setShowCredentials(!showCredentials)}  // Al hacer clic, se alterna el estado
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-md py-2 px-4"
          >
            Demo
          </button>

          {showCredentials && (
            <div className="mt-2 bg-black p-4 text-white border border-gray-300 rounded-md shadow-lg">
              <p>Este es un proyecto de prueba Api rest realizado en .net</p>
              <p>Si deseas puedes registrarte o usar el usuario de Prueba</p>
              <p>Usuario Ejemplo</p>
              <p><strong>Usuario:</strong> ejemploSports@mail.com</p>
              <p><strong>Contraseña:</strong> 112233</p>
            </div>
          )}
        </div>

        <div className="absolute z-10 flex flex-col items-center w-96 p-4 mx-auto bg-gray-800 bg-opacity-50 rounded-lg shadow-md">
          <h2 className="text-center text-sm text-gray-400 dark:text-gray-400 p-4">
            Login
          </h2>
          <form onSubmit={handleSubmit}>  {/* Agregar el evento onSubmit aquí */}
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 text-white">Tú email</label>
              <input 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                id="email" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="name@flowbite.com" 
                required 
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-white">Tú password</label>
              <input 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                id="password" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                required 
              />
            </div>
            <div className="mb-5">
              <button 
                type="submit"  // Tipo submit para que también funcione con Enter
                className="text-white bg-purple-700 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              >
                Iniciar sesión
              </button>
            </div>
          </form>

          {error && (
            <div className=" mb-5 text-red">
              <label htmlFor="" className="text-red-500">{error}</label>
            </div>
          )}

          <div className="mb-5 text-white">
            <a href="/pages/cambioContraseniaForm" >¿Olvidaste tu contraseña?</a>
          </div>
          <div className="mb-5 text-white">
            <a href="/pages/registro" >Crear cuenta</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LoginForm };
