import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Modal, Image, Col, Row, Container } from "react-bootstrap";

import { currentTheme } from "../../../redux/themeSlice";
import ExitLight from "../../../assets/Exit.svg";
import ExitDark from "../../../assets/exit_blue.svg";
import Rat from "../../../assets/rat_small.svg";
import Sushi from "../../../assets/sushi_small.svg";
import ArrowUpIcon from "../../../assets/arrow_up.svg";

import "./index.scss";

const YieldPopup = (props) => {
  const theme = useSelector(currentTheme);
  const [buttonState, setButtonState] = useState("deposit");

  const handleClickZap = () => {};

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="yield-popup-modal"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          <Col className="p-0">
            <span className="address-popup-text ml-3">0X1E....D396</span>
            <FontAwesomeIcon className="caret-down pt-1" icon={faCaretDown} />
          </Col>
          <Image
            src={theme === "light" ? ExitDark : ExitLight}
            className="exit"
            width="26px"
            onClick={() => props.setShow(false)}
          ></Image>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="px-0">
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
        <Container className="px-0 yield-action">
          <Row className="mt-4">
            <Col>
              <div className="yield-action-button-box">
                <div
                  className={
                    buttonState === "deposit"
                      ? "w-30 yield-action-button-text-box active"
                      : "w-30 yield-action-button-text-box"
                  }
                  onClick={() => setButtonState("deposit")}
                >
                  Deposit
                </div>
                <div
                  className={
                    buttonState === "withdraw"
                      ? "w-30 yield-action-button-text-box active"
                      : "w-30 yield-action-button-text-box"
                  }
                  onClick={() => setButtonState("withdraw")}
                >
                  Withdraw
                </div>
                <div
                  className={
                    buttonState === "claim"
                      ? "w-40 yield-action-button-text-box active"
                      : "w-40 yield-action-button-text-box"
                  }
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
      </Modal.Body>
    </Modal>
  );
};

export default YieldPopup;
