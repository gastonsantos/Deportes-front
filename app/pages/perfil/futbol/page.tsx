'use client'
import React, { useState, useEffect } from "react";
import AsideComponent from "@/components/navegation/AsideComponent";
import { NavBar } from "@/components/navBar/navBar";
import PerfilesStats from "@/components/perfiles/PerfilesStats";
import PerfilesInfo from "@/components/perfiles/PerfilesInfo";
import Cookies from 'js-cookie';
import NoAutorizado from "@/components/NoAutorizado/noAutorizado";



export default function PerfilFutbol() {
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
    <>
      <NavBar />
      <div className="bg-black min-h-screen flex">
        <AsideComponent />
        {/* Content */}
        <div className="flex flex-col justify-center mx-auto p-8 bg-black-400">
          {/* Mobile Menu Toggle Button (hidden on larger screens) */}

          {/* Profile Settings */}
          <div className="w-full md:w-full bg-wblack p-8 rounded shadow-md md:mt-0 flex flex-col md:flex-row items-center justify-center">
            {/* Form Section */}
            <PerfilesInfo />
            <PerfilesStats />
          </div>
        </div>
      </div>
    </>
  );
}



