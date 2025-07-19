import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tecnologias = [
  { nombre: "React", url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { nombre: "Tailwind CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { nombre: "JavaScript", url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
  { nombre: "HTML", url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { nombre: "CSS", url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { nombre: "Firebase", url: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { nombre: "GitHub", url: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
  { nombre: "Python", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
  { nombre: "Java", url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
  { nombre: "Flutter", url: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png" },
  { nombre: "Dart", url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg" },
  { nombre: "SQL", url: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" },
  { nombre: "MySQL", url: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
  { nombre: "Postman", url: "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png" },
  { nombre: "VS Code", url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" },
  { nombre: "BossStrat", url: "https://upload.wikimedia.org/wikipedia/commons/e/e9/TradingView_Logo.png" },
];

const Tecnologias = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="tecnologias" className="py-16 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Tecnologías que utilizo</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {tecnologias.map((tech, index) => (
            <div key={index} className="px-4">
              <div className="bg-white/10 p-6 rounded-lg shadow-md h-60 flex flex-col justify-center items-center">
                <img src={tech.url} alt={tech.nombre} className="w-20 h-20 object-contain mb-4" />
                <p className="text-lg font-medium">{tech.nombre}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Tecnologias;
