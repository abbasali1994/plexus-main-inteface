import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tokensList, { tokenSymbols } from "../utils/tokens";

export const getTokenIds = createAsyncThunk("prices/getTokenIds", async () => {
  return fetch("https://api.coingecko.com/api/v3/coins/list").then((res) =>
    res.json()
  );
});

export const getTokens = createAsyncThunk(
  "prices/getTokens",
  async (tokens) => {
    return fetch(
      `https://api.coingecko.com/api/v3/coins/markets?ids=${tokens}&vs_currency=usd`
    ).then((res) => res.json());
  }
);

const tokensSlice = createSlice({
  name: "tokens",
  initialState: {
    coinGeckoIds: [],
    coinGeckoIdsStatus: null,
    coinGeckoTokensStatus: null,
    tokens: {},
  },
  reducers: {},
  extraReducers: {
    [getTokenIds.pending]: (state, _action) => {
      state.coinGeckoIdsStatus = "loading";
    },
    [getTokenIds.fulfilled]: (state, { payload }) => {
      const tokens = payload.filter((item) =>
        tokenSymbols.includes(item.symbol)
      );
      state.coinGeckoIds = tokens.map((token) => token.id);
      state.coinGeckoIdsStatus = "success";
    },
    [getTokenIds.rejected]: (state, _action) => {
      state.coinGeckoIdsStatus = "failed";
    },

    [getTokens.pending]: (state, _action) => {
      state.coinGeckoTokensStatus = "loading";
    },
    [getTokens.fulfilled]: (state, { payload }) => {
      const json = payload.reduce(function (json, value) {
        const tokenDetails = tokensList.find(
          (token) => value.symbol === token.symbol
        );
        json[value.id] = { ...value, ...tokenDetails };
        return json;
      }, {});
      state.tokens = json;
      state.coinGeckoTokensStatus = "success";
    },
    [getTokens.rejected]: (state, _action) => {
      state.coinGeckoTokensStatus = "failed";
    },
  },
});

export const tokenIds = (state) => state.tokens.coinGeckoIds;
export const tokenList = (state) => state.tokens.tokens;

export default tokensSlice.reducer;
