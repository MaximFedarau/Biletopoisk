import { FC, HTMLProps, ReactNode, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface Props extends HTMLProps<HTMLInputElement> {
  rightSection?: ReactNode;
  labelText?: string;
  isButton?: boolean;
}

export const Field: FC<Props> = ({
  rightSection,
  labelText,
  isButton = false,
  onClick,
  ...props
}) => {
  const [id, setId] = useState("");
  useEffect(() => {
    setId(Math.random().toString(36).slice(2, 11));
  }, []);

  return (
    <div className={styles.container}>
      {Boolean(labelText) && (
        <label htmlFor={props.id || id} className={styles.container__label}>
          {labelText}
        </label>
      )}
      <div
        className={classNames(styles["container__input-container"], {
          [styles["container__input-container_group"]]: Boolean(rightSection),
          [styles["container__input-container_button"]]: isButton,
        })}
        onClick={isButton ? onClick : undefined}
      >
        <input
          {...props}
          className={classNames(styles.container__input, props.className)}
          id={props.id || id}
          onClick={isButton ? undefined : onClick}
          readOnly={isButton || props.readOnly}
        />
        {Boolean(rightSection) && rightSection}
      </div>
    </div>
  );
};
