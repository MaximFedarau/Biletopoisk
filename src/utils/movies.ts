import { Movie, SearchFilters } from "@/types";

export const filterMovies = (
  movies: Movie[],
  { title: searchTitle, genre: searchGenre }: SearchFilters
) => {
  return movies.filter(({ title, genre }) => {
    return (
      title.toLowerCase().includes(searchTitle?.toLowerCase().trim() || "") &&
      (Boolean(searchGenre) ? genre === searchGenre : true)
    );
  });
};
