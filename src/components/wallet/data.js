import ETH from "../../assets/eth.svg";
import Rat from "../../assets/rat.svg";
import Sushi from "../../assets/sushi.svg";
import Uniswap from "../../assets/uniswap.svg";

const walletData = [
  {
    id: 1,
    asset: "Plexus",
    assetIcon: Rat,
    protocol: "PLX",
    amount: "3,281.45",
    value: "$2,384.58",
    percentage: 47,
  },
  {
    id: 2,
    asset: "Sushi",
    assetIcon: Sushi,
    protocol: "SUSHI",
    amount: "873.21",
    value: "$1,923.45",
    percentage: 33,
  },
  {
    id: 3,
    asset: "Ethereum",
    assetIcon: ETH,
    protocol: "ETH",
    amount: "0.275",
    value: "$983.21",
    percentage: 16,
  },
  {
    id: 4,
    asset: "Uniswap",
    assetIcon: Uniswap,
    protocol: "UNI",
    amount: "21.234",
    value: "$58.76",
    percentage: 4,
  },
];

export default walletData;