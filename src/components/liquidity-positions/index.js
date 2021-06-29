import React, { useState } from 'react';
import { Row, Col, Table, Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { changeSidebar } from '../../redux/sidebarSlice';
import { useDispatch } from 'react-redux';
import './index.scss';

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Chart from '../../assets/chart.svg';
import Sushi from '../../assets/sushi.svg';
import Inch from '../../assets/1inch.svg';
import Uniswap from '../../assets/uniswap.svg';
import Exit from '../../assets/Exit.svg';

const LiquidityPositions = (props) => {
    const [currentPosition, setCurrentPosition] = useState("all");
    const liquidityData = [
        {
            assets1: 'SUSHI/ETH',
            assets2: 'SushiSwap LP',
            asset1Icon: Sushi,
            asset2Icon: ETH,
            protocol: 'SUSHISWAP',
            deposit: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: '1Inch LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            protocol: '1INCH',
            deposit: '$934.56'
        },
        {
            assets1: 'UNI/ETH',
            assets2: 'UniSwap LP',
            asset1Icon: Uniswap,
            asset2Icon: ETH,
            protocol: 'UNISWAP',
            deposit: '$356.32'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'Uniswap LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            protocol: 'UNISWAP',
            deposit: '$314.56'
        }
    ];
    const oneInchLiquidityData = [
        {
            assets1: 'PLX/ETH',
            assets2: '1Inch LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            asset1Value: '34.56 PLX',
            asset2Value: '0.05ETH',
            deposits: '$934.56'
        },
    ]; 
    const dispatch = useDispatch();
    const handleClickLiquidity = (position) => {
        setCurrentPosition(position);
        switch (position) {
            case 'SUSHISWAP':
                dispatch(changeSidebar('user-stake-sushiswap'));
                break;
            case '1INCH':
                dispatch(changeSidebar('user-stake-1inch'));
                break;
            case 'UNISWAP':
                dispatch(changeSidebar('user-stake-uniswap'));
                break;
            case 'all':
                dispatch(changeSidebar('dashboard-liquidity'));
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
                    <h6 className="text-muted mb-3">BACK TO DASHBOARD</h6>
                </Row>
                <Row className="text-white">
                    <Col md={6} className="mb-2 mb-md-4 mt-3">
                        <div className="d-flex align-items-center">
                            <h5 className="text-white mr-4 mb-0">LIQUIDITY POSITIONS</h5>
                            <h5 className="font-weight-normal gredent_text mb-0">$3,892.34</h5>
                        </div>
                    </Col>
                    <Col md={6} className="mb-2 mb-md-4 mt-3">
                        <div className="d-flex justify-content-end align-items-center">
                            <h5 className="font-weight-normal gredent_text mb-0">23%</h5>
                            <h5 className="text-white ml-2 mr-2 mb-0">OF YOUR  PORTFOLIO</h5>
                            <img src={Chart} alt="" />
                        </div>
                    </Col>                    
                    <Col md={4} className="mb-2 mb-md-4">
                        <div className={"asset_div p-3 d-flex justify-content-between align-items-center " + (currentPosition === "SUSHISWAP"?"active":"")} >
                            <div className="d-flex align-items-center" onClick={() => handleClickLiquidity("SUSHISWAP")}>
                                <img src={Sushi} alt="" className="mr-3" />
                                <h5 className="mr-3 mt-2 mb-0">SUSHISWAP</h5>
                                <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">1</Badge>
                               
                            </div>
                            {currentPosition === "SUSHISWAP" && (
                                <img src={Exit} alt="" className="ml-5" onClick={()=>{setCurrentPosition("all")}}/>
                            )}
                        </div>
                    </Col>
                    <Col md={4} className="mb-2 mb-md-4">
                        <div className={"asset_div p-3 d-flex justify-content-between align-items-center " + (currentPosition === "1INCH"?"active":"")} >
                            <div className="d-flex align-items-center" onClick={() => handleClickLiquidity("1INCH")}>
                                <img src={Inch} alt="" className="mr-3" />
                                <h5 className="mr-3 mt-2 mb-0">1INCH</h5>
                                <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">1</Badge>
                            </div>
                            {currentPosition === "1INCH" && (
                                <img src={Exit} alt="" className="ml-5" onClick={()=>{setCurrentPosition("all")}}/>
                            )}
                        </div>
                    </Col>
                    <Col md={4} className="mb-2 mb-md-4">
                        <div  className={"asset_div p-3 d-flex justify-content-between align-items-center " + (currentPosition === "UNISWAP"?"active":"")} >
                            <div className="d-flex align-items-center" onClick={() => handleClickLiquidity("UNISWAP")}>
                                <img src={Uniswap} alt="" className="mr-3" />
                                <h5 className="mr-3 mt-2 mb-0">UNISWAP</h5>
                                <Badge pill variant="primary" className="pl-2 pr-2 pt-1 mt-1">2</Badge>
                            </div>
                            {currentPosition === "UNISWAP" && (
                                <img src={Exit} alt="" className="ml-5" onClick={()=>{setCurrentPosition("all")}}/>
                            )}
                        </div>
                    </Col>
                </Row>
            </Col>
            { currentPosition === "all" && (
                <Row className="w-100">  
                    <Col md={12} className="mb-md-3">
                        <div className="d-flex">
                            <h5 className="text-white mr-2">
                                YOUR LIQUIDITY POSITIONS
                                <Badge pill variant="primary" className="ml-4 px-3">4</Badge>
                            </h5>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Table responsive="md" borderless>
                            <thead>
                                <tr className="text-gray-3">
                                    <th>ASSETS</th>
                                    <th>PROTOCOL</th>
                                    <th>YOUR DEPOSITS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {liquidityData.map(e => (
                                <>
                                    <tr className="text-gray-4 w-25">
                                        <td className="table_col_first d-flex align-items-center">
                                            <div className="d-flex mr-3">
                                                <img src={e.asset1Icon} alt="" className="mr-2" />
                                                <img src={e.asset2Icon} alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">{e.assets1}</h6>
                                                <span>{e.assets2}</span>
                                            </div>
                                        </td>
                                        <td className="table_col w-50">
                                            <div>{e.protocol}</div>
                                        </td>
                                        <td className="table_col_last w-25">{e.deposit}</td>
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
            )}  
             { currentPosition !== "all" && (
                <Row className="w-100">  
                    <Col md={12} className="mb-md-3">
                        <div className="d-flex">
                            <h5 className="text-white mr-2">
                                YOUR {currentPosition} LIQUIDITY
                                <Badge pill variant="primary" className="ml-4 px-3">1</Badge>
                            </h5>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Table responsive="md" borderless>
                            <thead>
                                <tr className="text-gray-3">
                                    <th>ASSETS</th>
                                    <th>YOUR DEPOSITS</th>
                                    <th>ASSET ONE</th>
                                    <th>ASSET TWO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {oneInchLiquidityData.map(e => (
                                <>
                                    <tr className="text-gray-4 w-25">
                                        <td className="table_col_first d-flex align-items-center">
                                            <div className="d-flex mr-3">
                                                <img src={e.asset1Icon} alt="" className="mr-2" />
                                                <img src={e.asset2Icon} alt="" />
                                            </div>
                                            <div>
                                                <h6 className="mb-0">{e.assets1}</h6>
                                                <span>{e.assets2}</span>
                                            </div>
                                        </td>
                                        <td className="table_col ">
                                            <div>{e.deposits}</div>
                                        </td>
                                        <td className="table_col ">
                                            <div>{e.asset1Value}</div>
                                        </td>
                                        <td className="table_col_last w-25">{e.asset2Value}</td>

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
            )}    
        </Row>
    )
};

export default LiquidityPositions;