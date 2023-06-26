"use client";

import { FC } from "react";
import NextImage from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { Movie } from "@/types";
import {
  ticketQuantitySelector,
  addTicket,
  removeTicket,
} from "@/store/tickets";
import close from "public/icons/close.svg";
import plus from "public/icons/plus.svg";
import minus from "public/icons/minus.svg";

import styles from "./styles.module.scss";

interface Props {
  movie: Movie;
  lastTicketHandler?: (movie: Movie) => void;
  isTicketCard?: boolean;
}

export const TicketContorls: FC<Props> = ({
  movie,
  lastTicketHandler,
  isTicketCard,
}) => {
  const { quantity } = useSelector((state) =>
    ticketQuantitySelector(state, movie.id)
  );
  const dispatch = useDispatch();

  const increaseTickets = () => dispatch(addTicket(movie));

  const decreaseTickets = () => {
    if (quantity === 1 && lastTicketHandler) lastTicketHandler(movie);
    else dispatch(removeTicket(movie));
  };

  return (
    <div className={styles.ticket} onClick={(event) => event.preventDefault()}>
      <div className={styles.ticket__controller}>
        <button
          className={styles.ticket__button}
          onClick={decreaseTickets}
          disabled={quantity === 0}
        >
          <NextImage
            src={minus}
            alt="minus"
            className={styles["ticket__button-image"]}
          />
        </button>
        <p className={styles.ticket__text}>{quantity}</p>
        <button
          className={styles.ticket__button}
          onClick={increaseTickets}
          disabled={quantity === 30}
        >
          <NextImage
            src={plus}
            alt="plus"
            className={styles["ticket__button-image"]}
          />
        </button>
      </div>
      {isTicketCard && (
        <NextImage
          src={close}
          alt="close"
          className={styles.ticket__close}
          onClick={() => lastTicketHandler?.(movie)}
          placeholder="blur"
          blurDataURL="public/icons/close.svg"
        />
      )}
    </div>
  );
};
