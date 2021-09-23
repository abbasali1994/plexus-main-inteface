import { web3Modal, connectToWallet } from "./wallet";
import { getTokenIds, getTokens } from "../redux/tokensSlice";
import { getGasPrices, getTokenUSDPrices } from "../redux/pricesSlice";
import store from "../store";

const selectCoinGeckoIds = () => store.getState().tokens.coinGeckoIds;
const selectTokens = () => store.getState().tokens.tokens;
const selectPrices = () => store.getState().prices.pricesUSD;

(async () => {
  store.dispatch(getGasPrices());
  if (!selectCoinGeckoIds().length) await store.dispatch(getTokenIds());
  if (!Object.keys(selectTokens()).length)
    await store.dispatch(getTokens(selectCoinGeckoIds().toString()));
  if (!Object.keys(selectPrices()).length)
    await store.dispatch(getTokenUSDPrices(selectCoinGeckoIds().toString()));

  try {
    if (web3Modal.cachedProvider) connectToWallet();
  } catch (e) {
    web3Modal.clearCachedProvider();
  }
})();
