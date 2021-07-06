import React from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';

import './index.scss';

import Rat from '../../../assets/rat_small.svg';
import Union from '../../../assets/Union.svg'

const WalletAssetSidebar = () => {
    return (
        <Container className="wallet-asset">
            <Container className="px-3">
                <Row>
                    <Col lg={12} className="d-flex">
                        <img src={Rat} alt="" className="wallet-asset-img mb-1 mr-1" />
                        <div className="ml-2">
                            <div className="title-text">PLEXUS (PLX)</div>
                            <div className="value-text gredent_text">$1.14</div>
                        </div>
                    </Col>
                </Row>
                <Row className="sub-container justify-content-between d-flex p-3 mx-1 mt-4">
                    <div className="sub-label-text">Your PLX</div>
                    <div className="sub-value-text">3,281.45</div>
                </Row>
                <Row className="sub-container justify-content-between d-flex p-3 mt-3 mx-1">
                    <div className="sub-label-text">Value</div>
                    <div className="sub-value-text">$2,872.32</div>
                </Row>
                <Row className="mt-5 mx-1">
                    <div className="title-text">ACTIONS</div>
                </Row>
                <Row className="mt-1 px-3">
                    <Button className="claim-button px-3 mt-2">
                        <span className="h-28">GENERATE UNI OR SUSHI LP</span>
                        <img src={Union} alt="" className="ml-3"/>
                    </Button>
                </Row>
                <Row className="mx-1 mt-3">
                    <div className="description-text">Convert this asset into two equal assets for entry into a Sushiswap or Uniswap liquidity position.</div>
                </Row>
                <Row className="mt-3 px-3">
                    <Button className="claim-button px-3 mt-2">
                        <span className="h-28">STAKE FOR REWARDS</span>
                        <img src={Union} alt="" className="ml-3"/>
                    </Button>
                </Row>
                <Row className="mx-1 mt-3">
                    <div className="description-text">Stake your Plexus tokens to earn additional PLX as rewards in the Yield Aggregator.</div>
                </Row>
            </Container>            
        </Container>
    )
}
export default WalletAssetSidebar;