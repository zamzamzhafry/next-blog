import React from 'react';
import styles from './menuPosts.module.css';
import Link from 'next/link';
import Image from 'next/image';

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/images/p1.jpeg" alt="featured" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doel</span>
            <span className={styles.date}> - 22.12.2022</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/images/p1.jpeg" alt="featured" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doel</span>
            <span className={styles.date}> - 22.12.2022</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/images/p1.jpeg" alt="featured" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doel</span>
            <span className={styles.date}> - 22.12.2022</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
