
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

async function obtenerEventoPorIdUsuario(){
const id = localStorage.getItem("id");
const data ={
  id: id
}
 console.log("obtener Eventos", data)
  try {
    const response = await axiosInstance.post('/evento/ObtenerEventosPorUsuario',data);
    console.log('ObtenerEventosPorIdUsuario', response.data);
    return response.data;
  } catch (error) {
    throw error; 
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

async function modificarEvento(data){
  try{
      const response = await axiosInstance.post("/evento/modificarEvento", data);
      console.log("Modificar Evento", response)
      return response;
  }
  catch(error){
      throw error;
  }

}

async function cancelarEvento(data){
  try{
      const response = await axiosInstance.post("evento/CancelarEvento", data);
      return response;
  }
  catch(error){
    throw error;
  }
}
export { agregarEvento,obtenerEventos,obtenerEventoDetalle, obtenerEventoPorIdUsuario, modificarEvento, cancelarEvento};
