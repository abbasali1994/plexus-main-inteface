import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Union from "../../assets/Union.svg";
import { currentSelectedLiquidityAsset } from "../../redux/sidebarSlice";
import { useSelector } from "react-redux";
import "./index.scss";
import { userLiquidityBalances } from "../../redux/walletSlice";
import { formatAmount } from "../../helper/conversions";

const UserStaking = ({ sidebar }) => {
  const id = useSelector(currentSelectedLiquidityAsset);
  const { lpTokens } = useSelector(userLiquidityBalances);
  const { lpToken1, lpToken2, price, amount, protocol } = lpTokens.find(
    (token) => token.id === id
  );

  return (
    <Container className={sidebar}>
      <Container className="px-3">
        <Row>
          <Col
            lg={12}
            className="justify-content-between align-items-center d-flex"
          >
            <div>
              <img
                src={lpToken1.image}
                alt=""
                className="user-staking-img mb-1 mr-2"
              />
              <img
                src={lpToken2.image}
                alt=""
                className="user-staking-img mb-1 mr-2"
              />
            </div>
            <div className="total-value-text gredent_text">
              ${formatAmount(price * amount, 2)}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div className="staking-title-text mb-0">
              {lpToken1.symbol.toUpperCase()}/{lpToken2.symbol.toUpperCase()}
            </div>
            <div className="staking-description-text mt-0">
              {protocol} LIQUIDITY POSITION
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={6} className="pr-0">
            <div className="user-staking-info-box">
              <div className="user-staking-info-title-text mb-2">
                {lpToken1.name} Deposited
              </div>
              <div className="value-text1">
                {formatAmount(lpToken1.amount, 2)}{" "}
                {lpToken1.symbol.toUpperCase()}
              </div>
              <div className="value-text2">
                ${formatAmount(lpToken1.amount * lpToken1.price, 2)}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="user-staking-info-box">
              <div className="user-staking-info-title-text mb-2">
                {lpToken2.name} Deposited
              </div>
              <div className="value-text1">
                {formatAmount(lpToken2.amount, 2)}{" "}
                {lpToken2.symbol.toUpperCase()}
              </div>
              <div className="value-text2">
                ${formatAmount(lpToken2.amount * lpToken2.price, 2)}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="action-title-text">ACTIONS</div>
          </Col>
        </Row>
        {sidebar !== "user-stake-sushiswap" && <StakeOption />}
        {sidebar !== "user-stake-1inch" && <UnwrapNRemixOption />}

        {sidebar === "user-stake-1inch" && (
          <>
            <Row className="mt-5 mx-1">
              <div className="question-text">LOOKING FOR UNWRAP OR REMIX?</div>
            </Row>
            <Row className="mt-3 mx-1">
              <div className="question-description">
                LP tools are currently only available on SushiSwap and Uniswap
                liquidity positions.
              </div>
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
};

const StakeOption = () => {
  return (
    <>
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
    </>
  );
};

const UnwrapNRemixOption = () => {
  return (
    <>
      <Row className="mt-3 px-3">
        <Button className="stake-button px-3 mt-2">
          <span className="h-28">UNWRAP</span>
          <img src={Union} alt="" className="ml-3" />
        </Button>
      </Row>
      <Row className="mx-1 mt-3">
        <div className="stake-description">
          Withdraw your position into any one asset of your choice with the
          Unwrap tool.
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
          Alter your position by changing one or both of the assets in the pair
          with the Remix tool.
        </div>
      </Row>
    </>
  );
};
export default UserStaking;
