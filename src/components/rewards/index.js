import React, { useState, useEffect } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { constants } from "../../utils";
import { changeSidebar } from '../../redux/sidebarSlice';
import RewardsPopup from './rewards-popup';

import './index.scss';

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Chart from '../../assets/chart.svg';
import Sushi from '../../assets/sushi_medium.svg';


const RewardsComponent = (props) => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const [popupShow, setPopupShow] = useState(false);

    const rewardsData = [
        {
            id: 1,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            protocol: 'Plexus',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '3.245 SUSHI',
            rewardsIcon1: Rat,
            rewardsIcon2: Sushi,
            deposit: '$2,384.58'
        },
        {
            id: 2,
            assets1: 'SUSHI/ETH',
            assets2: 'SushiSwap LP',
            asset1Icon: Sushi,
            asset2Icon: ETH,
            protocol: 'SushiSwap',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '3.245 SUSHI',
            rewardsIcon1: Rat,
            rewardsIcon2: Sushi,
            deposit: '$934.56'
        },
        {
            id: 3,
            assets1: 'PLX/ETH',
            assets2: '1Inch LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            protocol: 'Plexus',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '3.245 1inch',
            rewardsIcon1: Rat,
            rewardsIcon2: Sushi,
            deposit: '$356.32'
        },
        {
            id: 4,
            assets1: 'Plexus Token',
            assets2: '',
            asset1Icon: Rat,
            asset2Icon: null,
            protocol: 'Plexus',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '',
            rewardsIcon1: Rat,
            rewardsIcon2: null,
            deposit: '$314.56'
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
        dispatch(changeSidebar('reward-asset'));
        setSelected(id);
    }

    return (
        <Row>
            <Col md={12} className="mb-3 mb-md-3">
                <Row className="go-back" onClick={() => props.goBack()}>
                    <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
                    <h6 id="backText" className="text-muted mb-3">BACK TO DASHBOARD</h6>
                </Row>
                <Row className="texte-white">
                    <Col md={6} className="mb-2 mb-md-4 mt-4">
                        <div className={"d-flex align-items-center" + (width > constants.width.mobile ? "" : " justify-content-between")}>
                            <h5 id="rewardsText" className="text-white-1 mr-4 mb-0">REWARDS</h5>
                            <h5 id="dollarText" className="font-weight-normal gredent_text mb-0">$2,716.43</h5>
                        </div>
                    </Col>
                    <Col md={6} className={"mb-2 mb-md-4" + (width > constants.width.mobile ? " mt-4" : " mb-1")}>
                        <div className={"d-flex align-items-center" + (width > constants.width.mobile ? " justify-content-end" : "")}>
                            <h5 id="percentText" className="font-weight-normal gredent_text mb-0">23%</h5>
                            <h5 id="portfolioText" className="text-white-1 ml-2 mr-2 mb-0">OF YOUR  PORTFOLIO</h5>
                            <img id="chartImg" src={Chart} alt="" />
                        </div>
                    </Col>  
                </Row>
            </Col>
            {
                width > constants.width.mobile ? (
                <Col md={12}>
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
                            {rewardsData.map(e => (
                            <>
                                <tr className={"text-gray-4 w-25 point-cursor" + (selected === e.id ? " tr-active" : "")} onClick={() => handleClickAsset(e.id)}>
                                    <td className={"table_col_first d-flex align-items-center" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex mr-3">
                                            <img src={e.asset1Icon} alt="" className="mr-2" />
                                            <img src={e.asset2Icon} alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-0">{e.assets1}</h6>
                                            <span>{e.assets2}</span>
                                        </div>
                                    </td>
                                    <td className={"table_col" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div>{e.protocol}</div>
                                    </td>
                                    <td className={"table_col" + (selected === e.id ? " bg-transparent" : "")}>{e.rewardsEarned1}&nbsp;&nbsp;&nbsp;&nbsp;{e.rewardsEarned2}</td>
                                    <td className={"table_col_last" + (selected === e.id ? " bg-transparent" : "")}>
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
                </Col>
                ) : (
                <Col md={12}>
                    {rewardsData.map(e => (
                        <div className="yield-card text-gray-4" onClick={() => setPopupShow(true)}>
                            <div className="d-flex">
                                <img src={e.asset1Icon} alt="" className="mr-1" />
                                <img src={e.asset2Icon} alt="" className="mr-3" />
                                <div className="ml-2">
                                    <h6 className="mb-0">{e.assets1}</h6>
                                    {!e.assets2 && <br />}<span>{e.assets2}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-4">
                                <div>
                                    <div className="yield-card-field">PROTOCOL</div>
                                    <div className="font-weight-bold">{e.protocol}</div>
                                </div>
                                <div>
                                    <div className="yield-card-field">REWARDS EARNED</div>
                                    <div className="font-weight-bold">{e.rewardsEarned1}&nbsp;&nbsp;&nbsp;&nbsp;{e.rewardsEarned2}</div>
                                </div>
                                <div>
                                    <div className="yield-card-field">REWARDS</div>
                                    <div className="d-flex mr-3">
                                        <img src={e.rewardsIcon1} alt=""  className="mr-1" width="18px" />
                                        <img src={e.rewardsIcon2} alt="" className="mr-1" width="18px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
                )
            }
            <RewardsPopup show={popupShow} setShow={setPopupShow} />
        </Row>
    )
};

export default RewardsComponent;