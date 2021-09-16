import React from "react";
import { useSelector } from "react-redux";
import { Modal, Image } from "react-bootstrap";
import UserAddress from "../../user-address";
import { currentTheme } from "../../../redux/themeSlice";
import ExitLight from "../../../assets/Exit.svg";
import ExitDark from "../../../assets/exit_blue.svg";

import "./index.scss";
import YieldAssetContent from "../../yield-asset-content";

const YieldPopup = (props) => {
  const theme = useSelector(currentTheme);
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="yield-popup-modal"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          <UserAddress type={"popup"} />
          <Image
            src={theme === "light" ? ExitDark : ExitLight}
            className="exit"
            width="26px"
            onClick={() => props.setShow(false)}
          ></Image>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YieldAssetContent type={"popup"} />
      </Modal.Body>
    </Modal>
  );
};

export default YieldPopup;
