import { FC } from "react";
import { useSelector } from "react-redux";

import { Spinner, EmptyState, MovieCard } from "@/components/Reusables";
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
        <Spinner />
      ) : (
        <>
          {filterMovies(movies, searchFilters).length > 0 ? (
            filterMovies(movies, searchFilters).map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <EmptyState />
          )}
        </>
      )}
    </section>
  );
};
