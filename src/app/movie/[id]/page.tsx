import { Movie, Review } from "@/types";

import { MovieCard, ReviewCard } from "@/components";

import styles from "./page.module.scss";

const getMovie = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/movie?movieId=${id}`);
    return (await res.json()) as Movie;
  } catch (error) {
    throw new Error("Failed to fetch movie");
  }
};

const getReviews = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3001/api/reviews?movieId=${id}`);
    return (await res.json()) as Review[];
  } catch (error) {
    throw new Error("Failed to fetch reviews");
  }
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const [movie, reviews] = await Promise.all([getMovie(id), getReviews(id)]);

  return (
    <main className={styles.container}>
      <MovieCard movie={movie} isPoster />
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </main>
  );
};

export default Page;
