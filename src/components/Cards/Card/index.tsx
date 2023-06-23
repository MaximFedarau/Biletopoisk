import { FC, PropsWithChildren, ReactNode, useMemo } from "react";
import classNames from "classnames";

import { CARD_TITLE_SIZE } from "@/types";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  className?: string;
  rightSection?: ReactNode;
  titleSize?: CARD_TITLE_SIZE;
}

export const Card: FC<PropsWithChildren<Props>> = ({
  title,
  className,
  rightSection,
  children,
  titleSize = CARD_TITLE_SIZE.BIG,
}) => {
  const titleSizeClassName = useMemo(
    () => ({
      [styles.big]: titleSize === CARD_TITLE_SIZE.BIG,
      [styles.medium]: titleSize === CARD_TITLE_SIZE.MEDIUM,
      [styles.small]: titleSize === CARD_TITLE_SIZE.SMALL,
    }),
    [titleSize]
  );

  return (
    <div className={classNames(styles.container, className)}>
      <header className={styles.container__header}>
        <p className={classNames(styles.container__title, titleSizeClassName)}>
          {title}
        </p>
        {rightSection}
      </header>
      {children}
    </div>
  );
};
