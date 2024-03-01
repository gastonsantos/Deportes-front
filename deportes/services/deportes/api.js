import axios from 'axios'; // Asegúrate de importar axios correctamente
import { API } from "@/config/constants";

async function obtenerDeportes() {
    return axios.get(API+`/usuarios/AllDeportes`,{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
  })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error('Error');
    });
      
  }
  export {obtenerDeportes}