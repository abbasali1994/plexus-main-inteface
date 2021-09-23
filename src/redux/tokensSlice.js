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
    console.log(tokens);
    return fetch(
      `https://api.coingecko.com/api/v3/coins/markets?ids=${tokens}&vs_currency=usd`
    ).then((res) => res.json());
  }
);

const tokensSlice = createSlice({
  name: "tokens",
  initialState: {
    coinGeckoIds: [],
    coinGeckoApiStatus: null,
    tokens: {},
  },
  reducers: {},
  extraReducers: {
    [getTokenIds.pending]: (state, _action) => {
      state.coinGeckoApiStatus = "loading";
    },
    [getTokenIds.fulfilled]: (state, { payload }) => {
      const tokens = payload.filter((item) =>
        tokenSymbols.includes(item.symbol)
      );
      state.coinGeckoIds = tokens.map((token) => token.id);
      state.coinGeckoApiStatus = "success";
    },
    [getTokenIds.rejected]: (state, _action) => {
      state.coinGeckoApiStatus = "failed";
    },

    [getTokens.pending]: (state, _action) => {
      state.coinGeckoApiStatus = "loading";
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
      state.coinGeckoApiStatus = "success";
    },
    [getTokens.rejected]: (state, _action) => {
      state.coinGeckoApiStatus = "failed";
    },
  },
});

export const tokenIds = (state) => state.tokens.coinGeckoIds;
export const tokenList = (state) => state.tokens.tokens;

export default tokensSlice.reducer;
