import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {/* <div className={styles.logo}>RS Siaga Utama</div> */}
        <div className={styles.logo}>
          <Image src={'/images/logo_rs.png'} alt="logo" width={75} height={75} className={styles.logoIcon} />
          <h1 className={styles.logoText}>RS Siaga Utama</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate impedit quis ex distinctio, omnis
          incidunt ipsa, mollitia, eos architecto quam quaerat. Repellat, veniam praesentium? Dolor sed asperiores harum
          excepturi.
        </p>
        <div className={styles.icons}>
          <Image src="/images/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/images/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/images/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Food</Link>
          <Link href="/">Hobby</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Socials</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
          <Link href="/">Tiktok</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
