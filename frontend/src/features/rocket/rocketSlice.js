import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import rocketService from "./rocketService";

const initialState = {
  rocketList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple rockets
export const getRocketData = createAsyncThunk(
  "rocket/getRocketData",
  async (_, thunkAPI) => {
    try {
      return await rocketService.getRockets();
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

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    reset: (state) => initialState,
    resetVariables: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRocketData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rocketList = action.payload;
      })
      .addCase(getRocketData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetVariables } = rocketSlice.actions;
export default rocketSlice.reducer;
