import { client as uniClient } from "./uniswap";
import { client as sushiClient } from "./sushiswap";
import { LP_POSITION_QUERY } from "./queries";
import store from "../store";
import { gql } from "@apollo/client";
import { queryLPTokensInch } from "./1inch";

const queryLpTokens = async (client, userAddress) => {
  try {
    const { data, error } = await client.query({
      query: gql(LP_POSITION_QUERY),
      variables: {
        user: userAddress.toLowerCase(),
      },
    });
    if (data.user?.liquidityPositions)
      return { data: data.user.liquidityPositions, error };

    return { data: [], error };
  } catch (e) {
    return { data: [], error: e.message };
  }
};

export const fetchLpTokens = async (userAddress) => {
  const Uniswap = queryLpTokens(uniClient, userAddress);
  const Sushiswap = queryLpTokens(sushiClient, userAddress);
  const Inch = queryLPTokensInch(userAddress);
  const result = await Promise.all([Uniswap, Sushiswap, Inch]).then(
    (resolve) => {
      return {
        lpTokens: [
          ...processResult(resolve[0].data, "UNISWAP"),
          ...processResult(resolve[1].data, "SUSHISWAP"),
          ...resolve[2].data,
        ],
        errors: {
          uniswap: resolve[0].error,
          sushiswap: resolve[1].error,
          inch: resolve[2].error,
        },
      };
    }
  );
  return result;
};

const processResult = (result, protocol) => {
  const {
    tokens: { tokens },
    prices: { pricesUSD },
  } = store.getState();
  const lpTokens = [];
  result.forEach((liquidityPosition) => {
    let { pair, liquidityTokenBalance } = liquidityPosition;
    const { id, token0, token1, reserveUSD, totalSupply } = pair;

    liquidityTokenBalance = parseFloat(liquidityTokenBalance);
    if (liquidityTokenBalance > 0) {
      try {
        const lpTokenPrice = parseFloat(reserveUSD) / parseFloat(totalSupply);
        const id1 = Object.keys(tokens).find(
          (id) => tokens[id].address === token0.id
        );
        const id2 = Object.keys(tokens).find(
          (id) => tokens[id].address === token1.id
        );
        const lpToken1Price = pricesUSD[id1].usd;
        const lpToken2Price = pricesUSD[id2].usd;
        const token1Amount =
          ((liquidityTokenBalance / 2) * lpTokenPrice) / lpToken1Price;
        const token2Amount =
          ((liquidityTokenBalance / 2) * lpTokenPrice) / lpToken2Price;
        lpTokens.push({
          lpToken1: {
            ...tokens[id1],
            price: lpToken1Price,
            amount: token1Amount,
          },
          lpToken2: {
            ...tokens[id2],
            price: lpToken2Price,
            amount: token2Amount,
          },
          id,
          protocol,
          price: lpTokenPrice,
          amount: liquidityTokenBalance,
        });
      } catch (e) {
        console.log(e);
      }
    }
  });
  return lpTokens;
};
