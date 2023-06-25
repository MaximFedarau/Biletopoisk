import { combineReducers } from "@reduxjs/toolkit";

import { moviesApi } from "./api";
import { moviesSlice } from "./movies";
import { ticketsSlice } from "./tickets";

export const rootReducer = combineReducers({
  [moviesApi.reducerPath]: moviesApi.reducer,
  movies: moviesSlice.reducer,
  tickets: ticketsSlice.reducer,
});
