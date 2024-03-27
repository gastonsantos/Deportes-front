"use client"
import React, {useState, useEffect} from "react";
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
      ticks:{
        display:false
      }
    }
   
  },
  plugins: {
    legend: {
      display: false // Opcionalmente, puedes ocultar la leyenda si lo deseas
    }
  }
};



const PerfilesStats = () => {
  const [data, setData] = useState(defaultData);
    const [formDataStats, setFormDataStats] = useState({
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
  return (
    <>

      {/*stats card*/}
      <div className="w-1/2 bg-gray-300 p-8 rounded shadow-md mt-10 md:mt-0">
        <form >
            <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="velocidad" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Velocidad</label>
                <input type="number" name="velocidad" id="velocidad" value={formDataStats.velocidad} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="disparo" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Disparo</label>
                <input type="number" name="disparo" id="disparo" value={formDataStats.disparo} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="regate" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Regate</label>
                <input type="number" name="regate" id="regate" value={formDataStats.regate} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="fuerza" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Fuerza</label>
                <input type="number" name="fuerza" id="fuerza" value={formDataStats.fuerza} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="pase" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Pase</label>
                <input type="number" name="pase" id="pase" value={formDataStats.pase} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="defensa" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Defensa</label>
                <input type="number" name="defensa" id="defensa" value={formDataStats.defensa} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            
          
          </form>
        <Radar
          data={data}
          options={options}
        />
      
        </div>
      
    </>
  );
};

export default PerfilesStats;
