"use client";

import { FC } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useSelector } from "react-redux";

import { totalQuantitySelector } from "@/store/tickets";
import basket from "public/icons/basket.svg";

import styles from "./styles.module.scss";

const TicketsQuantity: FC = () => {
  const totalQuantity = useSelector(totalQuantitySelector);
  if (!totalQuantity) return null;
  return (
    <div className={styles["header__basket-items-quantity"]}>
      {totalQuantity}
    </div>
  );
};

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
