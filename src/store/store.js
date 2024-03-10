import { configureStore } from "@reduxjs/toolkit";
import counter from "../slices/counterSlice";

const store = configureStore({
  reducer: { abc: counter },
});

export default store;
