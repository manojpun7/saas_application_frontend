import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "userSlice",
  initialState: {
    name: null,
    address: null,
  },
  reducers: {
    //state==> mathi ko initial state
    //action==> trigger garda pathaune data aaune kura
    setName(state, action) {
      state.name = "manoj";
    },
    setAddress(state, action) {
      state.address = "kathmandu";
    },
  },
});
