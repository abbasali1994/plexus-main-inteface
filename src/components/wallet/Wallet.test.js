import React from "react";
import { shallow, mount } from "enzyme";
import Wallet from "./index";
import ETH from "../../assets/eth.svg";
import Rat from "../../assets/rat.svg";
import Chart from "../../assets/chart.svg";
import Sushi from "../../assets/sushi.svg";
import Uniswap from "../../assets/uniswap.svg";

const walletData = [
  {
    asset: "Plexus",
    assetIcon: Rat,
    protocol: "PLX",
    amount: "3,281.45",
    value: "$2,384.58",
    percentage: "47%",
  },
  {
    asset: "Sushi",
    assetIcon: Sushi,
    protocol: "SUSHI",
    amount: "873.21",
    value: "$1,923.45",
    percentage: "33%",
  },
  {
    asset: "Ethereum",
    assetIcon: ETH,
    protocol: "ETH",
    amount: "0.275",
    value: "$983.21",
    percentage: "16%",
  },
  {
    asset: "Uniswap",
    assetIcon: Uniswap,
    protocol: "UNI",
    amount: "21.234",
    value: "$58.76",
    percentage: "4%",
  },
];
describe("Wallet component tests", () => {
  const wrapper = shallow(<Wallet />);

  it("should render the Wallet component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render BACK TO DASHBOARD text", () => {
    expect(wrapper.find("h6#backText").text()).toBe("BACK TO DASHBOARD");
  });

  it("should render WALLET text", () => {
    expect(wrapper.find("h5#walletText").text()).toBe("WALLET");
  });

  // it("should render Amount text", () => {
  //   expect(wrapper.find("h5#dollarText").text()).toBe("$8,782.34");
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

  it("should have Amount inside table", () => {
    expect(wrapper.find("th#amountText").text()).toBe("AMOUNT");
  });

  it("should have Value inside table", () => {
    expect(wrapper.find("th#valueText").text()).toBe("VALUE");
  });

  it("should have % of wallet table", () => {
    expect(wrapper.find("th#percentWalletText").text()).toBe("% OF WALLET");
  });

  it("should render wallet data map correctly", () => {
    expect(wrapper.find("tbody").children()).toHaveLength(8);
  });
});
