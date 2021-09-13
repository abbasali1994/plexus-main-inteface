import React from "react";
import { Col, Table } from "react-bootstrap";
import Sushi from "../../../assets/sushi.svg";
import Rat from "../../../assets/rat.svg";
import ETH from "../../../assets/eth.svg";
import TableDataJson from "../data.json";
import "./index.scss";

const DesktopTable = () => {
  const tableData = TableDataJson;

  return (
    <Col md={12}>
      <Table responsive="md" borderless>
        <thead>
          <tr className="text-gray-3">
            <th id="assetsText">ASSETS</th>
            <th id="protocolText">PROTOCOL</th>
            <th id="yourDepositText">YOUR DEPOSITS</th>
            <th id="earningText">EARNINGS</th>
            <th id="rewardsText">REWARDS</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((e) => (
            <>
              <tr className="text-gray-4">
                <td className="table_col_first d-flex align-items-center">
                  <div className="d-flex mr-3">
                    <img src={Rat} alt="" className="mr-2" />
                    <img src={ETH} alt="" />
                  </div>
                  <div>
                    <h6 className="mb-0">{e.assets1}</h6>
                    <span>{e.assets2}</span>
                  </div>
                </td>
                <td className="table_col">{e.protocol}</td>
                <td className="table_col">{e.deposit}</td>
                <td className="table_col">{e.earning}</td>
                <td className="table_col_last">
                  <div className="d-flex mr-3">
                    <img src={Rat} alt="" className="mr-2" />
                    <img src={Sushi} alt="" />
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
    </Col>
  );
};

export default DesktopTable;
