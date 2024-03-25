'use client'
import React, {useState, useEffect} from "react";
import AsideComponent from "@/components/navegation/AsideComponent";
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
      suggestedMax: 100,
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







export default function PerfilFutbol()
{
    
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    email: '',
    telefono: '',
    contrasenia: '',
    velocidad: 0,
    disparo: 0,
    regate: 0,
    fuerza: 0,
    pase: 0,
    defensa: 0
  });
    
      const [openMenu, setOpenMenu] = useState(false)
      const [data, setData] = useState(defaultData);

      useEffect(() => {
        const newData = {
          ...defaultData,
          datasets: [
            {
              ...defaultData.datasets[0],
              data: [
                formData.velocidad,
                formData.disparo,
                formData.regate,
                formData.fuerza,
                formData.pase,
                formData.defensa
              ]
            }
          ]
        };
        setData(newData);
      }, [formData]);
    
      const handleChange = (e: any) => {
        console.log(e, "que tiene e")
        const { name, value } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
    

return(
    <>
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
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Edad</label>
                <input type="text" id="firstName" value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Altura</label>
                <input type="text" id="lastName" value={formData.telefono} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Peso</label>
                <input type="text" id="firstName" value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">Pie habil</label>
                <input type="text" id="lastName" value={formData.telefono} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">posicion</label>
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
        {/*stats card*/}
        <div className="w-1/2 bg-gray-300 p-8 rounded shadow-md mt-10 md:mt-0">
        <form >
            <div className="flex flex-col justify-center  md:grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="velocidad" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">velocidad</label>
                <input type="text" name="velocidad" id="velocidad" value={formData.velocidad} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="disparo" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">disparo</label>
                <input type="text" name="disparo" id="disparo" value={formData.disparo} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="regate" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">regate</label>
                <input type="text" name="regate" id="regate" value={formData.regate} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="fuerza" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">fuerza</label>
                <input type="text" name="fuerza" id="fuerza" value={formData.fuerza} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="pase" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">pase</label>
                <input type="text" name="pase" id="pase" value={formData.pase} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
              <div>
                <label htmlFor="defensa" className="block text-gray-700 text-sm font-bold mb-2 text-center md:text-left">defensa</label>
                <input type="text" name="defensa" id="defensa" value={formData.defensa} onChange={(e)=>handleChange(e)} className="w-full px-4 py-2 border rounded focus:outline-none focus:border-green-500 text-gray-700 border-blue-500" />
              </div>
            </div>
            
          
          </form>
        <Radar
          data={data}
          options={options}
        />
      
        </div>
      </div>
    </div>
    </>
)


}