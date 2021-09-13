import React from "react";
import Sushi from "../../../assets/sushi.svg";
import Rat from "../../../assets/rat.svg";
import ETH from "../../../assets/eth.svg";
import TableDataJson from "../data.json";

const MobileTable = () => {
  const tableData = TableDataJson;

  return tableData.map((e) => (
    <div className="yield-card text-gray-4">
      <div className="d-flex">
        <img src={Rat} alt="" className="mr-1" />
        <img src={ETH} alt="" className="mr-3" />
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
          <div className="yield-card-field">YOUR DEPOSITS</div>
          <div className="font-weight-bold">{e.deposit}</div>
        </div>
        <div>
          <div className="yield-card-field">EARNINGS</div>
          <div className="font-weight-bold">{e.earning}</div>
        </div>
        <div>
          <div className="yield-card-field">REWARDS</div>
          <div className="d-flex mr-3">
            <img src={Rat} alt="" className="mr-1" width="18px" />
            <img src={Sushi} alt="" className="mr-1" width="18px" />
          </div>
        </div>
      </div>
    </div>
  ));
};

export default MobileTable;
