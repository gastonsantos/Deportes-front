"use client"
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Logout } from '@/services/login/login2';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import signalRService from "@/services/chat/api";
import { traerTodasLasNotificaciones } from "@/services/notificaciones/api";
import Link from 'next/link';
const navigation = [
  { name: 'SportSquad', href: '/', current: true },
  { name: 'Eventos', href: '/pages/deportes', current: false },
  { name: 'Crear evento', href: '/pages/crearEvento', current: false },
  { name: 'Perfiles', href: '/pages/perfil', current: false },
  { name: '¿Que es SportSquad?', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [mensajeNotificacion, setMensajeNotificacion] = useState([]);
  const [notificaciones, setNotificaciones] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  const fetchData = async () => {
    try {
        const response = await traerTodasLasNotificaciones();
        if (response) {
            const data = response
            setNotificaciones(data);
            
            console.log("PrevMensjes", mensajeNotificacion)
        }
    } catch (error) {
        console.error("Error al obtener las notificaciones:", error);
    }
};




  useEffect(() => {
    let storedUserName = Cookies.get("nombre");
    if (!storedUserName) {
      storedUserName = localStorage.getItem("nombre");
    }
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    fetchData();
    signalRService.startConnection()
      .then(() => {
        iniciarEscuchaAlertas();
      })
      .catch(error => console.error('Error al conectar a SignalR y al unirse al grupo:', error));

    signalRService.respuestaDeNotificacionSignalR((mensaje) => {
      
      setMensajeNotificacion((prevMensajes) => [...prevMensajes, mensaje]);
      setCantidad(mensajeNotificacion.length+notificaciones.length)
    });

  }, []);
  useEffect(() => {
    setCantidad(notificaciones.length + mensajeNotificacion.length);
  }, [notificaciones, mensajeNotificacion]);


  const iniciarEscuchaAlertas = async () => {
    const idUsuario1 = Cookies.get("id");
    const idUsuario = localStorage.getItem("id") // Replace with the actual user ID
    try {
      await signalRService.iniciarEscuchaAlertas(idUsuario);
    } catch (error) {
      console.error("Error al iniciar la escucha de alertas:", error);
    }
  };

  function logout() {
    const response = Logout();
    if (response) {
      router.push('/pages/login');
    } else {
      console.error('No se Pudo borrar localStorage');
    }

  }

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-20 w-auto"
                    src="/images/logo3.png"
                    alt="SportSquad"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-black' : 'navlinks hover:opacity-100',
                          'px-3 py-4 rounded-md text-lg font-normal opacity-50 hover:text-white space-links'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {userName ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                  <Link href="/pages/notificaciones">
                    <div>
                    
                      <Menu.Button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        
                        <span className="absolute -inset-1.5" />
                        
                        <span className="sr-only">View notifications</span>
                        
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                        
                        {cantidad > 0 && (
                          <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full p-1 text-xs">
                            {cantidad}
                          </span>
                        )}
                       
                        
                      </Menu.Button>
                      
                    </div>
                    </Link>
                    {/*
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    > 
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {mensajeNotificacion.map((notification) => (
                          <Menu.Item>
                            {({ active }) => (

                              <a
                                href="#"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                {notification}
                              </a>
                            )}
                          </Menu.Item>

                        ))}



                      </Menu.Items>
                    </Transition>
                    */}
                  </Menu>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Hola: {userName}
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/pages/perfil"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Perfil
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/pages/misEventos"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Mis eventos
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/pages/misParticipaciones"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Mis participaciones
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/pages/notificaciones"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Invitaciones
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              onClick={() => { logout() }}
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Salir
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              ) : (
                <a
                  href="/pages/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Iniciar Sesión
                </a>
              )}

            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export { NavBar };
