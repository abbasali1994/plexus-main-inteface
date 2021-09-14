import React from "react";
import tableData from "../data";

const MobileTable = ({ setPopupShow }) => {
  return tableData.map((e, index) => (
    <div
      key={index}
      className="yield-card text-gray-4"
      onClick={() => setPopupShow(true)}
    >
      <div className="d-flex">
        <img src={e.assetsIcon1} alt="" className="mr-1" />
        <img src={e.assetsIcon2} alt="" className="mr-3" />
        <div className="ml-2">
          <h6 className="mb-0">{e.assets1}</h6>
          {!e.assets2 && <br />}
          <span>{e.assets2}</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <div className="yield-card-field">DEPOSITS</div>
          <div className="font-weight-bold">{e.deposit}</div>
        </div>
        <div>
          <div className="yield-card-field">ROI</div>
          <div className="font-weight-bold">{e.roi}</div>
        </div>
        <div>
          <div className="yield-card-field">REWARDS</div>
          <div className="d-flex mr-3">
            {e.rewards.map((reward, index) => (
              <img
                src={reward}
                key={index}
                alt=""
                className="mr-1"
                width="18px"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  ));
};

export default MobileTable;
