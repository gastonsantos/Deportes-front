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
  labels: ['Velocidad', 'Disparo', 'Regate', 'Fuerza', 'Pase', 'Defensa'],
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
      suggestedMax: 10,
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
    idUsuario: localStorage.getItem("id"),
    posicion: " ",
    media: 0,
    velocidad: 0,
    disparo: 0,
    regate: 0,
    fuerza: 0,
    pase: 0,
    defensa: 0
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
            formDataStats.disparo,
            formDataStats.regate,
            formDataStats.fuerza,
            formDataStats.pase,
            formDataStats.defensa
          ]
        }
      ]
    };
    setData(newData);
  }, [formDataStats]);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await obtengoPerfilFutbolPorId(localStorage.getItem("id"));
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
      <div className="w-1/2 bg-gray-300 p-8 rounded shadow-md mt-10 md:mt-0">
        <form >
          <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4">
            <div className="mb-6">
              <label htmlFor="posicion" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Posicion</label>
              <select id="posicion"
                name="posicion"
                value={formDataStats.posicion}
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500"
              >
                <option value="Arquero">Arquero</option>
                <option value="Defensor">Defensor</option>
                <option value="Mediocampista">Mediocampista</option>
                <option value="Delantero">Delantero</option>
              </select>
            </div>
            <div>
              <label htmlFor="velocidad" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left disable">Media</label>
              <input type="number" name="velocidad" id="velocidad" value={formDataStats.media} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>

            <div>
              <label htmlFor="velocidad" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Velocidad</label>
              <input type="number" name="velocidad" id="velocidad" value={formDataStats.velocidad} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div>
              <label htmlFor="disparo" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Disparo</label>
              <input type="number" name="disparo" id="disparo" value={formDataStats.disparo} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div>
              <label htmlFor="regate" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Regate</label>
              <input type="number" name="regate" id="regate" value={formDataStats.regate} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div>
              <label htmlFor="fuerza" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Fuerza</label>
              <input type="number" name="fuerza" id="fuerza" value={formDataStats.fuerza} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div>
              <label htmlFor="pase" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Pase</label>
              <input type="number" name="pase" id="pase" value={formDataStats.pase} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
            <div>
              <label htmlFor="defensa" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Defensa</label>
              <input type="number" name="defensa" id="defensa" value={formDataStats.defensa} onChange={(e) => handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
            </div>
          </div>




        </form>
        <Radar
          data={data}
          options={options}
        />
        <div className="flex justify-center md:justify-end mt-1">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline-gray"
            type="button"
            onClick={handleSubmit}
          >
            Aplicar
          </button>
        </div>
      </div>

    </>
  );
};

export default PerfilesStats;
