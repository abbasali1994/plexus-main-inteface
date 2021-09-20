import { utils } from "web3";

export const convertToDecimal = (hex, decimals) => {
  const balance = utils.toBN(hex).toString();
  return parseFloat(balance) / 10 ** decimals;
};
