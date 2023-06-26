"use client";

import { FC, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";

import { Modal, EmptyState, MovieCard } from "@/components/Reusables";
import {
  deleteTicket,
  totalQuantitySelector,
  ticketsSelector,
} from "@/store/tickets";
import { Movie } from "@/types";

import styles from "./styles.module.scss";

const TotalTickets: FC = () => {
  const totalQuantity = useSelector(totalQuantitySelector);
  return (
    <div className={styles.total}>
      <p>Итого билетов:</p>
      <p>{totalQuantity}</p>
    </div>
  );
};

interface TicketsListProps {
  lastTicketHandler?: (movie: Movie) => void;
}

const TicketsList: FC<TicketsListProps> = ({ lastTicketHandler }) => {
  const tickets = useSelector(ticketsSelector);
  return (
    <div className={styles.cards}>
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
    </div>
  );
};

export const Cart: FC = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletedMovie, setDeletedMovie] = useState<Movie>();

  const onModalClose = useCallback(() => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setIsModalOpen(false);
  }, []);

  const onModalOpen = useCallback(() => {
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    setIsModalOpen(true);
  }, []);

  const lastTicketHandler = useCallback(
    (movie: Movie) => {
      onModalOpen();
      setDeletedMovie(movie);
    },
    [onModalOpen]
  );

  const onModalAgree = useCallback(() => {
    onModalClose();
    if (deletedMovie) dispatch(deleteTicket(deletedMovie));
  }, [onModalClose, dispatch, deletedMovie]);

  return (
    <>
      <TicketsList lastTicketHandler={lastTicketHandler} />
      <TotalTickets />
      {isModalOpen &&
        createPortal(
          <Modal
            title="Удаление билета"
            onClose={onModalClose}
            onAgree={onModalAgree}
            onDisagree={onModalClose}
          >
            <p>Вы уверены, что хотите удалить билет?</p>
          </Modal>,
          document.getElementById("modal-root")!
        )}
    </>
  );
};
