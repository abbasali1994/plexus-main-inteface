import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

import { constants } from "../../utils";
import Pie from "../pie-chart";

const PortfolioPercentage = ({ percentage }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return width > constants.width.mobile ? (
    <Col md={6} className="mb-2 mb-md-4 mt-4">
      <div className="d-flex align-items-center justify-content-end">
        <h5 id="percentText" className="font-weight-normal gredent_text mb-0">
          {percentage}%
        </h5>
        <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">
          OF YOUR PORTFOLIO
        </h5>
        <Pie percentage={percentage} size={24} />
      </div>
    </Col>
  ) : (
    <Col md={6} className="mb-2 mb-md-4 mb-1">
      <div className="d-flex align-items-center">
        <Pie percentage={percentage} size={24} />
        <h5
          id="percentText"
          className="font-weight-normal gredent_text mb-0 ml-2"
        >
          {percentage}%
        </h5>
        <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">
          OF YOUR PORTFOLIO
        </h5>
      </div>
    </Col>
  );
};

export default PortfolioPercentage;
