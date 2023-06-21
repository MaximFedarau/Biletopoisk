import { FC, PropsWithChildren } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface Props extends PropsWithChildren {
  title: string;
  className?: string;
}

export const Card: FC<Props> = ({ title, className, children }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.container__title}>{title}</p>
      {children}
    </div>
  );
};
