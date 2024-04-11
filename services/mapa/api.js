const obtenerCoordenadas = async (direccion1) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(direccion1)}&format=json`;

    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      if (datos.length > 0) {
        return datos;
        //const latitud = parseFloat(datos[0].lat);
        //const longitud = parseFloat(datos[0].lon);
      
      } else {
        throw new Error('No se pudo obtener la latitud y longitud de la dirección.');
      }
    } catch (error) {
      console.error('Error al obtener la latitud y longitud:', error);
      setCoordenadas(null);
    }
  };

  export {obtenerCoordenadas}