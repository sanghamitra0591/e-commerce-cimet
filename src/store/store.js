import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../slice/ProductSlice';
import cartReducer from '../slice/CartSlice';
import FeaturedProductsReducer from '../slice/FeaturedProductsSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    featuredProducts: FeaturedProductsReducer,
    cart: cartReducer,
  }
})