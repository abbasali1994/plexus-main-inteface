import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import WalletPopup from "./wallet-popup";
import PortfolioPercentage from "../portfolio-percentage";
import DesktopTable from "./desktop-table";
import MobileTable from "./mobile-table";

import { constants } from "../../utils";
import { formatAmount } from "../../helper/conversions";
import { currentSelectedWalletAsset } from "../../redux/sidebarSlice";
import "./index.scss";
import { userTokenBalances } from "../../redux/walletSlice";

const Wallet = (props) => {
  const [popupShow, setPopupShow] = useState(false);
  const [balances, setBalances] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);

  const tokenBalances = useSelector(userTokenBalances);
  const selectedWalletAsset = useSelector(currentSelectedWalletAsset);
  const tokens = useSelector((state) => state.tokens.tokens);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  useEffect(() => {
    const balances = Object.keys(tokenBalances)
      .filter((id) => id !== "totalValue")
      .map((id) => {
        return {
          ...tokenBalances[id],
          ...tokens[id],
        };
      });
    setBalances(balances);
  }, [tokenBalances]);

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
                ${formatAmount(tokenBalances.totalValue, 2)}
              </h5>
            </div>
          </Col>
          <PortfolioPercentage percentage={23} />
        </Row>
      </Col>

      <Col md={12}>
        {width > constants.width.mobile ? (
          <DesktopTable
            selected={selectedWalletAsset}
            balances={balances}
            totalValue={tokenBalances.totalValue}
          />
        ) : (
          <MobileTable
            setPopupShow={setPopupShow}
            balances={balances}
            totalValue={tokenBalances.totalValue}
          />
        )}
      </Col>
      <WalletPopup show={popupShow} setShow={setPopupShow} />
    </Row>
  );
};

export default Wallet;
