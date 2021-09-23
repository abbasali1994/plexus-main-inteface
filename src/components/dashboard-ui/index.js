import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSidebar } from "../../redux/sidebarSlice";
import LiquidityPositions from "../liquidity-positions";
import RewardsComponent from "../rewards";
import Wallet from "../wallet";
import StakingComponent from "../staking";
import AssetsOverview from "../assets-overview";
import NetworkProtocol from "../network-protocol";
import "./index.scss";

const DashboardUI = () => {
  const [overview, setOverview] = useState("All");
  const dispatch = useDispatch();

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
    <>
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
    </>
  );
};

export default DashboardUI;
