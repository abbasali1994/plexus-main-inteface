import React from "react";
import { shallow, mount } from "enzyme";
import StakingComponent from "./index";
import ETH from "../../assets/eth.svg";
import Rat from "../../assets/rat.svg";
import Chart from "../../assets/chart.svg";
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

describe("staking comonent tests", () => {
  const wrapper = shallow(<StakingComponent />);
  it("should render stakingComponent", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render the Wallet component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render BACK TO DASHBOARD text", () => {
    expect(wrapper.find("h6#backText").text()).toBe("BACK TO DASHBOARD");
  });

  it("should render STAKING text", () => {
    expect(wrapper.find("h5#stakingText").text()).toBe("STAKING");
  });

  // it("should render Amount text", () => {
  //   expect(wrapper.find("h5#dollarText").text()).toBe("$2,716.43");
  // });

  // it("should render Percentage text", () => {
  //   expect(wrapper.find("h5#percentText").text()).toBe("23%");
  // });

  it("should render Portfolio text", () => {
    expect(wrapper.find("h5#portfolioText").text()).toBe("OF YOUR  PORTFOLIO");
  });

  it("should render Chart Image", () => {
    expect(wrapper.find("img#chartImg").props().src).toEqual(Chart);
  });

  it("should have Assets inside table", () => {
    expect(wrapper.find("th#assetsText").text()).toBe("ASSETS");
  });

  it("should have Protoclo inside table", () => {
    expect(wrapper.find("th#protocolText").text()).toBe("PROTOCOL");
  });

  it("should have Earned inside table", () => {
    expect(wrapper.find("th#earnedText").text()).toBe("REWARDS EARNED");
  });

  it("should have Rewards inside table", () => {
    expect(wrapper.find("th#rewardsText").text()).toBe("REWARDS");
  });

  it("should render liquidityData map correctly", () => {
    expect(wrapper.find("tbody").children()).toHaveLength(8);
  });
});
