import { Movie } from "@/types";

import { MovieCard } from "@/components";

import styles from "./page.module.scss";

const getMovie = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);
    return (await res.json()) as Movie;
  } catch (error) {
    throw new Error("Failed to fetch movie");
  }
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getMovie(id);
  return (
    <main className={styles.container}>
      <MovieCard movie={movie} isPoster />
    </main>
  );
};

export default Page;
