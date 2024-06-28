'use client';
import React, { useEffect, useState } from 'react';
import styles from './writePage.module.css';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { app } from '@/utils/firebase';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const storage = getStorage(app);

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState('');
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [catSlug, setCatSlug] = useState('');
  const { status } = useSession();
  const router = useRouter();
  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  const handleSubmit = async () => {
    const res = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, desc: value, img: media, slug: slugify(title), catSlug: catSlug || 'style' }),
    });
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    } else {
      // Handle error
      console.error('Failed to create post');
    }
  };

  const upload = () => {
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setMedia(downloadURL);
        });
      },
    );
  };

  useEffect(() => {
    file && upload();
  }, [file]);

  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === 'authenticated') {
    // router.push('/');
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Masukkan Judul Berita"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* TODO : Fetch Categories from Prisma dan masukkan ke dalam select gunakan general atau sesuatu sebagai default value */}
      <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src={'/images/plus.png'} alt="plus" width={20} height={20} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/images/image.png" alt="plus" width={20} height={20} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/images/external.png" alt="plus" width={20} height={20} />
            </button>
            <button className={styles.addButton}>
              <Image src="/images/video.png" alt="plus" width={20} height={20} />
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
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
