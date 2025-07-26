import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ICategoryAddData,
  ICategoryData,
  ICategoryInitialData,
} from "./category.types";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState: ICategoryInitialData = {
  data: [],
  status: Status.LOADING,
};

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setStatus(state: ICategoryInitialData, action: PayloadAction<Status>) {
      state.status = action.payload;
    },
    setFetchData(
      state: ICategoryInitialData,
      action: PayloadAction<ICategoryData[]>
    ) {
      state.data = action.payload;
    },
    setAddData(
      state: ICategoryInitialData,
      action: PayloadAction<ICategoryData>
    ) {
      state.data.push(action.payload);
    },
  },
});

const { setStatus, setFetchData, setAddData } = categorySlice.actions;
export default categorySlice.reducer;

export function fetchCategories() {
  return async function fetchCategoriesThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.get("institute/category");
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data.length > 0 &&
          dispatch(setFetchData(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function addCategory(data: ICategoryAddData) {
  return async function fetchCategoriesThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.post("institute/category", data);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
        response.data.data && dispatch(setAddData(response.data.data));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}

export function deleteCategory(id: string) {
  return async function deleteCategoryThunk(dispatch: AppDispatch) {
    try {
      const response = await APIWITHTOKEN.delete("institute/category/" + id);
      if (response.status === 200) {
        dispatch(setStatus(Status.SUCCESS));
      } else {
        dispatch(setStatus(Status.ERROR));
      }
    } catch (error) {
      console.log(error);
      dispatch(setStatus(Status.ERROR));
    }
  };
}
