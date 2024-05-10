import axios from 'axios';
import { API } from "@/config/constants";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import axiosInstance from '@/services/interceptor/api'
const traerTodasLasNotificaciones = async () => {
    const id = localStorage.getItem("id");
    const data = {
        idUsuario: id
    }
    try {

        const response = await axiosInstance.post(API + "/participantes/ObtenerNotificacionesPorIdUsuario", data);
        console.log("Obtengo Notificaciones", response.data)
        return response.data


    } catch (error) {
        throw error;
    }
}
const enviarNotificacion = async (data) => {
        console.log("Que hay en el data d Notificaciones", data);
    try {

        const response = await axiosInstance.post(API + "/participantes/AgregarParticipante", data);
        console.log("Recibo respuesta de agregarParticipante", response.status)
        return response.status


    } catch (error) {
        throw error;
    }

}
const aceptarNotificacion = async (data) => {
    console.log("Que hay en el data d Notificaciones", data);
try {

    const response = await axiosInstance.post(API + "/participantes/AceptarInvitacion", data);
    console.log("Recibo respuesta de agregarParticipante", response.status)
    return response.status
} catch (error) {
    console.log("Que hay en el data d NotificacionesError", error);
   
  throw error;
}

}
const rechazarNotificacion = async (data) => {
    console.log("Que hay en el data d Notificaciones", data);
try {

    const response = await axiosInstance.post(API + "/participantes/RechazarInvitacion", data);
    console.log("Recibo respuesta de RechazarParticipantes", response.status)
    return response.status


} catch (error) {
    throw error;
}

}

export { traerTodasLasNotificaciones, enviarNotificacion,aceptarNotificacion, rechazarNotificacion }