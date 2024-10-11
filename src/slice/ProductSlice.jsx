import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../utils/constants";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(productsApi);
      return response.data;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  products: [],
  loading: true,
}

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
  }
})

export const selectProducts = (state) => { return state.products.products };
export const selectLoading = (state) => { return state.products.loading };

export default productSlice.reducer;