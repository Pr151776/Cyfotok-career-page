// src/redux/applySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/applyApi";

const initialState = {
  status: "idle", // idle|loading|succeeded|failed
  error: null,
  lastResponse: null,
};

export const submitApplication = createAsyncThunk(
  "apply/submitApplication",
  async (formData, { rejectWithValue }) => {
    try {
      // formData is FormData instance
      const res = await api.post("/apply", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        validateStatus: (status) => (status < 400 ? true : false),
      });
      return res.data;

    } catch (err) {
      console.log("ERR RESPONSE:", err?.response?.data);
      // normalize error
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err.message ||
        "Submit failed";
      return rejectWithValue(msg);
    }
  }
);

const applySlice = createSlice({
  name: "apply",
  initialState,
  reducers: {
    resetApplyState(state) {
      state.status = "idle";
      state.error = null;
      state.lastResponse = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitApplication.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitApplication.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lastResponse = action.payload;
      })
      .addCase(submitApplication.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { resetApplyState } = applySlice.actions;
export default applySlice.reducer;
