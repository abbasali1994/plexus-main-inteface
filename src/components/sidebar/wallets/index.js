import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import "./index.scss";

import Rat from "../../../assets/rat_small.svg";
import Union from "../../../assets/Union.svg";
import { useSelector } from "react-redux";
import { currentSelectedWalletAsset } from "../../../redux/sidebarSlice";
import { formatAmount } from "../../../helper/conversions";
import { tokenList } from "../../../redux/tokensSlice";
import { userTokenBalances } from "../../../redux/walletSlice";

const WalletAssetSidebar = () => {
  const tokenBalances = useSelector(userTokenBalances);
  const id = useSelector(currentSelectedWalletAsset);
  const tokens = useSelector(tokenList);

  const tokenAmount = tokenBalances[id]?.amount || 0;
  const tokenValue = tokenBalances[id]?.usd || 0;
  if (!id) return "";
  return (
    <Container className="wallet-asset">
      <Container className="px-3">
        <Row>
          <Col lg={12} className="d-flex">
            <img src={Rat} alt="" className="wallet-asset-img mb-1 mr-1" />
            <div className="ml-2">
              <div className="title-text">
                {`${id} (${tokens[id].symbol})`.toUpperCase()}
              </div>
              <div className="value-text gredent_text">
                ${formatAmount(tokenValue / tokenAmount, 2)}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="sub-container justify-content-between d-flex p-3 mx-1 mt-4">
          <div className="sub-label-text">
            Your {tokens[id].symbol.toUpperCase()}
          </div>
          <div className="sub-value-text">{formatAmount(tokenAmount, 2)}</div>
        </Row>
        <Row className="sub-container justify-content-between d-flex p-3 mt-3 mx-1">
          <div className="sub-label-text">Value</div>
          <div className="sub-value-text">${formatAmount(tokenValue, 2)}</div>
        </Row>
        <Row className="mt-5 mx-1">
          <div className="title-text">ACTIONS</div>
        </Row>
        <Row className="mt-1 px-3">
          <Button className="claim-button px-3 mt-2">
            <span className="h-28">GENERATE UNI OR SUSHI LP</span>
            <img src={Union} alt="" className="ml-3" />
          </Button>
        </Row>
        <Row className="mx-1 mt-3">
          <div className="description-text">
            Convert this asset into two equal assets for entry into a Sushiswap
            or Uniswap liquidity position.
          </div>
        </Row>
        <Row className="mt-3 px-3">
          <Button className="claim-button px-3 mt-2">
            <span className="h-28">STAKE FOR REWARDS</span>
            <img src={Union} alt="" className="ml-3" />
          </Button>
        </Row>
        <Row className="mx-1 mt-3">
          <div className="description-text">
            Stake your Tokens to earn additional PLX as rewards in the Yield
            Aggregator.
          </div>
        </Row>
      </Container>
    </Container>
  );
};
export default WalletAssetSidebar;
