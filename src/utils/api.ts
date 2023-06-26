import { Movie, Review } from "@/types";

export const getMovie = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);
    return (await res.json()) as Movie;
  } catch (error) {
    throw new Error("Возникла ошибка при получении данных фильма");
  }
};

export const getReviews = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`);
    return (await res.json()) as Review[];
  } catch (error) {
    throw new Error("Возникла ошибка при получении рецензий");
  }
};
