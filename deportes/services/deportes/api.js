import axios from 'axios'; // Asegúrate de importar axios correctamente
import { API } from "@/config/constants";
import Cookies from 'js-cookie';

async function obtenerDeportes() {
  const token = Cookies.get('token');
    return axios.get(API + '/usuarios/AllDeportes',
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        //'Access-Control-Allow-Origin': '*'
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