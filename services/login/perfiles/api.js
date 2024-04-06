
import axiosInstance from '@/services/interceptor/api'

async function obtenerFichaDeportistaPorId(){
    try{
      //const idUsuario = Cookies.get("id");
      const idUsuario = localStorage.getItem("id");
      let parseId;
      parseId = parseInt(idUsuario,10);
      const data ={
        id : parseId,
        //id : 1002,
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
      console.log('Entro a actualizar ficha', data);
                  
      const response = await axiosInstance.post('fichas/ActualizaFichaDeportista', data)
      console.log('Que trae Ficha deportista', response.data);
      return response;
    } catch (error) {
      return false;
      //alert('Ocurrió un error al registrar el usuario entro al Catch');
      //throw new Error('Error');
    }
  };

  const obtengoPerfilFutbolPorId = async()=>{
    try{
        //const idUsuario = Cookies.get("id");
        const idUsuario = localStorage.getItem("id");
        let parseId;
        parseId = parseInt(idUsuario,10);
        const data ={
          id : parseId,
        }
        console.log("Que hay en data", data);
        const response = await axiosInstance.post('fichas/ObtenerFichaFutbol/', data)
        console.log('Que trae usuarios Perfil', response.data);
        return response.data;
      }catch(error){
        throw error;
      }
}

const actualizarFichaFutbolPorId = async (data) => {
  try {         
    /*const response = await axiosInstance.post('fichas/ActualizaFichaDeportista', data)
    console.log('Que trae Ficha deportista', response.data);
    return response;*/
  } catch (error) {
    return false;
    //alert('Ocurrió un error al registrar el usuario entro al Catch');
    //throw new Error('Error');
  }
};




  
  export { obtenerFichaDeportistaPorId, actualizarFichaDeportistaPorId, obtengoPerfilFutbolPorId, actualizarFichaFutbolPorId};