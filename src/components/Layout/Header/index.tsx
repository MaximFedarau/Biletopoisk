"use client";

import { FC } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useSelector } from "react-redux";

import { ticketsQuantitySelector } from "@/store/tickets";
import basket from "public/icons/basket.svg";

import styles from "./styles.module.scss";

const TicketsQuantity: FC = () => {
  const ticketsQuantity = useSelector(ticketsQuantitySelector);
  if (!ticketsQuantity) return null;
  return (
    <div className={styles["header__basket-items-quantity"]}>
      {ticketsQuantity}
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
          <NextImage
            src={basket}
            alt="basket"
            placeholder="blur"
            blurDataURL="public/icons/basket.svg"
          />
        </NextLink>
      </section>
    </header>
  );
};
