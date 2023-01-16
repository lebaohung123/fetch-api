import { configureStore } from "@reduxjs/toolkit";
import ListCart from "../../Cart/CartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    cart: ListCart,
  },
});
