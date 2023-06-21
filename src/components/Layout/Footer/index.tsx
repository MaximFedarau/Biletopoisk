"use client";
import { FC } from "react";
import NextLink from "next/link";

import styles from "./styles.module.scss";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>Вопросы-ответы</p>
      <NextLink href="/about">
        <p className={styles.footer__text}>О нас</p>
      </NextLink>
    </footer>
  );
};
