"use client";

import React, { useState } from 'react';
import './StyleNavBar.css';
import Image from 'next/image';


export const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar bg-primary w-full p-1 fixed top-0 left-0 z-50">
      <div className="navbar-start border-neutral border-4 rounded-3xl ml-3" style={{ width: 'fit-content' }}>
      <Image
          src="/images/logoRaices.PNG" // Ruta pública desde la carpeta 'public'
          alt="Logo"
          width={150} // Ajusta el ancho según sea necesario
          height={50} // Ajusta la altura según sea necesario
          className='rounded-3xl'
          priority // Agrega el atributo priority
        />
      </div>

      <div className="navbar-end flex-1 justify-end relative">
        {/* Menú hamburguesa visible en pantallas pequeñas */}
        <div className="dropdown custom:hidden" style={{ width: 'fit-content' }}>
          <button
            onClick={toggleDropdown}
            className="btn btn-ghost btn-circle bg-neutral"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              className="menu-end right-0 dropdown-content bg-primary bg-opacity-80
              rounded-box z-[1] p-5  min-w-max 
              absolute transform translate-x-0 shadow scroll-mt-12"
            >
              <ul className="menu space-x-4">
                <li><a className="text-lg hover:bg-neutral">Inicio</a></li>
                <li><a className="text-lg hover:bg-neutral">Reserva con nosotros</a></li>
                <li><a className="text-lg hover:bg-neutral">Como llegar</a></li>
                <li><a className="text-lg hover:bg-neutral">Contáctanos</a></li>
                <li>
                  <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#128c7e]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Opciones del menú visible solo en pantallas grandes */}
        <div className="hidden custom:flex space-x-4">
  <ul className="menu menu-horizontal p-0 space-x-4">
    <li>
      <a className="text-xl hover:bg-neutral">Inicio</a>
    </li>
    <li>
      <a className="text-xl hover:bg-neutral">Reserva con nosotros</a>
    </li>
    <li>
      <a className="text-xl hover:bg-neutral">Cómo llegar</a>
    </li>
    <li>
      <a className="text-xl hover:bg-neutral">Contáctanos</a>
    </li>
  </ul>
</div>

      </div>
    </div>
  );
};
