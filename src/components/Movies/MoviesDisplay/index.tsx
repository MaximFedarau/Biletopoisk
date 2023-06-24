import { FC } from "react";
import { useSelector } from "react-redux";

import { MovieCard } from "@/components/Cards";
import { moviesSelector } from "@/store/movies";

import styles from "./styles.module.scss";

export const MoviesDisplay: FC = () => {
  const movies = useSelector(moviesSelector);
  return (
    <section className={styles.container__cards}>
      {movies.map((props) => (
        <MovieCard key={props.id} {...props} />
      ))}
    </section>
  );
};
