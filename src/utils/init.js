import { web3Modal, connectToWallet } from "./wallet";
import { getTokenIds, getTokens } from "../redux/tokensSlice";
import { getGasPrices, getTokenUSDPrices } from "../redux/pricesSlice";
import store from "../store";
import { tokenSymbols } from "./tokens";

(async () => {
  store.dispatch(getGasPrices());
  store.dispatch(getTokenIds()).then(({ payload }) => {
    let tokenIDs = "";
    const filteredTokens = payload.filter((currentValue) =>
      tokenSymbols.includes(currentValue.symbol)
    );
    tokenIDs = filteredTokens.map((currentValue) => currentValue.id);
    store.dispatch(getTokens(tokenIDs.toString()));
    store.dispatch(getTokenUSDPrices(tokenIDs.toString()));
  });

  try {
    if (web3Modal.cachedProvider) await connectToWallet();
  } catch (e) {
    web3Modal.clearCachedProvider();
  }
})();
