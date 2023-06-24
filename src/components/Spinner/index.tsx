import { FC } from "react";

import styles from "./styles.module.scss";

interface Props {
  width: string | number;
  height: string | number;
}

export const Spinner: FC<Props> = (props) => {
  return <div className={styles.spinner} style={props} />;
};
