import React, { useState } from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import {Container, Row, Col, Table, Badge} from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Sushi from '../../assets/sushi.svg';
import Inch from '../../assets/1inch_big.svg';
import Aave from '../../assets/aave.svg';
import Binance from '../../assets/binance.svg';
import Soloana from '../../assets/soloana.svg';

const YieldAggregator = () => { 
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(0);
    const [protocol, setProtocol] = useState('PLEXUS');

    const tableData = [
        {
            id: 1,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            deposit: '$18.3M',
            roi: '45.6% (1Y)',
            rewards: [Rat, Sushi]
        },
        {
            id: 2,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            deposit: '$18.3M',
            roi: '45.6% (1Y)',
            rewards: [Rat, Sushi]
        },
        {
            id: 3,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            deposit: '$18.3M',
            roi: '45.6% (1Y)',
            rewards: [Rat, Sushi]
        },
        {
            id: 4,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            deposit: '$18.3M',
            roi: '45.6% (1Y)',
            rewards: [Rat, Sushi]
        },
        {
            id: 5,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            deposit: '$18.3M',
            roi: '45.6% (1Y)',
            rewards: [Rat, Sushi]
        },
        {
            id: 6,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            deposit: '$18.3M',
            roi: '45.6% (1Y)',
            rewards: [Rat, Sushi]
        },
    ];

    const handleClickAsset = (id) => {
        dispatch(changeSidebar('yield-asset'));
        setSelected(id);
    }

    const handleClickProtocol = (protocol) => {
        setProtocol(protocol);
        setSelected(0);
        dispatch(changeSidebar('yield-main'));
    }

    return (
        <Container fluid className="py-md-5 pr-md-5 ml-4">
            <Row className="pb-md-4 pb-3">
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 assets_border_div">
                        <div className="d-flex align-items-center"><img src={ETH} alt="" className="mr-3" /> <span className="text-white font-weight-bold pe-5 asset_text">ETHEREUM</span></div>
                    </div>
                </Col>
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 asset_div">
                        <div className="d-flex align-items-center">
                            <img src={Binance} alt="" className="mr-3" />
                            <div className = "asset_text"> 
                                <h6 className="text-gray-3 font-weight-bold pe-5 mb-0">BSC</h6>
                                <h6 className="mb-0 text-gray-4">COMING SOON</h6>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 asset_div">
                        <div className="d-flex align-items-center">
                            <img src={Soloana} alt="" className="mr-3" />
                            <div> 
                                <h6 className="text-gray-3 font-weight-bold pe-5 mb-0">SOLANA</h6>
                                <h6 className="mb-0 text-gray-4">COMING SOON</h6>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="mb-3 mb-md-4">
                    <h5 className="text-white">PROTOCOLS</h5>
                </Col>
                <Col md={3} className="mb-2">
                    <div 
                        className={"py-3 px-3 text-center h-100 d-flex flex-column " + (protocol === 'PLEXUS' ? 'assets_border_div' : 'asset_div')}
                        onClick={() => handleClickProtocol('PLEXUS')}
                    >
                        <div className="mb-2 mt-auto">
                            <img src={Rat} alt="" width="120px" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="mb-0 mr-2 text-white">PLEXUS</h5>
                            <Badge pill variant="primary" className="pt-2">
                                17
                            </Badge>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="mb-2">
                    <div 
                        className={"py-3 px-3 text-center h-100 d-flex flex-column " + (protocol === 'SUSHISWAP' ? 'assets_border_div' : 'asset_div')}
                        onClick={() => handleClickProtocol('SUSHISWAP')}
                    >
                        <div className="mb-2 mt-auto">
                            <img src={Sushi} alt="" width="120px" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="mb-0 mr-2 text-white">SUSHISWAP</h5>
                            <Badge pill variant="primary" className=" pt-2">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="mb-2">
                    <div 
                        className={"py-3 px-3 text-center h-100 d-flex flex-column " + (protocol === '1INCH' ? 'assets_border_div' : 'asset_div')}
                        onClick={() => handleClickProtocol('1INCH')}
                    >
                        <div className="mb-2 mt-auto">
                            <img src={Inch} alt="" width="120px" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="mb-0 mr-2 text-white">1INCH</h5>
                            <Badge pill variant="primary" className="pt-2">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="mb-2">
                    <div 
                        className={"py-3 px-3 text-center h-100 d-flex flex-column " + (protocol === 'AAVE' ? 'assets_border_div' : 'asset_div')}
                        onClick={() => handleClickProtocol('AAVE')}
                    >
                        <div className="mb-2 mt-auto">
                            <img src={Aave} alt="" max-width="230px" />
                        </div>
                        <div className="d-flex justify-content-center mt-auto">
                            <h5 className="mb-0 mr-2 text-white">AAVE</h5>
                            <Badge pill variant="primary" className="pt-2">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>    
                <Col md={12} className="mt-md-4  my-3">
                    <div className="d-flex align-items-center">
                        <h5 className="text-white mr-2 mb-0">{protocol} YIELD OPPORTUNITIES</h5>
                        <Badge pill variant="primary" className="pt-1">
                            <h5 className="mb-1 px-2">25</h5>
                        </Badge>
                    </div>
                </Col>
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
                            {tableData.map(e => (
                            <>
                                <tr className={"text-gray-4 point-cursor" + (selected === e.id ? " tr-active" : "")} onClick={() => handleClickAsset(e.id)}>
                                    <td className={"table_col_first d-flex align-items-center" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex mr-3">
                                            <img src={e.assetsIcon1} alt="" className="mr-2" />
                                            {e.assetsIcon2 &&<img src={ETH} alt="" /> }
                                        </div>
                                        <div>
                                            <h6 className="mb-0">{e.assets1}</h6>
                                            {!e.assets2 && <br/>}<span>{e.assets2}</span>
                                        </div>
                                    </td>
                                    <td className={"table_col" + (selected === e.id ? " bg-transparent tr-active" : "")}>{e.deposit}</td>
                                    <td className={"table_col" + (selected === e.id ? " bg-transparent" : "")}>{e.roi}</td>
                                    <td className={"table_col_last" + (selected === e.id ? " bg-transparent" : "")}>
                                        <div className="d-flex mr-3">
                                            {e.rewards.map(i => 
                                                <img src={i} alt="" className="mr-2" />
                                            )}
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
            </Row>
        </Container>
    )
};

export default YieldAggregator;