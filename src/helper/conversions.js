import { utils } from "web3";

export const convertToDecimal = (hex, decimals) => {
  const balance = utils.toBN(hex).toString();
  return parseFloat(balance) / 10 ** decimals;
};

export function formatAmount(amount, decimals = 4) {
  if (amount === undefined) return "";

  if (typeof amount !== "number") amount = parseFloat(amount.replace(",", ""));
  if (amount > 10 ** 9) {
    amount = amount / 10 ** 9;
    return amount.toLocaleString("en-US", { maximumFractionDigits: 3 }) + " B";
  }
  if (amount > 10)
    return amount.toLocaleString("en-US", { maximumFractionDigits: 2 });
  if (amount > 10 ** (-1 * decimals))
    return amount.toLocaleString("en-US", { maximumFractionDigits: decimals });
  return amount.toExponential(decimals);
}

export function capitalCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
