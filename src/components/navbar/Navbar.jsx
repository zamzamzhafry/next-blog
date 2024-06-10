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
      <div className={styles.logo}>Ini Logo</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
