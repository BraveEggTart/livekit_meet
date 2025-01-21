'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { encodePassphrase } from '@/lib/client-utils';
import styles from '../styles/Home.module.css';


export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const serverUrl = "wss://livekit.just4dream.club";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzM0NDExNzIsImlzcyI6IkFQSVhLVzY5aTVMNzdicSIsIm5hbWUiOiJUZXN0IFVzZXIiLCJuYmYiOjE3Mzc0NDExNzIsInN1YiI6InRlc3QtdXNlciIsInZpZGVvIjp7InJvb20iOiJteS1maXJzdC1yb29tIiwicm9vbUpvaW4iOnRydWV9fQ.siHRZwb4UB-KaStbmFfPR4elQ0ji2ne1museWTcdrwo";
    router.push(
      `/custom/?liveKitUrl=${serverUrl}&token=${token}#${encodePassphrase("7&UIJHd78i7y")}`,
    );
  }, []);

  return (
    <>
      <main className={styles.main} data-lk-theme="default">
      </main>
    </>
  );
}
