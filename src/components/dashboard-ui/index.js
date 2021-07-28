import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import './index.scss';

import ETH from '../../assets/eth.svg';
import WalletIcon from '../../assets/wallet.svg';
import Liquidity from '../../assets/liquidity.svg';
import Lock from '../../assets/lock.svg';
import Rewards from '../../assets/rewards.svg';
import Binance from '../../assets/binance.svg';
import Soloana from '../../assets/soloana.svg';

import LiquidityPositions from '../liquidity-positions';
import UserYieldFarming from '../user-yield-farming';
import RewardsComponent from '../rewards';
import Wallet from '../wallet';
import StakingComponent from '../staking';
import Pie from '../pie-chart';

const DashboardUI = () => {
    const assetsData = [{
            name: 'WALLET',
            icon: WalletIcon,
            amount: '$8,782.34',
            percentage: 23
        },
        {
            name: 'LIQUIDITY',
            icon: Liquidity,
            amount: '$3,892.34',
            percentage: 45
        },
        {
            name: 'STAKING',
            icon: Lock,
            amount: '$17,398.56',
            percentage: 60.8
        },
        {
            name: 'REWARDS',
            icon: Rewards,
            amount: '$2,716.43',
            percentage: 35.4
        }
    ];

    const [ overview, setOverview ] = useState('All');
    const dispatch = useDispatch();

    const handleClickAsset = (name) => {
        setOverview(name);
        switch (name) {
            case 'LIQUIDITY':
                dispatch(changeSidebar('dashboard-liquidity'));
                break;
            case 'WALLET':
                dispatch(changeSidebar('dashboard-wallet'));
                break;
            case 'STAKING':
                dispatch(changeSidebar('dashboard-staking'));
                break;
            case 'REWARDS':
                dispatch(changeSidebar('dashboard-rewards'));
                break;
            default:
                break;
        }
    }

    const backToDashboard = () => {
        setOverview('All');
        dispatch(changeSidebar('dashboard-all'));
    }

    return (
        <Container fluid className="py-md-5 pr-md-5  ml-4">
            <Row className="pb-md-4 pb-3">
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 assets_border_div">
                        <div className="d-flex align-items-center"><img data-testid="ethImg" src={ETH} alt="" className="mr-3" /> <span data-testid="ethText" className=" font-weight-bold pe-5 asset_text">ETHEREUM</span></div>
                    </div>
                </Col>
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 asset_div">
                        <div className="d-flex align-items-center">
                            <img data-testid="bscImg" src={Binance} alt="" className="mr-3" />
                            <div className = "asset_text"> 
                                <h6 data-testid="bscText" className="net-name font-weight-bold pe-5 mb-0">BSC</h6>
                                <h6 data-testid="bscComingSoonText" className="description mb-0 ">COMING SOON</h6>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 asset_div">
                        <div className="d-flex align-items-center">
                            <img  data-testid="solanaImg"  src={Soloana} alt="" className="mr-3" />
                            <div> 
                                <h6 data-testid="solanaText" className="net-name  font-weight-bold pe-5 mb-0">SOLANA</h6>
                                <h6 data-testid="solanaComingSoonText" className="description mb-0 ">COMING SOON</h6>
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
                            {assetsData.map((e) => 
                            <>
                                <Col data-testid={"button-" + e.name} md={6} className="mb-2 mb-md-4" onClick={() => handleClickAsset(e.name)}>
                                <div className="asset_div p-3 d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img src={e.icon} alt="" className="mr-2" />
                                        <b>{e.name}</b>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <span className="mr-3 gredent_text">{e.amount}</span>
                                        <span className="mr-2 mt-1">{e.percentage + "%"}</span>
                                        <Pie percentage={e.percentage} size={32} />
                                    </div>
                                </div>
                            </Col>
                            </>
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
            {overview === 'REWARDS' && (
                <RewardsComponent
                    goBack={backToDashboard}
                />
            )}
            {overview === 'WALLET' && (
                <Wallet
                    goBack={backToDashboard}
                />
            )}
            {overview === 'STAKING' && (
                <StakingComponent
                    goBack={backToDashboard}
                />
            )}
        </Container>
    )
}

export default DashboardUI;