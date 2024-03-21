"use client"
import { useEffect,useState } from 'react';
import { useParams } from 'next/navigation';
import { confirmarEmail } from '@/services/usuario/api';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
export default function ConfirmarMail() {

  const  { token } = useParams();
  const router = useRouter();
  const [confirmado, setConfirmado] = useState(false);
  const [error, setError] = useState(null);
    useEffect(() => {
      
        const fetchData = async () => {
          try {
            const response = await confirmarEmail(token);
            if (response.data) {
              console.log("que hay en response.data", response.data);
              Swal.fire({
                title: '¡Email confirmado!',
                text: 'Se ha confirmado su email correctamente.',
                icon: 'success',
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#007bff', // Adjust color as needed
              }).then(() => {
                // Optional behavior after success (e.g., redirect to login)
                router.push('/pages/login');
              });
            }else{
              Swal.fire({
                title: 'Error al confirmar email',
                text: 'Ha ocurrido un error al confirmar su email. Token Invalido', // Replace with specific error message if available
                icon: 'error',
                confirmButtonColor: '#dc3545', // Adjust color as needed
              });
              setError(response.error);
            }
          } catch (error) {
            Swal.fire({
              title: 'Error al confirmar email algo salio mal',
              text: 'Ha ocurrido un error al confirmar su email.', // Replace with specific error message if available
              icon: 'error',
              confirmButtonColor: '#dc3545', // Adjust color as needed
            });
            setError(err.message)
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
    {confirmado && <h2>Correo electrónico confirmado!</h2>}
    {error && <p>Error al confirmar el correo electrónico: {error}</p>}
  </div>

    
  );
}
