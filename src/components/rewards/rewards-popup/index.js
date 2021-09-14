import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Modal, Image, Col, Row, Container, Button } from "react-bootstrap";

import { currentTheme } from "../../../redux/themeSlice";
import ExitLight from "../../../assets/Exit.svg";
import ExitDark from "../../../assets/exit_blue.svg";
import Rat from "../../../assets/rat_small.svg";
import ETH from "../../../assets/eth.svg";
import Sushi from "../../../assets/sushi_medium.svg";

import "./index.scss";

const RewardsPopup = (props) => {
  const theme = useSelector(currentTheme);

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="rewards-popup-modal"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          <Col className="p-0">
            <span className="address-popup-text ml-3">0X1E....D396</span>
            <FontAwesomeIcon className="caret-down pt-1" icon={faCaretDown} />
          </Col>
          <Image
            src={theme === "light" ? ExitDark : ExitLight}
            className="exit"
            width="26px"
            onClick={() => props.setShow(false)}
          ></Image>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="px-0 reward-popup">
          <Row>
            <Col lg={12} className="justify-content-between d-flex">
              <div>
                <img src={Rat} alt="" className="reward-asset-img mb-1 mr-1" />
                <img src={ETH} alt="" className="reward-asset-img mb-1 mr-1" />
              </div>
            </Col>
          </Row>
          <div className="mt-3">
            <div className="title-text">PLX/ETH</div>
            <div className="description-text mt-0">1INCH LIQIDITY POSITION</div>
          </div>
          <Row className="mt-4">
            <Col lg={6} md={6} xs={6}>
              <div className="d-flex align-items-center mb-2 ml-1">
                <img
                  src={Rat}
                  alt=""
                  className="reward-asset-img-small mb-1 mr-1"
                />
                <div className="reward-earned-text ml-1">PLX Earned</div>
              </div>
              <div className="reward-asset-info-box">
                <div className="reward-earned-value">345.12</div>
              </div>
            </Col>
            <Col lg={6} md={6} xs={6} className="pl-0">
              <div className="d-flex align-items-center mb-2 ml-1">
                <img
                  src={Sushi}
                  alt=""
                  className="reward-asset-img-small mb-1 mr-1"
                />
                <div className="reward-earned-text ml-1">SUSHI Earned</div>
              </div>
              <div className="reward-asset-info-box">
                <div className="reward-earned-value">345.12</div>
              </div>
            </Col>
          </Row>
          <Row className="mt-1 px-3">
            <Button className="claim-button px-3 mt-4">
              CLAIM ALL REWARDS
            </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default RewardsPopup;
