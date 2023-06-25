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
  id: string;
}

const TicketContorls: FC<TicketControlsProps> = ({ id }) => {
  const { quantity } = useSelector((state) => ticketSelector(state, id));
  const dispatch = useDispatch();

  const handleTickets = (add: boolean) => {
    dispatch(add ? addTicket(id) : removeTicket(id));
  };

  return (
    <div className={styles.ticket}>
      <div
        className={styles["ticket__remove-button"]}
        onClick={() => handleTickets(false)}
      >
        -
      </div>
      <p className={styles.ticket__text}>{quantity}</p>
      <div
        className={styles["ticket__add-button"]}
        onClick={() => handleTickets(true)}
      >
        +
      </div>
    </div>
  );
};

export const MovieCard: FC<Movie> = ({ id, title, genre, posterUrl }) => {
  return (
    <div className={styles.container}>
      <NextImage
        src={posterUrl}
        alt={`${title} poster`}
        width={100}
        height={120}
        className={styles.container__poster}
        priority
      />
      <Card
        title={title}
        titleSize={CARD_TITLE_SIZE.SMALL}
        className={styles.container__card}
        rightSection={<TicketContorls id={id} />}
      >
        <p className={styles.container__genre}>
          {genres.find(({ id }) => id === genre)?.content}
        </p>
      </Card>
    </div>
  );
};
