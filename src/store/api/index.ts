import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { Cinema, Movie } from "@/types";

interface InitialData {
  cinemas: Cinema[];
  movies: Movie[];
}

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getInitialData: builder.query<InitialData, void>({
      async queryFn(_arg, _api, _extraOptions, fetchWithBQ) {
        const [cinemas, movies] = await Promise.all([
          fetchWithBQ("cinemas"),
          fetchWithBQ("movies"),
        ]);
        if (cinemas.error)
          return { error: cinemas.error as FetchBaseQueryError };
        if (movies.error) return { error: movies.error as FetchBaseQueryError };
        return {
          data: {
            cinemas: cinemas.data,
            movies: movies.data,
          } as InitialData,
        };
      },
    }),
  }),
});

export const { useGetInitialDataQuery } = moviesApi;
