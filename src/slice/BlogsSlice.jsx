import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { blogsApi } from "../utils/constants";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(blogsApi + "100");
      return response.data;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
)

const initialState = {
  blogs: [],
  blogsLoading: true,
}

export const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.blogsLoading = false;
        state.blogs = action.payload;
      })
  }
})

export const selectBlogs = (state) => { return state.blogs.blogs };
export const selectBlogsLoading = (state) => { return state.blogs.blogsLoading };

export default blogsSlice.reducer;