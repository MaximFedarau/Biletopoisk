"use client";

import { FC, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createPortal } from "react-dom";

import { MovieCard } from "../Cards";
import { Modal } from "../Modal";
import {
  removeTicket,
  ticketsQuantitySelector,
  ticketsSelector,
} from "@/store/tickets";
import { Movie } from "@/types";

import styles from "./styles.module.scss";

export const Cart: FC = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removedMovie, setRemovedMovie] = useState<Movie>();

  const ticketsQuantity = useSelector(ticketsQuantitySelector);
  const tickets = useSelector(ticketsSelector);

  const onModalClose = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    setIsModalOpen(false);
  };

  const onModalOpen = () => {
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    setIsModalOpen(true);
  };

  const lastTicketHandler = (movie: Movie) => {
    onModalOpen();
    setRemovedMovie(movie);
  };

  const onModalAgree = () => {
    onModalClose();
    if (removedMovie) dispatch(removeTicket(removedMovie));
  };

  return (
    <>
      <div className={styles.cards}>
        {tickets.map(({ id, movie }) => (
          <MovieCard
            key={id}
            movie={movie}
            lastTicketHandler={lastTicketHandler}
          />
        ))}
      </div>
      <div className={styles.total}>
        <p>Итого билетов:</p>
        <p>{ticketsQuantity}</p>
      </div>
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
