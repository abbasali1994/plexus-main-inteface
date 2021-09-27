import React from "react";
import { useDispatch } from "react-redux";
import { capitalCase, formatAmount } from "../../../helper/conversions";
import { changeSelectedWalletAsset } from "../../../redux/sidebarSlice";

const MobileTable = ({ setPopupShow, balances, totalValue }) => {
  const dispatch = useDispatch();
  return balances.map((e, index) => (
    <div
      key={index}
      className="yield-card text-gray-4"
      onClick={() => {
        dispatch(changeSelectedWalletAsset(e.id));
        setPopupShow(true);
      }}
    >
      <div className="d-flex align-items-center">
        <img src={e.image} alt="" className="mr-1" width="36px" />
        <h6 className="ml-3 w-20 mb-0">{capitalCase(e.id)}</h6>
        <h6 className="ml-3 mb-0 protocol-label-color">{e.name}</h6>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <div className="yield-card-field">AMOUNT</div>
          <div className="font-weight-bold">{formatAmount(e.amount, 2)}</div>
        </div>
        <div>
          <div className="yield-card-field">VALUE</div>
          <div className="font-weight-bold">${formatAmount(e.usd, 2)}</div>
        </div>
        <div>
          <div className="yield-card-field">% of WALLET</div>
          <div className="font-weight-bold">
            {formatAmount((e.usd / totalValue) * 100, 2)}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default MobileTable;
