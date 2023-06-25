import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Ticket } from "@/types";

interface InitialState {
  tickets: Ticket[];
  ticketsQuantity: number;
}

const initialState: InitialState = {
  tickets: [],
  ticketsQuantity: 0,
};

export const ticketsSlice = createSlice({
  name: "ticketsSlice",
  initialState,
  reducers: {
    addTicket: (state, { payload: id }: PayloadAction<string>) => {
      const index = state.tickets.findIndex((ticket) => ticket.id === id);
      if (index !== -1) {
        if (state.tickets[index].quantity !== 30) {
          state.tickets[index].quantity++;
          state.ticketsQuantity++;
        }
      } else {
        state.tickets.push({ id, quantity: 1 });
        state.ticketsQuantity++;
      }
    },
    removeTicket: (state, { payload: id }: PayloadAction<string>) => {
      const index = state.tickets.findIndex((ticket) => ticket.id === id);
      if (index !== -1) {
        if (state.tickets[index].quantity !== 0) {
          state.tickets[index].quantity--;
          state.ticketsQuantity--;
        }
      }
    },
  },
});

export const { addTicket, removeTicket } = ticketsSlice.actions;
