'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './imageCarousel.module.css';

const ImageCarousel = () => {
  const carouselImages = ['/carousel/1.jpg', '/carousel/2.png', '/carousel/3.png'];

  return (
    <div className={styles.heroContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className={styles.swiper}
      >
        {carouselImages.map((src, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <p>Slide {index + 1}</p>
              <Image src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" className={styles.image} />
              <div className={styles.overlay}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
