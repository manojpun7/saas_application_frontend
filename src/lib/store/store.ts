import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import teacherSlice from './teacher/teacherSlice'
import instituteSlice from './institute/instituteSlice'

const store = configureStore({
  reducer: {
   auth :authSlice,
   teacher: teacherSlice,
   institute: instituteSlice
  },
});


export default store

export type AppDispatch = typeof store.dispatch //useDispatch lai type 
export type RootState = ReturnType<typeof store.getState>//useSelector type