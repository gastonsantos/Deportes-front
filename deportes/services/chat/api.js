import * as signalR from '@microsoft/signalr';
import { API } from "@/config/constants";



class SignalRService {
  constructor() {
    this.hubConnection = null;
  }

  startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl(API + "/chatHub", {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();

    return this.hubConnection.start();
  }

  onReceiveMessage = (callback) => {
    
    this.hubConnection.on('ReceiveMessage', (cuentoId, user, message) => {
      
      callback(cuentoId, user, message);
    });
  }
//de aca
iniciarEscuchaAlertas = async (idUsuario) => {
  console.log("Entre a iniciarEscuchaAlertes", idUsuario);
  // Asegurarse de que idUsuario sea un entero
  const idUsuarioInt = parseInt(idUsuario, 10); // El 10 indica que es base decimal
  if (isNaN(idUsuarioInt)) {
    console.error("idUsuario no es un número válido:", idUsuario);
    return;
  }

  try {
    await this.hubConnection.invoke("IniciarEscuchaAlertas", idUsuarioInt);
    console.log("Escuchando alertas para el usuario", idUsuarioInt);
  } catch (error) {
    console.error("Error al iniciar la escucha de alertas:", error);
  }
};

/*
  respuestaDeSignalR = (callback) => {
    this.hubConnection.on("escuchaDeAlertasIniciada", () => {
      console.log("Notificacion  de escucha de alerta  en el Servicio API");
      callback();
    });
  };
*/
  respuestaDeNotificacionSignalR = (callback) => {
    this.hubConnection.on("AlertaDeNotificacion", (mensaje) => {
     
      console.log("Notificacion que se modifico la tabel en la bd", mensaje);
      
      callback(mensaje);
    });
  };

  ///aca
  onShowHoo = (callback) => {
    this.hubConnection.on('ShowHoo', (mensajeUnido) => {
      callback(mensajeUnido);
    });

  }

  onShowHooExit = (callback) => {
    this.hubConnection.on('ShowHooExit', (mensajeSeFue) => {
      callback(mensajeSeFue);
    });
  }

  joinGroup = async (groupName, userNombre) => {
    try {
      await this.hubConnection.invoke('AddToGroup', groupName, userNombre);
      return { success: true, message: `¡${userNombre} se ha unido al grupo!` };
    } catch (error) {
      console.error('Error al unirse al grupo:', error);
      return { success: false, message: 'Error al unirse al grupo.' };
    }
  };

  leaveGroup = async (groupName, userNombre) => {
    try {
      await this.hubConnection.invoke('LeaveGroup', groupName, userNombre);
      return { success: true, message: `¡${userNombre} se ha ido del grupo!` };
    } catch (error) {
      console.error('Error al salir del grupo:', error);
      return { success: false, message: 'Error al salir del grupo.' };
    }
  };

   sendMessage = async (message) => {
    if (!message.message.trim()) {
      return { success: false, message: 'El mensaje está vacío.' };
    }

    if (this.hubConnection.state === signalR.HubConnectionState.Connected) {
      try {
        await this.hubConnection.invoke('SendToGroup', message.cuentoId, message.user, message.message);
        return { success: true, message: '' }; // Éxito, no hay mensaje de error
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
        return { success: false, message: 'Error al enviar el mensaje.' };
      }
    } else {
      console.error('No se puede enviar el mensaje: la conexión no está en el estado "Connected"');
      return { success: false, message: 'La conexión no está en el estado "Connected".' };
    }
  };


 
}


const signalRService = new SignalRService();
export default signalRService;
