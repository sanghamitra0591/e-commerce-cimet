import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../utils/constants";
import axios from "axios";


export const fetchFeaturedProducts = createAsyncThunk(
  "products/FeatureProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(productsApi + "8");
      return response.data.products;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  featuredProducts: [],
}

export const featuredProductSlice = createSlice({
  name: "featuredProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
        state.featuredProducts = action.payload;
      })
  }
})  

export const selectFeaturedProducts = (state) => { return state.featuredProducts.products };

export default featuredProductSlice.reducer;