"use client";

import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  data: string[];
  offset: DOMRect;
  onClose: () => void;
  onSearch: () => void;
}

export const Dropdown: FC<Props> = ({ offset }) => {
  return (
    <div
      className={styles.container}
      style={{
        top: offset.height + offset.top,
        left: offset.left,
        width: offset.width,
      }}
    >
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
    </div>
  );
};
