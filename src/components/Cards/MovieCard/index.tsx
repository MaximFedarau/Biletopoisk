"use client";

import { FC } from "react";
import NextImage from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { Card } from "../Card";
import { genres } from "@/constants";
import { CARD_TITLE_SIZE, Movie } from "@/types";
import { ticketSelector, addTicket, removeTicket } from "@/store/tickets";

import styles from "./styles.module.scss";

interface TicketControlsProps {
  movie: Movie;
  lastTicketHandler?: (movie: Movie) => void;
}

const TicketContorls: FC<TicketControlsProps> = ({
  movie,
  lastTicketHandler,
}) => {
  const { quantity } = useSelector((state) => ticketSelector(state, movie.id));
  const dispatch = useDispatch();

  const increaseTickets = () => dispatch(addTicket(movie));

  const decreaseTickets = () => {
    if (quantity === 1 && lastTicketHandler) lastTicketHandler(movie);
    else dispatch(removeTicket(movie));
  };

  return (
    <div className={styles.ticket}>
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
  );
};

interface Props {
  movie: Movie;
  lastTicketHandler?: (movie: Movie) => void;
}

export const MovieCard: FC<Props> = ({ movie, lastTicketHandler }) => {
  return (
    <div className={styles.container}>
      <NextImage
        src={movie.posterUrl}
        alt={`${movie.title} poster`}
        width={100}
        height={120}
        className={styles.container__poster}
        priority
      />
      <Card
        title={movie.title}
        titleSize={CARD_TITLE_SIZE.SMALL}
        className={styles.container__card}
        rightSection={
          <TicketContorls movie={movie} lastTicketHandler={lastTicketHandler} />
        }
      >
        <p className={styles.container__genre}>
          {genres.find(({ id }) => id === movie.genre)?.content}
        </p>
      </Card>
    </div>
  );
};
