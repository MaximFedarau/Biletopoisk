import { FC, PropsWithChildren, ReactNode } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  className?: string;
  rightSection?: ReactNode;
}

export const Card: FC<PropsWithChildren<Props>> = ({
  title,
  className,
  rightSection,
  children,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      <header className={styles.container__header}>
        <p className={styles.container__title}>{title}</p>
        {rightSection}
      </header>
      {children}
    </div>
  );
};
