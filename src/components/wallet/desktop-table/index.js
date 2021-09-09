import classNames from "classnames";
import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { changeSidebar } from "../../../redux/sidebarSlice";
import walletData from "../data";
import Pie from "../../pie-chart";

const DesktopTable = ({ selected, setSelected }) => {
  const dispatch = useDispatch();
  const handleClickAsset = (id) => {
    dispatch(changeSidebar("wallet-asset"));
    setSelected(id);
  };

  return (
    <Table responsive="md" borderless>
      <thead>
        <tr className="text-gray-3">
          <th id="assetsText">ASSETS</th>
          <th></th>
          <th id="amountText">AMOUNT</th>
          <th id="valueText">VALUE</th>
          <th id="percentWalletText">% OF WALLET</th>
        </tr>
      </thead>
      <tbody>
        {walletData.map((e) => {
          const colClass = classNames("table_col w-20", {
            "bg-transparent": selected === e.id,
          });
          return (
            <>
              <tr
                className={classNames("text-gray-4 w-20 point-cursor", {
                  "tr-active": selected === e.id,
                })}
                onClick={() => handleClickAsset(e.id)}
              >
                <td
                  className={classNames(
                    "table_col_first d-flex align-items-center",
                    { "bg-transparent": selected === e.id }
                  )}
                >
                  <div className="d-flex mr-3">
                    <img src={e.assetIcon} alt="" className="mr-2 asset-icon" />
                  </div>
                  <div>
                    <h6 className="mb-0 font-weight-bold">{e.asset}</h6>
                  </div>
                </td>
                <td className={colClass}>
                  <div className="d-flex align-items-center h-30 color-light">
                    {e.protocol}
                  </div>
                </td>
                <td className={colClass}>
                  <div className="d-flex align-items-center h-30">
                    {e.amount}
                  </div>
                </td>
                <td className={colClass}>
                  <div className="d-flex align-items-center h-30">
                    {e.value}
                  </div>
                </td>
                <td
                  className={
                    "table_col_last w-fixed-120 pr-4" +
                    (selected === e.id ? " bg-transparent" : "")
                  }
                >
                  <div className="d-flex align-items-center h-30 justify-content-between">
                    <span className="mr-3">{e.percentage}%</span>
                    <Pie percentage={e.percentage} size={24} />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="p-2"></td>
              </tr>
            </>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DesktopTable;
