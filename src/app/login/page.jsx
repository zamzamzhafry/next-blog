import React from 'react';
import styles from './loginPage.module.css';

export const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Sign in With Google</div>
        <div className={styles.socialButton}>Sign in With Github</div>
        <div className={styles.socialButton}>Sign in With Facebook</div>
      </div>
    </div>
  );
};
export default page;
