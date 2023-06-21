import { NextPage, Metadata } from "next";

import { Card } from "@/components";

import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Вопросы-ответы",
};

const Page: NextPage = () => {
  return (
    <main className={styles.container}>
      <Card title="Вопросы-ответы" />
    </main>
  );
};

export default Page;
