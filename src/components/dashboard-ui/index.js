import React, { useState } from 'react';
import './index.scss';
import {Container, Row, Col, Table} from 'react-bootstrap';
import ETH from '../../assets/eth.svg';
import Wallet from '../../assets/wallet.svg';
import Liquidity from '../../assets/liquidity.svg';
import Lock from '../../assets/lock.svg';
import Rewards from '../../assets/rewards.svg';
import Rat from '../../assets/rat.svg';
import Chart from '../../assets/chart.svg';
import Sushi from '../../assets/sushi.svg';
import Binance from '../../assets/binance.svg';
import Soloana from '../../assets/soloana.svg';

import LiquidityPositions from '../liquidity-positions';

const DashboardUI = () => {
    const assetsData = [{
            name: 'WALLET',
            icon: Wallet,
            amount: '$8,782.34',
            percentage: '23%'
        },
        {
            name: 'LIQUIDITY',
            icon: Liquidity,
            amount: '$3,892.34',
            percentage: '23%'
        },
        {
            name: 'STAKING',
            icon: Lock,
            amount: '$17,398.56',
            percentage: '23%'
        },
        {
            name: 'REWARDS',
            icon: Rewards,
            amount: '$2,716.43',
            percentage: '23%'
        }
    ];

    const tableData = [{
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    },
    {
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        protocol: 'Plexus',
        deposit: '$8,782.34',
        earning: '$2,384.58'
    }
    ];

    const [ overview, setOverview ] = useState('All');

    const backToDashboard = () => {
        setOverview('All');
    }

    return (
        <Container fluid className="p-md-5 ml-4">
            <Row className="pb-md-4 pb-3">
                <Col md={4} className="mb-2">
                    <div className="py-2 px-3 assets_border_div">
                        <div className="d-flex align-items-center"><img src={ETH} alt="" className="mr-3" /> <span className="text-white font-weight-bold pe-5 asset_text">ETHEREUM</span></div>
                    </div>
                </Col>
                <Col md={4} className="mb-2">
                    <div className="py-2 px-3 asset_div">
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
                    <div className="py-2 px-3 asset_div">
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
            {overview === 'All' && (
                <Row>
                    <Col md={12} className="mb-3 mb-md-5">
                        <h6 className="text-muted mb-3">ASSETS OVERVIEW</h6>
                        <Row className="text-white">
                            {assetsData.map(e => 
                                <Col md={6} className="mb-2 mb-md-4" onClick={() => setOverview(e.name)}>
                                <div className="asset_div p-3 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={e.icon} alt="" className="mr-2" />
                                        <b>{e.name}</b>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-3 gredent_text">{e.amount}</span>
                                        <span className="mr-2">{e.percentage}</span>
                                        <img src={Chart} alt="" />
                                    </div>
                                </div>
                            </Col>
                            )}
                        </Row>
                    </Col>
                    <Col md={12} className="mb-md-3">
                        <div className="d-flex">
                            <h5 className="text-white mr-2">YOUR YIELD FARMING</h5>
                            <h5 className="font-weight-normal gredent_text">$20,114.82</h5>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Table responsive="md" borderless>
                            <thead>
                                <tr className="text-gray-3">
                                    <th>ASSETS</th>
                                    <th>PROTOCOL</th>
                                    <th>YOUR DEPOSITS</th>
                                    <th>EARNINGS</th>
                                    <th>REWARDS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(e => (
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
                </Row>
            )}
            {overview === 'LIQUIDITY' && (
                <LiquidityPositions
                    goBack={backToDashboard}
                />
            )}
        </Container>
    )
}

export default DashboardUI;