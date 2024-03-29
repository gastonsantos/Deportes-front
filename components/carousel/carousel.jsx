import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import CardCarrusel from "@/components/carousel/cardCarousel"
import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel() {
    return (

        <div className="flex items-center justify-center p-4 relative">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider className="" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                <div className="sm:min-w-96 sm:min-h-96 max-w-96 flex p-2 relative">
                    <ButtonBack role="button" aria-label="slide backward" className="p-4 cursor-pointer" id="prev">
                        <svg width={16} height={24} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1L1 7L7 13" stroke="gray" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </ButtonBack>
                    
                        <Slider >
                            <div id="slider" className="transition ease-out duration-700">
                                <Slide index={0} className="">
                                    <CardCarrusel />
                                </Slide>
                                <Slide index={1}>
                                    <CardCarrusel />
                                </Slide>
                                <Slide index={2}>
                                    <CardCarrusel />
                                </Slide>
                                <Slide index={3}>
                                    <CardCarrusel />
                                </Slide>

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
