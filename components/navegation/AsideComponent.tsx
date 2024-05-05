import React from "react";

interface AsideProps {
  openMenu?: boolean;
}

const AsideComponent: React.FC<AsideProps> = ({ openMenu }) => {
  return (
    <>
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-1/4 hidden md:block">
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Perfil</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="/pages/perfil" className="block px-4 py-2 text-sm hover:bg-gray-700">Personal</a></li>
            <li><a href="/pages/perfil/futbol" className="block px-4 py-2 text-sm hover:bg-gray-700">Deportista</a></li>
            
          </ul>
        </div>
      </aside>
     
    </>
  );
};

export default AsideComponent;
