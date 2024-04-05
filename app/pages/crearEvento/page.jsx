"use client"
import { NavBar } from "@/components/navBar/navBar";
import Carousel from "@/components/carousel/carousel"
export default function Crear() {
  return (
    <div>
        <NavBar/>  
        <h2 className="leading-relaxed text-lg text-gray-400 p-4">Crear evento</h2>
        <div className="container fluid items-center justify-center flex flex-wrap">
        
        <div className="w-1/2 text-center mt-2 font-medium text-3xl leading-tight ">
        <h2>¿Qué vas a jugar?</h2>
        <Carousel/>
        {/*agregar un aviso de que aun no se puede crear un deporte en caso de que no exista 
        En segundo lugar agregar la opcion de crear evento con el forumario ya que al estar vacio, deberira decir algo como 
        "Aun no hay eventos, porque no creas uno? o alguna frase con un boton al form */}

        </div>
        </div>
    </div>

    
  );
}