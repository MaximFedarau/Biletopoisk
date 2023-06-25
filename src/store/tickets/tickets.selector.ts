import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { Ticket } from "@/types";

const ticketsReducerSelector = ({ tickets }: RootState) => tickets;

export const ticketsSelector = createSelector(
  [ticketsReducerSelector],
  ({ tickets }) => tickets
);

export const ticketSelector = createSelector(
  [ticketsSelector, (_, id) => id],
  (tickets, id) => {
    return (
      tickets.find((ticket) => id === ticket.id) ||
      ({ id, quantity: 0 } as Ticket)
    );
  }
);

export const ticketsQuantitySelector = createSelector(
  [ticketsReducerSelector],
  ({ ticketsQuantity }) => ticketsQuantity
);
