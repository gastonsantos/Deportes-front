import axios from 'axios';
import { API } from "@/config/constants";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";



    // Create axios instance with interceptors
const axiosInstance = axios.create({
    baseURL: API,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // Request interceptor to add token if available
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  // Response interceptor to handle 401 errors and refresh token
  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
  
      if (error.response && error.response.status === 401 || error.response.status === 400 && !originalRequest._retry) {
          console.log("entre aca");
        // Check if token exists and has not already been attempted to refresh
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          originalRequest._retry = true; // Mark request as retried once
          try {
            const data = { tokenExpirado: localStorage.getItem('token'), refreshToken }; 
            console.log("data", data)// Use localStorage token
            const respuesta = await renovarToken(data);
              console.log("Que devuelve renovarToken", respuesta);
            if (respuesta != null) {
              console.log("token", respuesta.token)
              const tokenNuevo = respuesta.token;
              const refreshTokenNuevo = respuesta.refreshToken;
              //guardo el token nuevo en el local Storage
  
              localStorage.setItem('token', tokenNuevo);
              localStorage.setItem('refreshToken', refreshTokenNuevo);
              console.log("token nuevo", tokenNuevo);
              console.log("RefreshToken nuevo", refreshTokenNuevo);
  
  
              //Creo la Cookie
              const expiracion = new Date(new Date().getTime() + 60 * 60 *1000); // 60 minutos
              Cookies.set("token", tokenNuevo, { expires: expiracion });
              const decode = jwtDecode(tokenNuevo);
              // Guardar otros datos en cookies si es necesario
              Cookies.set("nombre", decode.family_name, { expires: expiracion });
              Cookies.set("id", decode.nameid, { expires: expiracion });
              Cookies.set("email", decode.email, { expires: expiracion });
              Cookies.set("refreshToken", refreshTokenNuevo,{ expires: expiracion } );
              
              localStorage.setItem('id', decode.nameid);
  
              originalRequest.headers['Authorization'] = `Bearer ${respuesta.token}`;
              return axiosInstance(originalRequest);
            }
          } catch (error) {
            console.error('Error renewing token:', error);
          }
        }
      }
  
      return Promise.reject(error);
    }
  );
  
  async function renovarToken(data) { 
      try {
        const response = await axios.post(API + '/usuarios/LoginAuto', data, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
    
        console.log("Server response:", response.data);
  
      return response.data;
      } catch (error) {
        console.error("Error in request:", error);
        throw error; 
      }
    }



export default axiosInstance