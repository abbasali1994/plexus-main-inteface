import React, { useState, useEffect } from "react";
import { constants } from "../../../utils";
import { Col } from "react-bootstrap";

const ActiveNetworkCard = ({ name, icon, symbol }) => {
  const [isDesktopView, setIsDesktopView] = useState(
    window.innerWidth > constants.width.mobile
  );
  useEffect(() => {
    function handleResize() {
      setIsDesktopView(window.innerWidth > constants.width.mobile);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Col md={4} xs={4} className="mb-2">
      <div
        className={
          "py-3 px-3 assets_border_div" + (isDesktopView ? "" : " pb-4")
        }
      >
        <div
          className={
            "d-flex align-items-center" +
            (isDesktopView ? " flex-row" : " flex-column w-100")
          }
        >
          <img
            data-testid={`${symbol}Img`}
            src={icon}
            alt={`${symbol}Img`}
            className={isDesktopView ? "mr-3" : ""}
          />
          <span
            data-testid={`${symbol}Text`}
            className={
              "font-weight-bold pe-5 asset_text" +
              (isDesktopView ? "" : " mt-2")
            }
          >
            {name.toUpperCase()}
          </span>
        </div>
      </div>
    </Col>
  );
};

export default ActiveNetworkCard;
