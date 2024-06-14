import React from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const categoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {/* <div className={styles.category}> */}
        <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
          <Image src="/images/style.png" alt="category" width={32} height={32} className={styles.image} />
          style
        </Link>
        <Link href="/blog?cat=hobby" className={`${styles.category} ${styles.hobby}`}>
          <Image src="/images/coding.png" alt="category" width={32} height={32} className={styles.image} />
          hobby
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/images/food.png" alt="category" width={32} height={32} className={styles.image} />
          food
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/images/food.png" alt="category" width={32} height={32} className={styles.image} />
          food
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/images/food.png" alt="category" width={32} height={32} className={styles.image} />
          food
        </Link>
        <Link href="/blog?cat=food" className={`${styles.category} ${styles.food}`}>
          <Image src="/images/food.png" alt="category" width={32} height={32} className={styles.image} />
          food
        </Link>
        {/* </div> */}
      </div>
    </div>
  );
};

export default categoryList;
