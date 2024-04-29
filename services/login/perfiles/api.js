
import axiosInstance from '@/services/interceptor/api'

async function obtenerFichaDeportistaPorId(id){
    try{
      let parseId;
      parseId = parseInt(id,10);
      const data ={
        id : parseId,
       
      }
     
      console.log("Que hay en data", data);
      const response = await axiosInstance.post('fichas/ObtieneFichaDeportista', data)
      console.log('Que trae Ficha deportista', response.data);
      return response.data;
    }catch(error){
      throw error;
    }
  }
  const actualizarFichaDeportistaPorId = async (data) => {
    try {            
      const response = await axiosInstance.post('fichas/ActualizaFichaDeportista', data)
      console.log('Que trae usuarios PerfilDeportista', response.data);
      return response;
    } catch (error) {
      return false;
    
    }
  };

  const obtengoPerfilFutbolPorId = async(id)=>{
    try{
       
        let parseId;
        parseId = parseInt(id,10);
        const data ={
          id : parseId,
        }
        const response = await axiosInstance.post('fichas/ObtenerFichaFutbol/', data)
        console.log('Que trae usuarios PerfilFutbol', response.data);
        return response.data;
      }catch(error){
        throw error;
      }
}

const ObtenerUsuarioParaPerfilInvitacion = async(id)=>{
  try{
     
      let parseId;
      parseId = parseInt(id,10);
      const data ={
        id : parseId,
      }
      
      const response = await axiosInstance.post('usuarios/ObtenerUsuarioParaPerfilInvitacion/', data)
      console.log('Que trae usuarios PerfilUsuario', response.data);
      return response.data;
    }catch(error){
      throw error;
    }
}
const actualizarFichaFutbolPorId = async (data) => {
  console.log("Actualizar Futbol", data)
  try {         
    const response = await axiosInstance.put('fichas/ActualizarFichaFutbol/', data)
    console.log('Que trae Ficha deportista', response.data);
    return response;
  } catch (error) {
    return false;
    
  }
};




  
  export { obtenerFichaDeportistaPorId, actualizarFichaDeportistaPorId, obtengoPerfilFutbolPorId, actualizarFichaFutbolPorId,ObtenerUsuarioParaPerfilInvitacion};