"use client"

const MenuPerfiles = () => {

    return(
      <div className="bg-gray-800  text-white w-1/6 md:block hidden overflow-y-auto fixed top-0 left-0 h-full bg-opacity-50">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Perfiles</h2>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Perfil Usuario</a></li>
          <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Perfil Futbol</a></li>
          <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Perfil Tenis</a></li>
          <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Perfil Basquet</a></li>
          <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Notificationes</a></li>
        </ul>
      </div>
    </div>
    
    );
}

export {MenuPerfiles};