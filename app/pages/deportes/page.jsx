"use client"
import { Dep } from '@/components/deportes/dep';
import { NavBar } from "@/components/navBar/navBar";
import Buscador from "@/components/buscador/buscador";
export default function Deportes() {
  return (
    <div>
      <NavBar />

      <section>

      <Buscador />

        <Dep />


      </section>
    </div>


  );
}