import { convertToDecimal } from "../../helper/conversions";
import { retrieveTokenBalanceViaRPC } from "../../helper/ethereumRPC";
import store from "../../store";

const fetchLPTokens = async () => {
  return fetch(`https://governance.1inch.io/v1.1/protocol/pairs`).then((res) =>
    res.json()
  );
};

export const queryLPTokensInch = async (userAddress) => {
  try {
    const LPtokens = await fetchLPTokens();
    const tokenAddresses = LPtokens.map((token) => token.pair);

    const balances = await retrieveTokenBalanceViaRPC(
      tokenAddresses,
      userAddress
    ).then(({ result: { tokenBalances } }) =>
      processResult(LPtokens, tokenBalances)
    );
    return { data: balances };
  } catch (e) {
    return { data: [], error: e.message };
  }
};

const processResult = (LPtokens, tokenBalances) => {
  const output = [];
  const {
    tokens: { tokens },
    prices: { pricesUSD },
  } = store.getState();
  tokenBalances.map((tokenBalance) => {
    const { pair, token0, token1, reserveUSD, totalSupply } = LPtokens.find(
      (tkn) =>
        tokenBalance.contractAddress.toLowerCase() === tkn.pair.toLowerCase()
    );
    const amount = convertToDecimal(tokenBalance.tokenBalance, 18);
    const price = parseFloat(reserveUSD) / parseFloat(totalSupply);

    const id1 = Object.keys(tokens).find(
      (id) => tokens[id].name === token0.symbol
    );
    const id2 = Object.keys(tokens).find(
      (id) => tokens[id].name === token1.symbol
    );
    const lpToken1Price = pricesUSD[id1]?.usd;
    const lpToken2Price = pricesUSD[id2]?.usd;
    const token1Amount = ((amount / 2) * price) / lpToken1Price;
    const token2Amount = ((amount / 2) * price) / lpToken2Price;
    token0.image = id1
      ? tokens[id1].image
      : `https://tokens.1inch.io/${token0.address}.png`;
    token1.image = id2
      ? tokens[id2].image
      : `https://tokens.1inch.io/${token1.address}.png`;
    if (amount)
      output.push({
        id: pair,
        lpToken1: {
          ...token0,
          name: token0.symbol,
          amount: token1Amount,
          price: lpToken1Price,
        },
        lpToken2: {
          ...token1,
          name: token1.symbol,
          amount: token2Amount,
          price: lpToken2Price,
        },
        amount,
        price,
        protocol: "1INCH",
      });

    return 0;
  });
  return output;
};
