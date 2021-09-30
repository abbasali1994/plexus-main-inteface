import React from "react";
import { Button, Table } from "react-bootstrap";
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
  if (!selectedLiquidityData.length) return;
  return (
    <Table responsive="md" borderless>
      <thead>
        <tr className="text-gray-3">
          <th>ASSETS</th>
          <th>VALUE</th>
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        {selectedLiquidityData.map((e) => (
          <>
            <tr
              data-testid={e.id}
              className={
                "text-gray-4 point-cursor" +
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
                  "table_col currency-font" +
                  (selected === e.id ? " bg-transparent tr-active" : "")
                }
              >
                ${formatAmount(e.amount * e.price, 2)}
              </td>
              <td
                className={
                  "table_col_last" +
                  (selected === e.id ? " bg-transparent" : "")
                }
              >
                <div className="d-flex align-items-center action-button-container">
                  <Button
                    className="remix-button px-3 mt-2"
                    disabled={selected === e.id}
                  >
                    <span className="h-28">UNWRAP</span>
                  </Button>
                  <Button className="remix-button px-3 mt-2 ml-2">
                    <span className="h-28">REMIX</span>
                  </Button>
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
