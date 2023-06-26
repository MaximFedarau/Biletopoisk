"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { totalQuantitySelector } from "@/store/tickets";

import styles from "./styles.module.scss";

export const TotalTickets: FC = () => {
  const totalQuantity = useSelector(totalQuantitySelector);
  return (
    <aside className={styles.total}>
      <p>Итого билетов:</p>
      <p>{totalQuantity}</p>
    </aside>
  );
};
