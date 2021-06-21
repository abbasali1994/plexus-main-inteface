import { Container, Row, Col, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Rat from '../../assets/rat_small.svg';
import Sushi from '../../assets/sushi_small.svg';
import LogoIcon from '../../assets/LogoIcon.png';
import ArrowUpIcon from '../../assets/arrow_up.svg';

import './index.scss';

const Sidebar = (props) => {
    const whichSidebar = props.whichSidebar;
    if(whichSidebar === "main" || whichSidebar == null) {
        return (
           <MainSidebar/>
        )
    }
    if(whichSidebar === "yield") {
        return (
            <YieldSidebar/>
        )
    }   
}
const MainSidebar = () => {
    const rows = [1, 2, 3, 4, 5];
    const cols = [1, 2, 3, 4, 5];
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
const YieldSidebar = () => {
    const [buttonState, setButtonState] = useState('deposit');
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
            <Container className="info-container-yield">
                <Container className="px-4">
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
                        <Col lg={6}><div className="yield-personal-info-value-text">0.00 SLP</div></Col>
                    </Row>
                    <Row>
                        <Col lg={6}><div className="yield-personal-info-title-text">Rewards Earned:</div></Col>
                        <Col lg={6}><div className="yield-personal-info-value-text"><img src={Rat} alt="" className="mb-1 mr-1"/><span className="mr-3">0.00</span><img src={Sushi} alt="" className="mb-1 mr-1"/><span>0.00</span></div></Col>
                    </Row>
                    <Row>
                        <Col className = "yield-info-box-seperator"></Col>
                    </Row>
                </Container>
                <Container className="px-4 yield-action">
                    <Row className="mt-4">
                        <Col >
                            <div className="yield-action-button-box">
                                <div className={buttonState === 'deposit' ? "yield-action-button-text-box active" : "yield-action-button-text-box"} onClick={() => setButtonState('deposit')}>Deposit</div>
                                <div className={buttonState === 'withdraw' ? "yield-action-button-text-box active" : "yield-action-button-text-box"} onClick={() => setButtonState('withdraw')}>Withdraw</div>
                                <div className={buttonState === 'claim' ? "yield-action-button-text-box active" : "yield-action-button-text-box"} onClick={() => setButtonState('claim')}>ClaimRewards</div>
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
        </Container>

    )
}
export default Sidebar;