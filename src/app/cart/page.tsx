import { Metadata } from "next";

import { Cart } from "@/components";

import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Корзина билетов",
};

const Page = () => {
  return (
    <main className={styles.page}>
      <Cart />
    </main>
  );
};

export default Page;
