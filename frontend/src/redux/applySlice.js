import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.REACT_APP_API_BASE;

// --------------------- ASYNC THUNK ---------------------
export const submitApplication = createAsyncThunk(
  "apply/submit",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/apply`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.log("ERR RESPONSE:", error.response?.data);

      return rejectWithValue(
        error.response?.data?.message || "Failed to submit application"
      );
    }
  }
);

// --------------------- SLICE ---------------------
const applySlice = createSlice({
  name: "apply",
  initialState: {
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    resetApplyState: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitApplication.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetApplyState } = applySlice.actions;
export default applySlice.reducer;
