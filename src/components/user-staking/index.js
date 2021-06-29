import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Rat from '../../assets/rat_small.svg';
import ETH from '../../assets/eth.svg';
import Union from '../../assets/Union.svg'
import SushiGrey from '../../assets/sushi_grey.png'
import InchGrey from '../../assets/1inch_grey.svg'
import UniGrey from '../../assets/uniswap_grey.png'
import { currentSidebar } from '../../redux/sidebarSlice';
import { useSelector } from 'react-redux';
import './index.scss';

const UserStaking = () => {
    var divImage;
    const sidebar = useSelector(currentSidebar);
    switch (sidebar) {
        case 'user-stake-sushiswap':
            divImage = {backgroundImage:`url(${SushiGrey})`};
            break;
        case 'user-stake-1inch':
            divImage = {backgroundImage:`url(${InchGrey})`};
            break;
        case 'user-stake-uniswap':
            divImage = {backgroundImage:`url(${UniGrey})`};
            break;
        default:
            break;
    }
    return (
        <Container className=" user-staking" style={
            divImage
          }>
            <Container className="px-3">
                <Row>
                    <Col lg={12} className="justify-content-between d-flex">
                        <div>
                            <img src={Rat} alt="" className="user-staking-img mb-1 mr-1" />
                            <img src={ETH} alt="" className="user-staking-img mb-1 mr-1" />
                        </div>
                        <div className="total-value-text gredent_text mt-2">$934.56</div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col><div className="title-text">PLX/ETH</div> </Col>
                </Row>
                <Row ><Col><div className="description-text">1INCH LIQIDITY POSITION</div></Col></Row>
                <Row>
                    <Col lg={6}>
                        <div className="user-staking-info-box">
                            <div className = "user-staking-info-title-text">PLX Deposited</div>   
                            <div className = "value-text1">34.56 PLX</div>
                            <div className = "value-text2">$467.28</div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="user-staking-info-box">
                            <div className = "user-staking-info-title-text">ETH Deposited</div>   
                            <div className = "value-text1">0.05 ETH</div>
                            <div className = "value-text2">$467.28</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col ><div className="action-title-text">ACTIONS</div></Col>
                </Row>
                <Row className="mt-4">
                    <Col><div className="stake-button"><span className="mr-3">STAKE</span><img src={Union} alt="" className=""/></div></Col>
                </Row>
                <Row className="mt-3">
                    <Col><div className="stake-description">Stake this position in our yield aggregator to earn both native protocol rewards AND Plexus token rewards.</div></Col>
                </Row>
                <Row className="mt-3">
                    <Col><div className="question-text">LOOKING FOR UNWRAP OR REMIX?</div></Col>
                </Row>
                <Row className="mt-3">
                    <Col><div className="question-description">LP tools are currently only available on SushiSwap and Uniswap liquidity positions.</div></Col>
                </Row>

            </Container>
            
        </Container>
    )
}
export default UserStaking;