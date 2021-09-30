import { web3Modal, connectToWallet } from "./wallet";
import { fetchTokenPrices } from "./prices";

(async () => {
  await fetchTokenPrices();
  try {
    if (web3Modal.cachedProvider) connectToWallet();
    import("./serviceWorker");
  } catch (e) {
    web3Modal.clearCachedProvider();
  }
})();
