import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInstituteTeacherInitialData,
  IInstituteTeacherInitialDataState,
  IInstituteTeacherPostData,
} from "./institute-teacher-type";
import { Status } from "../../../types/type";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState: IInstituteTeacherInitialData = {
  teachers: [],
  status: Status.LOADING,
};

const insituteTeacherSlice = createSlice({
  name: "institute-teacher",
  initialState: initialState,
  reducers: {
    setStatus(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },

    setTeacher(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<IInstituteTeacherInitialDataState[]>
    ) {
      state.teachers = action.payload;
    },

    setDeleteTeacher(
      state: IInstituteTeacherInitialData,
      action: PayloadAction<string>
    ) {
      const index = state.teachers.findIndex(
        (teacher) => teacher.id === action.payload
      );
      if (index !== -1) {
        state.teachers.splice(index, 1);
      }
    },
  },
});

const { setStatus, setTeacher, setDeleteTeacher } =
  insituteTeacherSlice.actions;
export default insituteTeacherSlice.reducer;

export function createInstituteTeacher(data: IInstituteTeacherPostData) {
  return async function createInstituteTeacherThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/institute/teacher", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setTeacher(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchInsituteTeacher() {
  return async function fetchInsituteTeacherThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/institute/teacher");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setTeacher(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteInsituteTeacherById(id: string) {
  return async function deleteInsituteTeacherByIdThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.delete("/institute/teacher/" + id);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setDeleteTeacher(id));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
