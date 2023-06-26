"use client";

import { FC, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";

import { MovieCard } from "../Cards";
import { Modal } from "../Modal";
import {
  deleteTicket,
  ticketsQuantitySelector,
  ticketsSelector,
} from "@/store/tickets";
import { Movie } from "@/types";

import styles from "./styles.module.scss";

const TotalTickets: FC = () => {
  const ticketsQuantity = useSelector(ticketsQuantitySelector);
  return (
    <div className={styles.total}>
      <p>Итого билетов:</p>
      <p>{ticketsQuantity}</p>
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
      {tickets.map(({ id, movie }) => (
        <MovieCard
          key={id}
          movie={movie}
          lastTicketHandler={lastTicketHandler}
          isTicketCard
        />
      ))}
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
      <TicketsList />
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
