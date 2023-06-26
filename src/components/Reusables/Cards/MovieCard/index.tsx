import { FC, ReactNode, memo } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import classNames from "classnames";

import { TicketContorls } from "./TicketControls";
import { Wrapper } from "./Wrapper";
import { Poster } from "./Poster";
import { Card } from "../Card";
import { genres } from "@/constants";
import { CARD_TITLE_SIZE, Movie } from "@/types";

import styles from "./styles.module.scss";

interface Props {
  movie: Movie;
  lastTicketHandler?: (movie: Movie) => void;
  isTicketCard?: boolean;
  isPoster?: boolean;
}

const _MovieCard: FC<Props> = ({
  movie,
  lastTicketHandler,
  isTicketCard,
  isPoster,
}) => {
  const genre = genres.find(({ id }) => id === movie.genre)?.content;

  const posterContent: { label: string; text?: ReactNode }[] = [
    { label: "Жанр:", text: genre },
    { label: "Год выпуска:", text: movie.releaseYear },
    { label: "Рейтинг:", text: movie.rating },
    { label: "Режиссер:", text: movie.director },
  ];

  return (
    <Wrapper
      condition={!isPoster}
      wrapper={(chidlren) => (
        <NextLink href={`/movie/${movie.id}`}>{chidlren}</NextLink>
      )}
    >
      <div
        className={classNames({
          [styles.card_link]: !isPoster,
          [styles.card_poster]: isPoster,
        })}
      >
        <div className={styles["card__image-container"]}>
          <NextImage
            src={movie.posterUrl}
            alt={`${movie.title} poster`}
            priority
            fill
            sizes="100%"
            placeholder="blur"
            blurDataURL={movie.posterUrl}
            className={styles.card__image}
          />
        </div>
        <Card
          title={movie.title}
          titleSize={CARD_TITLE_SIZE.SMALL}
          className={styles.card__content}
          rightSection={
            <TicketContorls
              movie={movie}
              lastTicketHandler={lastTicketHandler}
              isTicketCard={isTicketCard}
            />
          }
        >
          {isPoster ? (
            <Poster posterContent={posterContent} movie={movie} />
          ) : (
            <p className={styles.card__genre}>{genre}</p>
          )}
        </Card>
      </div>
    </Wrapper>
  );
};

export const MovieCard = memo(_MovieCard);
