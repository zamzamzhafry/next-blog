'use client';

import React from 'react';
import styles from './imageCarousel.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ImageCarousel = () => {
  const carousel = [
    '/carousel/1.png',
    '/carousel/2.png',
    '/carousel/3.png',
    '/carousel/4.png',
    '/carousel/5.png',
    '/carousel/6.png',
    '/carousel/7.png',
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {carousel.map((item, index) => (
            // <Image key={index} src={item} alt={`Slide ${index + 1}`} fill className={styles.image} />
            <SwiperSlide key={index} className={styles.imageWrapper}>
              <span>Slide {index + 1}</span>
              <span>Slide {index + 1}</span>
              <Image src={item} alt={`Slide ${index + 1}`} fill className={styles.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;
