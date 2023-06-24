import { FC } from "react";
import { useSelector } from "react-redux";

import { moviesSelector } from "@/store/movies";

import styles from "./styles.module.scss";

export const MoviesDisplay: FC = () => {
  const movies = useSelector(moviesSelector);
  return (
    <section className={styles.container__cards}>
      {movies.map(({ id, title }) => (
        <div key={id}>
          <p>{title}</p>
        </div>
      ))}
    </section>
  );
};
