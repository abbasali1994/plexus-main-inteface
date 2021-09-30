import { constants } from ".";
import store from "../store";
import { fetchTokenPrices } from "./prices";
import { setBalances, setLpTokenBalances } from "./balances";

// updates user balances
const refreshUserDetails = async () => {
  const {
    wallet: { address },
  } = store.getState();

  if (!address) return;
  setBalances(address);
  setLpTokenBalances(address);
};

// updates token prices
export const refreshPriceDetails = async () => {
  await fetchTokenPrices();
};

setInterval(
  () => refreshPriceDetails(),
  constants.schedulerFrequency.tokenPrices
);
setInterval(
  () => refreshUserDetails(),
  constants.schedulerFrequency.userBalances
);
