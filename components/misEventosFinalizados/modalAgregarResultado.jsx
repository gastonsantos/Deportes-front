
import React, { useEffect, useState } from 'react';
import { agregarResultadoDelEvento } from '@/services/evento/api';
import Swal from 'sweetalert2';
export default function ModalAgregarResultado({ setShowModalResultado, idEvento ,nombreEvento, actualizar}) {
 

    const [formData, setFormData] = useState({
        idEvento: idEvento,
        resultadoLocal: 0,
        resultadoVisitante: 0


    });
    const handleChange = (e) => {
        console.log(e.target, "que tiene e")
        const { name, value } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value
        }));
        console.log("AVERR", formData);
      };
    
    const agregarResultado = async () => {
    
        console.log("Que hay en data", formData);
        try {
            const response = await agregarResultadoDelEvento(formData)
            
            if (response) {
                Swal.fire({
                    title: '¡EL cargado correctamente el resultado',
                    text: 'Resultado agregado.',
                    icon: 'warning',
                    confirmButtonText: 'Continuar',
                    confirmButtonColor: '#007bff', // Adjust color as needed
                }).then(() => {
                    actualizar();
                    setTimeout(()=>{
                        setShowModalResultado(false)
                    },1000)
                   

                });
            }
        } catch (error) {
            Swal.fire({
                title: 'No se pudo cargar resultado',
                text: 'Puedes intentarlo más tarde',
                icon: 'error',
                confirmButtonText: 'OK',
                confirmButtonColor: '#007bff'
            });
        }
    
    

    }
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="absolute w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full text-white bg-gray-900 outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-center bg-neutral-800 p-5 border-b border-solid border-blueGray-200 rounded-t ">
                            <div className="text-3xl font-semibold">
                                <p>Resultado</p><p>{nombreEvento}</p>
                            </div>
                        </div>
                        {/*body*/}
                        <div className=''>
                            <form action="">
                                <div className="mt-1 p-2 flex justify-center text-2xl font-semibold">
                                    <div className='text-center p-1'>
                                        <p className='p-2 '>Local</p>
                                        <input className="bg-transparent border text-center" type="number" name="resultadoLocal" id="resultadoLocal"
                                        value={formData.resultadoLocal}
                                        onChange={handleChange}
                                        />
                                    </div>
                                    <div className='text-center p-1'>
                                        <p className='p-2 border-white'>Visitante</p>
                                        <input className="bg-transparent border text-center" type="number" name="resultadoVisitante" id="resultadoVisitante" 
                                        value={formData.resultadoVisitante}
                                        onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                            <button
                                className="text-white hover:bg-gray-800 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModalResultado(false)}
                            >
                                Cancelar
                            </button>
                            <button
                                className="bg-emerald-500 text-white  hover:bg-emerald-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="submit"
                                onClick={() => agregarResultado()}
                            >
                                Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}
