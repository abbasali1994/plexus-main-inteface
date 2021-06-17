import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './index.scss';

import ETH from '../../assets/eth.svg';
import Wallet from '../../assets/wallet.svg';
import Liquidity from '../../assets/liquidity.svg';
import Lock from '../../assets/lock.svg';
import Rewards from '../../assets/rewards.svg';
import Chart from '../../assets/chart.svg';
import Binance from '../../assets/binance.svg';
import Soloana from '../../assets/soloana.svg';

import LiquidityPositions from '../liquidity-positions';
import UserYieldFarming from '../user-yield-farming';

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
                    <UserYieldFarming />
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