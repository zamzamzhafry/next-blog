import React from 'react';
import styles from './menu.module.css';
// import Link from 'next/link';
// import Image from 'next/image';
import MenuPosts from '../menuPosts/MenuPosts';
import { MenuCategories } from '../menuCategories/MenuCategories';

const Menu = () => {
  return (
    <div className={styles.container}>
      {/* Most Popular */}
      <h2 className={styles.subtitle}>{`Topik yang Anda sukai`}</h2>
      <h1 className={styles.title}>Paling Dicari</h1>
      <MenuPosts withImage={false} />
      {/* category pick */}
      <h2 className={styles.subtitle}>{`Temukan Topik yang Ingin Dicari`}</h2>
      <h1 className={styles.title}>Kategori</h1>
      <MenuCategories />
      {/* editor pick */}
      <h2 className={styles.subtitle}>{`Topik Pilihan Editor`}</h2>
      <h1 className={styles.title}>Paling Disukai</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
