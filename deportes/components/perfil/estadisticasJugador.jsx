"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
ChartJS.register(...registerables);
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

const EstadisticasJugador = () => {

    const [valores, setValores] = useState({
        velocidad: 0,
        disparo: 0,
        regate: 0,
        fuerza: 0,
        pase: 0,
        defensa: 0
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValores({ ...valores, [name]: parseInt(value) });
      };
    
      const data = {
        labels: ['Velocidad', 'Disparo', 'Regate', 'Fuerza', 'Pase', 'Defensa'],
        datasets: [
          {
            label: 'Estadísticas',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235, 1)',
            data: Object.values(valores)
          }
        ]
      };
    
      const options = {
        scales: {
          r: {
              angleLines: {
                  display: false
              },
  
              suggestedMin: 0,
              suggestedMax: 10,   
          
          },
           
      }
      };


return (

  <div className="absolute max-w-md bg-white bg-gray-800 bg-opacity-50 p-2 rounded shadow-md">
        <div class="grid grid-cols-2 gap-4">
          <div>

         
          
        <div className="mb-4" >
              <label htmlFor="text" className="block text-gray-700 text-lg font-bold mb-1 text-center"> Agrega tus estadísticas</label>
        </div>

          <div className="mb-4">
          <label htmlFor="velocidad" class="block text-gray-700 text-sm font-bold mb-1">Velocidad</label>
          <input 
          type="number" 
          name="velocidad"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700"
          value={valores.velocidad}
          onChange={handleChange}
          min="0"
          max="10"
           />
          </div>
          
          <div className="mb-4">
          <label htmlFor="disparo" class="block text-gray-700 text-sm font-bold mb-1">Disparo</label>
          <input 
          type="number"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700"
          name="disparo"
          value={valores.disparo}
          onChange={handleChange}
          min="0"
          max="10"
          />
          </div>
          
          <div className="mb-4">
          <label htmlFor="regate" class="block text-gray-700 text-sm font-bold mb-1">Regate</label>
          <input
           type="number" 
           className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700"
           name="regate"
           value={valores.regate}
           onChange={handleChange}
           min="0"
           max="10"
           />
          </div>
          
          <div className="mb-4">
          <label htmlFor="fuerza" class="block text-gray-700 text-sm font-bold mb-1">Fuerza</label>
          <input 
          type="number" 
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700"
          name="fuerza"
          value={valores.fuerza}
          onChange={handleChange}
          min="0"
          max="10"
          />
          </div>
          <div className="mb-4">
          <label htmlFor="pase" class="block text-gray-700 text-sm font-bold mb-1">Pase</label>
          <input
           type="number" 
           className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700"
           name="pase"
           value={valores.pase}
           onChange={handleChange}
           min="0"
           max="10"
           />
          </div>
          <div className="mb-4">
          <label htmlFor="defensa" class="block text-gray-700 text-sm font-bold mb-1">Defensa</label>
          <input 
          type="number" 
          className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700"
          name="defensa"
          value={valores.defensa}
          onChange={handleChange}
          min="0"
          max="10"
          />
          </div>
          </div>
          <div>
          <Radar data={data} options={options}/>
          </div>
          </div>
    </div>
);
}
export  {EstadisticasJugador};
