import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import shipService from "./shipService";

const initialState = {
  shipList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple ships
export const getShipData = createAsyncThunk(
  "ship/getShipData",
  async (_, thunkAPI) => {
    try {
      return await shipService.getShips();
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

export const shipSlice = createSlice({
  name: "ship",
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
      .addCase(getShipData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getShipData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.shipList = action.payload;
      })
      .addCase(getShipData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetVariables } = shipSlice.actions;
export default shipSlice.reducer;
