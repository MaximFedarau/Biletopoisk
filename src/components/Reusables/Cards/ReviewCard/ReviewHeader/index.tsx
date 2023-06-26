import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  name: string;
  rating: number;
}

export const ReviewHeader: FC<Props> = ({ name, rating }) => {
  return (
    <header className={styles.header}>
      <p className={styles.header__highlight}>{name}</p>
      <div className={styles.header__rating}>
        Оценка: <p className={styles.header__highlight}>{rating}</p>
      </div>
    </header>
  );
};
