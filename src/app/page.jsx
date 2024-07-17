import styles from './homepage.module.css';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/Menu/Menu';
import React from 'react';
import ImageCarousel from '@/components/imageCarousel/ImageCarousel';
import Assurance from '@/components/assurance/Assurance';
import OnlineAdmission from '@/components/onlineAdmission/OnlineAdmission';
// import Link from "next/link";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className={styles.container}>
      <ImageCarousel />
      <Featured />
      <OnlineAdmission />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
      <Assurance />
    </div>
  );
}
