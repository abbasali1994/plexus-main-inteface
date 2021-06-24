import { useSelector } from 'react-redux';
import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { currentSidebar } from '../../redux/sidebarSlice';

import Rat from '../../assets/rat_small.svg';
import Sushi from '../../assets/sushi_small.svg';
import LogoIcon from '../../assets/LogoIcon.png';
import ArrowUpIcon from '../../assets/arrow_up.svg';

import './index.scss';

const Sidebar = () => {
    const rows = [1, 2, 3, 4, 5];
    const cols = [1, 2, 3, 4, 5];
    const sidebar = useSelector(currentSidebar);

    return (
        <Container className="mt-5 pr-5">
            <Container className="title-container">
                <Row>
                    <Col lg="2">
                        <Image src={LogoIcon}></Image>
                    </Col>
                    <Col>
                        <span className="address-text">0X1E....D396</span>
                        <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                    </Col>
                </Row>
            </Container>
            {sidebar === 'dashboard-all' && (
                <MainSidebar />
            )}
            {sidebar === 'dashboard-liquidity' && (
                <LiquiditySidebar />
            )}
            {sidebar === 'dashboard-wallet' && (
                <WalletSidebar />
            )}
            {sidebar === 'dashboard-rewards' && (
                <RewardsSidebar />
            )}
            {sidebar === 'dashboard-staking' && (
                <StakingSidebar />
            )}
            {sidebar === 'yield-main' && (
                <YieldMainSidebar />
            )}
            {sidebar === 'yield-asset' && (
                <YieldSidebar />
            )}
            {sidebar === 'lend-borrow' && (
                <LendBorrowSidebar/>
            )}
            {sidebar === 'cross-chain-tools' && (
                <CrossChainToolsSidebar/>
            )}
            <Container className="table-grid">
                {rows.map(row => (
                    <Row key={"row" + row}>
                        <>
                            <Col lg="2" className="grid-col"></Col>
                            {cols.map(col => (
                                <Col lg="2" className="grid-cell" key={"row" + row + "col" + col}>
                                </Col>
                            ))}
                        </>
                    </Row>
                ))}
            </Container>
        </Container>
    )
}

const MainSidebar = () => {
    return (
        <Container className="info-container">
            <Container className="net-worth-row">
                <div className="net-worth-label">NET WORTH</div>
                <div className="balance-text gredent_text">$34,532.19</div>
            </Container>
            <Container className="description-row">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">ASSETS OVERVIEW</div>
                        <div className="description-text">Click any category to see the breakdown of these assets in your portfolio, and perform related actions.</div>
                    </Col>
                </Row>
            </Container>
            <Container className="description-yield">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">YIELD FARMING</div>
                        <div className="description-text">Select any farm you are participating in to manage your position and claim any available rewards you’ve earned.</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const LiquiditySidebar = () => {
    return (
        <Container className="info-container">
            <Container className="net-worth-row">
                <div className="net-worth-label">LIQUIDITY POSITIONS</div>
                <div className="balance-text gredent_text">$3,892.34</div>
            </Container>
            <Container className="description-row">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">PROTOCOLS</div>
                        <div className="description-text">View your positions across all protocols at a glance, or select a specific one to see all your positions for that platform.</div>
                    </Col>
                </Row>
            </Container>
            <Container className="description-yield">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">YOUR POSITIONS</div>
                        <div className="description-text">Select a position to view stats, information, and perform available actions like staking, unwrapping and remixing.</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const YieldSidebar = () => {
    const [buttonState, setButtonState] = useState('deposit');
    return (
        <Container className="info-container-yield">
            <Container className="px-3">
                <Row>
                    <Col>
                        <div className="subtitle-text-yield">PLX/ETH SUSHISWAP LP</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <div className="yield-info-box">
                            <div className = "yield-info-title-text">Total Deposited</div>   
                            <div className = "yield-info-value-text">18,324,543.21</div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="yield-info-box">
                            <div className = "yield-info-title-text">ROI</div>   
                            <div className = "yield-info-value-text">45.6% (1Y)</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={6}><div className="yield-personal-info-title-text">Your Deposites:</div></Col>
                    <Col lg={6} className="pr-2"><div className="yield-personal-info-value-text">0.00 SLP</div></Col>
                </Row>
                <Row>
                    <Col lg={6}><div className="yield-personal-info-title-text">Rewards Earned:</div></Col>
                    <Col lg={6} className="pr-2"><div className="yield-personal-info-value-text p-0"><img src={Rat} alt="" className="mb-1 mr-1"/><span className="mr-3">0.00</span><img src={Sushi} alt="" className="mb-1 mr-1"/><span>0.00</span></div></Col>
                </Row>
                <Row>
                    <Col className = "yield-info-box-seperator"></Col>
                </Row>
            </Container>
            <Container className="px-3 yield-action">
                <Row className="mt-4">
                    <Col >
                        <div className="yield-action-button-box">
                            <div className={buttonState === 'deposit' ? "yield-action-button-text-box active" : "yield-action-button-text-box"} onClick={() => setButtonState('deposit')}>Deposit</div>
                            <div className={buttonState === 'withdraw' ? "yield-action-button-text-box active" : "yield-action-button-text-box"} onClick={() => setButtonState('withdraw')}>Withdraw</div>
                            <div className={buttonState === 'claim' ? "yield-action-button-text-box active" : "yield-action-button-text-box"} onClick={() => setButtonState('claim')}>Claim Rewards</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <div className="yield-action-value-box">
                            <div className="value-text">0.00 </div>
                            <div className="max-button-text">MAX<img src={ArrowUpIcon} alt="" className="mb-1 ml-1"/></div>
                        </div>  
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col><div className="available-text">Available: 15.6754 SLP</div></Col>
                </Row>
                <Row className="mt-4">
                    <Col><div className="approve-button">APPROVE PLX/ETH SLP</div></Col>
                </Row>
                <Row className="mt-4">
                    <Col><div className="comment">Need PLX/ETH SLP tokens to join this farm?<br/> <a href="/">Zap in liquidity </a>with any ERC-20 token in<br/> your wallet.</div></Col>
                </Row>
            </Container>
        </Container>
    )
}

const WalletSidebar = () => {
    return (
        <Container className="info-container">
            <Container className="net-worth-row">
                <div className="net-worth-label">WALLET</div>
                <div className="balance-text gredent_text">$8,782.34</div>
            </Container>
            <Container className="description-yield">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">YOUR TOKENS</div>
                        <div className="description-text">Select a token to view stats, information, and available actions to perform.</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const RewardsSidebar = () => {
    return (
        <Container className="info-container">
            <Container className="net-worth-row">
                <div className="net-worth-label">REWARDS</div>
                <div className="balance-text gredent_text">$2,716.43</div>
            </Container>
            <Container className="description-row mt-6e">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">YOUR REWARDS</div>
                        <div className="description-text">Select an active yield farm you’re participating in to claim your earned PLX and/or protocol token rewards.</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const StakingSidebar = () => {
    return (
        <Container className="info-container">
            <Container className="net-worth-row">
                <div className="net-worth-label">STAKING</div>
                <div className="balance-text gredent_text">$2,716.43</div>
            </Container>
            <Container className="description-row mt-6e">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">YOUR STAKING</div>
                        <div className="description-text">Select an active yield farm you’re participating in to claim your earned PLX and/or protocol token rewards.</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

const YieldMainSidebar = () => {
    return (
        <Container className="info-container">
            <Container className="description-row mt-1">
                <Col className="ml-4 mr-4 p-4">
                    <div className="subtitle-text-white">YIELD AGGREGATOR</div>
                    <div className="description-text">View and enter yield farms from popular protocols with quick zap in functions and competitive ROIs.</div>
                </Col>
            </Container>
            <Container className="description-row">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">PROTOCOLS</div>
                        <div className="description-text">Select any protocol to view the available yield opportunities and perform any available actions.</div>
                    </Col>
                </Row>
            </Container>
            <Container className="description-yield">
                <Row>
                    <Col lg="2" className="description-part"></Col>
                    <Col className="ml-4 mr-4">
                        <div className="subtitle-text">YIELD OPPORTUNITIES</div>
                        <div className="description-text">See the various farming opportunities for your selected protocol, see what reward tokens are offered, and their ROI.</div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
const LendBorrowSidebar = () => {
    return (
        <Container className="info-container lend-borrow-sidebar">
            <Container className="description-row mt-1">
                <Col className="ml-2 mr-4 p-4">
                    <div className="subtitle-text-white">LENDING AND<br/>BORROWING ARE<br/><span className="subtitle-text-gradient">COMMING SOON</span></div>
                    <div className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                </Col>
            </Container>
           
        </Container>
    )
}
const CrossChainToolsSidebar = () => {
    return (
        <Container className="info-container lend-borrow-sidebar">
            <Container className="description-row mt-1">
                <Col className="ml-2 mr-4 p-4">
                    <div className="subtitle-text-white">CROSS-CHAIN<br/>TOOLS ARE<br/><span className="subtitle-text-gradient">COMMING SOON</span></div>
                    <div className="description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                </Col>
            </Container>
           
        </Container>
    )

}

export default Sidebar;
