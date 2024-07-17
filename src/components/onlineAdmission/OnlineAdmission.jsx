'use client';
import React, { useState } from 'react';
import styles from './onlineAdmission.module.css';
import Link from 'next/link';
import Image from 'next/image';
// import Button from '@/components/button/Button';

const OnlineAdmission = () => {
  const [optionSelected, setOptionSelected] = useState(false);

  const handleSelectChange = (e) => {
    setOptionSelected(e.target.value !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted');
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Pendaftaran Online Mandiri</h1>
        <h3 className={styles.subtitle}>Untuk Pendaftaran via Mobile JKN</h3>
        <div className={styles.logoContainer}>
          <Link
            href={'https://play.google.com/store/apps/details?id=app.bpjs.mobile&pcampaignid=web_share'}
            className={styles.link}
          >
            {/* <Image src="/images/mjkn.png" fill className={styles.image} alt="Logo" /> */}
            <button className={styles.button}>Mobile JKN</button>
          </Link>
        </div>
        <span>--------------------------------------------------------</span>
        <h3 className={styles.subtitle}>Untuk Pendaftaran via Umum :</h3>
        <label htmlFor="option" className={styles.label}>
          Opsi Pelayanan:
        </label>
        <select id="option" onChange={handleSelectChange} className={styles.select}>
          <option value="">--Pilih Pelayanan Online--</option>
          <option value="option1">Poliklinik Orthopedi</option>
          <option value="option2">Poliklinik Bedah</option>
        </select>

        {optionSelected && (
          <>
            <label htmlFor="date" className={styles.label}>
              Tanggal Periksa:
            </label>
            <input type="date" id="date" className={styles.input} />

            <label htmlFor="text" className={styles.label}>
              Nama Pasien:
            </label>
            <input type="text" id="text" className={styles.input} placeholder="Enter text" />
            <label htmlFor="text" className={styles.label}>
              No. Whatsapp:
            </label>
            <input type="number" id="number" className={styles.input} placeholder="Enter text" />

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default OnlineAdmission;
