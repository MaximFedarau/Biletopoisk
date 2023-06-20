"use client";
import { FC, useState } from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import classNames from "classnames";

import basket from "public/icons/basket.svg";
import styles from "./styles.module.css";

export const Header: FC = () => {
  const [itemsQuantity] = useState(0);
  return (
    <header className={classNames("layout-container", styles.header)}>
      <NextLink href="/">
        <p className={styles.header__title}>Билетпоиск</p>
      </NextLink>
      <section className={styles.header__basket}>
        {Boolean(itemsQuantity) && (
          <div className={styles["header__basket-items-quantity"]}>
            {itemsQuantity}
          </div>
        )}
        <NextImage src={basket} alt="basket" />
      </section>
    </header>
  );
};
