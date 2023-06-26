import { ReactNode } from "react";
import { NextPage, Metadata } from "next";

import { Card, DetailsCard } from "@/components";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Вопросы-ответы",
};

interface Question {
  question: string;
  answer: ReactNode;
}

const questions: Question[] = [
  {
    question: "Что такое Билетопоиск?",
    answer: (
      <p>
        Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть
        фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео
        и интересные факты, поставить фильмам оценки, написать рецензии и
        дополнить описание фильмов.
      </p>
    ),
  },
  {
    question: "Какой компании принадлежит Билетопоиск?",
    answer: <p>{`ООО "Билетопоиск" принадлежит компании "Яндекс".`}</p>,
  },
  {
    question: "Как купить билеты на Билетопоиск?",
    answer: (
      <>
        <p>1. Перейдите на страницу фильма.</p>
        <p>
          2. Нажмите кнопку <b>Расписание и билеты</b> в левой части страницы.
        </p>
        <p>3. Выберите кинотеатр и дату.</p>
        <p>4. Нажмите кнопку со временем сеанса.</p>
        <p>5. Выберите места в зале. Внизу отобразится стоимость билетов.</p>
        <p>
          6. Нажмите кнопку <b>Далее</b>, введите адрес электронной почты и
          номер телефона. После нажмите кнопку <b>Продожить</b>.
        </p>
        <p>
          7. Если все данные корректны, нажмите кнопку <b>Перейти к оплате.</b>
        </p>
      </>
    ),
  },
  {
    question: "Как оставить отзыв на Билетопоиск?",
    answer: (
      <>
        <p>
          Чтобы написать отзыв, откройте страницу фильма и нажмите кнопку{" "}
          <b>Написать рецензию</b> в блоке <b>Рецензии зрителей</b>.
        </p>
        <p>
          Все отзывы должны соответствовать правилам модерации и
          пользовательскому соглашению, поэтому отзыв проверят. Модерация в
          среднем занимает от 30 минут до нескольких часов.
        </p>
      </>
    ),
  },
];

const Page: NextPage = () => {
  return (
    <main className={styles.page}>
      <Card title="Вопросы-ответы" />
      <section className={styles.page__cards}>
        {questions.map(({ question, answer }) => (
          <DetailsCard title={question} key={question}>
            <div className={styles.page__answer}>{answer}</div>
          </DetailsCard>
        ))}
      </section>
    </main>
  );
};

export default Page;
