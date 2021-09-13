import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Sidebar from "./index";
import { Provider } from "react-redux";
import store from "../../store";
import YieldAggregator from "../yield-aggregator";

describe("testing the yield sidebar", () => {
  const history = createMemoryHistory();
  const route = "/yield";
  history.push(route);

  render(
    <Provider store={store}>
      <Router history={history}>
        <YieldAggregator />
        <Sidebar />
      </Router>
    </Provider>
  );

  const tr = screen.getByTestId(1);
  fireEvent.click(tr);
  //here when we fire the event it will test the tr
  // but that call will be asyncronous so fot that we have to async
  // await syntax and for that we will use waitFor

  //the below id are the test id that are being added to yieldsidebar (i am just clicking the first component by getting the id of
  //  that component)
  it("should render yield text", () => {
    expect(
      screen.getByTestId("yield-sidebar-total-deposited-text")
    ).toHaveTextContent("Total Deposited");
    expect(screen.getByTestId("yield-sidebar-roi-text")).toHaveTextContent(
      "ROI"
    );
    expect(
      screen.getByTestId("yield-sidebar-your-deposit-text")
    ).toHaveTextContent("Your Deposites:");
    expect(screen.getByTestId("yield-sidebar-approve-text")).toHaveTextContent(
      "APPROVE PLX/ETH SLP"
    );
  });
});
