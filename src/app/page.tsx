import { NextPage, Metadata } from "next";

import { Filters } from "@/components/Filters";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Билетопоиск. Все фильмы планеты.",
};

const Page: NextPage = () => {
  return (
    <main className={styles.container}>
      <Filters />
      <section className={styles.container__cards}>
        <h1>First!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>

        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>

        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>

        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>

        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>

        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>

        <h1>Hello!</h1>
        <h1>Hello!</h1>
      </section>
    </main>
  );
};

export default Page;
