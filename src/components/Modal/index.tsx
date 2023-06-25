import { FC, ReactNode } from "react";

import styles from "./styles.module.scss";

interface Props {
  title: string;
  children?: ReactNode;
  onClose: () => void;
  onAgree: () => void;
  onDisagree: () => void;
}

export const Modal: FC<Props> = ({
  title,
  children,
  onClose,
  onAgree,
  onDisagree,
}) => {
  return (
    <aside className={styles.container} onClick={onClose}>
      <div
        className={styles.container__content}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles["container__text-content"]}>
          <p className={styles.container__title}>{title}</p>
          {Boolean(children) && children}
        </div>
        <div className={styles.container__buttons}>
          <button className={styles.container__button_filled} onClick={onAgree}>
            Да
          </button>
          <button
            className={styles.container__button_outlined}
            onClick={onDisagree}
          >
            Нет
          </button>
        </div>
      </div>
    </aside>
  );
};
