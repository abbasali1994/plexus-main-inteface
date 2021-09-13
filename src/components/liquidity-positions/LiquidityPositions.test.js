import React from "react";
import { render, cleanup } from "@testing-library/react";
import LiquidityPositions from "./index";
import store from "../../store";
import { Provider } from "react-redux";
import ETH from "../../assets/eth.svg";
import Rat from "../../assets/rat.svg";
import Chart from "../../assets/chart.svg";
import Sushi from "../../assets/sushi.svg";
import Inch from "../../assets/1inch.svg";
import Uniswap from "../../assets/uniswap.svg";
import liquidityData from "./LiquidityData.json";

describe("LiquidityPositions component tests", () => {
  let getByTestId;
  beforeEach(() => {
    const component = render(
      <Provider store={store}>
        <LiquidityPositions />
      </Provider>
    );
    getByTestId = component.getByTestId;
  });

  afterEach(() => {
    cleanup;
  });

  it("should render BACK TO DASHBOARD text", () => {
    expect(getByTestId("backText").innerHTML).toBe("BACK TO DASHBOARD");
  });

  it("should render LIQUIDITY POSITIONS text", () => {
    expect(getByTestId("liquidityText").innerHTML).toBe("LIQUIDITY POSITIONS");
  });

  // it("should render Amount text", () => {
  //   expect(getByTestId("dollarText").innerHTML).toBe("$3,892.34");
  // });

  // it("should render Percentage text", () => {
  //   expect(getByTestId("percentText").innerHTML).toBe("23%");
  // });

  it("should render Portfolio text", () => {
    expect(getByTestId("portfolioText").innerHTML).toBe("OF YOUR  PORTFOLIO");
  });

  it("should render UNISWAP text", () => {
    expect(getByTestId("uniSwapText").innerHTML).toBe("UNISWAP");
  });

  it("should render INCH text", () => {
    expect(getByTestId("inchText").innerHTML).toBe("1INCH");
  });

  it("should render Assets text", () => {
    expect(getByTestId("assetsText").innerHTML).toBe("ASSETS");
    expect(getByTestId("protocolText").innerHTML).toBe("PROTOCOL");
    expect(getByTestId("depositText").innerHTML).toBe("YOUR DEPOSITS");
  });

  it("should render inch Image", () => {
    const image = getByTestId("inchImg");
    expect(image.src).toContain(Inch);
  });
  it("should render chart Image", () => {
    const image = getByTestId("chartImg");
    expect(image.src).toContain(Chart);
  });

  it("should render uniswap Image", () => {
    const image = getByTestId("uniSwapImg");
    expect(image.src).toContain(Uniswap);
  });

  it("should render Sushiwap text", () => {
    const image = getByTestId("sushiwapImg");
    expect(image.src).toContain(Sushi);
  });
});
