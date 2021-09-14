import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import ETH from "../../../assets/eth.svg";
import { changeSidebar } from "../../../redux/sidebarSlice";
import tableData from "../data";
import "./index.scss";

const DesktopTable = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const handleClickAsset = (id) => {
    dispatch(changeSidebar("yield-asset"));
    setSelected(id);
  };
  return (
    <Table responsive="md" borderless>
      <thead>
        <tr className="text-gray-3">
          <th>ASSETS</th>
          <th>DEPOSITS</th>
          <th>ROI</th>
          <th>REWARDS</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((e) => (
          <>
            <tr
              data-testid={e.id}
              className={
                "text-gray-4 point-cursor" +
                (selected === e.id ? " tr-active" : "")
              }
              onClick={() => handleClickAsset(e.id)}
            >
              <td
                className={
                  "table_col_first d-flex align-items-center" +
                  (selected === e.id ? " bg-transparent" : "")
                }
              >
                <div className="d-flex mr-3">
                  <img src={e.assetsIcon1} alt="" className="mr-2" />
                  {e.assetsIcon2 && <img src={ETH} alt="" />}
                </div>
                <div>
                  <h6 className="mb-0">{e.assets1}</h6>
                  {!e.assets2 && <br />}
                  <span>{e.assets2}</span>
                </div>
              </td>
              <td
                className={
                  "table_col" +
                  (selected === e.id ? " bg-transparent tr-active" : "")
                }
              >
                {e.deposit}
              </td>
              <td
                className={
                  "table_col" + (selected === e.id ? " bg-transparent" : "")
                }
              >
                {e.roi}
              </td>
              <td
                className={
                  "table_col_last" +
                  (selected === e.id ? " bg-transparent" : "")
                }
              >
                <div className="d-flex mr-3">
                  {e.rewards.map((reward, index) => (
                    <img src={reward} key={index} alt="" className="mr-2" />
                  ))}
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
