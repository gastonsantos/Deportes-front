"use client";
import { Dep } from '@/components/deportes/dep';
import { NavBar } from "@/components/navBar/navBar";
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";
import useAuth from '@/services/customHooks/api'


export default function Deportes() {

const { isAuthorized, checkedAuth } = useAuth();

if (!checkedAuth) {
  return null; 
}

if (!isAuthorized) {
  return <NoAutorizado />;
}

  return (
    <div>
      <NavBar />
      <section>
        <Dep />
      </section>
    </div>
  );
}
