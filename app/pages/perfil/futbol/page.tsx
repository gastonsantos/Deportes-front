'use client'
import React, {useState, useEffect} from "react";
import AsideComponent from "@/components/navegation/AsideComponent";
import { NavBar } from "@/components/navBar/navBar";
import PerfilesStats from "@/components/perfiles/PerfilesStats";
import PerfilesInfo  from "@/components/perfiles/PerfilesInfo";



export default function PerfilFutbol()
{
    



  const [openMenu, setOpenMenu] = useState(false)
      
      
//agregar Handle de perfil usuario deportista

  

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
          <PerfilesInfo/>
        </div>
      {/*statsCards*/}
    <PerfilesStats/>
      </div>
    </div>
    </>
)


}