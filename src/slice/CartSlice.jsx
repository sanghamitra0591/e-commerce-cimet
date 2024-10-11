import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  checkOut: false,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const doesItemExists = state.cart.find((item) => item._id === product._id);
      doesItemExists ? doesItemExists.quantity += 1 : state.cart.push({ ...product, quantity: 1 });
      state.checkOut = false;
    },

    removeFromCart: (state, action) => {
      const product = action.payload;
      const doesItemExist = state.cart.find((item) => item._id === product._id);
      if (doesItemExist) {
        if (doesItemExist.quantity > 1) {
          doesItemExist.quantity -= 1;
        }
        else {
          state.cart = state.cart.filter((item) => item._id !== product._id);
        }
      }
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },

    checkOutFromCart: (state, action) => {
      state.cart = [];
      state.checkOut = true;
    }
  }
})

export const { addToCart, removeFromCart, deleteFromCart, checkOutFromCart } = cartSlice.actions;

export const selectCart = (state) => { return state.cart.cart };
export const selectCheckout = (state) => { return state.cart.checkOut };

export default cartSlice.reducer;