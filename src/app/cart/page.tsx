import { Metadata, NextPage } from "next";

import { Cart } from "@/components";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Корзина билетов",
};

const Page: NextPage = () => {
  return (
    <main className={styles.container}>
      <Cart />
    </main>
  );
};

export default Page;
