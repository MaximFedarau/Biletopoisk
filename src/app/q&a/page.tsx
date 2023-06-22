import { NextPage, Metadata } from "next";

import { Card, DetailsCard } from "@/components";

import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Вопросы-ответы",
};

const Page: NextPage = () => {
  return (
    <main className={styles.container}>
      <Card title="Вопросы-ответы" />
      <section className={styles["container__cards-container"]}>
        <DetailsCard title="Что такое Билетопоиск?">
          <p>
            Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
            фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных
            видео и интересные факты, поставить фильмам оценки, написать
            рецензии и дополнить описание фильмов.
          </p>
        </DetailsCard>
      </section>
    </main>
  );
};

export default Page;
