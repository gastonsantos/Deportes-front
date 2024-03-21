const PerfilJugador = () => {
    return (
      <div className="md:relative">
        <div className="md:absolute md:max-w-md md:bg-white md:bg-gray-800 md:bg-opacity-50 md:p-8 md:rounded md:shadow-md">
          <div className="flex justify-end md:hidden">
            <button id="menuToggle" className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 mr-4 overflow-hidden rounded-full">
              <img src="https://source.unsplash.com/300x300/?portrait" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <label htmlFor="avatar" className="cursor-pointer text-blue-500 hover:underline">Cambiar</label>
              <input type="file" id="avatar" className="hidden" />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block text-gray-700 text-lg font-bold mb-2 text-center">Julio "La pistoleta" Cruz</label>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Edad</label>
              <input type="number" id="firstName" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Altura cm</label>
              <input type="number" id="lastName" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700" />
            </div>
            <div>
              <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">Peso</label>
              <input type="number" id="firstName" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700" />
            </div>
            <div className="relative">
              <label htmlFor="pieHabil" className="block text-gray-700 text-sm font-bold mb-2">Pie Hábil</label>
              <select id="pieHabil" name="pieHabil" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700">
                <option value="derecho">Derecho</option>
                <option value="izquierdo">Izquierdo</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="posicion" className="block text-gray-700 text-sm font-bold mb-2">Posición</label>
            <select id="posicion" name="posicion" className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500 text-gray-700">
              <option value="arquero">Arquero</option>
              <option value="defensor">Defensor</option>
              <option value="mediocampista">Mediocampista</option>
              <option value="delantero">Delantero</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
              type="button"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export { PerfilJugador };
  