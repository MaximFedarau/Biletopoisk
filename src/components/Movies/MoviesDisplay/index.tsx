import { FC } from "react";

import styles from "./styles.module.scss";

export const MoviesDisplay: FC = () => {
  return (
    <section className={styles.container__cards}>
      <div>Movies</div>
    </section>
  );
};
