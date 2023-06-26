import { Metadata } from "next";
import { notFound } from "next/navigation";

import { MovieCard, ReviewCard } from "@/components";
import { getMovie, getReviews } from "@/utils";

import styles from "./page.module.scss";

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  try {
    const movie = await getMovie(id);

    return { title: movie.title };
  } catch (error) {
    notFound();
  }
};

const Page = async ({ params: { id } }: Props) => {
  const [movie, reviews] = await Promise.all([getMovie(id), getReviews(id)]);

  return (
    <main className={styles.page}>
      <MovieCard movie={movie} isPoster />
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </main>
  );
};

export default Page;
