import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    userSlice: userSlice,
    studentSlice: studentSlice,
  },
});


export default store