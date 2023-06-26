"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { totalQuantitySelector } from "@/store/tickets";

import styles from "./styles.module.scss";

export const TicketsQuantity: FC = () => {
  const totalQuantity = useSelector(totalQuantitySelector);
  if (!totalQuantity) return null;
  return <div className={styles["tickets-quantity"]}>{totalQuantity}</div>;
};
