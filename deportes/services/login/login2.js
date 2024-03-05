import axios from 'axios'; // Asegúrate de importar axios correctamente
import { API } from "@/config/constants";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

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
            const refreshToken = response.data.refreshToken
            //crea la cookie
            const expiracion = new Date(new Date().getTime() + 60 * 60 *1000); // 60 minutos
            Cookies.set("token", token, { expires: expiracion });

            const decode = jwtDecode(token);
            
            // Guardar otros datos en cookies si es necesario
            Cookies.set("nombre", decode.family_name, { expires: expiracion });
            Cookies.set("id", decode.nameid, { expires: expiracion });
            Cookies.set("email", decode.email, { expires: expiracion });
            Cookies.set("refreshToken", refreshToken,{ expires: expiracion } );

            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken)
            localStorage.setItem("id",decode.nameid );

        } else {
            console.error('No se encontró el token en la respuesta del servidor');
        }

        return response.data; // Puedes retornar más información si es necesario

    } catch (error) {
        console.error('Error en la petición al servidor:', error.message);
        throw new Error('Error');
    }
}

const Logout =  () => {

      // Eliminar las cookies al cerrar sesión
    Cookies.remove("nombre");
    Cookies.remove("token");
    Cookies.remove("id");
    Cookies.remove("email");
    Cookies.remove("refreshToken");
    
    return true;
}




export { login, Logout }
 