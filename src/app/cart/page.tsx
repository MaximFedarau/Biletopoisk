import { NextPage } from "next";

import { Cart } from "@/components";

import styles from "./page.module.scss";

const Page: NextPage = () => {
  return (
    <main className={styles.container}>
      <Cart />
    </main>
  );
};

export default Page;
