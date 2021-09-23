import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

import sidebarReducer from "./redux/sidebarSlice";
import themeReducer from "./redux/themeSlice";
import walletReducer from "./redux/walletSlice";
import pricesReducer from "./redux/pricesSlice";
import tokensReducer from "./redux/tokensSlice";

const config = [
  {
    key: "tokens",
    storage: localStorage,
  },
  {
    key: "prices",
    storage: localStorage,
  },
];
const persistedTokens = persistReducer(config[0], tokensReducer);
const persistedPrices = persistReducer(config[1], pricesReducer);

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer,
    wallet: walletReducer,
    prices: persistedPrices,
    tokens: persistedTokens,
  },
});
