"use client";

import { FC } from "react";

import { Filters } from "./Filters";
import { MoviesDisplay } from "./MoviesDisplay";
import { Spinner } from "@/components/Reusables";
import { useGetInitialDataQuery } from "@/store/api";

import styles from "./styles.module.scss";

export const Movies: FC = () => {
  const { data: cinemas, isLoading, isError } = useGetInitialDataQuery();

  if (isLoading)
    return (
      <div className={styles["spinner-container"]}>
        <Spinner />
      </div>
    );

  if (!cinemas || isError)
    throw new Error(
      "Возникла ошибка при получении доступа к фильмам и фильтрам"
    );

  return (
    <>
      <Filters cinemas={cinemas} />
      <MoviesDisplay />
    </>
  );
};
