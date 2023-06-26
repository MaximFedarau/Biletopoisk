import { FC } from "react";
import NextImage from "next/image";
import NextLink from "next/link";

import { TicketsQuantity } from "./TicketsQuantity";
import basket from "public/icons/basket.svg";

import styles from "./styles.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <NextLink href="/">
        <p className={styles.header__title}>Билетопоиск</p>
      </NextLink>
      <section className={styles.header__basket}>
        <TicketsQuantity />
        <NextLink href="/cart">
          <NextImage src={basket} alt="basket" />
        </NextLink>
      </section>
    </header>
  );
};
