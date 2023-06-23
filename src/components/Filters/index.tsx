"use client";

import { FC } from "react";

import { Field } from "./Field";
import { Select } from "./Select";

import styles from "./styles.module.scss";

export const Filters: FC = () => {
  return (
    <aside className={styles.container}>
      <section className={styles.container__content}>
        <p className={styles.container__title}>Фильтр поиска</p>
        <div className={styles.container__filters}>
          <Field placeholder="Введите название" labelText="Название" />
          <Select
            labelText="Жанр"
            placeholder="Введите жанр"
            data={["test1", "test2", "test3"]}
            onSearch={() => console.log("search")}
          />
          <Select
            labelText="Кинотеатр"
            placeholder="Введите кинотеатр"
            data={["test1", "test2"]}
            onSearch={() => console.log("search")}
          />
        </div>
      </section>
    </aside>
  );
};
