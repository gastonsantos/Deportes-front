import React from "react";

interface AsideProps {
  openMenu?: boolean;
}

const AsideComponent: React.FC<AsideProps> = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="bg-black text-gray-400 w-1/4 ">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Perfíl</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/pages/perfil" className="block px-4 py-2 text-sm hover:opacity-100  hover:text-white">Personal</a></li>
            <li><a href="/pages/perfil/futbol" className="block px-4 py-2 text-sm hover:opacity-100  hover:text-white">Deportista</a></li>
            <li><a href="/pages/perfil/media" className="block px-4 py-2 text-sm hover:opacity-100  hover:text-white">Estadísticas</a></li>
          </ul>
        </div>
      </aside>
     
    </>
  );
};

export default AsideComponent;
