import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";

const moviesReducerSelector = ({ movies }: RootState) => movies;

export const isMoviesLoadingSelector = createSelector(
  [moviesReducerSelector],
  ({ isMoviesLoading }) => isMoviesLoading
);

export const moviesSelector = createSelector(
  [moviesReducerSelector],
  ({ movies }) => movies
);
