"use client"

import React, { useEffect, useState } from 'react';

const NavBar = () => {

  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Obtener datos del localStorage al cargar el componente
    const storedUserName = localStorage.getItem("nombre");
  
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []); // El segundo argumento es un array de dependencias, en este caso, vacío para ejecutar solo una vez al montar

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
         
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <p>Hola: {userName}</p>
            <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
            </button>
            
            {/* Resto del código */}
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              {/* Resto del código */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { NavBar };
