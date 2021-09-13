import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { constants } from "../../../utils";

const InactiveNetworkCard = ({ name, icon, symbol }) => {
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
      <div className="py-3 px-3 asset_div">
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
          <div
            className={
              "d-flex asset_text flex-column" +
              (isDesktopView ? "" : " align-items-center mt-2")
            }
          >
            <h6
              data-testid={`${symbol}Text`}
              className="net-name font-weight-bold pe-5 mb-0"
            >
              {name.toUpperCase()}
            </h6>
            <h6
              data-testid={`${symbol}ComingSoonText`}
              className="description mb-0 "
            >
              COMING SOON
            </h6>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default InactiveNetworkCard;
