import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1000,
  },
  reducers: {
    incByAmount: (state, action) => {
      state.value += action.payload;
    },
    decByAmount: (state, action) => {
      state.value -= action.payload;
    },
    resetAmount: (state, action) => {
      state.value = 0;
    },
  },
});

export const { incByAmount, decByAmount, resetAmount } = counterSlice.actions; // connecting with the actions
export const selectCount = (state) => state.counter.value; // for showing the value

export default counterSlice.reducer; //for store
