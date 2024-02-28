import axios from 'axios'; // Asegúrate de importar axios correctamente
import { API } from "@/config/constants";
import { jwtDecode } from "jwt-decode";

const login = async (data) => {
    try {
        const response = await axios.post(API + '/usuarios/Login', data, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

        if (response.data) {
            // Obtener el token del usuario de los datos
            const token = response.data.token;
            const resultado = response.data.resultado;
            const msj = response.data.msj;
            // Guardar el token en el local storage
            localStorage.setItem("token", token);
            
            const decode = jwtDecode(token);
            
            localStorage.setItem("nombre", decode.family_name)
            localStorage.setItem("id", decode.nameid)
            localStorage.setItem("email", decode.email)
          


        } else {
            console.error('No se encontró el token en la respuesta del servidor');
        }

        return response.data; // Puedes retornar más información si es necesario

    } catch (error) {
        console.error('Error en la petición al servidor:', error.message);
        throw new Error('Error');
    }
}

export { login }
 