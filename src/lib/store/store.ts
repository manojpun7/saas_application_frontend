import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import teacherSlice from './institute/teacher/institute-teacher-slice'
import instituteSlice from './institute/instituteSlice'
import categorySlice from './institute/category/categorySlice'
import courseSlice from './institute/course/institute-course-slice'

const store = configureStore({
  reducer: {
   auth :authSlice,
   teacher: teacherSlice,
   institute: instituteSlice,
   category: categorySlice,
   course: courseSlice,
  },
});


export default store

export type AppDispatch = typeof store.dispatch //useDispatch lai type 
export type RootState = ReturnType<typeof store.getState>//useSelector type