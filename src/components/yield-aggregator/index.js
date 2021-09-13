import React, { useState, useEffect } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";

import { constants } from "../../utils";
import { changeSidebar } from "../../redux/sidebarSlice";
import YieldPopup from "./yield-popup";

import ETH from "../../assets/eth.svg";
import Rat from "../../assets/rat.svg";
import Sushi from "../../assets/sushi.svg";
import Inch from "../../assets/1inch_big.svg";
// import Aave from '../../assets/aave.svg';
import NetworkProtocol from "../network-protocol";

const YieldAggregator = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const [popupShow, setPopupShow] = useState(false);

  const tableData = [
    {
      id: 1,
      assetsIcon1: Rat,
      assetsIcon2: ETH,
      assets1: "PLX/ETH",
      assets2: "SushiSwap LP",
      deposit: "$18.3M",
      roi: "45.6% (1Y)",
      rewards: [Rat, Sushi],
    },
    {
      id: 2,
      assetsIcon1: Rat,
      assetsIcon2: ETH,
      assets1: "PLX/ETH",
      assets2: "SushiSwap LP",
      deposit: "$18.3M",
      roi: "45.6% (1Y)",
      rewards: [Rat, Sushi],
    },
    {
      id: 3,
      assetsIcon1: Rat,
      assetsIcon2: ETH,
      assets1: "PLX/ETH",
      assets2: "SushiSwap LP",
      deposit: "$18.3M",
      roi: "45.6% (1Y)",
      rewards: [Rat, Sushi],
    },
    {
      id: 4,
      assetsIcon1: Rat,
      assetsIcon2: ETH,
      assets1: "PLX/ETH",
      assets2: "SushiSwap LP",
      deposit: "$18.3M",
      roi: "45.6% (1Y)",
      rewards: [Rat, Sushi],
    },
    {
      id: 5,
      assetsIcon1: Rat,
      assetsIcon2: ETH,
      assets1: "PLX/ETH",
      assets2: "SushiSwap LP",
      deposit: "$18.3M",
      roi: "45.6% (1Y)",
      rewards: [Rat, Sushi],
    },
    {
      id: 6,
      assetsIcon1: Rat,
      assetsIcon2: ETH,
      assets1: "PLX/ETH",
      assets2: "SushiSwap LP",
      deposit: "$18.3M",
      roi: "45.6% (1Y)",
      rewards: [Rat, Sushi],
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  const handleClickAsset = (id) => {
    dispatch(changeSidebar("yield-asset"));
    setSelected(id);
  };

  return (
    <Container
      fluid
      className={
        "py-md-5 pr-md-5" + (width > constants.width.mobile ? " pl-4" : " mt-4")
      }
    >
      <NetworkProtocol />
      <Row>
        <Col md={12} className="mb-3 mb-md-4">
          <h5 className="text-white-1">PROTOCOLS</h5>
        </Col>
        <Col md={4} xs={4} className="mb-2">
          <div
            className={
              "py-3 px-3 text-center d-flex flex-column assets_border_div" +
              (width > constants.width.mobile ? " h-100" : " h-40")
            }
          >
            <div className="mb-2 mt-auto">
              <img
                src={Rat}
                alt=""
                width={width > constants.width.mobile ? "120px" : "32px"}
              />
            </div>
            <div
              className={
                "d-flex justify-content-center" +
                (width > constants.width.mobile
                  ? " flex-row"
                  : " flex-column align-items-center")
              }
            >
              <h5 className="mb-0 text-protocol">PLEXUS</h5>
              <Badge
                pill
                variant="primary"
                className={
                  "" +
                  (width > constants.width.mobile ? "pt-2" : "pt-1 w-35 mt-1")
                }
              >
                17
              </Badge>
            </div>
          </div>
        </Col>
        <Col md={4} xs={4} className="mb-2">
          <div className="py-3 px-3 text-center h-100 d-flex flex-column asset_div">
            <div className="mb-2 mt-auto">
              <img
                src={Sushi}
                alt=""
                width={width > constants.width.mobile ? "120px" : "32px"}
              />
            </div>
            <div
              className={
                "d-flex justify-content-center" +
                (width > constants.width.mobile
                  ? " flex-row"
                  : " flex-column align-items-center")
              }
            >
              <h5 className="mb-0 text-protocol">SUSHISWAP</h5>
              <Badge
                pill
                variant="primary"
                className={
                  "" +
                  (width > constants.width.mobile ? "pt-2" : "pt-1 w-35 mt-1")
                }
              >
                25
              </Badge>
            </div>
          </div>
        </Col>
        <Col md={4} xs={4} className="mb-2">
          <div className="py-3 px-3 text-center h-100 d-flex flex-column asset_div">
            <div className="mb-2 mt-auto">
              <img
                src={Inch}
                alt=""
                width={width > constants.width.mobile ? "120px" : "32px"}
              />
            </div>
            <div
              className={
                "d-flex justify-content-center" +
                (width > constants.width.mobile
                  ? " flex-row"
                  : " flex-column align-items-center")
              }
            >
              <h5 className="mb-0 text-protocol">1INCH</h5>
              <Badge
                pill
                variant="primary"
                className={
                  "" +
                  (width > constants.width.mobile ? "pt-2" : "pt-1 w-35 mt-1")
                }
              >
                25
              </Badge>
            </div>
          </div>
        </Col>
        {/* <Col md={3} xs={4} className="mb-2">
                    <div className="py-3 px-3 text-center h-100 d-flex flex-column asset_div">
                        <div className="mb-2 mt-auto">
                            <img src={Aave} alt="" max-width="230px" />
                        </div>
                        <div className="d-flex justify-content-center mt-auto">
                            <h5 className="mb-0 text-protocol">AAVE</h5>
                            <Badge pill variant="primary" className="pt-2">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>     */}
        <Col md={12} className="mt-md-4  my-3">
          <div
            className={
              "d-flex align-items-center" +
              (width > constants.width.mobile ? "" : " justify-content-between")
            }
          >
            <h5 className="text-white-1 mr-2 mb-0">
              PLEXUS YIELD OPPORTUNITIES
            </h5>
            <Badge pill variant="primary" className="pt-1">
              <h6 className="mb-1 px-1">25</h6>
            </Badge>
          </div>
        </Col>
        {width > constants.width.mobile ? (
          <Col md={12}>
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
                          "table_col" +
                          (selected === e.id ? " bg-transparent" : "")
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
                            <img
                              src={reward}
                              key={index}
                              alt=""
                              className="mr-2"
                            />
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
          </Col>
        ) : (
          <Col md={12}>
            {tableData.map((e, index) => (
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
            ))}
          </Col>
        )}
      </Row>
      <YieldPopup show={popupShow} setShow={setPopupShow} />
    </Container>
  );
};

export default YieldAggregator;
