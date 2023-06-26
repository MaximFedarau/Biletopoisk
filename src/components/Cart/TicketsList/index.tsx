"use client";

import { FC } from "react";
import { useSelector } from "react-redux";

import { Movie } from "@/types";
import { EmptyState, MovieCard } from "@/components/Reusables";
import { ticketsSelector } from "@/store/tickets";

import styles from "./styles.module.scss";

interface Props {
  lastTicketHandler?: (movie: Movie) => void;
}

export const TicketsList: FC<Props> = ({ lastTicketHandler }) => {
  const tickets = useSelector(ticketsSelector);
  return (
    <article className={styles.cards}>
      {tickets.length > 0 ? (
        <>
          {tickets.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              lastTicketHandler={lastTicketHandler}
              isTicketCard
            />
          ))}
        </>
      ) : (
        <EmptyState />
      )}
    </article>
  );
};
