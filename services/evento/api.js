
import axiosInstance from '@/services/interceptor/api'



const agregarEvento = async (data) =>  {
  try {
    const response = await axiosInstance.post('/evento/AgregarEvento', data);
    console.log('agregarEvento', response.status);

    return response;
  } catch (error) {
    throw error; 
  }
}
async function obtenerEventos() {
  try {
    const response = await axiosInstance.get('/evento/ObtenerEventos');
    console.log('ObtenerEventos', response.data);
    return response.data;
  } catch (error) {
    throw error; // Re-throw error for handling in the calling component
  }
}

async function obtenerEventoDetalle(id) {
  try {
    const response = await axiosInstance.get(`/evento/EventoDetalle/${id}`);
    console.log('ObtenerEvento', response.data);
    return response.data;
  } catch (error) {
    throw error; 
  }
}

export { agregarEvento,obtenerEventos,obtenerEventoDetalle};
