
import { NavBar } from "@/components/navBar/navBar";
import Chat from "@/components/chat/chat";
export default function Inicio() {
  return (
    <div>
        <NavBar/>  
      <section>

            <h2>Hola este es el chat</h2>
            <Chat/>

      </section>
  </div>

    
  );
}
