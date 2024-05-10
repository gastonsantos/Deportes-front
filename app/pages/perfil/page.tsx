"use client"
import React, { useEffect, useState } from 'react';
import {obtenerUsuarioPorId} from "@/services/usuario/api";
import AsideComponent from '@/components/navegation/AsideComponent';
import { NavBar } from "@/components/navBar/navBar";
const SettingsComponent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    apodo: ' ',
    edad: '',
    provincia: '',
    localidad: '',
    direccion: '',
    numero: '',
    email: '',
    telefono: '',
    contrasenia: '',
  });

  const handleChange = (e: any) => {
    console.log(e, "que tiene e")
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await obtenerUsuarioPorId(typeof window !== 'undefined' ? localStorage.getItem("id") : '');
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
    <>
    <NavBar/>
    <div className="bg-black md:bg-gray-20 lg:bg-gray-200 min-h-screen flex">
      
      <AsideComponent />
      {/* Content */}
      <div className="flex-1 p-8 bg-black">
      
        {/* Profile Settings */}
        <div className="max-w-md bg-black text-white-500 p-8 rounded shadow-md mt-10 md:mt-0">
          {/* Avatar Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 mr-4 overflow-hidden rounded-full">
              <img src="https://source.unsplash.com/300x300/?portrait" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <label htmlFor="avatar" className="cursor-pointer text-white hover:underline">Change Picture</label>
              <input type="file" id="avatar" className="hidden" />
            </div>
          </div>
          {/* Form Section */}
          <form>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Nombre</label>
                <input type="text" id="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="apellido" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Apellido</label>
                <input type="text" id="apellido" value={formData.apellido} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="apodo" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Apodo</label>
              <input type="text" id="apodo" value={formData.apodo} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="provincia" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Provincia</label>
                <input type="text" id="provincia" value={formData.provincia} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="localidad" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Localidad</label>
                <input type="text" id="localidad" value={formData.localidad} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label htmlFor="direccion" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Direccion</label>
                <input type="text" id="direccion" value={formData.direccion} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="numero" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Numero</label>
                <input type="text" id="numero" value={formData.numero} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm font-bold mb-2 text-center md:text-left">New Password</label>
              <input type="password" id="password" value={formData.contrasenia} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            {/* Buttons */}
            <div className="flex justify-center md:justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                type="button"
                onClick={() => alert('Changes saved!')}
              >
               Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default SettingsComponent;
