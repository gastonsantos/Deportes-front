import React, { useEffect } from 'react';

const Mapa = ({ latitud, longitud }) => {
  useEffect(() => {
    console.log("lat y long", latitud, longitud);
    // Cargar la API de Google Maps JavaScript de forma asíncrona
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBqLokY8ybKgp1k7N-5Ja29S-K5xxIfcFU&callback=initMap`;
    script.defer = true;
    document.head.appendChild(script);

    // Función de inicialización del mapa
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: latitud, lng: longitud }, // Latitud y longitud del centro del mapa
        zoom: 10, // Nivel de zoom
      });

      // Crear un marcador en una ubicación específica
      new window.google.maps.Marker({
        position: { lat: latitud, lng: longitud }, // Latitud y longitud del marcador
        map: map,
        title: 'Aca se Juega', // Texto al pasar el mouse sobre el marcador
      });
    };
  }, []);

  return (
      
      <div className='rounded-t rounded-t rounded-l w-full h-full' id="map" />
      
  )

    
};

export default Mapa;
