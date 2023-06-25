"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { ticketsQuantitySelector } from "@/store/tickets";

import styles from "./styles.module.scss";

export const Cart: FC = () => {
  const ticketsQuantity = useSelector(ticketsQuantitySelector);
  return (
    <>
      <div className={styles.total}>
        <p>Итого билетов:</p>
        <p>{ticketsQuantity}</p>
      </div>
    </>
  );
};
