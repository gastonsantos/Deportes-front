// Función para obtener la latitud y longitud de una dirección utilizando la API de Nominatim
async function obtenerCoordenadas(direccion) {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(direccion)}&format=json`;
  
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
  
      if (datos.length > 0) {
        const latitud = parseFloat(datos[0].lat);
        const longitud = parseFloat(datos[0].lon);
        return { latitud, longitud };
      } else {
        throw new Error('No se pudo obtener la latitud y longitud de la dirección.');
      }
    } catch (error) {
      console.error('Error al obtener la latitud y longitud:', error);
      return null;
    }
  }
  
  // Ejemplo de uso
  const direccion = '1600 Amphitheatre Parkway, Mountain View, CA'; // Dirección de ejemplo
  obtenerCoordenadas(direccion)
    .then(coordenadas => {
      if (coordenadas) {
        console.log('Latitud:', coordenadas.latitud);
        console.log('Longitud:', coordenadas.longitud);
      }
    });


  