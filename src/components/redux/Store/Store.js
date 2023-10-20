import { configureStore } from "@reduxjs/toolkit";
import ListCart from "../CartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    cart: ListCart,
  },
});
