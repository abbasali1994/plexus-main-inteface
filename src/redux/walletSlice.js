import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    address: null,
    ens: null,
    tokens: { totalValue: 0 },
    lpPositions: {},
    stakings: {},
    rewards: {},
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setEnsName: (state, action) => {
      state.ens = action.payload;
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
export const { setAddress, setEnsName, setTokens } = walletSlice.actions;

export const userAddress = (state) => state.wallet.address;
export const userTokenBalances = (state) => state.wallet.tokens;

export default walletSlice.reducer;
