import { Status } from "../../../types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import {
  ICoursePostData,
  IInstituteCourseInitialData,
  IInstituteCourseInitialDataCourse,
} from "./institute-course-type";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState: IInstituteCourseInitialData = {
  courses: [],
  status: Status.LOADING,
};

const instituteCourseSlice = createSlice({
  name: "institute-course-slice",
  initialState: initialState,
  reducers: {
    setStatus(
      state: IInstituteCourseInitialData,
      action: PayloadAction<Status>
    ) {
      state.status = action.payload;
    },

    setFetchCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<IInstituteCourseInitialDataCourse[]>
    ) {
      state.courses = action.payload;
    },

    setAddCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<IInstituteCourseInitialDataCourse[]>
    ) {
      state.courses= action.payload;
    },

    setDeleteCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<string>
    ) {
      // id -> 1
      const index = state.courses.findIndex(
        (course) => course.id === action.payload
      ); //1
      if (index !== -1) {
        state.courses.splice(index, 1);
      }
    },
    setEditCourse(
      state: IInstituteCourseInitialData,
      action: PayloadAction<any>
    ) {
      const id = action.payload.id;
      const data = action.payload.data;
      const index = state.courses.findIndex((course) => (course.id = id)); //0
      if (index !== -1) {
        state.courses[1] = data;
      }
    },
  },
});

const {
  setStatus,
  setAddCourse,
  setFetchCourse,
  setDeleteCourse,
  setEditCourse,
} = instituteCourseSlice.actions;
export default instituteCourseSlice.reducer;

// thunks
export function createInstituteCourse(data: ICoursePostData) {
  return async function createInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("/institute/course", data,
        {
        headers: {
          "Content-Type":"multipart/form-data",
        },
      }
    );
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data && dispatch(setAddCourse(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function fetchInstituteCourse() {
  return async function fetchInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("/institute/course");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setFetchCourse(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteInstituteCourse(id: string) {
  return async function fetchInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.delete("/institute/course/" + id);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setDeleteCourse(id));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function editInstituteCourse(id: string, data: any) {
  return async function editInstituteCourseThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.patch(
        "/institute/course/" + id,
        data
      );
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        dispatch(setEditCourse({ id, data }));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
