import { FC } from "react";
import { useSelector } from "react-redux";

import { MovieCard } from "@/components/Cards";
import { moviesSelector, searchFiltersSelector } from "@/store/movies";
import { Movie, SearchFilters } from "@/types";

import styles from "./styles.module.scss";

const filterMovies = (
  movies: Movie[],
  { title: searchTitle, genre: searchGenre }: SearchFilters
) => {
  return movies.filter(({ title, genre }) => {
    return (
      title.toLowerCase().includes(searchTitle?.toLowerCase() || "") &&
      (Boolean(searchGenre) ? genre === searchGenre : true)
    );
  });
};

export const MoviesDisplay: FC = () => {
  const movies = useSelector(moviesSelector);
  const searchFilters = useSelector(searchFiltersSelector);
  return (
    <section className={styles.container__cards}>
      {filterMovies(movies, searchFilters).map((props) => (
        <MovieCard key={props.id} {...props} />
      ))}
    </section>
  );
};
