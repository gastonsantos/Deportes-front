
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
    const response = await axiosInstance.get(`/evento/ObtenerEventos?Limit=${50}&Offset=${0}`);
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

async function obtenerEventoQueParticipo(){
  const id = localStorage.getItem("id");
  const data ={
    id: id
  }
   console.log("obtener Eventos", data)
    try {
      const response = await axiosInstance.post('/evento/ObtenerEventosQueParticipo',data);
      console.log('ObtenerEventosPorIdUsuario', response.data);
      return response.data;
    } catch (error) {
      throw error; 
    }
  }
  async function obtenerEventosQueParticipoFinalizados(){
    const id = localStorage.getItem("id");
    const data ={
      id: id
    }
     console.log("obtener Eventos", data)
      try {
        const response = await axiosInstance.post('/evento/ObtenerEventosQueParticipoFinalizado',data);
        console.log('ObtenerEventosPorIdUsuario', response.data);
        return response.data;
      } catch (error) {
        throw error; 
      }
    }

    async function obtenerEventosPorUsuarioFinalizados(){
      const id = localStorage.getItem("id");
      const data ={
        id: id
      }
       console.log("obtener Eventos", data)
        try {
          const response = await axiosInstance.post('/evento/ObtenerEventosPorUsuarioFinalizado',data);
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

async function buscarEventoPorDeporteCiudad(data){
  const datos={
    buscador : data
  }
  try{
    const response = await axiosInstance.post("evento/buscarEventoPorDeporteCiudad", datos);
    return response;
}
catch(error){
  throw error;
}
}

async function agregarResultadoDelEvento(data){
  const idEvento = parseInt(data.idEvento);
  const resultadoLocal = parseInt(data.resultadoLocal);
  const resultadoVisitante = parseInt(data.resultadoVisitante);

  // Crear el objeto con los datos convertidos
  const datos ={
    idEvento: idEvento,
    resultadoLocal: resultadoLocal,
    resultadoVisitante: resultadoVisitante
  };
 console.log("AgregarResultado", data);
  try{
    const response = await axiosInstance.post("evento/agregarResultadoDelEvento", datos);
    return response;
}
catch(error){
  throw error;
}
}


export { agregarEvento,obtenerEventos,obtenerEventoDetalle, buscarEventoPorDeporteCiudad,obtenerEventosPorUsuarioFinalizados,obtenerEventosQueParticipoFinalizados,obtenerEventoPorIdUsuario, modificarEvento, cancelarEvento, obtenerEventoQueParticipo, agregarResultadoDelEvento};
