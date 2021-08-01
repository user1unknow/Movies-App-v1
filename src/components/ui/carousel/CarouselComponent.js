import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./styles.css";

import SwiperCore, {
    Autoplay, EffectCoverflow, Pagination
} from 'swiper/core';
import { getMovies } from '../../../helpers/getMovies';


export const CarouselComponent = () => {
    // install Swiper modules
    SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);

    const [moviesCarousel, setMoviesCarousel] = useState([])

    useEffect(() => {
        getMovies(1).then(setMoviesCarousel)
    }, [])

    const { moviesCollection = [] } = moviesCarousel

    const imagesForCarousel = moviesCollection.slice(0, 8)

    return (
        <div>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                coverflowEffect={{
                    "rotate": 45,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={true} className="mySwiper">

                {
                    imagesForCarousel.map(({ id, poster_path, title }) => (
                        <SwiperSlide key={id}>
                            <img src={poster_path} alt={title} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
