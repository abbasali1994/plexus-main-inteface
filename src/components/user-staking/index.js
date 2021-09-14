import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Rat from "../../assets/rat_small.svg";
import Sushi from "../../assets/sushi_small.svg";
import ETH from "../../assets/eth.svg";
import Union from "../../assets/Union.svg";
import { currentSidebar } from "../../redux/sidebarSlice";
import { useSelector } from "react-redux";
import "./index.scss";

const UserStaking = () => {
  const sidebar = useSelector(currentSidebar);
  return (
    <>
      {sidebar === "user-stake-sushiswap" && (
        <Container className="user-staking-sushiswap">
          <Container className="px-3">
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
              <Col lg={6} className="pr-0">
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    SUSHI Deposited
                  </div>
                  <div className="value-text1">112.13 SUSHI</div>
                  <div className="value-text2">$1,192.29</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    ETH Deposited
                  </div>
                  <div className="value-text1">0.32 ETH</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
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
                Withdraw your position into any one asset of your choice with
                the Unwrap tool.
              </div>
            </Row>
            <Row className="mt-5 px-3">
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
        </Container>
      )}
      {sidebar === "user-stake-1inch" && (
        <Container className="user-staking-1inch">
          <Container className="px-3">
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
                <div className="total-value-text gredent_text">$924.56</div>
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
            <Row className="mt-4">
              <Col lg={6} className="pr-0">
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    PLX Deposited
                  </div>
                  <div className="value-text1">34.56 PLX</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    ETH Deposited
                  </div>
                  <div className="value-text1">0.05 ETH</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
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
            <Row className="mt-3 mx-1">
              <div className="question-description">
                LP tools are currently only available on SushiSwap and Uniswap
                liquidity positions.
              </div>
            </Row>
          </Container>
        </Container>
      )}
      {sidebar === "user-stake-uniswap" && (
        <Container className="user-staking-uniswap">
          <Container className="px-3">
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
              <Col lg={6} className="pr-0">
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    PLX Deposited
                  </div>
                  <div className="value-text1">34.56 SUSHI</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="user-staking-info-box">
                  <div className="user-staking-info-title-text mb-2">
                    ETH Deposited
                  </div>
                  <div className="value-text1">0.05 ETH</div>
                  <div className="value-text2">$467.28</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
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
            <Row className="mt-4 px-3">
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
            <Row className="mt-4 px-3">
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
        </Container>
      )}
    </>
  );
};
export default UserStaking;
