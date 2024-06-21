// import React from 'react';
// import styles from './categoryList.module.css';
// import Link from 'next/link';
// import Image from 'next/image';

// const getData = async () => {
//   const res = await fetch('http://localhost:3000/api/categories', {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// };

// const categoryList = async () => {
//   const data = await getData();
//   // console.log(data);

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Popular Categories</h1>
//       <div className={styles.categories}>
//         {/* <div className={styles.category}> */}
//         {data ? (
//           data.map((item) => (
//             <Link href="/blog?cat=style" className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
//               {item.img && <Image src={item.img} alt="category" width={32} height={32} className={styles.image} />}
//               {item.title}
//             </Link>
//           ))
//         ) : (
//           <p>Error: Data is undefined or not available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default categoryList;
'use client';
import React, { useEffect, useState } from 'react';
import styles from './categoryList.module.css';
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return data;
};

const CategoryList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getData();
        setData(categories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item) => (
            <Link href={`/blog?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
              {item.img && <Image src={item.img} alt="category" width={32} height={32} className={styles.image} />}
              {item.title}
            </Link>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
