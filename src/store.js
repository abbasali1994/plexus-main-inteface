import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./redux/sidebarSlice";
import themeReducer from "./redux/themeSlice";
import walletReducer from "./redux/walletSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
    wallet: walletReducer,
  },
});
