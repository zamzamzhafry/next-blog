'use client';

import { useSession, signIn } from 'next-auth/react';
import styles from './loginPage.module.css';
import { useRouter } from 'next/navigation';

export const page = () => {
  const { data, status } = useSession();

  const router = useRouter();
  console.log(data, status);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  // console.log(data, status);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn('google')}>
          Sign in With Google
        </div>
        <div className={styles.socialButton}>Sign in With Github</div>
        <div className={styles.socialButton}>Sign in With Facebook</div>
      </div>
    </div>
  );
};
export default page;
