import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { constants } from "../../utils";
import WalletPopup from "./wallet-popup";
import PortfolioPercentage from "../portfolio-percentage";

import DesktopTable from "./desktop-table";
import MobileTable from "./mobile-table";
import "./index.scss";
const Wallet = (props) => {
  const [selected, setSelected] = useState(0);
  const [popupShow, setPopupShow] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Row>
      <Col md={12} className="mb-3 mb-md-4">
        <Row>
          <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
          <h6
            id="backText"
            className="text-muted mb-3 go-back"
            onClick={() => props.goBack()}
          >
            BACK TO DASHBOARD
          </h6>
        </Row>
        <Row className="text-white-1">
          <Col md={6} className="mb-2 mb-md-4 mt-4">
            <div
              className={
                "d-flex align-items-center" +
                (width > constants.width.mobile
                  ? ""
                  : " justify-content-between")
              }
            >
              <h5 id="walletText" className="text-white-1 mr-4 mb-0">
                WALLET
              </h5>
              <h5
                id="dollarText"
                className="font-weight-normal gredent_text mb-0"
              >
                $8,782.34
              </h5>
            </div>
          </Col>
          <PortfolioPercentage percentage={23} />
        </Row>
      </Col>

      <Col md={12}>
        {width > constants.width.mobile ? (
          <DesktopTable selected={selected} setSelected={setSelected} />
        ) : (
          <MobileTable setPopupShow={setPopupShow} />
        )}
      </Col>
      <WalletPopup show={popupShow} setShow={setPopupShow} />
    </Row>
  );
};

export default Wallet;
