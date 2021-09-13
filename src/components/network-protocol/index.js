import React from "react";
import { Row } from "react-bootstrap";

import ETH from "../../assets/eth.svg";
import Binance from "../../assets/binance.svg";
import Soloana from "../../assets/soloana.svg";

import NetworkCard from "./network-card";

const NetworkProtocol = () => {
  return (
    <Row className="pb-md-4 pb-3">
      <NetworkCard name={"ethereum"} symbol={"eth"} icon={ETH} active={true} />
      <NetworkCard name={"bsc"} symbol={"bsc"} icon={Binance} active={false} />
      <NetworkCard
        name={"solana"}
        symbol={"solana"}
        icon={Soloana}
        active={false}
      />
    </Row>
  );
};

export default NetworkProtocol;
