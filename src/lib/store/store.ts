import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import teacherSlice from './teacher/teacherSlice'
import instituteSlice from './institute/instituteSlice'
import categorySlice from './institute/category/categorySlice'

const store = configureStore({
  reducer: {
   auth :authSlice,
   teacher: teacherSlice,
   institute: instituteSlice,
   category: categorySlice
  },
});


export default store

export type AppDispatch = typeof store.dispatch //useDispatch lai type 
export type RootState = ReturnType<typeof store.getState>//useSelector type