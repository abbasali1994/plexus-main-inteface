import React, { useState, useEffect } from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { constants } from "../../utils";
import {
  changeSelectedLiquidityAsset,
  changeSidebar,
} from "../../redux/sidebarSlice";
import LiquidityPopup from "./liquidity-popup";
import "./index.scss";

import Sushi from "../../assets/sushi.svg";
import Inch from "../../assets/1inch.svg";
import Uniswap from "../../assets/uniswap.svg";
import Exit from "../../assets/Exit.svg";

import PortfolioPercentage from "../portfolio-percentage";
import { userLiquidityBalances } from "../../redux/walletSlice";
import { formatAmount } from "../../helper/conversions";
import DesktopTable from "./desktop-table";
import MobileTable from "./mobile-table";

const protocols = [
  { name: "sushiswap", image: Sushi },
  { name: "1inch", image: Inch },
  { name: "uniswap", image: Uniswap },
];

const LiquidityPositions = (props) => {
  const { totalValue, lpTokens } = useSelector(userLiquidityBalances);

  const [currentPosition, setCurrentPosition] = useState("all");
  const [selectedLiquidityData, setSelectedLiquidityData] = useState(lpTokens);
  const [popupShow, setPopupShow] = useState(false);
  const [mobilePopType, setMobilePopType] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (currentPosition === "all") setSelectedLiquidityData(lpTokens);
    else {
      const selectedLiquidityData = lpTokens.filter(
        (e) => e.protocol === currentPosition
      );
      setSelectedLiquidityData(selectedLiquidityData);
    }
  }, [lpTokens, currentPosition]);

  const handleClickLiquidity = (position) => {
    setCurrentPosition(position);
    dispatch(changeSelectedLiquidityAsset(""));
    dispatch(changeSidebar("dashboard-liquidity"));
  };

  const handleClickAssetMobile = (asset) => {
    setMobilePopType(asset.protocol);
    setPopupShow(true);
  };

  return (
    <Row>
      <Col md={12} className="mb-3 mb-md-5">
        <Row className="go-back" onClick={() => props.goBack()}>
          <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
          <h6 data-testid="backText" className="text-muted mb-3">
            BACK TO DASHBOARD
          </h6>
        </Row>
        <Row className="text-white-1">
          <Col md={6} className="mb-2 mb-md-4 mt-3">
            <div
              className={
                "d-flex align-items-center" +
                (width > constants.width.mobile
                  ? ""
                  : " justify-content-between")
              }
            >
              <h5 data-testid="liquidityText" className="text-whit-1 mr-4 mb-0">
                LIQUIDITY POSITIONS
              </h5>
              <h5
                data-testid="dollarText"
                className="font-weight-normal gredent_text mb-0"
              >
                ${formatAmount(totalValue, 2)}
              </h5>
            </div>
          </Col>
          <PortfolioPercentage percentage={23} />
        </Row>
        <Row
          className={
            "text-white-1" +
            (width > constants.width.mobile
              ? ""
              : " liquidity_protocol_container")
          }
        >
          {protocols.map(({ name, image }) => (
            <Col key={name} md={4} className="mb-2 mb-md-4">
              <div
                className={
                  "asset_div p-3 d-flex justify-content-between align-items-center " +
                  (currentPosition === name.toUpperCase() ? "active" : "")
                }
              >
                <div
                  className="d-flex align-items-center w-100"
                  onClick={() => handleClickLiquidity(name.toUpperCase())}
                >
                  <img
                    data-testid={`${name}Img`}
                    src={image}
                    alt=""
                    className="mr-3"
                    width="39px"
                  />
                  <h5 data-testid={`${name}Text`} className="mr-3 mt-2 mb-0">
                    {name.toUpperCase()}
                  </h5>
                  <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">
                    {
                      lpTokens.filter((e) => e.protocol === name.toUpperCase())
                        .length
                    }
                  </Badge>
                </div>
                {currentPosition === name.toUpperCase() && (
                  <img
                    src={Exit}
                    alt=""
                    className="ml-5"
                    onClick={() => handleClickLiquidity("all")}
                  />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Col>
      <Row
        className={
          "w-100 " + (width > constants.width.mobile ? "ml-1" : "ml-0")
        }
      >
        <Col md={12} className="mb-md-3">
          <div className="d-flex">
            {currentPosition === "all" ? (
              <h5 data-testid="liqPosText" className="text-white-1 mr-2">
                YOUR LIQUIDITY POSITIONS
                <Badge pill variant="primary" className="ml-4 px-3">
                  {lpTokens.length}
                </Badge>
              </h5>
            ) : (
              <h5 data-testid="liqPosText" className="text-white-1 mr-2">
                YOUR {currentPosition} LIQUIDITY
                <Badge pill variant="primary" className="ml-4 px-3">
                  {
                    lpTokens.filter((e) => e.protocol === currentPosition)
                      .length
                  }
                </Badge>
              </h5>
            )}
          </div>
        </Col>
        <Col md={12}>
          {width > constants.width.mobile ? (
            <DesktopTable selectedLiquidityData={selectedLiquidityData} />
          ) : (
            <MobileTable
              currentPosition={currentPosition}
              handleClickAssetMobile={handleClickAssetMobile}
              selectedLiquidityData={selectedLiquidityData}
            />
          )}
        </Col>
      </Row>
      <LiquidityPopup
        show={popupShow}
        setShow={setPopupShow}
        type={mobilePopType}
      />
    </Row>
  );
};

export default LiquidityPositions;
