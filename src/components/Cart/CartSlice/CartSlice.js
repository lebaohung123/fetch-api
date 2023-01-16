import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listCart: [],
  quantity: 0,
};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state, action) => {
      const find = state.listCart.findIndex(
        (product) => product.id === action.payload.id
      );
      // console.log(find);
      if (find >= 0) {
        state.listCart[find].quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.listCart.push(newProduct);
      }
    },

    decrement: (state, action) => {
      const find = state.listCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.listCart[find].quantity > 1) {
        state.listCart[find].quantity -= 1;
      } else {
        const index = state.listCart.indexOf(state.listCart[find]);
        state.listCart.splice(index, 1);
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
