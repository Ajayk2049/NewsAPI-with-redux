import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk("news/fetch", async () => {
  const response = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
  );
  const data = await response.json();
  return data.articles;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export default newsSlice.reducer;
