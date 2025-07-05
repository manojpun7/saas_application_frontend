import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIncomingUserPayload, IInitialStudentData } from "./type";

const studentInitialState: IInitialStudentData = {
  data: "",
};
const studentSlice = createSlice({
  name: "studentSlice",
  initialState: studentInitialState,
  reducers: {
    setData(state: IInitialStudentData, action: PayloadAction<IIncomingUserPayload>) {
      state.data = "manoj";
    },
  },
});

const { setData } = studentSlice.actions;
export { setData };
export default studentSlice.reducer;
