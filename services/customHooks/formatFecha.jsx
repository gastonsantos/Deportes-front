import { useState, useEffect } from 'react';


const formatFecha = (evento) => {
  const [fechaFormateada, setFechaFormateada] = useState("");
 

  useEffect(() => {
    if (evento && evento.fecha) { 
        const fecha = new Date(evento.fecha);
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
        console.log("evento.Lenght", evento.length);
        setFechaFormateada(fechaFormateada);

    }
}, [evento]);
  return fechaFormateada ;
};

export default formatFecha;
