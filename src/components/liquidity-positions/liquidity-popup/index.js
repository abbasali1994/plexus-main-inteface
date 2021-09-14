import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Modal, Image, Col, Row, Container, Button } from "react-bootstrap";

import { currentTheme } from "../../../redux/themeSlice";
import ExitLight from "../../../assets/Exit.svg";
import ExitDark from "../../../assets/exit_blue.svg";
import Rat from "../../../assets/rat_small.svg";
import Sushi from "../../../assets/sushi_small.svg";
import ETH from "../../../assets/eth.svg";
import Union from "../../../assets/Union.svg";

import "./index.scss";

const LiquidityPopup = (props) => {
  const theme = useSelector(currentTheme);

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="liquidity-popup-modal"
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
        {props.type === "1INCH" && (
          <Container className="px-0">
            <Row>
              <Col
                lg={12}
                className="justify-content-between align-items-center d-flex"
              >
                <div>
                  <img
                    src={Rat}
                    alt=""
                    className="user-staking-img mb-1 mr-2"
                  />
                  <img
                    src={ETH}
                    alt=""
                    className="user-staking-img mb-1 mr-2"
                  />
                </div>
                <div className="total-value-text gredent_text">$934.56</div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className="staking-title-text mb-0">PLX/ETH</div>
                <div className="staking-description-text mt-0">
                  1INCH LIQIDITY POSITION
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col lg={6} md={6} xs={6} className="pr-0">
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    PLX Deposited
                  </div>
                  <div className="value-text1">34.56 SUSHI</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    ETH Deposited
                  </div>
                  <div className="value-text1">0.05 ETH</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className="action-title-text">ACTIONS</div>
              </Col>
            </Row>
            <Row className="mt-3 px-3">
              <Button className="stake-button px-3 mt-2">
                <span className="h-28">STAKE</span>
                <img src={Union} alt="" className="ml-3" />
              </Button>
            </Row>
            <Row className="mx-1 mt-3">
              <div className="stake-description">
                Stake this position in our yield aggregator to earn both native
                protocol rewards AND Plexus token rewards.
              </div>
            </Row>
            <Row className="mt-5 mx-1">
              <div className="question-text">LOOKING FOR UNWRAP OR REMIX?</div>
            </Row>
            <Row className="mt-3 mx-1 w-75">
              <div className="question-description">
                LP tools are currently only available on SushiSwap and Uniswap
                liquidity positions.
              </div>
            </Row>
          </Container>
        )}
        {props.type === "SUSHISWAP" && (
          <Container className="px-0">
            <Row>
              <Col
                lg={12}
                className="justify-content-between align-items-center d-flex"
              >
                <div>
                  <img
                    src={Sushi}
                    alt=""
                    className="user-staking-img mb-1 mr-2"
                  />
                  <img
                    src={ETH}
                    alt=""
                    className="user-staking-img mb-1 mr-2"
                  />
                </div>
                <div className="total-value-text gredent_text">$2,384.58</div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className="staking-title-text mb-0">SUSHI/ETH</div>
                <div className="staking-description-text mt-0">
                  SUSHISWAP LIQIDITY POSITION
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} md={6} xs={6} className="pr-0">
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    SUSHI Deposited
                  </div>
                  <div className="value-text1">112.13 SUSHI</div>
                  <div className="value-text2">$1,192.29</div>
                </div>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    ETH Deposited
                  </div>
                  <div className="value-text1">0.32 ETH</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="action-title-text">ACTIONS</div>
              </Col>
            </Row>
            <Row className="mt-1 px-3">
              <Button className="stake-button px-3 mt-2">
                <span className="h-28">UNWRAP</span>
                <img src={Union} alt="" className="ml-3" />
              </Button>
            </Row>
            <Row className="mx-1 mt-3">
              <div className="stake-description">
                Withdraw your position into any one asset of your choice with
                the Unwrap tool.
              </div>
            </Row>
            <Row className="mt-3 px-3">
              <Button className="stake-button px-3 mt-2">
                <span className="h-28">REMIX</span>
                <img src={Union} alt="" className="ml-3" />
              </Button>
            </Row>
            <Row className="mx-1 mt-3">
              <div className="stake-description">
                Alter your position by changing one or both of the assets in the
                pair with the Remix tool.
              </div>
            </Row>
          </Container>
        )}
        {props.type === "UNISWAP" && (
          <Container className="px-0">
            <Row>
              <Col
                lg={12}
                className="justify-content-between align-items-center d-flex"
              >
                <div>
                  <img
                    src={Rat}
                    alt=""
                    className="user-staking-img mb-1 mr-2"
                  />
                  <img
                    src={ETH}
                    alt=""
                    className="user-staking-img mb-1 mr-2"
                  />
                </div>
                <div className="total-value-text gredent_text">$934.56</div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col>
                <div className="staking-title-text mb-0">PLX/ETH</div>
                <div className="staking-description-text mt-0">
                  UNISWAP LIQIDITY POSITION
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={6} md={6} xs={6} className="pr-0">
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    PLX Deposited
                  </div>
                  <div className="value-text1">34.56 SUSHI</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
              <Col lg={6} md={6} xs={6}>
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    ETH Deposited
                  </div>
                  <div className="value-text1">0.05 ETH</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="action-title-text">ACTIONS</div>
              </Col>
            </Row>
            <Row className="mt-1 px-3">
              <Button className="stake-button px-3 mt-2">
                <span className="h-28">STAKE</span>
                <img src={Union} alt="" className="ml-3" />
              </Button>
            </Row>
            <Row className="mx-1 mt-3">
              <div className="stake-description">
                Stake this position in our yield aggregator to earn both native
                protocol rewards AND Plexus token rewards.
              </div>
            </Row>
            <Row className="mt-2 px-3">
              <Button className="stake-button px-3 mt-2">
                <span className="h-28">UNWRAP</span>
                <img src={Union} alt="" className="ml-3" />
              </Button>
            </Row>
            <Row className="mx-1 mt-3">
              <div className="stake-description">
                Withdraw your position into any one asset of your choice with
                the Unwrap tool.
              </div>
            </Row>
            <Row className="mt-2 px-3">
              <Button className="stake-button px-3 mt-2">
                <span className="h-28">REMIX</span>
                <img src={Union} alt="" className="ml-3" />
              </Button>
            </Row>
            <Row className="mx-1 mt-3">
              <div className="stake-description">
                Alter your position by changing one or both of the assets in the
                pair with the Remix tool.
              </div>
            </Row>
          </Container>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default LiquidityPopup;
