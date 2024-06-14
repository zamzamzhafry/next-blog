import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Halaman Depan RS SIAGA UTAMA</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/images/hal3.jpg" alt="featured" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam non ex, veritatis dignissimos in quae
            maiores nam enim repudiandae iste voluptates. Non modi labore temporibus esse velit praesentium. Voluptates,
            nobis?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
