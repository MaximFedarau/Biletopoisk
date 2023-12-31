import { FC, useMemo } from "react";
import { useSelector } from "react-redux";

import { Spinner, EmptyState, MovieCard } from "@/components/Reusables";
import {
  isMoviesLoadingSelector,
  moviesSelector,
  searchFiltersSelector,
} from "@/store/movies";
import { filterMovies } from "@/utils";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const MoviesDisplay: FC = () => {
  const movies = useSelector(moviesSelector);
  const searchFilters = useSelector(searchFiltersSelector);
  const isMoviesLoading = useSelector(isMoviesLoadingSelector);

  return (
    <section
      className={classNames(styles.display, {
        [styles.display_loading]: isMoviesLoading,
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
