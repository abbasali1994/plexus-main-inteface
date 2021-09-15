import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: "0x1825BEa9F9271b04171c51F46d10B1DFcEa0BD8C",
    ens: null,
    tokens: {},
    lpPositions: {},
    stakings: {},
    rewards: {},
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setTokens: (state, action) => {
      state.tokens = action.payload;
    },
    setLpPositions: (state, action) => {
      state.lpPositions = action.payload;
    },
    setStakings: (state, action) => {
      state.stakings = action.payload;
    },
    setRewards: (state, action) => {
      state.rewards = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddress } = walletSlice.actions;

export const userAddress = (state) => state.wallet.address;

export default walletSlice.reducer;
