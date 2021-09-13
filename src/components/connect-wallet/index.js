import React from "react";
import { useSelector } from "react-redux";
import { Modal, Button, Image } from "react-bootstrap";

import { currentTheme } from "../../redux/themeSlice";
import ExitLight from "../../assets/Exit.svg";
import ExitDark from "../../assets/exit_blue.svg";

import "./index.scss";

const ConnectWallet = (props) => {
  const theme = useSelector(currentTheme);
  return (
    <Modal
      show={props.show}
      onHide={() => props.setShow(false)}
      backdrop="static"
      className="connect-wallet-modal"
    >
      <Modal.Header>
        <Modal.Title className="d-flex justify-content-between w-100">
          CONNECT WALLET
          <Image
            src={theme === "light" ? ExitDark : ExitLight}
            className="exit"
            width="26px"
            onClick={() => props.setShow(false)}
          ></Image>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button className="wallet-button px-3 mt-4">META MASK</Button>
        <Button className="wallet-button px-3 mt-3">WALLETCONNECT</Button>
        <Button className="wallet-button px-3 mt-3">FORMATIC</Button>
        <Button className="wallet-button px-3 mt-3">COINBASE WALLET</Button>
      </Modal.Body>
    </Modal>
  );
};

export default ConnectWallet;
