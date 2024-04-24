
import Link from 'next/link'; // Importar Link de next/link
import React from 'react';
const BotonCrear = () => {
    <div className="fixed bottom-0 mb-10 left-1/2  transform -translate-x-1/2 z-50 flex justify-center items-center w-full">
        <Link href="/pages/crearEvento">
            <button className="animate-bounce bg-emerald-700 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center w-28 h-28 text-justify border">
                <svg className="w-10 h-10 fill-[#f1f5f9]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
                </svg>
                <span>Crear</span>
            </button>
        </Link>
    </div>


}

export default BotonCrear;