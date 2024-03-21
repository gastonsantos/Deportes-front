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

      if (response.status === 200) {
       
        alert('Usuario registrado correctamente');
        return true; 
      } else {
      
        return false; 
      }
    } catch (error) {
      return false;
      //alert('Ocurrió un error al registrar el usuario entro al Catch');
      //throw new Error('Error');
    }
  };
  
   const confirmarEmail = async (data)=> {
    console.log("Que entra en confirmar email", data);
    const decodedToken = decodeURIComponent(data);
    console.log("Que hay en decodedToken", decodedToken);
    
    try {
      const response = await axios.post(API + '/usuarios/confirmar/',data,  {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      console.log("que hay en response", response.data)
      if (response.data == true) {
       

        return response; 
      } else {
      
        return response; 
      }
    } catch (error) {
      return response;
      //alert('Ocurrió un error al registrar el usuario entro al Catch');
      //throw new Error('Error');
    }
  };

  const cambioContransenia = async (data)=> {
    
    try {
      const response = await axios.post(API + '/usuarios/enviaMailCambioContrasenia/',data,  {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
        return response.data;    
    } catch (error) {
      return response;
      
    }
  };

  const realizarCambioContraseña = async (data)=>{
    try {
      const response = await axios.post(API + '/usuarios/cambioContrasenia/',data,  {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
        return response.data;    
    } catch (error) {
      return response;
      
    }
  }

  export { obtenerUsuarioPorId, registrarUsuario, confirmarEmail, cambioContransenia, realizarCambioContraseña};