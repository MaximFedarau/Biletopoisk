import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie, Ticket } from "@/types";

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
    addTicket: (state, { payload: movie }: PayloadAction<Movie>) => {
      const index = state.tickets.findIndex((ticket) => ticket.id === movie.id);
      if (index !== -1) {
        if (state.tickets[index].quantity !== 30) {
          state.tickets[index].quantity++;
          state.ticketsQuantity++;
        }
      } else {
        state.tickets.push({ id: movie.id, quantity: 1, movie: movie });
        state.ticketsQuantity++;
      }
    },
    removeTicket: (state, { payload: movie }: PayloadAction<Movie>) => {
      const index = state.tickets.findIndex((ticket) => ticket.id === movie.id);
      if (index !== -1) {
        if (state.tickets[index].quantity !== 0) {
          state.tickets[index].quantity--;
          state.ticketsQuantity--;
          if (state.tickets[index].quantity === 0)
            state.tickets.splice(index, 1);
        }
      }
    },
  },
});

export const { addTicket, removeTicket } = ticketsSlice.actions;
