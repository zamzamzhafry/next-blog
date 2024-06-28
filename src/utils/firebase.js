// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blog-61e02.firebaseapp.com',
  projectId: 'blog-61e02',
  storageBucket: 'blog-61e02.appspot.com',
  messagingSenderId: '1008969595181',
  appId: '1:1008969595181:web:b05f7f629217c72283bba4',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
