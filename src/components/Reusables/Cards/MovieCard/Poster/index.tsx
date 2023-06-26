import { FC, ReactNode } from "react";

import { Movie } from "@/types";

import styles from "./styles.module.scss";

interface Props {
  movie: Movie;
  posterContent: { label: string; text?: ReactNode }[];
}

export const Poster: FC<Props> = ({ movie, posterContent }) => {
  return (
    <div className={styles.poster}>
      {posterContent.map(({ label, text }) => (
        <div key={label} className={styles.poster__row}>
          <p className={styles.poster__label}>{label}</p>
          <p className={styles.poster__text}>{text}</p>
        </div>
      ))}
      <div className={styles.poster__description}>
        <p className={styles.poster__label}>Описание</p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};
