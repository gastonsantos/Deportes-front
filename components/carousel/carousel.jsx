"use client";
import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import CardCarrusel from "@/components/carousel/cardCarousel"
import "pure-react-carousel/dist/react-carousel.es.css";
import { obtenerDeportes } from "@/services/deportes/api2";
import { Deportes } from "@/model/Deportes"

/* Install pure-react-carousel using -> npm i pure-react-carousel */

const Carousel = () => {

    const [deportes, setDeportes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await obtenerDeportes();
                if (response) {
                    console.log("obtenerDeportes", response);
                    const data = response

                    setDeportes(data); // Almacena los deportes en el estado local

                }
            } catch (error) {
                console.error("Error al obtener deportes:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Deportes actualizados:", deportes);
    }, [deportes]);
    return (

        <div className="flex items-center justify-center p-4 relative">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider className="" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={8} visibleSlides={1} step={1} infinite={true}>
                <div className="max-w-96 h-full flex m-16 relative">
                    <ButtonBack role="button" aria-label="slide backward" className="p-4 cursor-pointer" id="prev">
                        <svg width={16} height={24} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="gray" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>

                    <Slider>
                        <div id="slider" className="transition ease-out duration-700">
                            {deportes.map((deporte) => (
                                <Slide key={deporte.id} index={deporte.id}>
                                    <CardCarrusel deportes={deporte} />
                                </Slide>
                            ))}
                        </div>
                    </Slider>


                    <ButtonNext role="button" aria-label="slide forward" className="p-4 cursor-pointer" id="next">
                        <svg width={16} height={24} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="gray" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonNext>
                </div>
            </CarouselProvider>


        </div>

    );
}

export default Carousel
