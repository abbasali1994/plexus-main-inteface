import store from "../store";
import { setTokens } from "../redux/walletSlice";
import { fetchBalances } from "../helper/ethereumRPC";

export const setBalances = async (userAddress) => {
  try {
    const storeBalance = { totalValue: 0 };
    const {
      wallet: { tokens },
    } = store.getState();
    const balances = await fetchBalances(userAddress);
    Object.keys(balances).map((id) => {
      if (balances[id].amount <= 0 && !tokens[id]) return 0;
      if (tokens[id] && balances[id].amount === tokens[id].amount) return 0;
      storeBalance[id] = balances[id];
      storeBalance.totalValue += balances[id].usd;
      return 0;
    });
    store.dispatch(setTokens(storeBalance));
  } catch (e) {
    console.log(e);
  }
};
