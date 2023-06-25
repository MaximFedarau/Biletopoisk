"use client";

import { FC, ReactNode, useMemo, memo } from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { Card } from "../Card";
import { genres } from "@/constants";
import { CARD_TITLE_SIZE, Movie } from "@/types";
import { ticketSelector, addTicket, removeTicket } from "@/store/tickets";
import close from "public/icons/close.svg";

import styles from "./styles.module.scss";

interface Props {
  movie: Movie;
  lastTicketHandler?: (movie: Movie) => void;
  isTicketCard?: boolean;
}

const TicketContorls: FC<Props> = ({
  movie,
  lastTicketHandler,
  isTicketCard,
}) => {
  const { quantity } = useSelector((state) => ticketSelector(state, movie.id));
  const dispatch = useDispatch();

  const increaseTickets = () => dispatch(addTicket(movie));

  const decreaseTickets = () => {
    if (quantity === 1 && lastTicketHandler) lastTicketHandler(movie);
    else dispatch(removeTicket(movie));
  };

  return (
    <div className={styles.ticket} onClick={(event) => event.preventDefault()}>
      <div className={styles.ticket__controller}>
        <div
          className={styles["ticket__remove-button"]}
          onClick={decreaseTickets}
        >
          -
        </div>
        <p className={styles.ticket__text}>{quantity}</p>
        <div className={styles["ticket__add-button"]} onClick={increaseTickets}>
          +
        </div>
      </div>
      {isTicketCard && (
        <NextImage
          src={close}
          alt="close"
          className={styles.ticket__close}
          onClick={() => lastTicketHandler?.(movie)}
        />
      )}
    </div>
  );
};

interface WrapperProps {
  condition: boolean;
  wrapper: (children: ReactNode) => ReactNode;
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

interface CardProps extends Props {
  isPoster?: boolean;
}

const _MovieCard: FC<CardProps> = ({
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
        className={classNames(styles.container, {
          [styles.container_link]: !isPoster,
          [styles.container_poster]: isPoster,
        })}
      >
        <NextImage
          src={movie.posterUrl}
          alt={`${movie.title} poster`}
          width={100}
          height={120}
          className={styles.container__image}
          priority
        />
        <Card
          title={movie.title}
          titleSize={CARD_TITLE_SIZE.SMALL}
          className={styles.container__card}
          rightSection={
            <TicketContorls
              movie={movie}
              lastTicketHandler={lastTicketHandler}
              isTicketCard={isTicketCard}
            />
          }
        >
          {isPoster ? (
            <div className={styles.container__info}>
              {posterContent.map(({ label, text }) => (
                <div key={label} className={styles["container__info-row"]}>
                  <p className={styles.container__label}>{label}</p>
                  <p className={styles.container__text}>{text}</p>
                </div>
              ))}
              <div className={styles.container__description}>
                <p className={styles.container__label}>Описание</p>
                <p>{movie.description}</p>
              </div>
            </div>
          ) : (
            <p className={styles.container__genre}>{genre}</p>
          )}
        </Card>
      </div>
    </Wrapper>
  );
};

export const MovieCard = memo(_MovieCard);
