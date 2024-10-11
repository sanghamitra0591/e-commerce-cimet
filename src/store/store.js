import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/ProductSlice';
import cartReducer from '../slice/CartSlice';
import blogReducer from '../slice/BlogsSlice';
import authReducer from '../slice/AuthSlice';
import singleProductReducer from "../slice/SingleProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    auth: authReducer,
    blogs: blogReducer,
  }
})