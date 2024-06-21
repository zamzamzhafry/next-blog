'use client';
import React from 'react';
import styles from './writePage.module.css';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

// import { byPrefixAndName } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fas,
  // far, fal
} from '@fortawesome/free-solid-svg-icons';

const WritePage = () => {
  //write section
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  // auth section

  const { status } = useSession();

  const router = useRouter();

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'authenticated') {
    // router.push('/');
  }
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Masukkan Judul Berita" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={fas.faPlus} />
          {/*
           <FontAwesomeIcon icon={fas.faHouse} />
          <FontAwesomeIcon icon={far.faHouse} />
          <FontAwesomeIcon icon={fal.faCheese} />
          <Image src="/images/plus.png" alt="plus" width={20} height={20} />
           */}
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <FontAwesomeIcon icon={fas.faImage} />
              {/* <Image src="/images/image.png" alt="plus" width={20} height={20} /> */}
            </button>
            <button className={styles.addButton}>
              <FontAwesomeIcon icon={fas.faArrowUpFromBracket} />
              {/* <Image src="/images/external.png" alt="plus" width={20} height={20} /> */}
            </button>
            <button className={styles.addButton}>
              <FontAwesomeIcon icon={fas.faFilm} />
              {/* <Image src="/images/video.png" alt="plus" width={20} height={20} /> */}
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tulis artikel disini ..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
