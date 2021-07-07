import React from "react";
import { render, cleanup } from "@testing-library/react";
import DashboardUI from "./index";
import store from "../../store";
import { Provider } from "react-redux";
import Binance from "../../assets/binance.svg";
import Soloana from "../../assets/soloana.svg";
import ETH from "../../assets/eth.svg";

describe("Dashboard component tests", () => {
  let getByTestId;
  beforeEach(() => {
    const component = render(
      <Provider store={store}>
        <DashboardUI />
      </Provider>
    );
    getByTestId = component.getByTestId;
  });

  afterEach(() => {
    cleanup;
  });

  it("should render BSC text", () => {
    expect(getByTestId("bscText").innerHTML).toBe("BSC");
  });

  it("should render Bsc Coming Soon text", () => {
    expect(getByTestId("bscComingSoonText").innerHTML).toBe("COMING SOON");
  });

  it("should render Solana text", () => {
    expect(getByTestId("solanaText").innerHTML).toBe("SOLANA");
  });

  it("should render Solana Coming Soon text", () => {
    expect(getByTestId("solanaComingSoonText").innerHTML).toBe("COMING SOON");
  });

  it("should render ETHEREUM text", () => {
    expect(getByTestId("ethText").innerHTML).toBe("ETHEREUM");
  });

  it("should render ETHEREUM Image", () => {
    const image = getByTestId("ethImg");
    expect(image.src).toContain(ETH);
  });

  it("should render Binance Image", () => {
    const image = getByTestId("bscImg");
    expect(image.src).toContain(Binance);
  });

  it("should render Solana Image", () => {
    const image = getByTestId("solanaImg");
    expect(image.src).toContain(Soloana);
  });
});
