"use client";

import { FC } from "react";

import { Select } from "./Select";

import styles from "./styles.module.scss";

export const Filters: FC = () => {
  return (
    <aside className={styles.container}>
      <section className={styles.container__content}>
        <p className={styles.container__title}>Фильтр поиска</p>
        <div className={styles.container__filters}>
          <Select data={["test"]} onSearch={() => console.log("search")} />
        </div>
      </section>
    </aside>
  );
};
