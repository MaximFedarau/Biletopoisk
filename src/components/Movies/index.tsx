"use client";

import { FC } from "react";

import { Filters } from "../Filters";
import { Spinner } from "../Spinner";
import { MoviesDisplay } from "./MoviesDisplay";
import { useGetInitialDataQuery } from "@/store/api";

import styles from "./styles.module.scss";

export const Movies: FC = () => {
  const { data, isLoading } = useGetInitialDataQuery();
  if (isLoading)
    return (
      <div className={styles["spinner-container"]}>
        <Spinner width={64} height={64} />
      </div>
    );
  return (
    <>
      <Filters />
      <MoviesDisplay />
    </>
  );
};
