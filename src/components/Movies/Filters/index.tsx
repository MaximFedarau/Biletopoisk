"use client";

import { FC, FormEvent } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { Field } from "./Field";
import { Select } from "./Select";
import { Cinema, GENRES } from "@/types";
import { genres } from "@/constants";
import { setSearchFiltersGenre, setSearchFiltersTitle } from "@/store/movies";

import styles from "./styles.module.scss";

interface Props {
  cinemas: Cinema[];
}

const isGenre = (value: string): value is GENRES => {
  return value === "" || Object.values<string>(GENRES).includes(value);
};

export const Filters: FC<Props> = ({ cinemas }) => {
  const dispatch = useDispatch();

  const updateFilterTitle = debounce((value: string) => {
    dispatch(setSearchFiltersTitle(value));
  }, 500);
  const updateFilterGenre = (value: string) => {
    if (!isGenre(value)) return;
    dispatch(setSearchFiltersGenre(value));
  };

  const handleTitleChange = (event: FormEvent<HTMLInputElement>) => {
    updateFilterTitle(event.currentTarget.value);
  };

  return (
    <aside className={styles.container}>
      <section className={styles.container__content}>
        <p className={styles.container__title}>Фильтр поиска</p>
        <div className={styles.container__filters}>
          <Field
            placeholder="Введите название"
            labelText="Название"
            onChange={handleTitleChange}
          />
          <Select
            labelText="Жанр"
            placeholder="Введите жанр"
            data={genres}
            onSearch={updateFilterGenre}
          />
          <Select
            labelText="Кинотеатр"
            placeholder="Введите кинотеатр"
            data={cinemas.map(({ id, name }) => ({ id, content: name }))}
            onSearch={() => console.log("search")}
          />
        </div>
      </section>
    </aside>
  );
};
