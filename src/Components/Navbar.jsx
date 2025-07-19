import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import icono from "./Images/logo2.png";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black shadow-md z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <ScrollLink to="perfil" smooth={true} duration={500} className="flex items-center space-x-2 cursor-pointer" onClick={handleLinkClick}>
          <img src={icono} alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-semibold text-white">Ing. Romel Romero</h1>
        </ScrollLink>

        <div className="hidden md:flex space-x-6 items-center">
         
          <ScrollLink to="tecnologias" smooth={true} duration={500} className=" text-white hover:text-blue-500 text-sm cursor-pointer">Tecnologías</ScrollLink>
          <ScrollLink to="proyectos" smooth={true} duration={500} className=" text-white hover:text-blue-500 text-sm cursor-pointer">Proyectos</ScrollLink>
           <ScrollLink to="destrezas" smooth={true} duration={500} className=" text-white hover:text-blue-500 text-sm cursor-pointer">Destrezas</ScrollLink>
          <ScrollLink to="contacto" smooth={true} duration={500}>
            <button className="bg-yellow-400 hover:bg-yellow-300 text-sm px-4 py-2 rounded-md">Contacto</button>
          </ScrollLink>

          <div className="flex items-center space-x-4 text-xl">
            <a href="https://linkedin.com/in/romel..." target="_blank" rel="noreferrer" className=" text-white hover:text-blue-600"><LinkedIn /></a>
            <a href="https://github.com/ririmero3" target="_blank" rel="noreferrer" className=" text-white hover:text-blue-600"><GitHub /></a>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <a href="https://linkedin.com/in/romel..." target="_blank" rel="noreferrer" className=" text-white hover:text-blue-600"><LinkedIn size={20} /></a>
          <a href="https://github.com/ririmero3" target="_blank" rel="noreferrer" className=" text-white hover:text-blue-600"><GitHub size={20} /></a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black shadow-md">
      
          <ScrollLink to="tecnologias" smooth={true} duration={500} onClick={handleLinkClick} className=" text-white block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Tecnologías</ScrollLink>
          <ScrollLink to="proyectos" smooth={true} duration={500} onClick={handleLinkClick} className=" text-white block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Proyectos</ScrollLink>
              <ScrollLink to="destrezas" smooth={true} duration={500} onClick={handleLinkClick} className=" text-white block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Destrezas</ScrollLink>
          <ScrollLink to="contacto" smooth={true} duration={500} onClick={handleLinkClick} className=" text-white block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Contacto</ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
