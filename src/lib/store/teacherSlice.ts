import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
  name: "teacherSlice",
  initialState: {
    teacherName: "",
    teacherPassword: "",
  },
  reducers: {
    setTeacherName(state, action) {
      state.teacherName = "manoj";
    },
    setTeacherPassword(state, action) {
      state.teacherPassword = "password";
    },
  },
});

const { setTeacherName, setTeacherPassword } = teacherSlice.actions;
