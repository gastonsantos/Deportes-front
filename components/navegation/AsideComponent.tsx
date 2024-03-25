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
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Profile</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Futbol</a></li>
            
          </ul>
        </div>
      </aside>
      {/* Sidebar Mobile */}
      <aside className={`${openMenu ? '' : 'hidden'} flex absolute h-full bg-gray-800 text-white w-3/4`}>
        <div className="p-4">
          <h2 className="text-2xl font-semibold">Settings</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Profile</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Security</a></li>
            <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Notifications</a></li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default AsideComponent;
