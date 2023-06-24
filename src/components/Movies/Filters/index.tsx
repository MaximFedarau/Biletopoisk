"use client";

import { FC } from "react";

import { Field } from "./Field";
import { Select } from "./Select";
import { Cinema } from "@/types";
import { genres } from "@/constants";

import styles from "./styles.module.scss";

interface Props {
  cinemas: Cinema[];
}

export const Filters: FC<Props> = ({ cinemas }) => {
  return (
    <aside className={styles.container}>
      <section className={styles.container__content}>
        <p className={styles.container__title}>Фильтр поиска</p>
        <div className={styles.container__filters}>
          <Field placeholder="Введите название" labelText="Название" />
          <Select
            labelText="Жанр"
            placeholder="Введите жанр"
            data={genres}
            onSearch={() => console.log("search")}
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
