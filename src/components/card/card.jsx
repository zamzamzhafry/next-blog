import React from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';

export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/images/p1.jpeg" alt="featured" layout="fill" className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>12.02.2022 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Hello World This is Main title</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium nesciunt pariatur modi atque
          ducimus corrupti, aliquid perspiciatis, soluta qui velit quos laudantium aperiam voluptatum, ipsum alias. At,
          velit quod?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
