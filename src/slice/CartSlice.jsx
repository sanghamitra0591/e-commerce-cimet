import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const doesItemExists = state.cart.find((item) => item.id === product.id);
      doesItemExists ? doesItemExists.quantity += 1 : state.cart.push({ ...product, quantity: 1 });
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      const doesItemExist = state.cart.find((item) => item.id === product.id);
      if (doesItemExist) {
        if (doesItemExist.quantity > 1) {
          doesItemExist.quantity -= 1;
        }
        else {
          state.cart.filter((item) => item.id !== product.id);
        }
      }
    },

    deleteFromCart: (state, action) => {
      state.cart.filter((item) => item.id !== action.payload.id);
    }
  }
})

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

export const selectCart = (state) => { return state.cart.cart };

export default cartSlice.reducer;