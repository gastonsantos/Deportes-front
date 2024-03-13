"use client"
import React, { useState, useEffect, useRef } from 'react';
import signalRService from "@/services/chat/api";
import Cookies from 'js-cookie';
function Chat() {
  const userId = Cookies.get("id");
  const userNombre = Cookies.get("nombre");
  const groupName = "1";// aca se setearia el Id del Cuento o el Nombre del cuento que le da el Grupo de chat
  const userSendMessage = { userNombre: userNombre }; // aca se setearia el ID de Usuario o nombre
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({ cuentoId: groupName, user: userSendMessage.userNombre, message: '' });
  const [joinedGroup, setJoinedGroup] = useState(true);
  const [hubConnection, setHubConnection] = useState();
  const [mensajeUnido, setMensajeUnido] = useState();
  const [mensajeSeFue, setMensajeSeFue] = useState();
  const [mensajeNotificacion, setMensajeNotificacion] = useState();
 
  const messagesContainerRef = useRef();
  useEffect(() => {
    signalRService.startConnection()
      .then(() => {
        joinGroup();
        
      })
      .catch(error => console.error('Error al conectar a SignalR y al unirse al grupo:', error));

    signalRService.onReceiveMessage((cuentoId, user, message) => {
      const newMessage = { cuentoId, user, message };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      }
    });

    signalRService.onShowHoo((mensajeUnido) => {
      setMensajeUnido(mensajeUnido);

      setMessages(prevMessages => [
        ...prevMessages,
        { user: "Taleweave", message: mensajeUnido },
      ]);
    });

    signalRService.onShowHooExit((mensajeSeFue) => {
      setMensajeSeFue(mensajeSeFue);
      setMessages(prevMessages => [
        ...prevMessages,
        { user: "Taleweave", message: mensajeSeFue },
      ]);
    });

  

  }, []);

  //Se une a un GRUPO
  const joinGroup = async () => {
    const result = await signalRService.joinGroup(groupName, userNombre);
    if (result.success) {
      setJoinedGroup(true);
      setMensajeSeFue(null);
      setMensajeUnido(result.message);
      console.log("Ingreso al Grupo correctamente");
    } else {
      console.error('Error al unirse al grupo:', result.message);
      // Manejar el error según sea necesario
    }
  };

  const leaveGroup = async () => {
    const result = await signalRService.leaveGroup(groupName, userNombre);
    if (result.success) {
      setJoinedGroup(false);
      setMensajeUnido(null);
      setMensajeSeFue(result.message);
    } else {
      console.error('Error al salir del grupo:', result.message);
      // Manejar el error según sea necesario
    }
  };

  //Envia el Mensaje  
  const sendMessage = async () => {
    if (!message.message.trim()) {
      return;
    }

    const result = await signalRService.sendMessage(message);

    if (result.success) {
      setMessage({ ...message, message: '' });
    } else {
      console.error('Error al enviar el mensaje:', result.message);
      // Manejar el error según sea necesario
    }
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMessage({ ...message, [name]: value });
  };
  // Esto es que cuando apreta enter manda el msj
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center h-96 text-gray-800 mt-32  w-11/12 sm:w-11/12 md:w-11/12 2xl:w-fit  ">
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl overflow-hidden">
          <h2 className='text-center bg-[#0098b0] text-white p-2'>CHAT</h2>
          {joinedGroup ? ( // Si el usuario se ha unido al grupo
            <div ref={messagesContainerRef} className="flex flex-col flex-grow h-0 p-4 overflow-auto">


              {messages.map((message, index) => (

                <div key={index} className={`flex w-full mt-2 ${message.user === userNombre ? 'justify-end' : 'justify-start'}`}>
                  <div className={message.user === userNombre ? 'ml-auto' : 'mr-auto'}>
                    <div className={`${message.user === userNombre
                        ? 'bg-[#0098b0] text-white rounded-l-lg rounded-br-lg'
                        : message.user === 'Taleweave'
                          ? 'bg-green-300 p-1 rounded-lg'
                          : 'bg-[#C497c8] text-white rounded-r-lg rounded-bl-lg'
                      } p-3`}>
                      <p className="text-lg text-500">{message.user}: </p>
                      <p className="text-sm text-black font-bold">{message.message}</p>

                    </div>
                  </div>
                  {message.user !== userNombre && message.user !== 'Taleweave' && (
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                  )}


                </div>
              ))}


            </div>
          ) : (
            <p className='text-center p-4'>Únete al grupo para chatear en vivo con tus colaboradores.</p>
          )}
          {joinedGroup && (
            <div className="bg-gray-300 p-4">
              <div className="flex items-center h-10 w-full rounded px-3 text-sm">
                <input
                  type="text"
                  name="message"
                  placeholder="Escribe tu mensaje"
                  className='text-black p-2 rounded'
                  value={message.message}
                  onChange={handleInputChange}
                  onKeyPress={handleEnterKeyPress}
                />

                <button onClick={sendMessage} className="ml-2 bg-[#0098b0] text-white px-4 py-2 rounded">Enviar</button>
                <button onClick={leaveGroup} className="ml-2 bg-[#BB769D] text-white px-4 py-2 rounded">Salir</button>
              </div>


            </div>
          )}
          {!joinedGroup && (
            <div className='flex justify-center mt-48 sm:mt-48 md:mt-32 lg:mt-32 xl:mt-48 2xl:mt-48'>
              <button onClick={joinGroup} className="flex items-center gap-2 ml-2 hover:bg-[#d5d5d5] hover:text-black text-white bg-[#C497C8] px-4 py-2 rounded"> <svg
                viewBox="0 0 1000 1000"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M290 610h350c1.333 0 3.333-.667 6-2h4v92c0 26.667-9.667 50-29 70s-43 30-71 30H300L150 950V800h-50c-26.667 0-50-10-70-30S0 726.667 0 700V400c0-28 10-51.667 30-71s43.333-29 70-29h190v310M900 50c28 0 51.667 9.667 71 29s29 43 29 71v300c0 26.667-9.667 50-29 70s-43 30-71 30h-50v150L700 550H350V150c0-28 10-51.667 30-71s43.333-29 70-29h450" />
              </svg>Unirse al Grupo</button>
            </div>

          )}
        </div>
      </section>
    </>
  );
}

export default Chat;