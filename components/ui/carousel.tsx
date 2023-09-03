'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import RecipeCard from './recipeCard';

import 'swiper/css';
import 'swiper/css/navigation';

const RecipeCarousel = ({ recipes }) => {
  console.log(recipes);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        navigation
      ></Swiper>
    </>
  );
};

export default RecipeCarousel;
