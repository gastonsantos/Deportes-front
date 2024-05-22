"use client"
import React, { useState, useEffect } from "react";
import { obtengoPerfilFutbolPorId, actualizarFichaFutbolPorId } from "@/services/login/perfiles/api";
import { Radar } from 'react-chartjs-2';
import Swal from 'sweetalert2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const defaultData = {
  labels: ['Velocidad', 'Resistencia', 'Precision', 'Fuerza', 'Tecnica', 'Agilidad'],
  datasets: [
    {
      label: 'Jugador 1',
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(00, 00, 256, 0.2)',
      borderColor: 'rgba(00, 00, 00, 1)',
      borderWidth: 1.5,


    },
  ],
};

const options = {
  scales: {
    r: {
      display: true, // Oculta las escalas de valores
      angleLines: {
        display: false

      },
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        display: false
      }
    }

  },
  plugins: {
    legend: {
      display: false
    }
  }
};



const PerfilesStats = () => {
  const [data, setData] = useState(defaultData);
  const [formDataStats, setFormDataStats] = useState({
    idUsuario: typeof window !== 'undefined' ? localStorage.getItem("id") : '',

    media: 0,
    velocidad: 0,
    resistencia: 0,
    precision: 0,
    fuerza: 0,
    tecnica: 0,
    agilidad: 0
  })

  const handleChange = (e: any) => {
    console.log(e.target, "que tiene e")
    const { name, value } = e.target;
    console.log("Name", name, value);

    setFormDataStats(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
    //console.log("AVERR", formData);
  };

  useEffect(() => {
    const newData = {
      ...defaultData,
      datasets: [
        {
          ...defaultData.datasets[0],
          data: [

            formDataStats.velocidad,
            formDataStats.resistencia,
            formDataStats.precision,
            formDataStats.fuerza,
            formDataStats.tecnica,
            formDataStats.agilidad
          ]
        }
      ]
    };
    setData(newData);
  }, [formDataStats]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await obtengoPerfilFutbolPorId(typeof window !== 'undefined' ? localStorage.getItem("id") : '');
        if (response) {
          console.log("que trae la respuesta", response);

          const data = response

          setFormDataStats(data); // Almacena los datos
        }
      } catch (error) {
        console.error("Error al obtener deportes:", error);
      }
    };

    fetchData();
  }, []);


  const handleSubmit = async () => {
    try {
      const response = await actualizarFichaFutbolPorId(formDataStats);

      if (response) {
        console.log('Ficha Futbol actualizada:', response);
        Swal.fire({
          title: '¡Ficha Futbol actualizada!',
          text: 'Se ha modificado correctamente.',
          icon: 'success',
          confirmButtonText: 'Continuar',
          confirmButtonColor: '#007bff', // Adjust color as needed
        }).then(() => {
          // Optional behavior after success (e.g., redirect to login)

        });
      }
    } catch (error) {
      console.error('Error al actualizar la ficha futbol:', error);
    }
  };


  return (
    <>

      {/*stats card*/}
      <div className="bg-black md:bg-gray-20 lg:bg-gray-200 min-h-screen flex">
        <div className="flex-1 p-8 bg-black">
          <form >
            <div className="flex flex-col items-center justify-center text-center">
              <label htmlFor="velocidad" className="block text-white text-sm font-bold md:mb-2 sm:mb-1 md:text-center disable">Media</label>
              <div className="w-12 h-12 px-3 py-2 border rounded-full bg-transparent text-center text-white border-blue-500 font-bold text-lg mb-2">{formDataStats.media}</div>
            </div>

            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
              <div>
                <label htmlFor="edad" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Velocidad</label>
                <input type="number" name="edad" id="edad" value={formDataStats.velocidad} onChange={(e) => handleChange(e)}  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="altura" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Resistencia</label>
                <input type="number" name="altura" id="altura" value={formDataStats.velocidad} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>

            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
              <div>
                <label htmlFor="edad" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Precision</label>
                <input type="number" name="edad" id="edad" value={formDataStats.precision} onChange={(e) => handleChange(e)}  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="altura" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Fuerza</label>
                <input type="number" name="altura" id="altura" value={formDataStats.fuerza} onChange={(e) => handleChange(e)}className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-4 mb-2">
              <div>
                <label htmlFor="edad" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Tecnica</label>
                <input type="number" name="edad" id="edad" value={formDataStats.tecnica} onChange={(e) => handleChange(e)}  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="altura" className="block text-white text-sm font-bold mb-2 text-center md:text-left">Agilidad</label>
                <input type="number" name="altura" id="altura" value={formDataStats.agilidad} onChange={(e) => handleChange(e)}className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
          
        




      </form>
      <div className="hidden sm:block min-w-96 max-w-96">
        <Radar

          data={data}
          options={options}
        />
      </div>



      <div className="flex justify-center md:justify-end mt-3 ">
        <button
          className="bg-purple-700 rounded-full p-2 hover:bg-purple-500 text-white px-4 py-2 rounded  focus:outline-none focus:shadow-outline-gray"
          type="button"
          onClick={handleSubmit}
        >
          Aplicar
        </button>
      </div>
      </div>
      </div>
    </>
  );
};

export default PerfilesStats;
