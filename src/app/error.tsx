"use client"; // Error components must be Client Components

import { useEffect } from "react";

import styles from "./error.module.scss";

export default function Error({ error }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className={styles.page}>
      <p className={styles.page__title}>{error.message}</p>
      <p className={styles.page__text}>Попробуйте еще раз позже</p>
    </main>
  );
}
