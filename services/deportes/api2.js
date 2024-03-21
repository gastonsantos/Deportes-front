
import axiosInstance from '@/services/interceptor/api'



async function obtenerDeportes() {
  try {
    const response = await axiosInstance.get('/usuarios/AllDeportes');
    console.log('ObtenerDeportes', response.data);
    return response.data;
  } catch (error) {
    throw error; // Re-throw error for handling in the calling component
  }
}



export { obtenerDeportes};
