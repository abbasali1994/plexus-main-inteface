import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import './index.scss';

import Rat from '../../../assets/rat_small.svg';
import ETH from '../../../assets/eth.svg';
import Sushi from '../../../assets/sushi_medium.svg';

const RewardAssetSidebar = () => {
    return (
        <Container className="reward-asset">
            <Container className="px-3">
                <Row>
                    <Col lg={12} className="justify-content-between d-flex">
                        <div>
                            <img src={Rat} alt="" className="reward-asset-img mb-1 mr-1" />
                            <img src={ETH} alt="" className="reward-asset-img mb-1 mr-1" />
                        </div>
                    </Col>
                </Row>
                <div className="mt-3">
                    <div className="title-text">PLX/ETH</div>
                    <div className="description-text mt-0">1INCH LIQIDITY POSITION</div>
                </div>
                <Row className="mt-5">
                    <Col lg={6}>
                        <div className="d-flex align-items-center mb-2 ml-1">
                            <img src={Rat} alt="" className="reward-asset-img-small mb-1 mr-1" />
                            <div className="reward-earned-text ml-1">PLX Earned</div>
                        </div>
                        <div className="reward-asset-info-box">
                            <div className="reward-earned-value">345.12</div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="d-flex align-items-center mb-2 ml-1">
                            <img src={Sushi} alt="" className="reward-asset-img-small mb-1 mr-1" />
                            <div className="reward-earned-text ml-1">SUSHI Earned</div>
                        </div>
                        <div className="reward-asset-info-box">
                            <div className="reward-earned-value">345.12</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-1">
                    <Button className="claim-button px-3 mt-4">CLAIM ALL REWARDS</Button>
                </Row>
            </Container>            
        </Container>
    )
}
export default RewardAssetSidebar;