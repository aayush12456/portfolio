import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "../slices/hamburgerSlice";
const store = configureStore({
    reducer: {
     hamburger:hamburgerSlice
    },
  });
  export default store