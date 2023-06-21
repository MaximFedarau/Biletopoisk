import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  title: string;
}

export const Card: FC<Props> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>{title}</p>
      {children}
    </div>
  );
};
