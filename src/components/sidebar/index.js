import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { currentSidebar, changeSidebar } from "../../redux/sidebarSlice";

import Rat from "../../assets/rat_small.svg";
import Sushi from "../../assets/sushi_small.svg";
import LogoIcon from "../../assets/LogoIcon.png";
import ArrowUpIcon from "../../assets/arrow_up.svg";
import UserStaking from "../user-staking";
import ETH from "../../assets/eth.svg";
import Uniswap from "../../assets/uniswap.svg";
import Close from "../../assets/close.svg";
import SushiIllustrate from "../../assets/sushi_illustration.svg";
import YieldAssetContent from "../yield-asset-content";
import RewardAssetSidebar from "./rewards";
import WalletAssetSidebar from "./wallets";
import UserAddress from "../user-address";
import { formatAmount } from "../../helper/conversions";
import "./index.scss";
import { userTokenBalances } from "../../redux/walletSlice";

const Sidebar = () => {
  const rows = [1, 2, 3, 4, 5];
  const cols = [1, 2, 3, 4, 5];
  const sidebar = useSelector(currentSidebar);

  return (
    <Container className="mt-5 pr-5">
      <Container className="title-container">
        <Row>
          <Col lg="2">
            <Image src={LogoIcon}></Image>
          </Col>
          <UserAddress type={"sidebar"} />
        </Row>
      </Container>
      {sidebar === "dashboard-all" && <MainSidebar />}
      {sidebar === "dashboard-liquidity" && <LiquiditySidebar />}
      {sidebar === "dashboard-wallet" && <WalletSidebar />}
      {sidebar === "dashboard-rewards" && <RewardsSidebar />}
      {sidebar === "dashboard-staking" && <StakingSidebar />}
      {sidebar === "yield-main" && <YieldMainSidebar />}
      {sidebar === "yield-asset" && <YieldSidebar />}
      {sidebar === "lend-borrow" && <LendBorrowSidebar />}
      {sidebar === "cross-chain-tools" && <CrossChainToolsSidebar />}
      {sidebar === "zap-liquidity" && <ZapSidebar />}
      {sidebar === "user-stake-sushiswap" && <UserStaking />}
      {sidebar === "user-stake-uniswap" && <UserStaking />}
      {sidebar === "user-stake-1inch" && <UserStaking />}
      {sidebar === "reward-asset" && <RewardAssetSidebar />}
      {sidebar === "wallet-asset" && <WalletAssetSidebar />}
      {sidebar === "lp-main" && <LPMainSidebar />}
      <Container className="table-grid">
        {rows.map((row) => (
          <Row key={"row" + row}>
            <>
              <Col lg="2" className="grid-col"></Col>
              {cols.map((col) => (
                <Col
                  lg="2"
                  className="grid-cell"
                  key={"row" + row + "col" + col}
                ></Col>
              ))}
            </>
          </Row>
        ))}
      </Container>
    </Container>
  );
};

const MainSidebar = () => {
  return (
    <Container className="info-container">
      <Container className="net-worth-row">
        <div className="net-worth-label">NET WORTH</div>
        <div className="balance-text gredent_text">$34,532.19</div>
      </Container>
      <Container className="description-row">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">ASSETS OVERVIEW</div>
            <div className="description-text">
              Click any category to see the breakdown of these assets in your
              portfolio, and perform related actions.
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="description-yield">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">YIELD FARMING</div>
            <div className="description-text">
              Select any farm you are participating in to manage your position
              and claim any available rewards you’ve earned.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const LiquiditySidebar = () => {
  return (
    <Container className="info-container">
      <Container className="net-worth-row">
        <div className="net-worth-label">LIQUIDITY POSITIONS</div>
        <div className="balance-text gredent_text">$3,892.34</div>
      </Container>
      <Container className="description-row">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">PROTOCOLS</div>
            <div className="description-text">
              View your positions across all protocols at a glance, or select a
              specific one to see all your positions for that platform.
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="description-yield">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">YOUR POSITIONS</div>
            <div className="description-text">
              Select a position to view stats, information, and perform
              available actions like staking, unwrapping and remixing.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const YieldSidebar = () => {
  return (
    <Container className="info-container-yield">
      <YieldAssetContent type={"sidebar"} />
    </Container>
  );
};

const WalletSidebar = () => {
  const tokenBalances = useSelector(userTokenBalances);
  return (
    <Container className="info-container">
      <Container className="net-worth-row">
        <div className="net-worth-label">WALLET</div>
        <div className="balance-text gredent_text">
          ${formatAmount(tokenBalances.totalValue, 2)}
        </div>
      </Container>
      <Container className="description-yield">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">YOUR TOKENS</div>
            <div className="description-text">
              Select a token to view stats, information, and available actions
              to perform.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const RewardsSidebar = () => {
  return (
    <Container className="info-container">
      <Container className="net-worth-row">
        <div className="net-worth-label">REWARDS</div>
        <div className="balance-text gredent_text">$2,716.43</div>
      </Container>
      <Container className="description-row mt-6e">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">YOUR REWARDS</div>
            <div className="description-text">
              Select an active yield farm you’re participating in to claim your
              earned PLX and/or protocol token rewards.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const StakingSidebar = () => {
  return (
    <Container className="info-container">
      <Container className="net-worth-row">
        <div className="net-worth-label">STAKING</div>
        <div className="balance-text gredent_text">$2,716.43</div>
      </Container>
      <Container className="description-row mt-6e">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2">
            <div className="subtitle-text">YOUR STAKING</div>
            <div className="description-text">
              Select an active yield farm you’re participating in to claim your
              earned PLX and/or protocol token rewards.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const YieldMainSidebar = () => {
  return (
    <Container className="info-container">
      <Container className="description-row mt-1">
        <Col className="ml-2 mr-4 p-4">
          <div className="subtitle-text-white">YIELD AGGREGATOR</div>
          <div className="description-text">
            View and enter yield farms from popular protocols with quick zap in
            functions and competitive ROIs.
          </div>
        </Col>
      </Container>
      <Container className="description-row">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2 p-0">
            <div className="subtitle-text">PROTOCOLS</div>
            <div className="description-text">
              Select any protocol to view the available yield opportunities and
              perform any available actions.
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="description-yield">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2 p-0">
            <div className="subtitle-text">YIELD OPPORTUNITIES</div>
            <div className="description-text">
              See the various farming opportunities for your selected protocol,
              see what reward tokens are offered, and their ROI.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const LendBorrowSidebar = () => {
  return (
    <Container className="info-container lend-borrow-sidebar">
      <Container className="description-row mt-1">
        <Col className="ml-2 mr-4 p-4">
          <div className="subtitle-text-white">
            LENDING AND
            <br />
            BORROWING ARE
            <br />
            <span className="subtitle-text-gradient">COMMING SOON</span>
          </div>
          <div className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </div>
        </Col>
      </Container>
    </Container>
  );
};

const CrossChainToolsSidebar = () => {
  return (
    <Container className="info-container lend-borrow-sidebar">
      <Container className="description-row mt-1">
        <Col className="ml-2 mr-4 p-4">
          <div className="subtitle-text-white">
            CROSS-CHAIN
            <br />
            TOOLS ARE
            <br />
            <span className="subtitle-text-gradient">COMMING SOON</span>
          </div>
          <div className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </div>
        </Col>
      </Container>
    </Container>
  );
};

const ZapSidebar = () => {
  const assets = [
    {
      assetName: "PLX",
      assetIcon: Rat,
      assetValue: "$2,8723.32",
    },
    {
      assetName: "SUSHI",
      assetIcon: Sushi,
      assetValue: "$1,923.45",
    },
    {
      assetName: "ETH",
      assetIcon: ETH,
      assetValue: "$9832.21",
    },
    {
      assetName: "UNI",
      assetIcon: Uniswap,
      assetValue: "$58.76",
    },
  ];
  const dispatch = useDispatch();
  const [selectedAsset, setSelectedAsset] = useState("");
  const [zapAmount, setZapAmount] = useState(null);

  const backToFarm = () => {
    dispatch(changeSidebar("yield-asset"));
  };

  const handleClickAsset = () => {
    setSelectedAsset("Sushi");
  };

  const handleClose = () => {
    setSelectedAsset("");
  };

  const handleClickMax = () => {
    setZapAmount("1532.34");
  };

  return (
    <Container className="zap-info-container">
      <Container className="zap-top-container">
        <Container className="description-row mt-1">
          <Row className="back-to-farm" onClick={() => backToFarm()}>
            <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
            <h6 className="mb-3">BACK TO FARM</h6>
          </Row>
        </Container>
        <Container className="description-row mt-3">
          {selectedAsset === "" ? (
            <>
              <div className="zap-title-white">ZAP IN TO:</div>
              <div className="subtitle-text-yield">PLX/ETH SUSHISWAP LP</div>
              <div className="zap-comment mt-3 mb-3">
                Convert any asset in your wallet into two equal-value halves of
                the pair in this farm, and stake it for rewards, all in one
                action.
              </div>
              <div className="subtitle-text-yield mt-5">
                SELECT A WALLET ASSET
              </div>
              <Row className="zap-table-container mt-3 py-3 mx-1">
                <Col className="zap-asset-title p-0">ASSET</Col>
                <Col className="zap-asset-title p-0 text-right">VALUE</Col>
              </Row>
              {assets.map((asset, index) => (
                <Row
                  key={index}
                  className="zap-asset-row my-2 py-3 mx-1 align-items-center"
                  onClick={() => handleClickAsset()}
                >
                  <Col className="p-0 d-flex align-items-center">
                    <img
                      src={asset.assetIcon}
                      alt=""
                      className="mr-2 zap-asset-icon"
                    />
                    <div className="zap-asset-white">{asset.assetName}</div>
                  </Col>
                  <Col className="zap-asset-white p-0 text-right">
                    {asset.assetValue}
                  </Col>
                </Row>
              ))}
            </>
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={Sushi} alt="" className="icon-w-48" />
                  <div className="ml-2">
                    <div className="zap-asset-white">SUSHI</div>
                    <div className="gredent_text">$1,923.45</div>
                  </div>
                </div>
                <img
                  src={Close}
                  alt="close"
                  className="close-icon"
                  onClick={() => handleClose()}
                />
              </div>
              <div className="subtitle-text-white mt-5 font-weight-normal">
                Input amount of SUSHI to Zap
              </div>
              <Container className="p-0">
                <Row className="mt-4">
                  <Col>
                    <div className="yield-action-value-box align-items-center">
                      <input
                        type="text"
                        id="zap-amount"
                        className="value-input-text"
                        placeholder="0.00"
                        value={zapAmount}
                        onChange={(e) => setZapAmount(e.target.value)}
                      />
                      {!zapAmount && (
                        <div
                          className="max-button-text"
                          onClick={() => handleClickMax()}
                        >
                          MAX
                          <img src={ArrowUpIcon} alt="" className="mb-1 ml-1" />
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col>
                    <div className="available-text">Balance: 15.6754 SUSHI</div>
                  </Col>
                </Row>
              </Container>
            </>
          )}
        </Container>
      </Container>
      {selectedAsset !== "" && (
        <Container className="zap-bottom-container">
          <img className="zap-bg" src={SushiIllustrate} alt="" />
          <div className="subtitle-text-white px-3 mt-5 font-weight-normal">
            Generating & Staking:
          </div>
          {zapAmount ? (
            <div className="currency-text px-3 mt-2 gredent_text">43.212</div>
          ) : (
            <div className="currency-text px-3 mt-2 text-muted">0.00</div>
          )}
          <div className="subtitle-text-white px-3 mt-1">
            PLX/ETH SUSHISWAP LP
          </div>
          <Row className="mt-3 px-3">
            <Col className="d-flex align-items-center">
              <img src={Rat} alt="" className="icon-w-28" />
              <div
                className={
                  "zap-comment ml-2 " + (!zapAmount ? "text-muted" : "")
                }
              >
                {!zapAmount ? "0.00" : "321.21"} PLX
              </div>
            </Col>
            <Col className="d-flex align-items-center">
              <img src={ETH} alt="" className="icon-w-28" />
              <div
                className={
                  "zap-comment ml-2 " + (!zapAmount ? "text-muted" : "")
                }
              >
                {!zapAmount ? "0.00" : "0.43"} ETH
              </div>
            </Col>
          </Row>
          {zapAmount ? (
            <div className="currency-text px-3 mt-4 gredent_text">
              ~$1,923.45
            </div>
          ) : (
            <div className="currency-text px-3 mt-4 text-muted">~$0.00</div>
          )}
          <Button className="confirm-button px-3 mt-4" disabled={!zapAmount}>
            CONFIRM ZAP
          </Button>
        </Container>
      )}
    </Container>
  );
};

const LPMainSidebar = () => {
  return (
    <Container className="info-container">
      <Container className="description-row mt-1">
        <Col className="ml-2 mr-4 p-4">
          <div className="subtitle-text-white">LP TOOLS</div>
          <div className="description-text">
            Create, unwrap, and change the composition of SUSHI & Uniswap LP.
          </div>
        </Col>
      </Container>
      <Container className="description-row mt-3">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2 p-0">
            <div className="subtitle-text">PROTOCOLS</div>
            <div className="description-text">
              Select the protocol you&apos;d like to interact with (currently,
              either SUSHI or Uniswap).
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="description-yield mt-8-em mb-5">
        <Row>
          <Col lg="2" className="description-part"></Col>
          <Col className="ml-4 mr-2 p-0">
            <div className="subtitle-text">YOUR LP POSITIONS</div>
            <div className="description-text">
              Select the LP position you&apos;d like to unwrap or remix, or
              generate a new one.
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Sidebar;
