import React, { useEffect, useState } from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";

import Sushi from "../../assets/sushi.svg";
import Uniswap from "../../assets/uniswap.svg";

import NetworkProtocol from "../network-protocol";
import { userLiquidityBalances } from "../../redux/walletSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  changeSelectedLiquidityAsset,
  changeSidebar,
} from "../../redux/sidebarSlice";
import DesktopTable from "./desktop-table";
import MobileTable from "./mobile-table";
import { constants } from "../../utils";
import "./index.scss";

const protocols = [
  { name: "sushiswap", image: Sushi },
  { name: "uniswap", image: Uniswap },
];

const LpTools = () => {
  const { lpTokens } = useSelector(userLiquidityBalances);

  const [currentPosition, setCurrentPosition] = useState("SUSHISWAP");
  const [selectedLiquidityData, setSelectedLiquidityData] = useState(lpTokens);
  const [width, setWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  dispatch(changeSidebar("dashboard-liquidity"));

  useEffect(() => {
    const selectedLiquidityData = lpTokens.filter(
      (e) => e.protocol === currentPosition
    );
    setSelectedLiquidityData(selectedLiquidityData);
  }, [lpTokens, currentPosition]);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const handleClickLiquidity = (position) => {
    setCurrentPosition(position);
    dispatch(changeSelectedLiquidityAsset(""));
  };

  return (
    <>
      <NetworkProtocol />
      <Row>
        <Col md={12} className="mb-3 mb-md-4">
          <h5 className="text-white-1">PROTOCOLS</h5>
        </Col>
        {protocols.map(({ name, image }) => (
          <Col key={name} md={6} className="mb-2 mb-md-4">
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
            </div>
          </Col>
        ))}
        <Col md={12} className="mt-md-4  my-3">
          <div className="d-flex align-items-center">
            <h5 className="text-white-1 mr-2 mt-1 mb-0">
              {currentPosition} LP POSITIONS
            </h5>
            <Badge
              pill
              variant="primary"
              className="pl-3 pr-3 pt-2 pb-2 mt-1 currency-font"
            >
              {selectedLiquidityData.length}
            </Badge>
          </div>
        </Col>
        <Col md={12}>
          {width > constants.width.mobile ? (
            <DesktopTable selectedLiquidityData={selectedLiquidityData} />
          ) : (
            <MobileTable
              currentPosition={currentPosition}
              selectedLiquidityData={selectedLiquidityData}
            />
          )}
          <Button className="generate-button px-3 mt-2">
            <span className="h-28">GENERATE NEW {currentPosition} LP</span>
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default LpTools;
