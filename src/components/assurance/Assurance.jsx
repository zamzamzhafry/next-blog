import React from 'react';
import styles from './assurance.module.css';
import Image from 'next/image';

const Assurance = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Partner Asuransi Kami</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/images/bpjs.webp" alt="bpjs" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/bpjstk.webp" alt="bpjstk" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/jr.webp" alt="jr" fill className={styles.image} />
        </div>
        <div className={styles.imgContainer}>
          <Image src="/images/taspen.webp" alt="taspen" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Assurance;
