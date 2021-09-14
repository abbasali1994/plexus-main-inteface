import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Modal, Image, Col, Row, Container, Button } from "react-bootstrap";

import { currentTheme } from "../../../redux/themeSlice";
import ExitLight from "../../../assets/Exit.svg";
import ExitDark from "../../../assets/exit_blue.svg";
import Rat from "../../../assets/rat_small.svg";
import Union from "../../../assets/Union.svg";

import "./index.scss";

const WalletPopup = (props) => {
  const theme = useSelector(currentTheme);

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="wallet-popup-modal"
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
        <Container className="px-0 wallet-popup">
          <Row>
            <Col lg={12} className="d-flex">
              <img src={Rat} alt="" className="wallet-asset-img mb-1 mr-1" />
              <div className="ml-2">
                <div className="title-text">PLEXUS (PLX)</div>
                <div className="value-text gredent_text">$1.14</div>
              </div>
            </Col>
          </Row>
          <Row className="sub-container justify-content-between d-flex p-3 mx-1 mt-3">
            <div className="sub-label-text">Your PLX</div>
            <div className="sub-value-text">3,281.45</div>
          </Row>
          <Row className="sub-container justify-content-between d-flex p-3 mt-3 mx-1">
            <div className="sub-label-text">Value</div>
            <div className="sub-value-text">$2,872.32</div>
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
              Stake your Plexus tokens to earn additional PLX as rewards in the
              Yield Aggregator.
            </div>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default WalletPopup;
