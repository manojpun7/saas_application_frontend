import { Status } from "../../types/type";
import { IInitialTeacherData, ITeacher } from "./teacherSlice.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IInitialTeacherData = {
  teacher: {
    teacherName: "",
    teacherEmail: "",
    teacherPhoneNumber: "",
  },
  status: Status.LOADING,
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState: initialState,
  reducers: {
    setTeacher(state: IInitialTeacherData, action: PayloadAction<ITeacher>) {
      state.teacher = action.payload;
    },
    setStatus(state: IInitialTeacherData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
  },
});

const { setTeacher, setStatus } = teacherSlice.actions;
export default teacherSlice.reducer;
