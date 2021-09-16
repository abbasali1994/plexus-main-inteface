import { web3Modal, connectToWallet } from "./wallet";

(async () => {
  if (web3Modal.cachedProvider) await connectToWallet();
})();
