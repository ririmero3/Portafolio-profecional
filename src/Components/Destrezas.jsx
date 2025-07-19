// src/Components/Destrezas.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destrezasBlandas = [
  { nombre: "Comunicación", url: "https://cdn-icons-png.flaticon.com/512/1006/1006361.png" },
  { nombre: "Trabajo en equipo", url: "https://cdn-icons-png.flaticon.com/512/5239/5239619.png" },
  { nombre: "Liderazgo", url: "https://cdn-icons-png.flaticon.com/512/2991/2991129.png" },
  { nombre: "Adaptabilidad", url: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png" },
  { nombre: "Pensamiento crítico", url: "https://cdn-icons-png.flaticon.com/512/927/927567.png" },
  { nombre: "Resolución de problemas", url: "https://cdn-icons-png.flaticon.com/512/3845/3845822.png" },
  { nombre: "Gestión del tiempo", url: "https://cdn-icons-png.flaticon.com/512/4211/4211763.png" },
  { nombre: "Empatía", url: "https://cdn-icons-png.flaticon.com/512/1484/1484895.png" },
];

const Destrezas = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="destrezas" className="py-16 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Destrezas Blandas</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {destrezasBlandas.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-white/10 p-6 rounded-lg shadow-md h-60 flex flex-col justify-center items-center">
                <img src={item.url} alt={item.nombre} className="w-20 h-20 object-contain mb-4" />
                <p className="text-lg font-medium">{item.nombre}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Destrezas;
