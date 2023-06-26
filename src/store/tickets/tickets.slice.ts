import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie, Ticket } from "@/types";

// separating tickets & its quantities helps us to avoid excess renders
interface InitialState {
  tickets: Movie[];
  ticketsQuantities: Ticket[];
  totalQuantity: number;
}

const initialState: InitialState = {
  tickets: [],
  ticketsQuantities: [],
  totalQuantity: 0,
};

export const ticketsSlice = createSlice({
  name: "ticketsSlice",
  initialState,
  reducers: {
    addTicket: (state, { payload: movie }: PayloadAction<Movie>) => {
      const index = state.ticketsQuantities.findIndex(
        ({ id }) => id === movie.id
      );

      if (index !== -1) {
        if (state.ticketsQuantities[index].quantity !== 30) {
          state.ticketsQuantities[index].quantity++;
          state.totalQuantity++;
        }
      } else {
        state.tickets.push(movie);
        state.ticketsQuantities.push({ id: movie.id, quantity: 1 });
        state.totalQuantity++;
      }
    },
    removeTicket: (state, { payload: movie }: PayloadAction<Movie>) => {
      const index = state.ticketsQuantities.findIndex(
        ({ id }) => id === movie.id
      );

      if (index !== -1 && state.ticketsQuantities[index].quantity !== 0) {
        state.ticketsQuantities[index].quantity--;
        state.totalQuantity--;
        // deleting ticket
        if (state.ticketsQuantities[index].quantity === 0) {
          state.tickets.splice(index, 1);
          state.ticketsQuantities.splice(index, 1);
        }
      }
    },
    deleteTicket: (state, { payload: movie }: PayloadAction<Movie>) => {
      const index = state.ticketsQuantities.findIndex(
        ({ id }) => id === movie.id
      );

      if (index !== -1) {
        state.totalQuantity -= state.ticketsQuantities[index].quantity;
        state.tickets.splice(index, 1);
        state.ticketsQuantities.splice(index, 1);
      }
    },
  },
});

export const { addTicket, removeTicket, deleteTicket } = ticketsSlice.actions;
