import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/CounterSlice";

export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
