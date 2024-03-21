"use client"
import React, { useEffect, useState } from 'react';
import {obtenerUsuarioPorId} from "@/services/usuario/api";
const SettingsComponent = () => {
  const [formData, setFormData] = useState({
    nombre: ' ',
    edad: '',
    email: ' ',
    telefono: ' ',
    contrasenia: '',
  });

  const [openMenu, setOpenMenu] = useState(false)

  const handleChange = () => {
   
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await obtenerUsuarioPorId();
        if (response) {
          console.log("obtenerDeportes", response.data);
          
          const data = response
          setFormData(data); // Almacena los deportes en el estado local
        }
      } catch (error) {
        console.error("Error al obtener deportes:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="bg-gray-400 md:bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-1/4 hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Profile</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Security</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Notifications</a></li>
          </ul>
        </div>
      </aside>
      {/*Sidebar Mobile*/}
      <aside className={`${openMenu ==false ? 'hidden' : 'flex absolute h-full bg-gray-800 text-white w-3/4 '} `}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Profile</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Security</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Notifications</a></li>
          </ul>
        </div>
      </aside>
      {/* Content */}
      <div className="flex-1 p-8">
        {/* Mobile Menu Toggle Button (hidden on larger screens) */}
        <div className="md:hidden flex justify-end">
         { openMenu == false && <button id="menuToggle" className="text-gray-700 hover:text-gray-900 focus:outline-none" onClick={()=>{setOpenMenu(true)}}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>}
         { openMenu == true && <button id="menuToggle" className="text-gray-700 hover:text-gray-900 focus:outline-none" onClick={()=>{setOpenMenu(false)}}>
            <svg xmlns="http://www.w3.org/2000/svg"  className='w-6 h-6' viewBox="0 0 24 24">
              <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
            </svg>
          </button>}
        </div>
        {/* Profile Settings */}
        <div className="max-w-md bg-white p-8 rounded shadow-md mt-10 md:mt-0">
          {/* Avatar Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 mr-4 overflow-hidden rounded-full">
              <img src="https://source.unsplash.com/300x300/?portrait" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <label htmlFor="avatar" className="cursor-pointer text-blue-500 hover:underline">Change Picture</label>
              <input type="file" id="avatar" className="hidden" />
            </div>
          </div>
          {/* Form Section */}
          <form>
            <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Nombre</label>
                <input type="text" id="firstName" value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Telefono</label>
                <input type="text" id="lastName" value={formData.telefono} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">New Password</label>
              <input type="password" id="password" value={formData.contrasenia} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            {/* Buttons */}
            <div className="flex justify-center md:justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                type="button"
                onClick={() => alert('Changes saved!')}
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;