import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import StayTuned2 from "../../assets/stay_tuned2.svg";
import "./index.scss";
import { A } from "hookrouter";

const CrossChainToolsUI = () => {
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
        <img src={StayTuned2} alt="" />
      </Col>
    </Row>
  );
};

export default CrossChainToolsUI;
