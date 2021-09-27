import classNames from "classnames";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { capitalCase, formatAmount } from "../../../helper/conversions";
import {
  changeSelectedWalletAsset,
  changeSidebar,
} from "../../../redux/sidebarSlice";
import Pie from "../../pie-chart";

const DesktopTable = ({ selected, balances, totalValue }) => {
  const dispatch = useDispatch();
  const handleClickAsset = (id) => {
    dispatch(changeSidebar("wallet-asset"));
    dispatch(changeSelectedWalletAsset(id));
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
        {balances.map((e) => {
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
                    <img src={e.image} alt="" className="mr-2 asset-icon" />
                  </div>
                  <div>
                    <h6 className="mb-0 font-weight-bold">
                      {capitalCase(e.id)}
                    </h6>
                  </div>
                </td>
                <td className={colClass}>
                  <div className="d-flex align-items-center h-30 color-light">
                    {e.name}
                  </div>
                </td>
                <td className={colClass}>
                  <div className="d-flex align-items-center h-30">
                    {formatAmount(e.amount, 2)}
                  </div>
                </td>
                <td className={colClass}>
                  <div className="d-flex align-items-center h-30">
                    ${formatAmount(e.usd, 2)}
                  </div>
                </td>
                <td
                  className={
                    "table_col_last w-fixed-120 pr-4" +
                    (selected === e.id ? " bg-transparent" : "")
                  }
                >
                  <div className="d-flex align-items-center h-30 justify-content-between">
                    <span className="mr-3">
                      {formatAmount((e.usd / totalValue) * 100, 2)}%
                    </span>
                    <Pie percentage={(e.usd / totalValue) * 100} size={24} />
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
