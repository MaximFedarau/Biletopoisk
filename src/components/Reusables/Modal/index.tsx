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
    <aside className={styles.modal} onClick={onClose}>
      <div
        className={styles.modal__content}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.modal__header}>
          <p className={styles.modal__title}>{title}</p>
          {Boolean(children) && children}
        </header>
        <div className={styles.modal__buttons}>
          <button className={styles.modal__button_filled} onClick={onAgree}>
            Да
          </button>
          <button
            className={styles.modal__button_outlined}
            onClick={onDisagree}
          >
            Нет
          </button>
        </div>
      </div>
    </aside>
  );
};
