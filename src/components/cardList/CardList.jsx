import React from 'react';
import styles from './cardList.module.css';
import Pagination from '../pagination/Pagination';
import Card from '../card/card';

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const data = await getData(page);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {data?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default CardList;
