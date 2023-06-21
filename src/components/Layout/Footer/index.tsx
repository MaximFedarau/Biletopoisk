"use client";
import { FC } from "react";

import styles from "./styles.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer-text"]}>Вопросы-ответы</p>
      <p className={styles["footer-text"]}>О нас</p>
    </footer>
  );
};
