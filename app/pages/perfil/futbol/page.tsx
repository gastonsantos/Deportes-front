'use client'
import React, {useState, useEffect} from "react";
import {obtenerFichaDeportistaPorId,actualizarFichaDeportistaPorId } from "@/services/perfiles/api";
import AsideComponent from "@/components/navegation/AsideComponent";
import { NavBar } from "@/components/navBar/navBar";

import PerfilesStats from "@/components/perfiles/PerfilesStats";
import Swal from 'sweetalert2';



export default function PerfilFutbol()
{
    
  const [formData, setFormData] = useState({
    idUsuario: localStorage.getItem("id"),
    edad: '',
    altura: '',
    peso: '',
    pieHabil: '',
    manoHabil:'',
    posicion: '',
    
  });


  const [openMenu, setOpenMenu] = useState(false)
      
      
//agregar Handle de perfil usuario deportista

      useEffect(() => {
        const fetchData = async () => {
          try {
            
            const response = await obtenerFichaDeportistaPorId();
            if (response) {
              console.log("que trae la respuesta", response);
              
              const data = response
              
              setFormData(data); // Almacena los datos
            }
          } catch (error) {
            console.error("Error al obtener deportes:", error);
          }
        };
    
        fetchData();
      }, []);
    
      const handleChange = (e: any) => {
        console.log(e.target, "que tiene e")
        const { name, value } = e.target;
        console.log("Name", name, value);

        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
        console.log("AVERR", formData);
      };
    
      const handleSubmit = async () => {
        try {
          const response = await actualizarFichaDeportistaPorId(formData);
          console.log("Que trae Response", response)
          if (response) {
            console.log('Ficha deportista actualizada:', response);
            Swal.fire({
              title: '¡Ficha deportista actualizada!',
              text: 'Se ha modificado correctamente.',
              icon: 'success',
              confirmButtonText: 'Continuar',
              confirmButtonColor: '#007bff', // Adjust color as needed
            }).then(() => {
              // Optional behavior after success (e.g., redirect to login)
              
            });
          }
        } catch (error) {
          console.error('Error al actualizar la ficha deportista:', error);
        }
      };
     

return(
    <>
    <NavBar/>
        <div className="bg-gray-400 md:bg-blue-400 min-h-screen flex">
      <AsideComponent openMenu={false}/>
      {/* Content */}
      <div className="flex flex-row justify-center  mx-auto p-8 bg-blue-400">
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
        <div className="w-1/2 bg-white p-8 rounded shadow-md mt-10 md:mt-0 flex flex-col items-center justify-center">
          {/* Avatar Section */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 mr-4 overflow-hidden rounded-full">
              <img src="https://source.unsplash.com/300x300/?portrait" alt="Avatar" className="w-full h-full object-cover" />
            </div>
           
          </div>
          {/* Form Section */}
          <form >
            <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4">
          
              <div>
                <label htmlFor="edad" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Edad</label>
                <input type="number" name="edad" id="edad" value={formData.edad} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="altura" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Altura</label>
                <input type="number" name="altura" id="altura" value={formData.altura} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="peso" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Peso</label>
                <input type="number" name="peso" id="peso" value={formData.peso} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              
              
              <div className="mb-6">
              <label htmlFor="pieHabil" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Pie habil</label>
              <select
               id="pieHabil"
               value={formData.pieHabil}
               name="pieHabil"
                onChange={handleChange}
               className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500"
               >
              <option value="Derecho">Derecho</option>
             <option value="Izquierdo">Izquierdo</option>
            </select>
            </div>
            <div className="mb-6">
              <label htmlFor="manoHabil" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Mano habil</label>
              <select
               id="manoHabil"
               name="manoHabil"
               value={formData.manoHabil}
                onChange={handleChange}
               className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500"
               >
              <option value="Derecho">Derecho</option>
             <option value="Izquierdo">Izquierdo</option>
            </select>
            </div>
            </div>
            <div className="mb-6">
              <label htmlFor="posicion" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Posicion</label>
              <select id="posicion"
              name="posicion"
               value={formData.posicion}
                onChange={handleChange}
               className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500"
               >
              <option value="Arquero">Arquero</option>
             <option value="Defensor">Defensor</option>
             <option value="Mediocampista">Mediocampista</option>
             <option value="Delantero">Delantero</option>
            </select>
            </div>
            {/* Buttons */}
            <div className="flex justify-center md:justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                type="button"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      {/*statsCards*/}
    <PerfilesStats/>
      </div>
    </div>
    </>
)


}