import { constants } from "../utils";
import store from "../store";
import { convertToDecimal } from "./conversions";
import { tokenAddressList } from "../utils/tokens";

const retrieveTokenBalanceViaRPC = async (tokenAddresses, userAddress) => {
  const data = await fetch(`${constants.RPCEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "alchemy_getTokenBalances",
      params: [userAddress.toLowerCase(), tokenAddresses],
      id: 1,
    }),
  });
  return await data.json();
};

const retrieveEthereumBalanceViaRPC = async (userAddress) => {
  const data = await fetch(`${constants.RPCEndpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: "eth_getBalance",
      params: [userAddress.toLowerCase(), "latest"],
      id: 1,
    }),
  });
  return await data.json();
};

export const fetchBalances = async (userAddress) => {
  let balances = {};
  const {
    tokens: { tokens },
    prices: { pricesUSD },
  } = store.getState();
  const tokensArray = Object.keys(tokens).map((id) => tokens[id]);
  let tokenAddresses = tokensArray.map((token) => token.address);
  if (tokenAddresses.length === 0) tokenAddresses = tokenAddressList;
  balances = await retrieveTokenBalanceViaRPC(tokenAddresses, userAddress).then(
    ({ result: { tokenBalances } }) => {
      const output = {};
      tokenBalances.map((tokenBalance) => {
        const token = tokensArray.find(
          (tkn) =>
            tokenBalance.contractAddress.toLowerCase() ===
            tkn.address.toLowerCase()
        );
        const amount = convertToDecimal(
          tokenBalance.tokenBalance,
          token.decimals
        );
        output[token.id] = {
          amount,
          usd: amount * pricesUSD[token.id].usd,
        };

        return 0;
      });

      return output;
    }
  );
  balances.ethereum = await retrieveEthereumBalanceViaRPC(userAddress).then(
    ({ result }) => {
      const amount = convertToDecimal(result, 18);
      return { amount, usd: amount * pricesUSD.ethereum.usd };
    }
  );

  return balances;
};
