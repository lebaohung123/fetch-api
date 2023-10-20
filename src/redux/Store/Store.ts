import { configureStore } from "@reduxjs/toolkit";
import ListCart from "../CartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    cart: ListCart,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch