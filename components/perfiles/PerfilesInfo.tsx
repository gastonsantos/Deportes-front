import React, { useState, useEffect } from "react";
import { obtenerFichaDeportistaPorId, actualizarFichaDeportistaPorId } from "@/services/login/perfiles/api";
import Swal from 'sweetalert2';

const PerfilesInfo = () => {
  const [formData, setFormData] = useState({
    idUsuario: typeof window !== 'undefined' ? localStorage.getItem("id") : '',
    edad: '',
    altura: '',
    peso: '',
    pieHabil: '',
    manoHabil: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await obtenerFichaDeportistaPorId(typeof window !== 'undefined' ? localStorage.getItem("id") : '');
        if (response) {
          const data = response;
          setFormData(data); // Almacena los datos
        }
      } catch (error) {
        console.error("Error al obtener deportes:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await actualizarFichaDeportistaPorId(formData);
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

  return (
    <>
      <div className="bg-black md:bg-gray-20 lg:bg-gray-200 min-h-screen flex">
  
        <div className="flex-1 p-8 bg-black">
      
          <form>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
              <div>
                <label htmlFor="edad" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Edad</label>
                <input type="number" name="edad" id="edad" value={formData.edad} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="altura" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Altura</label>
                <input type="number" name="altura" id="altura" value={formData.altura} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="peso" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Peso</label>
              <input type="number" name="peso" id="peso" value={formData.peso} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
              <div className="mb-4">
                <label htmlFor="pieHabil" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Pie habil</label>
                <select
                  id="pieHabil"
                  value={formData.pieHabil}
                  name="pieHabil"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-black border-blue-500"
                >
                  <option value="Derecho">Derecho</option>
                  <option value="Izquierdo">Izquierdo</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="manoHabil" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Mano habil</label>
                <select
                  id="manoHabil"
                  name="manoHabil"
                  value={formData.manoHabil}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-black border-blue-500"
                >
                  <option value="Derecho">Derecho</option>
                  <option value="Izquierdo">Izquierdo</option>
                </select>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex justify-center md:justify-end">
              <button
                className="bg-purple-700 rounded-full p-2 hover:bg-purple-500 text-white px-4 py-2 rounded  focus:outline-none focus:shadow-outline-gray"
                type="button"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PerfilesInfo;
