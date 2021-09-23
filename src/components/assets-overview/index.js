import React from "react";
import { Row, Col } from "react-bootstrap";
import WalletIcon from "../../assets/wallet.svg";
import Liquidity from "../../assets/liquidity.svg";
import Lock from "../../assets/lock.svg";
import Rewards from "../../assets/rewards.svg";
import UserYieldFarming from "../user-yield-farming";
import Pie from "../pie-chart";
import { useSelector } from "react-redux";
import { formatAmount } from "../../helper/conversions";
import { userTokenBalances } from "../../redux/walletSlice";

const assetsData = [
  {
    name: "WALLET",
    icon: WalletIcon,
    percentage: 23,
  },
  {
    name: "LIQUIDITY",
    icon: Liquidity,
    amount: "$3,892.34",
    percentage: 45,
  },
  {
    name: "STAKING",
    icon: Lock,
    amount: "$17,398.56",
    percentage: 60.8,
  },
  {
    name: "REWARDS",
    icon: Rewards,
    amount: "$2,716.43",
    percentage: 35.4,
  },
];

const AssetsOverview = ({ handleClickAsset }) => {
  const tokenBalances = useSelector(userTokenBalances);
  assetsData[0].amount = `$${formatAmount(tokenBalances.totalValue, 2)}`;

  return (
    <Row>
      <Col md={12} className="mb-3 mb-md-5">
        <h6 className="text-muted mb-3">ASSETS OVERVIEW</h6>
        <Row className="text-white">
          {assetsData.map((e, index) => (
            <Col
              key={index}
              data-testid={"button-" + e.name}
              md={6}
              className="mb-2 mb-md-4"
              onClick={() => handleClickAsset(e.name)}
            >
              <div className="asset_div p-3 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={e.icon} alt="" className="mr-2" />
                  <b>{e.name}</b>
                </div>
                <div className="d-flex align-items-center">
                  <span className="mr-3 gredent_text">{e.amount}</span>
                  <span className="mr-2 mt-1">{e.percentage + "%"}</span>
                  <Pie percentage={e.percentage} size={32} />
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
      <UserYieldFarming />
    </Row>
  );
};

export default AssetsOverview;
