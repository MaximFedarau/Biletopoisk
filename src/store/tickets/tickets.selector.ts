import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@/store";
import { Ticket } from "@/types";

const ticketsReducerSelector = ({ tickets }: RootState) => tickets;

export const ticketsSelector = createSelector(
  [ticketsReducerSelector],
  ({ tickets }) => tickets
);

export const ticketsQuantitiesSelector = createSelector(
  [ticketsReducerSelector],
  ({ ticketsQuantities }) => ticketsQuantities
);

export const ticketQuantitySelector = createSelector(
  [ticketsQuantitiesSelector, (_, id) => id],
  (ticketsQuantities, id) => {
    return (
      ticketsQuantities.find((ticket) => id === ticket.id) ||
      ({ id, quantity: 0 } as Ticket)
    );
  }
);

export const totalQuantitySelector = createSelector(
  [ticketsReducerSelector],
  ({ totalQuantity }) => totalQuantity
);
