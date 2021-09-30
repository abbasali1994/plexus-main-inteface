import store from "../store";
import { getGasPrices, getTokenUSDPrices } from "../redux/pricesSlice";
import { getTokenIds, getTokens } from "../redux/tokensSlice";

export const fetchTokenPrices = async (userAddress) => {
  try {
    store.dispatch(getGasPrices());
    if (!selectCoinGeckoIds().length) await store.dispatch(getTokenIds());
    if (!Object.keys(selectTokens()).length)
      await store.dispatch(getTokens(selectCoinGeckoIds().toString()));
    if (!Object.keys(selectPrices()).length)
      await store.dispatch(getTokenUSDPrices(selectCoinGeckoIds().toString()));
  } catch (e) {
    console.log(e);
  }
};

const selectCoinGeckoIds = () => store.getState().tokens.coinGeckoIds;
const selectTokens = () => store.getState().tokens.tokens;
const selectPrices = () => store.getState().prices.pricesUSD;
