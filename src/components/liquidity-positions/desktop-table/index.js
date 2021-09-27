import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { formatAmount } from "../../../helper/conversions";
import {
  changeSidebar,
  changeSelectedLiquidityAsset,
  currentSelectedLiquidityAsset,
} from "../../../redux/sidebarSlice";

const DesktopTable = ({ selectedLiquidityData }) => {
  const dispatch = useDispatch();
  const selected = useSelector(currentSelectedLiquidityAsset);
  const handleClickAsset = (asset) => {
    dispatch(changeSelectedLiquidityAsset(asset.id));
    dispatch(changeSidebar("user-stake-" + asset.protocol.toLowerCase()));
  };
  if (!selectedLiquidityData?.length) return "";
  return (
    <Table responsive="md" borderless>
      <thead>
        <tr className="text-gray-3">
          <th data-testid="assetsText">ASSETS</th>
          <th data-testid="protocolText">PROTOCOL</th>
          <th data-testid="depositText">YOUR DEPOSITS</th>
        </tr>
      </thead>
      <tbody data-testid="tbody">
        {selectedLiquidityData.map((e) => (
          <>
            <tr
              className={
                "text-gray-4 w-25 point-cursor" +
                (selected === e.id ? " tr-active" : "")
              }
              onClick={() => handleClickAsset(e)}
            >
              <td
                className={
                  "table_col_first d-flex align-items-center" +
                  (selected === e.id ? " bg-transparent" : "")
                }
              >
                <div className="d-flex mr-3">
                  <img
                    src={e.lpToken1.image}
                    alt=""
                    className="mr-2 asset-icon"
                  />
                  <img
                    src={e.lpToken2.image}
                    alt=""
                    className="mr-2 asset-icon"
                  />
                </div>
                <div>
                  <h6 className="mb-0">
                    {e.lpToken1.name}/{e.lpToken2.name}
                  </h6>
                  <span>{e.protocol} LP</span>
                </div>
              </td>
              <td
                className={
                  "table_col w-50" +
                  (selected === e.id ? " bg-transparent" : "")
                }
              >
                <div>{e.protocol}</div>
              </td>
              <td
                className={
                  "table_col_last w-25" +
                  (selected === e.id ? " bg-transparent" : "")
                }
              >
                ${formatAmount(e.amount * e.price, 2)}
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
