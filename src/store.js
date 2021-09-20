import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./redux/sidebarSlice";
import themeReducer from "./redux/themeSlice";
import walletReducer from "./redux/walletSlice";
import pricesReducer from "./redux/pricesSlice";
import tokensReducer from "./redux/tokensSlice";

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
    wallet: walletReducer,
    prices: pricesReducer,
    tokens: tokensReducer,
  },
});
