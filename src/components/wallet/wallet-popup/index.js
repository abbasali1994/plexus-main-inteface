import React from "react";
import { useSelector } from "react-redux";
import { Modal, Image, Col, Row, Container, Button } from "react-bootstrap";
import UserAddress from "../../user-address";
import { currentTheme } from "../../../redux/themeSlice";
import ExitLight from "../../../assets/Exit.svg";
import ExitDark from "../../../assets/exit_blue.svg";

import Union from "../../../assets/Union.svg";

import "./index.scss";
import { currentSelectedWalletAsset } from "../../../redux/sidebarSlice";
import { tokenList } from "../../../redux/tokensSlice";
import { formatAmount } from "../../../helper/conversions";
import { userTokenBalances } from "../../../redux/walletSlice";

const WalletPopup = (props) => {
  const theme = useSelector(currentTheme);
  const tokenBalances = useSelector(userTokenBalances);
  const id = useSelector(currentSelectedWalletAsset);
  const tokens = useSelector(tokenList);

  const tokenAmount = tokenBalances[id]?.amount || 0;
  const tokenValue = tokenBalances[id]?.usd || 0;
  if (!id) return "";
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="wallet-popup-modal"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          <UserAddress type={"popup"} />
          <Image
            src={theme === "light" ? ExitDark : ExitLight}
            className="exit"
            width="26px"
            onClick={() => props.setShow(false)}
          ></Image>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="px-0 wallet-popup">
          <Row>
            <Col lg={12} className="d-flex">
              <img
                src={tokens[id].image}
                alt=""
                className="wallet-asset-img mb-1 mr-1"
              />
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
          <Row className="sub-container justify-content-between d-flex p-3 mx-1 mt-3">
            <div className="sub-label-text">
              Your {tokens[id].symbol.toUpperCase()}
            </div>
            <div className="sub-value-text">{formatAmount(tokenAmount, 2)}</div>
          </Row>
          <Row className="sub-container justify-content-between d-flex p-3 mt-3 mx-1">
            <div className="sub-label-text">Value</div>
            <div className="sub-value-text">${formatAmount(tokenValue, 2)}</div>
          </Row>
          <Row className="mt-3 mx-1">
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
              Convert this asset into two equal assets for entry into a
              Sushiswap or Uniswap liquidity position.
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
      </Modal.Body>
    </Modal>
  );
};

export default WalletPopup;
