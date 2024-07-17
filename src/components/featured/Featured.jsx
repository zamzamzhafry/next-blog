import React from 'react';
import styles from './featured.module.css';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Tentang Kami</b>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/images/hal3.jpg" alt="featured" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>RS Ortopedi Pertama di Karesidenan Pati</h1>
          <p className={styles.postDesc}>
            Rumah Sakit Orthopedi Siaga Utama (RSSU) adalah rumah sakit Orthopedi pertama Karesidenan Pati yang
            berlokasi di Purwodadi, Kabupaten Grobogan, Jawa Tengah. RSSU memiliki fasilitas poliklinik, rawat inap,
            gawat darurat, Radiologi dan Farmasi. Dilengkapi pula dengan banyak pilihan pelayanan asuransi terpadu.
          </p>
          <button className={styles.button}>Lebih Lanjut</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
