import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import payloadService from "./payloadService";

const initialState = {
  payloadList: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get Multiple payloads
export const getPayloadData = createAsyncThunk(
  "payload/getPayloadData",
  async (_, thunkAPI) => {
    try {
      return await payloadService.getPayloads();
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

export const payloadSlice = createSlice({
  name: "payload",
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
      .addCase(getPayloadData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPayloadData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.payloadList = action.payload;
      })
      .addCase(getPayloadData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, resetVariables } = payloadSlice.actions;
export default payloadSlice.reducer;
