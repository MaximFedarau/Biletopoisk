import { FC } from "react";
import classNames from "classnames";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
}

export const Spinner: FC<Props> = ({ className }) => {
  return <div className={classNames(styles.spinner, className)} />;
};
