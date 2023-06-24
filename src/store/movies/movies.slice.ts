import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isMoviesLoading: boolean;
}

const initialState: InitialState = {
  isMoviesLoading: true,
};

export const moviesSlice = createSlice({
  name: "moviesSlice",
  initialState,
  reducers: {
    setIsMoviesLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isMoviesLoading = payload;
    },
  },
});

export const { setIsMoviesLoading } = moviesSlice.actions;
