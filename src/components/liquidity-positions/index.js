import React, { useState } from 'react';
import { Row, Col, Table, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { changeSidebar } from '../../redux/sidebarSlice';
import { useDispatch } from 'react-redux';
import './index.scss';

import Chart from '../../assets/chart.svg';
import Sushi from '../../assets/sushi.svg';
import Inch from '../../assets/1inch.svg';
import Uniswap from '../../assets/uniswap.svg';
import Exit from '../../assets/Exit.svg';
import liquidityDataJson from "./LiquidityData.json";


const LiquidityPositions = (props) => {
    const [currentPosition, setCurrentPosition] = useState("all");
    const [selected, setSelected] = useState('');
    const liquidityData = liquidityDataJson;
    const [selectedLiquidityData, setSelectedLiquidityData] = useState(liquidityData);
    const dispatch = useDispatch();

    const handleClickLiquidity = (position) => {
        setCurrentPosition(position);
        setSelected('');
        dispatch(changeSidebar('dashboard-liquidity'));
        if (position === 'all') {
            setSelectedLiquidityData(liquidityData);
        } else {
            const selectedLiquidityData = liquidityData.filter(e => e.protocol === position);
            setSelectedLiquidityData(selectedLiquidityData);
        }
    }

    const handleClickClose = () => {
        setCurrentPosition("all");
        setSelectedLiquidityData(liquidityData);
        setSelected('');
        dispatch(changeSidebar('dashboard-liquidity'));
    }

    const handleClickAsset = (asset) => {
        setSelected(asset.id);
        switch (asset.protocol) {
            case 'SUSHISWAP':
                dispatch(changeSidebar('user-stake-sushiswap'));
                break;
            case '1INCH':
                dispatch(changeSidebar('user-stake-1inch'));
                break;
            case 'UNISWAP':
                dispatch(changeSidebar('user-stake-uniswap'));
                break;
            default:
                break;
        }
    }

    return (
        <Row>
            <Col md={12} className="mb-3 mb-md-5">
                <Row className="go-back" onClick={() => props.goBack()}>
                    <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
                    <h6 data-testid="backText" className="text-muted mb-3">BACK TO DASHBOARD</h6>
                </Row>
                <Row className="text-white">
                    <Col md={6} className="mb-2 mb-md-4 mt-3">
                        <div className="d-flex align-items-center">
                            <h5 data-testid="liquidityText" className="text-white mr-4 mb-0">LIQUIDITY POSITIONS</h5>
                            <h5 data-testid="dollarText" className="font-weight-normal gredent_text mb-0">$3,892.34</h5>
                        </div>
                    </Col>
                    <Col md={6} className="mb-2 mb-md-4 mt-3">
                        <div className="d-flex justify-content-end align-items-center">
                            <h5 data-testid="percentText" className="font-weight-normal gredent_text mb-0">23%</h5>
                            <h5 data-testid="portfolioText" className="text-white ml-2 mr-2 mb-0">OF YOUR  PORTFOLIO</h5>
                            <img data-testid="chartImg" src={Chart} alt="" />
                        </div>
                    </Col>                    
                    <Col md={4} className="mb-2 mb-md-4">
                        <div className={"asset_div p-3 d-flex justify-content-between align-items-center " + (currentPosition === "SUSHISWAP"?"active":"")} >
                            <div className="d-flex align-items-center w-100" onClick={() => handleClickLiquidity("SUSHISWAP")}>
                                <img data-testid="sushiwapImg" src={Sushi} alt="" className="mr-3" />
                                <h5 data-testid="sushiwapText" className="mr-3 mt-2 mb-0">SUSHISWAP</h5>
                                <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">1</Badge>
                               
                            </div>
                            {currentPosition === "SUSHISWAP" && (
                                <img
                                    src={Exit} alt="" className="ml-5" 
                                    onClick={handleClickClose}
                                />
                            )}
                        </div>
                    </Col>
                    <Col md={4} className="mb-2 mb-md-4">
                        <div className={"asset_div p-3 d-flex justify-content-between align-items-center " + (currentPosition === "1INCH"?"active":"")} >
                            <div className="d-flex align-items-center w-100" onClick={() => handleClickLiquidity("1INCH")}>
                                <img data-testid="inchImg" src={Inch} alt="" className="mr-3" />
                                <h5 data-testid="inchText" className="mr-3 mt-2 mb-0">1INCH</h5>
                                <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">1</Badge>
                            </div>
                            {currentPosition === "1INCH" && (
                                <img
                                    src={Exit} alt="" className="ml-5" 
                                    onClick={handleClickClose}
                                />
                            )}
                        </div>
                    </Col>
                    <Col md={4} className="mb-2 mb-md-4">
                        <div  className={"asset_div p-3 d-flex justify-content-between align-items-center " + (currentPosition === "UNISWAP"?"active":"")} >
                            <div className="d-flex align-items-center w-100" onClick={() => handleClickLiquidity("UNISWAP")}>
                                <img data-testid="uniSwapImg" src={Uniswap} alt="" className="mr-3" />
                                <h5 data-testid="uniSwapText" className="mr-3 mt-2 mb-0">UNISWAP</h5>
                                <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">2</Badge>
                            </div>
                            {currentPosition === "UNISWAP" && (
                                <img
                                    src={Exit} alt="" className="ml-5" 
                                    onClick={handleClickClose}
                                />
                            )}
                        </div>
                    </Col>
                </Row>
            </Col>
            <Row className="w-100">  
                <Col md={12} className="mb-md-3">
                    <div className="d-flex">
                        {currentPosition === 'all' && (
                            <h5 data-testid="liqPosText" className="text-white mr-2">
                                YOUR LIQUIDITY POSITIONS
                                <Badge pill variant="primary" className="ml-4 px-3">{liquidityData.length}</Badge>
                            </h5>
                        )}
                        {currentPosition !== 'all' && (
                            <h5 data-testid="liqPosText" className="text-white mr-2">
                                YOUR {currentPosition} LIQUIDITY
                                <Badge pill variant="primary" className="ml-4 px-3">{liquidityData.filter((e) => e.protocol === currentPosition).length}</Badge>
                            </h5>
                        )}
                    </div>
                </Col>
                <Col md={12}>
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
                                <tr className={"text-gray-4 w-25 point-cursor" + (selected === e.id ? " tr-active" : "")} onClick={() => handleClickAsset(e)}>
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
                                    <td className={"table_col w-50" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div>{e.protocol}</div>
                                    </td>
                                    <td className={"table_col_last w-25" + (selected === e.id ? " bg-transparent" : "")}>{e.deposit}</td>
                                </tr>
                                <tr>
                                    <td className="p-2"></td>
                                </tr>
                            </>
                            ))}                    
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Row>
    )
};

export default LiquidityPositions;