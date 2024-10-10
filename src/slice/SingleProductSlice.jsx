import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { singleProductsApi } from "../utils/constants";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (productId) => {
    try {
      const response = axios.get(singleProductsApi + productId);
      return response.data;
    }
    catch (e) {
      console.log(e);
    }
  }
)

const initialState = {
  product: [],
}

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
  }
})

export const selectProduct = (state) => { return state.singleProduct.product };

export default singleProductSlice.reducer;