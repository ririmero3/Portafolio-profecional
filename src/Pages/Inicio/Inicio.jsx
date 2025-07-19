// src/Pages/Inicio.jsx
import React from 'react';
import Destrezas from '../../Components/Destrezas';
import Tecnologias from '../../Components/Tecnologias';
import Proyectos from '../../Components/Proyectos';
import Perfil from '../../Components/Perfil';
import Contactos from '../../Components/Contacto';

const Inicio = () => {

    return (
        <div className="w-full">

            {/* Perfil */}
            <div
                id="perfil"
                className="max-w-7xl mx-auto mt-10"
            >
                <Perfil />
            </div>
            {/* Tecnología */}
            <div id="tecnologias" className="max-w-7xl mx-auto mt-10">
                <Tecnologias />
            </div>
            {/* Proyecto */}
            <div id="proyectos" className="max-w-7xl mx-auto mt-10">
                <Proyectos />
            </div>
            {/* Destreza */}
            <div
                id="destrezas"
                className="max-w-7xl mx-auto mt-10"
            >
                <Destrezas />
            </div>





            {/* Contactos */}
            <div id="contacto" className="text-center m-10 px-4">
                <Contactos/>
            </div>

        </div>


    );
};

export default Inicio;
