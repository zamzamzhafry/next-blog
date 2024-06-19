import React from 'react';
import Styles from './comments.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
  const status = 'authenticated';
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={Styles.write}>
          <textarea placeholder="Write a comment ..." className={Styles.input} />
          <button className={Styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login" className={Styles.link}>
          Login to write a comment
        </Link>
      )}
      <div className={Styles.comments}>
        <div className={Styles.comment}>
          <div className={Styles.user}>
            <Image src="/images/p1.jpeg" alt="user" width={50} height={50} className={Styles.image} />
            <div className={Styles.userInfo}>
              <span className={Styles.username}>John Doe</span>
              <span className={Styles.date}>01.01.2024</span>
            </div>
          </div>
          <p className={Styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis corrupti a quia repellat impedit rem aut
            ipsam omnis quibusdam nulla doloremque, veniam magni laudantium nesciunt maxime delectus minus aperiam
            assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
