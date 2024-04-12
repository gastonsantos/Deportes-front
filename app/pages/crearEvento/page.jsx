"use client"
import { NavBar } from "@/components/navBar/navBar";
import Carousel from "@/components/carousel/carousel";
import Informacion from "@/components/infoAd/informacion";
import Image from "next/image";
export default function Crear() {
  return (
    <div>
      <NavBar />
      <div className="absolute w-screen h-screen">
      <Image
          src="/images/imagen-login.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute w-screen h-screen"
        />
      </div>
      <div className="relative hidden sm:block">
        <Informacion/>
        </div>
        <div className="container fluid items-center justify-center flex flex-wrap">
        
          <div className="relative w-1/2 text-center font-medium text-3xl leading-tight text-white dark:text-white">

            <h2>¿Qué vas a jugar?</h2>
            <Carousel />
            {/*agregar un aviso de que aun no se puede crear un deporte en caso de que no exista 
        En segundo lugar agregar la opcion de crear evento con el forumario ya que al estar vacio, deberira decir algo como 
        "Aun no hay eventos, porque no creas uno? o alguna frase con un boton al form */}
          </div>
        </div>
      </div>
  


  );
}