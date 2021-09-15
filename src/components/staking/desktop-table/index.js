import React from "react";
import { Table } from "react-bootstrap";

import liquidityData from "../data";

const DesktopTable = () => {
  return (
    <Table responsive="md" borderless>
      <thead>
        <tr className="text-gray-3">
          <th id="assetsText">ASSETS</th>
          <th id="protocolText">PROTOCOL</th>
          <th id="earnedText">REWARDS EARNED</th>
          <th id="rewardsText">REWARDS</th>
        </tr>
      </thead>
      <tbody>
        {liquidityData.map((e) => (
          <>
            <tr className="text-gray-4 w-25">
              <td className="table_col_first d-flex align-items-center">
                <div className="d-flex mr-3">
                  <img src={e.asset1Icon} alt="" className="mr-2" />
                  <img src={e.asset2Icon} alt="" />
                </div>
                <div>
                  <h6 className="mb-0">{e.assets1}</h6>
                  <span>{e.assets2}</span>
                </div>
              </td>
              <td className="table_col ">
                <div>{e.protocol}</div>
              </td>
              <td className="table_col">
                {e.rewardsEarned1}&nbsp;&nbsp;&nbsp;&nbsp;{e.rewardsEarned2}
              </td>
              <td className="table_col_last">
                <div className="d-flex mr-3">
                  <img src={e.rewardsIcon1} alt="" className="mr-2" />
                  <img src={e.rewardsIcon2} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="p-2"></td>
            </tr>
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default DesktopTable;
