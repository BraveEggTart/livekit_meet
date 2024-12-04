'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { encodePassphrase } from '@/lib/client-utils';
import styles from '../styles/Home.module.css';


export default function Page() {
  const router = useRouter();
  useEffect(() => {
    const serverUrl = "wss://ai.just4dream.club";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Njg5NTY2MTUsImlzcyI6IkFQSUNtTXIyNFd6Sk1vcyIsIm5hbWUiOiJUZXN0IFVzZXIiLCJuYmYiOjE3MzI5NTY2MTUsInN1YiI6InRlc3QtdXNlciIsInZpZGVvIjp7InJvb20iOiJteS1maXJzdC1yb29tIiwicm9vbUpvaW4iOnRydWV9fQ.VMzA5ZJ_oeq40FAgve0YPmeya2lceMFi2JLqHz32stA";
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
