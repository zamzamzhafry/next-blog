import React from 'react';
import Styles from './singlePage.module.css';
import Image from 'next/image';
import Menu from '@/components/Menu/Menu';
import Comments from '@/components/comments/Comments';

const SinglePage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.infoContainer}>
        <div className={Styles.textContainer}>
          <h1 className={Styles.title}>This is Title</h1>
          <div className={Styles.user}>
            <div className={Styles.userImageContainer}>
              <Image src="/images/p1.jpeg" alt="featured" fill className={Styles.avatar}></Image>
            </div>
            <div className={Styles.userTextContainer}>
              <span className={Styles.username}>John Doel</span>
              <span className={Styles.date}>12.02.2022</span>
            </div>
          </div>
        </div>
        <div className={Styles.imageContainer}>
          <Image src="/images/hal3.jpg" alt="featured" fill className={Styles.image}></Image>
        </div>
      </div>

      <div className={Styles.content}>
        <div className={Styles.post}>
          <div className={Styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt amet eius non mollitia suscipit
              totam omnis voluptate quisquam expedita aspernatur officiis, in consectetur nisi iste magnam repudiandae
              dolorem maxime?
            </p>
            <h4>Lorem, ipsum dolor sit amet consectetur </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt amet eius non mollitia suscipit
              totam omnis voluptate quisquam expedita aspernatur officiis, in consectetur nisi iste magnam repudiandae
              dolorem maxime?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt amet eius non mollitia suscipit
              totam omnis voluptate quisquam expedita aspernatur officiis, in consectetur nisi iste magnam repudiandae
              dolorem maxime?
            </p>
          </div>
          <div className={Styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
