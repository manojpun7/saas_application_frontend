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

export type AppDispatch = typeof store.dispatch //useDispatch lai type 
export type RootState = ReturnType<typeof store.getState>//useSelector type