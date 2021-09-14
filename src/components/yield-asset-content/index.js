import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Rat from "../../assets/rat_small.svg";
import Sushi from "../../assets/sushi_small.svg";
import ArrowUpIcon from "../../assets/arrow_up.svg";

import classNames from "classnames";
import { useDispatch } from "react-redux";
import { changeSidebar } from "../../redux/sidebarSlice";

const YieldAssetContent = ({ type }) => {
  const [buttonState, setButtonState] = useState("deposit");
  const dispatch = useDispatch();
  const handleClickZap = () => {
    if (type === "sidebar") dispatch(changeSidebar("zap-liquidity"));
  };
  const pxClass = type === "sidebar" ? "px-3" : "px-0";
  return (
    <>
      <Container className={pxClass}>
        <Row>
          <Col>
            <div className="subtitle-text-yield">PLX/ETH SUSHISWAP LP</div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col lg={6} md={6} xs={6} className="pr-0">
            <div className="yield-info-box">
              <div
                data-testid="yield-sidebar-total-deposited-text"
                className="yield-info-title-text"
              >
                Total Deposited
              </div>
              <div
                data-testid="yield-sidebar-total-deposited-value"
                className="yield-info-value-text"
              >
                $ 18,324,543.21
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} xs={6}>
            <div className="yield-info-box">
              <div
                data-testid="yield-sidebar-roi-text"
                className="yield-info-title-text"
              >
                ROI
              </div>
              <div
                data-testid="yield-sidebar-roi-value"
                className="yield-info-value-text"
              >
                45.6% (1Y)
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6} md={6} xs={6} className="pr-0">
            <div
              data-testid="yield-sidebar-your-deposit-text"
              className="yield-personal-info-title-text"
            >
              Your Deposites:
            </div>
          </Col>
          <Col lg={6} md={6} xs={6} className="pr-3">
            <div
              data-testid="yield-sidebar-your-deposit-value"
              className="yield-personal-info-value-text"
            >
              0.00 SLP
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} md={6} xs={6} className="pr-0">
            <div className="yield-personal-info-title-text">
              Rewards Earned:
            </div>
          </Col>
          <Col lg={6} md={6} xs={6} className="pr-3">
            <div className="yield-personal-info-value-text p-0">
              <img src={Rat} alt="" className="mb-1 mr-1" />
              <span className="mr-3">0.00</span>
              <img src={Sushi} alt="" className="mb-1 mr-1" />
              <span>0.00</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={`${pxClass} yield-action`}>
        <Row className="mt-4">
          <Col>
            <div className="yield-action-button-box">
              <div
                className={classNames("w-30 yield-action-button-text-box", {
                  active: buttonState === "deposit",
                })}
                onClick={() => setButtonState("deposit")}
              >
                Deposit
              </div>
              <div
                className={classNames("w-30 yield-action-button-text-box", {
                  active: buttonState === "withdraw",
                })}
                onClick={() => setButtonState("withdraw")}
              >
                Withdraw
              </div>
              <div
                className={classNames("w-40 yield-action-button-text-box", {
                  active: buttonState === "claim",
                })}
                onClick={() => setButtonState("claim")}
              >
                Claim Rewards
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="yield-action-value-box">
              <div className="value-text">0.00 </div>
              <div className="max-button-text">
                MAX
                <img src={ArrowUpIcon} alt="" className="mb-1 ml-1" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div
              data-testid="yield-sidebar-available-slp-text"
              className="available-text"
            >
              Available: 15.6754 SLP
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div
              data-testid="yield-sidebar-approve-text"
              className="approve-button"
            >
              APPROVE PLX/ETH SLP
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="comment">
              Need PLX/ETH SLP tokens to join this farm?
              <br />{" "}
              <span className="zap-link" onClick={() => handleClickZap()}>
                Zap in liquidity
              </span>{" "}
              with any ERC-20 token in
              <br /> your wallet.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default YieldAssetContent;
