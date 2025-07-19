
import React, { useEffect, useRef, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import fotos from '../Data/fotos.json';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fondoslider from '../Images/fondo primavera.jpg';
import '../../Styles/slider.css';
import avisos from '../Data/avisos';

import { Card, CardMedia, IconButton, Button } from '@mui/material';

const SliderCustom = () => {
    const [reelURLs, setReelURLs] = useState(fotos);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
    };   
    const [isSmallScreen2, setIsSmallScreen2] = useState(window.innerWidth > 930);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen2(window.innerWidth > 930);
        };

        // Agrega un event listener para manejar cambios de tamaño de pantalla
        window.addEventListener('resize', handleResize);

        // Limpia el event listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {isSmallScreen2 ? (
                <div className='w-full flex rounded-lg'>
                    <div className="flex w-1/2 fondoslider">
                        <div className="flex items-center justify-center w-full h-full" >
                            <div className="w-4/6 card-container "
                            >
                                <Slider {...settings}
                                    style={{
                                        // width:'120px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: '16px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                        // width: '150px'
                                    }}>

                                    {avisos.map((item, index) => (
                                        <div key={index} className="m-4">
                                            <p className="text-black font-semibold text-4xl mb-2">{item.title}</p>
                                            <p className="text-black text-3xl m-6">{item.description1}</p>
                                            <p className="text-black text-3xl m-6">{item.description2}</p>
                                            {/* <Button>{item.buttonText}</Button> */}

                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-1/2">
                        <div className="flex items-center justify-center w-full h-full fondoimagenes">
                            <div className="w-96 card-container">
                                <Slider {...settings2}>
                                    {reelURLs.map((url, index) => (
                                        <div key={index}>
                                            <Card elevation={0} style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: '16px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0)' }}>
                                                <CardMedia
                                                    component="img"
                                                    alt="Memoria"
                                                    className="w-full h-auto"
                                                    image={url}
                                                />
                                            </Card>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>) : (
                <div className='w-full flex-col'>
                    <div className="flex items-center justify-center w-full">
                        <div className="flex items-center justify-center w-full  fondoimagenes">
                            <div className="w-60 card-container">
                                <Slider {...settings2}>
                                    {reelURLs.map((url, index) => (
                                        <div key={index}>
                                            <Card elevation={0} style={{ backgroundColor: 'rgba(255, 255, 255, 0.0)', borderRadius: '16px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0)' }}>
                                                <CardMedia
                                                    component="img"
                                                    alt="Memoria"
                                                    className="w-full h-auto"
                                                    image={url}
                                                />
                                            </Card>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="flex fondoslider w-full items-center justify-center"
                    // style={{border: "2px solid blue"}}  
                    >
                        <div className="flex items-center justify-center w-full"
                        // style={{border: "2px solid green"}}  
                        >
                            <div className="w-80 m-4 flex items-center justify-center card-container"
                            //  style={{border: "2px solid red"}}  
                            >
                                <Slider {...settings}
                                    style={{
                                        width: '98%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        borderRadius: '16px',
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                        // width: '150px'
                                    }}>
                                    {avisos.map((item, index) => (
                                        <div key={index} className="m-1">
                                            <div className='flex flex-col items-center justify-center'>
                                                <p className="text-black font-semibold text-xl text-center">{item.title}</p>
                                                <p className="text-black text-center pr-2">{item.description1}</p>
                                                <p className="text-black text-center ">{item.description2}</p>
                                                {/* <Button>{item.buttonText}</Button> */}
                                            </div>
                                        </div>
                                    ))}

                                </Slider>
                            </div>
                        </div>


                    </div>
                </div>)}

        </>
    );
}

export default SliderCustom;


