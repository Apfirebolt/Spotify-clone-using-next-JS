import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import animeService from "./animeService";

const initialState = {
  animeList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple animes
export const getAnimes = createAsyncThunk(
  "anime/list",
  async (_, thunkAPI) => {
    try {
      return await animeService.getAnimeList();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    reset: () => initialState,
    resetVariables: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAnimes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnimes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.animeList = action.payload.data;
      })
      .addCase(getAnimes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  },
});

export const { reset, resetVariables } = animeSlice.actions;
export default animeSlice.reducer;