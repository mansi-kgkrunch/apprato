import { createSlice } from "@reduxjs/toolkit";

const MenuIDState = {
  menuid: {},
};

export const MenuIDSlice = createSlice({
  name: "menuid",
  initialState: MenuIDState,
  reducers: {
    menuID: (state, action) => {
      state.menuid = action.payload;
    },
  },
});

export const { menuID } = MenuIDSlice.actions;

export default MenuIDSlice.reducer;
