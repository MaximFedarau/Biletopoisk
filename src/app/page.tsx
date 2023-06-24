import { NextPage, Metadata } from "next";

import { Movies } from "@/components/Movies";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Билетопоиск. Все фильмы планеты.",
};

const Page: NextPage = () => {
  return (
    <main className={styles.container}>
      <Movies />
    </main>
  );
};

export default Page;
