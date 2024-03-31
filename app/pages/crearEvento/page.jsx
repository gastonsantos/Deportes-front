"use client"
import { NavBar } from "@/components/navBar/navBar";
import Carousel from "@/components/carousel/carousel"
export default function Crear() {
  return (
    <div>
        <NavBar/>  
       
        <div className="container fluid items-center justify-center flex flex-wrap">
        <div className="w-1/2 ">
        <h2>¿Qué vas a jugar?</h2>
        <Carousel/>
        </div>
        </div>
    </div>

    
  );
}