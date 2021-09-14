import React, { useState, useEffect } from "react";
import { Col, Badge } from "react-bootstrap";
import { constants } from "../../utils";

import Rat from "../../assets/rat.svg";
import Sushi from "../../assets/sushi.svg";
import Inch from "../../assets/1inch_big.svg";

import classNames from "classnames";

const protocols = [
  {
    name: "PLEXUS",
    src: Rat,
    badge: 17,
  },
  {
    name: "SUSHISWAP",
    src: Sushi,
    badge: 25,
  },
  {
    name: "1INCH",
    src: Inch,
    badge: 25,
  },
];

const Protocols = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Col md={12} className="mb-3 mb-md-4">
        <h5 className="text-white-1">PROTOCOLS</h5>
      </Col>
      {protocols.map((protocol) => (
        <Col md={4} xs={4} key={protocol.name} className="mb-2">
          <div
            className={classNames(
              "py-3 px-3 text-center d-flex flex-column assets_border_div",
              {
                "h-100": width > constants.width.mobile,
                "h-40": width <= constants.width.mobile,
              }
            )}
          >
            <div className="mb-2 mt-auto">
              <img
                src={protocol.src}
                alt=""
                width={width > constants.width.mobile ? "120px" : "32px"}
              />
            </div>
            <div
              className={classNames("d-flex justify-content-center", {
                "flex-row": width > constants.width.mobile,
                "flex-column align-items-center":
                  width <= constants.width.mobile,
              })}
            >
              <h5 className="mb-0 text-protocol">{protocol.name}</h5>
              <Badge
                pill
                variant="primary"
                className={classNames({
                  "pt-2": width > constants.width.mobile,
                  "pt-1 w-35 mt-1": width <= constants.width.mobile,
                })}
              >
                {protocol.badge}
              </Badge>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default Protocols;
