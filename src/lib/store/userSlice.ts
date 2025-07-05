import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./type";

const userInitialState: IUserInitialState = {
  name: null,
  address: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    //state==> mathi ko initial state
    //action==> trigger garda pathaune data aaune kura
    setName(
      state: IUserInitialState,
      action: PayloadAction<IUserInitialState>
    ) {
      state.name = action.payload;
    },
    setAddress(
      state: IUserInitialState,
      action: PayloadAction<IUserInitialState>
    ) {
      state.address = action.payload;
    },
  },
});

const { setName, setAddress } = userSlice.actions;
export default userSlice.reducer;
export { setName, setAddress };
