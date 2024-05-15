"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Dep } from '@/components/deportes/dep';
import { NavBar } from "@/components/navBar/navBar";
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";

export default function Deportes() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    const id = Cookies.get('id');
    if (id) {
      setIsAuthorized(true);
    }
    setCheckedAuth(true); 
  }, []);

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
