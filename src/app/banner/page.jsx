'use client';

import Image from 'next/image';
import React from 'react';
import styles from './bannerPage.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { app } from '@/utils/firebase';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const Banner = () => {
  const { status } = useSession();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [title, setTitle] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  useEffect(() => {
    if (file) {
      const storage = getStorage(app);
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error(error);
          setUploadError(true);
          setUploadComplete(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
            setUploadComplete(true);
            setUploadError(false);
          });
        },
      );
    }
  }, [file]);

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'unauthenticated') {
    router.push('/');
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

  const handleSubmit = async () => {
    const res = await fetch('/api/banner', {
      method: 'POST',
      body: JSON.stringify({
        title,
        // desc: value,
        img: media,
        slug: slugify(title),
        // catSlug: catSlug || 'style', // If not selected, choose the general category
      }),
    });
    if (res.status === 200) {
      // const data = await res.json();
      router.push(`/`);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Upload Banner</h1>
      <input type="text" placeholder="Masukkan Judul" className={styles.input} />
      <button>
        <label htmlFor="file">Upload Banner</label>
        <input type="file" id="file" className={styles.file} accept="image/*" />
      </button>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Banner;
