import ETH from "../../assets/eth.svg";
import Rat from "../../assets/rat.svg";
import Sushi from "../../assets/sushi_medium.svg";

const liquidityData = [
  {
    assets1: "PLX/ETH",
    assets2: "SushiSwap LP",
    asset1Icon: Rat,
    asset2Icon: ETH,
    protocol: "Plexus",
    rewardsEarned1: "23.456 PLX",
    rewardsEarned2: "3.245 SUSHI",
    rewardsIcon1: Rat,
    rewardsIcon2: Sushi,
    deposit: "$2,384.58",
  },
  {
    assets1: "SUSHI/ETH",
    assets2: "SushiSwap LP",
    asset1Icon: Sushi,
    asset2Icon: ETH,
    protocol: "SushiSwap",
    rewardsEarned1: "23.456 PLX",
    rewardsEarned2: "3.245 SUSHI",
    rewardsIcon1: Rat,
    rewardsIcon2: Sushi,
    deposit: "$934.56",
  },
  {
    assets1: "PLX/ETH",
    assets2: "1Inch LP",
    asset1Icon: Rat,
    asset2Icon: ETH,
    protocol: "Plexus",
    rewardsEarned1: "23.456 PLX",
    rewardsEarned2: "3.245 1inch",
    rewardsIcon1: Rat,
    rewardsIcon2: Sushi,
    deposit: "$356.32",
  },
  {
    assets1: "Plexus Token",
    assets2: "",
    asset1Icon: Rat,
    asset2Icon: null,
    protocol: "Plexus",
    rewardsEarned1: "23.456 PLX",
    rewardsEarned2: "",
    rewardsIcon1: Rat,
    rewardsIcon2: null,
    deposit: "$314.56",
  },
];

export default liquidityData;
