
import React from "react";
import { shallow, mount } from "enzyme";
import UserYieldFarming from "./index";
import Chart from '../../assets/chart.svg';
import TableDataJson from "./data.json";

const tableData = TableDataJson;

describe("UserYieldFarming component tests", () => {
  const wrapper = shallow(<UserYieldFarming />);
  it("should render YieldFarming", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render the Wallet component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render YOUR YIELD FARMING text", () => {
    expect(wrapper.find("h5#yourYieldText").text()).toBe("YOUR YIELD FARMING");
  });

  // it("should render Amount text", () => {
  //   expect(wrapper.find("h5#dollarText").text()).toBe("$20,114.82");
  // });


  it("should have Assets inside table", () => {
    expect(wrapper.find("th#assetsText").text()).toBe("ASSETS");
  });

  it("should have Protocol inside table", () => {
    expect(wrapper.find("th#protocolText").text()).toBe("PROTOCOL");
  });

  it("should have YOUR DEPOSITS inside table", () => {
    expect(wrapper.find("th#yourDepositText").text()).toBe("YOUR DEPOSITS");
  });

  it("should have EARNINGS inside table", () => {
    expect(wrapper.find("th#earningText").text()).toBe("EARNINGS");
  });
  

  it("should have Rewards inside table", () => {
    expect(wrapper.find("th#rewardsText").text()).toBe("REWARDS");
  });

  // it("should render liquidityData map correctly", () => {
  //   expect(wrapper.find("tbody").children()).toHaveLength(8);
  // });
});
