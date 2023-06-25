import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Cinema, Movie } from "@/types";
import { setMovies, setIsMoviesLoading } from "../movies";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getInitialData: builder.query<Cinema[], void>({
      async queryFn(_arg, { dispatch }, _extraOptions, fetchWithBQ) {
        // parallel requests
        const [cinemas, movies] = await Promise.all([
          fetchWithBQ("cinemas"),
          fetchWithBQ("movies"),
        ]);

        // error handling
        if (cinemas.error) return { error: cinemas.error };
        if (movies.error) return { error: movies.error };

        // success
        dispatch(setMovies(movies.data as Movie[]));
        return {
          data: cinemas.data as Cinema[],
        };
      },
    }),
  }),
});

export const { useGetInitialDataQuery } = moviesApi;
