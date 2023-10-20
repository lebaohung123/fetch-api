import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState, Product } from "../../interface";


const initialState: CartState = {
	listCart: [],
	quantity: 0,
};

export const counterSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		increment: (state, action: PayloadAction<Product>) => {
			const find = state.listCart.findIndex(
				(product) => product.id === action.payload.id
			);
			if (find >= 0) {
				(state.listCart[find] as Product).quantity += 1;
			} else {
				const newProduct = { ...action.payload, quantity: 1 };
				state.listCart.push(newProduct);
			}
		},

		decrement: (state, action: PayloadAction<Product>) => {
			const find = state.listCart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (find >= 0) {
				const itemToUpdate = state.listCart[find];
				if ((itemToUpdate as Product).quantity > 1) {
					(itemToUpdate as Product).quantity -= 1;
				} else {
					const index = state.listCart.indexOf(itemToUpdate);
					state.listCart.splice(index, 1);
				}
			}
		},

		clearCart: (state) => {
			state.listCart = [];
		},
	},
});

export const { increment, decrement, clearCart } = counterSlice.actions;

export default counterSlice.reducer;
