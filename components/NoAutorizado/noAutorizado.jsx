"use client";
import { useRouter } from 'next/navigation';

const NoEstaAutorizado = () => {
  const router = useRouter();

  const redirect = () => {
    router.push('/pages/login');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="text-center">
        <h1 className="text-5xl font-bold">No está autorizado</h1>
        <p className="py-6">
          Usted no tiene permisos para ver esta página o vista. Por favor, inicie sesión o regístrese.
        </p>
        <button onClick={redirect} className="">Comenzar</button>
      </div>
    </div>
  );
}

export default NoEstaAutorizado;
