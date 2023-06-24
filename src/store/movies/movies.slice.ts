import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie } from "@/types";

interface InitialState {
  isMoviesLoading: boolean;
  movies: Movie[];
}

const initialState: InitialState = {
  isMoviesLoading: true,
  movies: [],
};

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setIsMoviesLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isMoviesLoading = payload;
    },
    setMovies: (state, { payload }: PayloadAction<Movie[]>) => {
      state.movies = payload;
    },
  },
});

export const { setIsMoviesLoading, setMovies } = moviesSlice.actions;
