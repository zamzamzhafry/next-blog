import React from 'react';
import styles from './menuCategories.module.css';
import Link from 'next/link';

export const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link href="/" className={`${styles.travel} ${styles.categoryItem}`}>
        Travel
      </Link>
      <Link href="/" className={`${styles.coding} ${styles.categoryItem}`}>
        Coding
      </Link>
      <Link href="/" className={`${styles.food} ${styles.categoryItem}`}>
        Food
      </Link>
      <Link href="/" className={`${styles.hobby} ${styles.categoryItem}`}>
        Hobby
      </Link>
      <Link href="/" className={`${styles.style} ${styles.categoryItem}`}>
        Style
      </Link>
      <Link href="/" className={`${styles.sport} ${styles.categoryItem}`}>
        Sport
      </Link>
      <Link href="/" className={`${styles.fashion} ${styles.categoryItem}`}>
        Fashion
      </Link>
    </div>
  );
};
