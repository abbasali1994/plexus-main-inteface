import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { constants } from "../../utils";
import Pie from "../pie-chart";
import MobileTable from "./mobile-table";
import DesktopTable from "./desktop-table";
import "./index.scss";

const StakingComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Row>
      <Col md={12} className="mb-3 mb-md-3">
        <Row className="go-back" onClick={() => props.goBack()}>
          <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
          <h6 id="backText" className="text-muted mb-3">
            BACK TO DASHBOARD
          </h6>
        </Row>
        <Row className="texte-white">
          <Col md={6} className="mb-2 mb-md-4 mt-4">
            <div
              className={
                "d-flex align-items-center" +
                (width > constants.width.mobile
                  ? ""
                  : " justify-content-between")
              }
            >
              <h5 id="stakingText" className="text-white-1 mr-4 mb-0">
                STAKING
              </h5>
              <h5
                id="dollarText"
                className="font-weight-normal gredent_text mb-0"
              >
                $2,716.43
              </h5>
            </div>
          </Col>
          {width > constants.width.mobile ? (
            <Col md={6} className="mb-2 mb-md-4 mt-4">
              <div className="d-flex align-items-center justify-content-end">
                <h5
                  id="percentText"
                  className="font-weight-normal gredent_text mb-0"
                >
                  23%
                </h5>
                <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">
                  OF YOUR PORTFOLIO
                </h5>
                <Pie percentage={23} size={24} />
              </div>
            </Col>
          ) : (
            <Col md={6} className="mb-2 mb-md-4 mb-1">
              <div className="d-flex align-items-center">
                <Pie percentage={23} size={24} />
                <h5
                  id="percentText"
                  className="font-weight-normal gredent_text mb-0 ml-2"
                >
                  23%
                </h5>
                <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">
                  OF YOUR PORTFOLIO
                </h5>
              </div>
            </Col>
          )}
        </Row>
      </Col>
      <Col md={12}>
        {width > constants.width.mobile ? <DesktopTable /> : <MobileTable />}
      </Col>
    </Row>
  );
};

export default StakingComponent;
