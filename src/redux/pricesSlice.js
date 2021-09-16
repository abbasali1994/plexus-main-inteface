import { createSlice } from "@reduxjs/toolkit";

export const pricesSlice = createSlice({
  name: "prices",
  initialState: {
    tokens: {},
    lpPositions: {},
  },
  reducers: {
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setLpPositions: (state, action) => {
      state.lpPositions = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTokens, setLpPositions } = pricesSlice.actions;

export const tokenPrices = (state) => state.wallet.tokens;

export default pricesSlice.reducer;
