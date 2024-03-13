import axios from 'axios';
import { API } from "@/config/constants";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import axiosInstance from '@/services/interceptor/api'

async function obtenerUsuarioPorId(){
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
      const response = await axiosInstance.post('usuarios/UsuarioPerfil', data)
      console.log('Que trae usuarios Perfil', response.data);
      return response.data;
    }catch(error){
      throw error;
    }
  }

  const registrarUsuario = async (data) => {
    try {
      console.log('Entro a registrar usuario');
  
      // Realiza la solicitud y espera la respuesta
      const response = await axios.post(API + '/usuarios/RegistrarUsuario', data, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error registrando usuario:', error);
      throw error;
    }
  };
   

  export { obtenerUsuarioPorId, registrarUsuario};