import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";

import { constants } from "../../utils";

import DesktopTable from "./desktop-table";
import MobileTable from "./mobile-table";

const UserYieldFarming = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <>
      <Col md={12} className="mb-md-3">
        <div
          className={
            "d-flex align-items-center" +
            (width > constants.width.mobile ? "" : " justify-content-between")
          }
        >
          <h5 id="yourYieldText" className="text-white-1 mr-2">
            YOUR YIELD FARMING
          </h5>
          <h5 id="dollarText" className="font-weight-normal gredent_text">
            $20,114.82
          </h5>
        </div>
      </Col>
      <Col md={12}>
        {width > constants.width.mobile ? <DesktopTable /> : <MobileTable />}
      </Col>
    </>
  );
};

export default UserYieldFarming;
