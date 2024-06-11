import React from 'react';
import Image from 'next/image';
import styles from './navbar.module.css';
import Link from 'next/link';
import ThemeToggle from '../themeToggle/ThemeToggle';
import AuthLinks from '../authLinks/AuthLinks';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/images/instagram.png" alt="instagram" width={25} height={25} />
        <Image src="/images/facebook.png" alt="facebook" width={25} height={25} />
        <Image src="/images/youtube.png" alt="youtube" width={25} height={25} />
      </div>
      <div className={styles.logo}>RS Siaga Utama</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
