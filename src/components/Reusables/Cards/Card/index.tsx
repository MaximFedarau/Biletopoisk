import { FC, PropsWithChildren, ReactNode, useMemo } from "react";
import classNames from "classnames";

import { CARD_TITLE_SIZE } from "@/types";

import styles from "./styles.module.scss";

interface Props {
  title: ReactNode;
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
    <div className={classNames(styles.card, className)}>
      <header className={styles.card__header}>
        {typeof title === "string" ? (
          <p className={classNames(styles.card__title, titleSizeClassName)}>
            {title}
          </p>
        ) : (
          title
        )}
        {rightSection}
      </header>
      {children}
    </div>
  );
};
