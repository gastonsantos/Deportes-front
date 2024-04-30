"use client"
import React, { useState, useEffect } from "react";
import { obtengoPerfilFutbolPorId } from "@/services/login/perfiles/api";
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Margarine } from "next/font/google";


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
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 1.5,


    },
  ],
};

const options = {
  scales: {
    r: {
      display: true,
      angleLines: {
        display: false
      },
      
      suggestedMin: 0,
      suggestedMax: 100,
      ticks: {
        display: false
      },
      pointLabels: {
        font: {
          size: 15, // Ajusta el tamaño del texto de las leyendas aquí
          color: 'rgba(255, 255, 255, 1)', // Color del texto de las leyendas
        },
      },
    }

  },
  plugins: {
    legend: {
      display: false
    }
  },
  layout: {
    padding: {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    },
   
  },
  
  elements: {
    line: {
      borderWidth: 2, // Puedes ajustar el grosor de las líneas del gráfico aquí
    },
  },

  tooltip: {
    callbacks: {
      labelColor: function (context) {
        return {
          borderColor: 'rgba(255, 255, 255, 1)', // Color del borde del label
          backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo transparente
          color: 'rgba(240, 248, 255, 1)' // Color del texto del label (blanco)
        };
      },
      labelTextColor: function (context) {
        return 'rgba(255, 255, 255, 1)';
      }
    }
  }
};



const PerfilesStats = ({statsFutbol}) => {
 
  const [data, setData] = useState(defaultData);
  const [formDataStats, setFormDataStats] = useState({
    velocidad: 0,
    disparo: 0,
    regate: 0,
    fuerza: 0,
    pase: 0,
    defensa: 0
  })

  useEffect(() => {
    if (statsFutbol) {
      setFormDataStats({
        velocidad: statsFutbol.velocidad || 0,
        disparo: statsFutbol.disparo || 0,
        regate: statsFutbol.regate || 0,
        fuerza: statsFutbol.fuerza || 0,
        pase: statsFutbol.pase || 0,
        defensa: statsFutbol.defensa || 0,
      });
    }
  }, [statsFutbol]);

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


  if (!statsFutbol) {
    return <div>Loading...</div>; 
}


  return (
    <>
      <div className="flex-1 min-w-96 max-w-96 shadow-md hidden sm:block mt-2" >
        <div className="bg-gray-900 rounded-lg shadow-md p-4 text-white" style={{ backgroundImage: `url('/images/Fondo1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
          <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-2 m-10 items-center">
            <div>
              <p className="block text-white text-sm font-bold mb-1 text-center bg-amber-700 rounded-full p-1 w-32">Velocidad</p>
              <p className="w-full px-2 py-1 font-bold rounded text-white-700 text-center ">{formDataStats.velocidad}</p>
            </div>
            <div>
              <p className="block text-white text-sm font-bold mb-1 text-center bg-amber-700 rounded-full p-1 w-32">Disparo</p>
              <p className="w-full px-2 py-1 rounded font-bold text-white-700 text-center">{formDataStats.disparo}</p>
            </div>
            <div>
              <p className="block text-white text-sm font-bold mb-1 text-center bg-amber-700 rounded-full p-1 w-32 ">Regate</p>
              <p className="w-full px-2 py-1 rounded  font-bold text-white-700 text-center">{formDataStats.regate}</p>
            </div>
            <div>
              <p className="block text-white text-sm font-bold mb-1 text-center bg-amber-700 rounded-full p-1 w-32">Fuerza</p>
              <p className="w-full px-2 py-1  rounded font-bold text-white-700 text-center">{formDataStats.fuerza}</p>
            </div>
            <div>
              <p className="block text-white text-sm font-bold mb-1 text-center bg-amber-700 rounded-full p-1 w-32">Pase</p>
              <p className="w-full px-2 py-1  rounded font-bold  text-white-700 text-center">{formDataStats.pase}</p>
            </div>
            <div>
              <p className="block text-white text-sm font-bold mb-1 text-center bg-amber-700 rounded-full p-1 w-32">Defensa</p>
              <p className="w-full px-2 py-1 font-bold rounded text-white-700 text-center">{formDataStats.defensa}</p>
            </div>
          </div>

          
          <Radar className="-mt-20"
            data={data}
            options={options}
          />

        </div>
      </div>

    </>
  );
};

export default PerfilesStats;
