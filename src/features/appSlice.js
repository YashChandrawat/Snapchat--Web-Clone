import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};



export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = appSlice.actions;

export const selectCount = (state) => state.app.value;

export default appSlice.reducer;
