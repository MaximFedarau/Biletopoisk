"use client";

import { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { Field } from "./Field";
import { Select } from "./Select";
import { Cinema, GENRES, Movie } from "@/types";
import { genres } from "@/constants";
import {
  isMoviesLoadingSelector,
  searchFiltersSelector,
  setIsMoviesLoading,
  setMovies,
  setSearchFiltersCinemaId,
  setSearchFiltersGenre,
  setSearchFiltersTitle,
} from "@/store/movies";

import styles from "./styles.module.scss";

interface Props {
  cinemas: Cinema[];
}

const isGenre = (value: string): value is GENRES => {
  return value === "" || Object.values<string>(GENRES).includes(value);
};

export const Filters: FC<Props> = ({ cinemas }) => {
  const dispatch = useDispatch();

  const isMoviesLoading = useSelector(isMoviesLoadingSelector);
  const searchFilters = useSelector(searchFiltersSelector);

  const updateFilterTitle = debounce((value: string) => {
    dispatch(setSearchFiltersTitle(value));
  }, 500);
  const updateFilterGenre = (value: string) => {
    if (!isGenre(value)) return;
    dispatch(setSearchFiltersGenre(value));
  };
  const getMoviesByCinemaId = async (value?: string) => {
    dispatch(setIsMoviesLoading(true));
    try {
      const res = await fetch(
        `http://localhost:3001/api/movies${!!value ? `?cinemaId=${value}` : ""}`
      );
      const movies = (await res.json()) as Movie[];
      dispatch(setSearchFiltersCinemaId(value));
      dispatch(setMovies(movies));
    } finally {
      dispatch(setIsMoviesLoading(false));
    }
  };

  const handleTitleChange = (event: FormEvent<HTMLInputElement>) => {
    updateFilterTitle(event.currentTarget.value);
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.filters__content}>
        <p className={styles.filters__title}>Фильтр поиска</p>
        <div className={styles.filters__column}>
          <Field
            placeholder="Введите название"
            labelText="Название"
            onChange={handleTitleChange}
            disabled={isMoviesLoading}
            defaultValue={searchFilters.title}
          />
          <Select
            labelText="Жанр"
            placeholder="Введите жанр"
            data={genres}
            onSearch={updateFilterGenre}
            disabled={isMoviesLoading}
            defaultId={searchFilters.genre}
          />
          <Select
            labelText="Кинотеатр"
            placeholder="Введите кинотеатр"
            data={[
              { id: "", content: "Не выбран" },
              ...cinemas.map(({ id, name }) => ({ id, content: name })),
            ]}
            onSearch={getMoviesByCinemaId}
            disabled={isMoviesLoading}
            defaultId={searchFilters.cinemaId}
          />
        </div>
      </div>
    </aside>
  );
};
