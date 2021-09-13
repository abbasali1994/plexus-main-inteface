import React from "react";
import walletData from "../data";

const MobileTable = ({ setPopupShow }) => {
  return walletData.map((e) => (
    <div className="yield-card text-gray-4" onClick={() => setPopupShow(true)}>
      <div className="d-flex align-items-center">
        <img src={e.assetIcon} alt="" className="mr-1" width="36px" />
        <h6 className="ml-3 w-20 mb-0">{e.asset}</h6>
        <h6 className="ml-3 mb-0 protocol-label-color">{e.protocol}</h6>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <div className="yield-card-field">AMOUNT</div>
          <div className="font-weight-bold">{e.amount}</div>
        </div>
        <div>
          <div className="yield-card-field">VALUE</div>
          <div className="font-weight-bold">{e.value}</div>
        </div>
        <div>
          <div className="yield-card-field">% of WALLET</div>
          <div className="font-weight-bold">{e.percentage}</div>
        </div>
      </div>
    </div>
  ));
};

export default MobileTable;
