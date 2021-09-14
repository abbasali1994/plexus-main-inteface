import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import StayTuned from "../../assets/stay_tuned.svg";
import StayTunedMobile from "../../assets/stay_tuned2.svg";
import "./index.scss";
// import {Link} from 'react-router-dom';
import { constants } from "../../utils";
import { A } from "hookrouter";

const LendBorrowUI = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Row>
      <Col md={12} className="mb-3 mb-md-5">
        <Row className="go-back">
          <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
          <A href="/">
            <h6 className="text-muted mb-3">BACK TO DASHBOARD</h6>
          </A>
        </Row>
      </Col>
      <Col md={12} className="staytuned-box">
        <img
          src={width > constants.width.mobile ? StayTuned : StayTunedMobile}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default LendBorrowUI;
