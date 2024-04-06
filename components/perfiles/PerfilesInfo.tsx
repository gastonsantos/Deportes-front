"use client"
import React, {useState, useEffect} from "react";
import {obtenerFichaDeportistaPorId,actualizarFichaDeportistaPorId } from "@/services/login/perfiles/api";
import Swal from 'sweetalert2';
const PerfilesInfo = () => {

    const [formData, setFormData] = useState({
        idUsuario: localStorage.getItem("id"),
        edad: '',
        altura: '',
        peso: '',
        pieHabil: '',
        manoHabil:'',
        posicion: '',
        
      });
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
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
                type="button"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
          </form>
        </>

    );
}

export default PerfilesInfo;
