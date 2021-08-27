import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { constants } from "../../utils";
import { changeSidebar } from '../../redux/sidebarSlice';
import WalletPopup from './wallet-popup';
import Pie from '../pie-chart';

import './index.scss';

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Sushi from '../../assets/sushi.svg';
import Uniswap from '../../assets/uniswap.svg';

const Wallet = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const [popupShow, setPopupShow] = useState(false);

    const walletData = [
        {
            id: 1,
            asset: 'Plexus',
            assetIcon: Rat,
            protocol: 'PLX',
            amount: '3,281.45',
            value: '$2,384.58',
            percentage: 47
        },
        {
            id: 2,
            asset: 'Sushi',
            assetIcon: Sushi,
            protocol: 'SUSHI',
            amount: '873.21',
            value: '$1,923.45',
            percentage: 33
        },
        {
            id: 3,
            asset: 'Ethereum',
            assetIcon: ETH,
            protocol: 'ETH',
            amount: '0.275',
            value: '$983.21',
            percentage: 16
        },
        {
            id: 4,
            asset: 'Uniswap',
            assetIcon: Uniswap,
            protocol: 'UNI',
            amount: '21.234',
            value: '$58.76',
            percentage: 4
        }
    ];

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    });

    const handleClickAsset = (id) => {
        dispatch(changeSidebar('wallet-asset'));
        setSelected(id);
    }

    return (
        <Row>
            <Col md={12} className="mb-3 mb-md-4">
                <Row>
                    <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
                    <h6 id="backText" className="text-muted mb-3 go-back" onClick={() => props.goBack()}>BACK TO DASHBOARD</h6>
                </Row>
                <Row className="text-white-1">
                    <Col md={6} className="mb-2 mb-md-4 mt-4">
                        <div className={"d-flex align-items-center" + (width > constants.width.mobile ? "" : " justify-content-between")}>
                            <h5 id="walletText" className="text-white-1 mr-4 mb-0">WALLET</h5>
                            <h5 id="dollarText" className="font-weight-normal gredent_text mb-0">$8,782.34</h5>
                        </div>
                    </Col>
                    {width > constants.width.mobile ? (
                        <Col md={6} className="mb-2 mb-md-4 mt-4">
                            <div className="d-flex align-items-center justify-content-end">
                                <h5 id="percentText" className="font-weight-normal gredent_text mb-0">23%</h5>
                                <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">OF YOUR  PORTFOLIO</h5>
                                <Pie percentage={23} size={24} />
                            </div>
                        </Col>
                    ) : (
                        <Col md={6} className="mb-2 mb-md-4 mb-1">
                            <div className="d-flex align-items-center">
                                <Pie percentage={23} size={24} />
                                <h5 id="percentText" className="font-weight-normal gredent_text mb-0 ml-2">23%</h5>
                                <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">OF YOUR  PORTFOLIO</h5>
                            </div>
                        </Col>
                    )}
                </Row>
            </Col>
            {
                width > constants.width.mobile ? (
                <Col md={12}>
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
                            {walletData.map(e => (
                            <>
                                <tr className={"text-gray-4 w-20 point-cursor" + (selected === e.id ? " tr-active" : "")} onClick={() => handleClickAsset(e.id)}>
                                    <td className={"table_col_first d-flex align-items-center" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex mr-3">
                                            <img src={e.assetIcon} alt="" className="mr-2 asset-icon" />
                                        </div>
                                        <div>
                                            <h6 className="mb-0 font-weight-bold">{e.asset}</h6>
                                        </div>
                                    </td>
                                    <td className={"table_col w-20" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex align-items-center h-30 color-light">{e.protocol}</div>
                                    </td>
                                    <td className={"table_col w-20" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex align-items-center h-30">{e.amount}</div>
                                    </td>
                                    <td className={"table_col w-20" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex align-items-center h-30">{e.value}</div>
                                    </td>
                                    <td className={"table_col_last w-fixed-120 pr-4" + (selected === e.id ? " bg-transparent" : "")}>
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
                            ))}                    
                        </tbody>
                    </Table>
                </Col>
                ) : (
                <Col md={12}>
                    {walletData.map(e => (
                        <div className="yield-card text-gray-4" onClick={() => setPopupShow(true)}>
                            <div className="d-flex align-items-center">
                                <img src={e.assetIcon} alt="" className="mr-1" width="36px" />
                                <h6 className="ml-3 w-20 mb-0">{e.asset}</h6>
                                <h6 className="ml-3 mb-0 protocol-label-color">{e.protocol}</h6>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <div>
                                    <div className="yield-card-field">AMOUNT</div>
                                    <div className="font-weight-bold">{e.amount}</div>
                                </div>
                                <div>
                                    <div className="yield-card-field">VALUE</div>
                                    <div className="font-weight-bold">{e.value}</div>
                                </div>
                                <div>
                                    <div className="yield-card-field">% of WALLET</div>
                                    <div className="font-weight-bold">{e.percentage}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
                )
            }
            <WalletPopup show={popupShow} setShow={setPopupShow} />
        </Row>
    )
};

export default Wallet;