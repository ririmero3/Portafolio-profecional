// src/Components/Images/Proyectos.jsx
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "./Images/Proyectos/img1.PNG";
import img2 from "./Images/Proyectos/img2.PNG";
import img3 from "./Images/Proyectos/img3.PNG";
import img4 from "./Images/Proyectos/img4.PNG";
import img5 from "./Images/Proyectos/img5.PNG";
import img6 from "./Images/Proyectos/img6.PNG";
import img7 from "./Images/Proyectos/img7.PNG";
import img8 from "./Images/Proyectos/img8.jpeg";
import img9 from "./Images/Proyectos/img9.jpeg";
import img10 from "./Images/Proyectos/img10.jpeg";
import img11 from "./Images/Proyectos/img11.jpeg";
import img12 from "./Images/Proyectos/img12.jpeg";
import img13 from "./Images/Proyectos/img13.jpeg";
import img14 from "./Images/Proyectos/img14.jpeg";
import img15 from "./Images/Proyectos/img15.jpeg";
import img16 from "./Images/Proyectos/img16.jpeg";
import img17 from "./Images/Proyectos/img17.jpeg";
import img18 from "./Images/Proyectos/img18.jpeg";
import img19 from "./Images/Proyectos/img19.jpeg";

Modal.setAppElement("#root");

const Proyectos = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [modalTitle, setModalTitle] = useState("");
    const [modalStartIndex, setModalStartIndex] = useState(0);

    const abrirModal = (imagenes, titulo, indexImagenClickeada) => {
        console.log("ABRIENDO MODAL");
        console.log("Título:", titulo);
        console.log("Imágenes:", imagenes);
        console.log("Índice clickeado:", indexImagenClickeada);

        setModalImages(imagenes);
        setModalTitle(titulo);
        setModalStartIndex(indexImagenClickeada);
        setModalOpen(true);
    };


    const cerrarModal = () => {
        setModalOpen(false);
        setModalImages([]);
        setModalStartIndex(0);
    };

    const proyectos = [
        {
            titulo: "Página Web de Academia Meta",
            descripcion:
                "Sitio web informativo para una academia que ofrece cursos presenciales. Incluye catálogo de programas, horarios, requisitos, duración y certificación.",
            enlace: "https://academia-8e9c3.web.app/",
            imagenes: [img1, img2, img3, img4],
        },
        {
            titulo: "Página Web de Bello Arte Flores",
            descripcion:
                "Tienda en línea para la venta de arreglos florales personalizados. Incluye catálogo, opción de contacto por WhatsApp y diseño optimizado para móviles.",
            enlace: "https://belloarteflores.com/",
            imagenes: [img5, img6, img7],
        },
        {
            titulo: "Página Web de Facturación Electrónica",
            descripcion:
                "Frontend para un sistema de facturación electrónica. Proyecto desarrollado desde cero, enfocado en UI/UX.",
            imagenes: [img8],
        },
        {
            titulo: "App Móvil para Bello Arte",
            descripcion:
                "Aplicación móvil para administrar los pedidos, arreglos florales, gastos e inventario de la floristería.",
            imagenes: [img9, img10, img11, img12, img13, img14, img15],
        },
        {
            titulo: "Página Web para Administrar Bases Florales",
            descripcion:
                "Sistema web para la gestión de gastos, generación de notas de venta y control de bases florales entregadas.",
            imagenes: [img16, img17, img18, img19],
        },
    ];

    return (
        <section className="text-white py-12 bg-black bg-opacity-70">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16">Proyectos</h2>

                {proyectos.map((proyecto, index) => (
                    <div key={index}>
                        <div
                            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } items-center gap-10 mb-10`}
                        >
                            {/* Carrusel */}
                            <div className="md:w-1/2 w-full">
                                <Carousel
                                    showThumbs={false}
                                    infiniteLoop
                                    autoPlay
                                    interval={3000}
                                    showStatus={false}
                                    showIndicators
                                >
                                    {proyecto.imagenes.map((img, i) => (
                                        <div key={i}>
                                            <img
                                                src={img}
                                                alt={`${proyecto.titulo} ${i + 1}`}
                                                className={`${proyecto.titulo.includes("App Móvil") ? "h-80" : "h-64"
                                                    } object-contain mx-auto cursor-pointer`}
                                                onClick={() => {
                                                    console.log(`Se hizo clic en ${proyecto.titulo} imagen ${i}`);
                                                    abrirModal(proyecto.imagenes, proyecto.titulo, i);
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>

                            {/* Descripción */}
                            <div className="md:w-1/2 w-full">
                                <h3 className="text-2xl font-semibold mb-3">{proyecto.titulo}</h3>
                                <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
                                {proyecto.enlace && (
                                    <a
                                        href={proyecto.enlace}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-5 py-2 rounded-md transition"
                                    >
                                        Ver sitio web
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Separador */}
                        {index !== proyectos.length - 1 && (
                            <hr className="border-yellow-400 my-10" />
                        )}
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={cerrarModal}
                contentLabel="Imágenes del proyecto"
                className="max-w-4xl mx-auto mt-24 bg-black rounded-xl p-4 outline-none"
                overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50"
            >
                <div className="text-right">
                    <button
                        onClick={cerrarModal}
                        className="text-white text-2xl font-bold mb-2 hover:text-yellow-400"
                    >
                        &times;
                    </button>
                </div>
                <h2 className="text-xl font-semibold text-white text-center mb-4">
                    {modalTitle}
                </h2>
                <Carousel
                    selectedItem={modalStartIndex}
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={4000}
                    showStatus={false}
                    showIndicators
                >
                    {modalImages.map((img, idx) => (
                        <div key={idx}>
                            <img
                                src={img}
                                alt={`Imagen ${idx + 1}`}
                                className="h-[500px] object-contain mx-auto"
                            />
                        </div>
                    ))}
                </Carousel>
            </Modal>
        </section>
    );
};

export default Proyectos;
