import { FC } from "react";
import { useSelector } from "react-redux";

import { MovieCard } from "@/components/Cards";
import { Spinner } from "@/components/Spinner";
import {
  isMoviesLoadingSelector,
  moviesSelector,
  searchFiltersSelector,
} from "@/store/movies";
import { Movie, SearchFilters } from "@/types";

import styles from "./styles.module.scss";
import classNames from "classnames";

const filterMovies = (
  movies: Movie[],
  { title: searchTitle, genre: searchGenre }: SearchFilters
) => {
  return movies.filter(({ title, genre }) => {
    return (
      title.toLowerCase().includes(searchTitle?.toLowerCase().trim() || "") &&
      (Boolean(searchGenre) ? genre === searchGenre : true)
    );
  });
};

export const MoviesDisplay: FC = () => {
  const movies = useSelector(moviesSelector);
  const searchFilters = useSelector(searchFiltersSelector);
  const isMoviesLoading = useSelector(isMoviesLoadingSelector);
  return (
    <section
      className={classNames(styles.container, {
        [styles.container_loading]: isMoviesLoading,
      })}
    >
      {isMoviesLoading ? (
        <Spinner width={64} height={64} />
      ) : (
        <>
          {filterMovies(movies, searchFilters).map((props) => (
            <MovieCard key={props.id} {...props} />
          ))}
        </>
      )}
    </section>
  );
};
