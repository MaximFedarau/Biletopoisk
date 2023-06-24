import { FC } from "react";
import NextImage from "next/image";

import { Card } from "../Card";
import { genres } from "@/constants";
import { CARD_TITLE_SIZE, Movie } from "@/types";

import styles from "./styles.module.scss";

export const MovieCard: FC<Movie> = ({ title, genre, posterUrl }) => {
  return (
    <div className={styles.container}>
      <NextImage
        src={posterUrl}
        alt={`${title} poster`}
        width={100}
        height={120}
        className={styles.container__poster}
      />
      <Card
        title={title}
        titleSize={CARD_TITLE_SIZE.SMALL}
        className={styles.container__card}
      >
        <p className={styles.container__genre}>
          {genres.find(({ id }) => id === genre)?.content}
        </p>
      </Card>
    </div>
  );
};
