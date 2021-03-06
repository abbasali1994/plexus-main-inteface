import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    value: "dashboard-all",
    selectedWalletAsset: null,
    selectedLiquidityAsset: null,
  },
  reducers: {
    changeSidebar: (state, action) => {
      state.value = action.payload;
    },
    changeSelectedWalletAsset: (state, action) => {
      state.selectedWalletAsset = action.payload;
    },
    changeSelectedLiquidityAsset: (state, action) => {
      state.selectedLiquidityAsset = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  changeSidebar,
  changeSelectedWalletAsset,
  changeSelectedLiquidityAsset,
} = sidebarSlice.actions;

export const currentSidebar = (state) => state.sidebar.value;
export const currentSelectedWalletAsset = (state) =>
  state.sidebar.selectedWalletAsset;
export const currentSelectedLiquidityAsset = (state) =>
  state.sidebar.selectedLiquidityAsset;
export default sidebarSlice.reducer;
