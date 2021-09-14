import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: "dashboard-all",
  },
  reducers: {
    changeSidebar: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeSidebar } = sidebarSlice.actions;

export const currentSidebar = (state) => state.sidebar.value;

export default sidebarSlice.reducer;
