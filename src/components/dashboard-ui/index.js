import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { constants } from "../../utils";
import { changeSidebar } from "../../redux/sidebarSlice";

import LiquidityPositions from "../liquidity-positions";
import RewardsComponent from "../rewards";
import Wallet from "../wallet";
import StakingComponent from "../staking";
import AssetsOverview from "../assets-overview";

import "./index.scss";
import NetworkProtocol from "../network-protocol";

const DashboardUI = () => {
  const [overview, setOverview] = useState("All");
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const handleClickAsset = (name) => {
    setOverview(name);
    switch (name) {
      case "LIQUIDITY":
        dispatch(changeSidebar("dashboard-liquidity"));
        break;
      case "WALLET":
        dispatch(changeSidebar("dashboard-wallet"));
        break;
      case "STAKING":
        dispatch(changeSidebar("dashboard-staking"));
        break;
      case "REWARDS":
        dispatch(changeSidebar("dashboard-rewards"));
        break;
      default:
        break;
    }
  };

  const backToDashboard = () => {
    setOverview("All");
    dispatch(changeSidebar("dashboard-all"));
  };

  return (
    <Container
      fluid
      className={
        "py-md-5 pr-md-5" + (width > constants.width.mobile ? " pl-4" : " mt-4")
      }
    >
      <NetworkProtocol />
      {overview === "All" && (
        <AssetsOverview handleClickAsset={handleClickAsset} />
      )}
      {overview === "LIQUIDITY" && (
        <LiquidityPositions goBack={backToDashboard} />
      )}
      {overview === "REWARDS" && <RewardsComponent goBack={backToDashboard} />}
      {overview === "WALLET" && <Wallet goBack={backToDashboard} />}
      {overview === "STAKING" && <StakingComponent goBack={backToDashboard} />}
    </Container>
  );
};

export default DashboardUI;
