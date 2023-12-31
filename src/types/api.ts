export enum GENRES {
  FANTASY = "fantasy",
  HORROR = "horror",
  ACTION = "action",
  COMEDY = "comedy",
}

export interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}

export interface Movie {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: GENRES;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

export interface SearchFilters {
  title?: string;
  genre?: GENRES;
  cinemaId?: string;
}

export interface Ticket {
  id: string;
  quantity: number;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}
