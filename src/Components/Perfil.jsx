import React from 'react';
import perfilImg from "../Components/Images/foto2.png"; // Ajusta la ruta si está en otra carpeta


const Perfil = () => {
  return (
    <section className="text-white py-20 px-6" id="perfil">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-black/60 p-10 rounded-2xl shadow-2xl">
        {/* Imagen de perfil */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
          <img
            src={perfilImg}
            alt="Romel Romero"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Texto de presentación */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">¡Hola! Soy Romel Romero</h2>
          <p className="text-lg text-gray-300 mb-4">
            Ingeniero de Software graduado en la Universidad de las Fuerzas Armadas ESPE. Apasionado por el desarrollo web full stack, con experiencia en React, Node.js, PHP y más.
          </p>
          <p className="text-md text-gray-400 mb-6">
            Me destaco por mi responsabilidad, resolución de problemas y trabajo en equipo. Me apasiona entregar soluciones funcionales con enfoque en el usuario final.
          </p>
          <a
            href="#contacto"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-2 rounded-md transition"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};

export default Perfil;