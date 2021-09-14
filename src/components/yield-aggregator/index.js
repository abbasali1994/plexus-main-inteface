import React, { useState, useEffect } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { constants } from "../../utils";
import YieldPopup from "./yield-popup";
import NetworkProtocol from "../network-protocol";
import MobileTable from "./mobile-table";
import DesktopTable from "./desktop-table";
import classNames from "classnames";
import Protocols from "../protocols";
import "./index.scss";

const YieldAggregator = () => {
  const [popupShow, setPopupShow] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Container
      fluid
      className={classNames("py-md-5 pr-md-5", {
        "mt-4": width <= constants.width.mobile,
        "pl-4": width > constants.width.mobile,
      })}
    >
      <NetworkProtocol />
      <Row>
        <Protocols />
        <Col md={12} className="mt-md-4  my-3">
          <div
            className={classNames("d-flex align-items-center", {
              "justify-content-between": width <= constants.width.mobile,
            })}
          >
            <h5 className="text-white-1 mr-2 mb-0">
              PLEXUS YIELD OPPORTUNITIES
            </h5>
            <Badge pill variant="primary" className="pt-1">
              <h6 className="mb-1 px-1">25</h6>
            </Badge>
          </div>
        </Col>
        <Col md={12}>
          {width > constants.width.mobile ? (
            <DesktopTable />
          ) : (
            <MobileTable setPopupShow={setPopupShow} />
          )}
        </Col>
      </Row>
      <YieldPopup show={popupShow} setShow={setPopupShow} />
    </Container>
  );
};

export default YieldAggregator;
