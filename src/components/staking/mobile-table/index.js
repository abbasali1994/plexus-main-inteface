import React from "react";
import liquidityData from "../data";

const MobileTable = () => {
  return liquidityData.map((e, index) => (
    <div key={index} className="yield-card text-gray-4">
      <div className="d-flex">
        <img src={e.asset1Icon} alt="" className="mr-1" />
        <img src={e.asset2Icon} alt="" className="mr-3" />
        <div className="ml-2">
          <h6 className="mb-0">{e.assets1}</h6>
          {!e.assets2 && <br />}
          <span>{e.assets2}</span>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <div>
          <div className="yield-card-field">PROTOCOL</div>
          <div className="font-weight-bold">{e.protocol}</div>
        </div>
        <div>
          <div className="yield-card-field">REWARDS EARNED</div>
          <div className="font-weight-bold">
            {e.rewardsEarned1}&nbsp;&nbsp;&nbsp;&nbsp;{e.rewardsEarned2}
          </div>
        </div>
        <div>
          <div className="yield-card-field">REWARDS</div>
          <div className="d-flex mr-3">
            <img src={e.rewardsIcon1} alt="" className="mr-1" width="18px" />
            <img src={e.rewardsIcon2} alt="" className="mr-1" width="18px" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default MobileTable;
