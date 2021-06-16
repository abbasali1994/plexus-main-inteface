import React from 'react';
import './index.scss';
import {Container, Row, Col, Table, Badge} from 'react-bootstrap';
import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Sushi from '../../assets/sushi.svg';
import Inch from '../../assets/1inch_big.svg';
import Aave from '../../assets/aave.svg';
import Binance from '../../assets/binance.svg';
import Soloana from '../../assets/soloana.svg';

const YieldAggregator = () => { 

const tableData = [{
        assetsIcon1: Rat,
        assetsIcon2: ETH,
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        deposit: '$18.3M',
        roi: '45.6% (1Y)',
        rewards: [Rat, Sushi]
    },
    {
        assetsIcon1: Rat,
        assetsIcon2: ETH,
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        deposit: '$18.3M',
        roi: '45.6% (1Y)',
        rewards: [Rat, Sushi]
    },
    {
        assetsIcon1: Rat,
        assetsIcon2: ETH,
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        deposit: '$18.3M',
        roi: '45.6% (1Y)',
        rewards: [Rat, Sushi]
    },
    {
        assetsIcon1: Rat,
        assetsIcon2: ETH,
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        deposit: '$18.3M',
        roi: '45.6% (1Y)',
        rewards: [Rat, Sushi]
    },
    {
        assetsIcon1: Rat,
        assetsIcon2: ETH,
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        deposit: '$18.3M',
        roi: '45.6% (1Y)',
        rewards: [Rat, Sushi]
    },
    {
        assetsIcon1: Rat,
        assetsIcon2: ETH,
        assets1: 'PLX/ETH',
        assets2: 'SushiSwap LP',
        deposit: '$18.3M',
        roi: '45.6% (1Y)',
        rewards: [Rat, Sushi]
    },
];

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
                    <div className="py-3 px-3 text-center h-100 d-flex flex-column assets_border_div">
                        <div className="mb-2 mt-auto">
                            <img src={Rat} alt="" width="120px" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="mb-0 mr-2 text-white">PLEXUS</h5>
                            <Badge pill variant="primary px-2 py-1">
                                17
                            </Badge>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="mb-2">
                    <div className="py-3 px-3 text-center h-100 d-flex flex-column asset_div">
                        <div className="mb-2 mt-auto">
                            <img src={Sushi} alt="" width="120px" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="mb-0 mr-2 text-white">SUSHISWAP</h5>
                            <Badge pill variant="primary" className="pt-1">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="mb-2">
                    <div className="py-3 px-3 text-center h-100 d-flex flex-column asset_div">
                        <div className="mb-2 mt-auto">
                            <img src={Inch} alt="" width="120px" />
                        </div>
                        <div className="d-flex justify-content-center">
                            <h5 className="mb-0 mr-2 text-white">1INCH</h5>
                            <Badge pill variant="primary" className="pt-1">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>
                <Col md={3} className="mb-2">
                    <div className="py-3 px-3 text-center h-100 d-flex flex-column asset_div">
                        <div className="mb-2 mt-auto">
                            <img src={Aave} alt="" max-width="230px" />
                        </div>
                        <div className="d-flex justify-content-center mt-auto">
                            <h5 className="mb-0 mr-2 text-white">AAVE</h5>
                            <Badge pill variant="primary" className="pt-1">
                                25
                            </Badge>
                        </div>
                    </div>
                </Col>    
                <Col md={12} className="mt-md-4  my-3">
                    <div className="d-flex align-items-center">
                        <h5 className="text-white mr-2 mb-0">PLEXUS YIELD OPPORTUNITIES</h5>
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
                                <tr className="text-gray-4">
                                    <td className="table_col_first d-flex align-items-center">
                                        <div className="d-flex mr-3">
                                            <img src={e.assetsIcon1} alt="" className="mr-2" />
                                            {e.assetsIcon2 &&<img src={ETH} alt="" /> }
                                        </div>
                                        <div>
                                            <h6 className="mb-0">{e.assets1}</h6>
                                            {!e.assets2 && <br/>}<span>{e.assets2}</span>
                                        </div>
                                    </td>
                                    <td className="table_col">{e.deposit}</td>
                                    <td className="table_col">{e.roi}</td>
                                    <td className="table_col_last">
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