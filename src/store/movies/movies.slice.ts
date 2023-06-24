import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie, GENRES, SearchFilters } from "@/types";

interface InitialState {
  isMoviesLoading: boolean;
  movies: Movie[];
  searchFilters: SearchFilters;
}

const initialState: InitialState = {
  isMoviesLoading: false,
  movies: [],
  searchFilters: {
    title: undefined,
    genre: undefined,
  },
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
    setSearchFiltersTitle: (
      state,
      { payload }: PayloadAction<string | undefined>
    ) => {
      state.searchFilters.title = payload;
    },
    setSearchFiltersGenre: (
      state,
      { payload }: PayloadAction<GENRES | undefined>
    ) => {
      state.searchFilters.genre = payload;
    },
  },
});

export const {
  setIsMoviesLoading,
  setMovies,
  setSearchFiltersGenre,
  setSearchFiltersTitle,
} = moviesSlice.actions;
