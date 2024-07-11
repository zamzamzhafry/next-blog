'use client';
import React, { useEffect, useState } from 'react';
import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

export const Card = ({ key, item }) => {
  const [sanitizedDesc, setSanitizedDesc] = useState('');
  useEffect(() => {
    // Sanitize the description only on the client side
    setSanitizedDesc(DOMPurify.sanitize(item?.desc || ''));
  }, [item.desc]);

  // item.desc = DOMPurify.sanitize(item?.desc || '');
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="featured" layout="fill" className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)} - </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
        <div className={styles.description}>
          <p dangerouslySetInnerHTML={{ __html: sanitizedDesc.substring(0, 60) }}></p>
        </div>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
