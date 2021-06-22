import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './index.scss';

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Chart from '../../assets/chart.svg';
import Sushi from '../../assets/sushi.svg';
import Uniswap from '../../assets/uniswap.svg';

const Wallet = (props) => {
    const walletData = [
        {
            asset: 'Plexus',
            assetIcon: Rat,
            protocol: 'PLX',
            amount: '3,281.45',
            value: '$2,384.58',
            percentage: '47%'
        },
        {
            asset: 'Sushi',
            assetIcon: Sushi,
            protocol: 'SUSHI',
            amount: '873.21',
            value: '$1,923.45',
            percentage: '33%'
        },
        {
            asset: 'Ethereum',
            assetIcon: ETH,
            protocol: 'ETH',
            amount: '0.275',
            value: '$983.21',
            percentage: '16%'
        },
        {
            asset: 'Uniswap',
            assetIcon: Uniswap,
            protocol: 'UNI',
            amount: '21.234',
            value: '$58.76',
            percentage: '4%'
        }
    ];
    return (
        <Row>
            <Col md={12} className="mb-3 mb-md-4">
                <Row className="go-back" onClick={() => props.goBack()}>
                    <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
                    <h6 className="text-muted mb-3">BACK TO DASHBOARD</h6>
                </Row>
                <Row className="text-white">
                    <Col md={6} className="mb-2 mb-md-4 mt-4">
                        <div className="d-flex align-items-center">
                            <h5 className="text-white mr-4 mb-0">WALLET</h5>
                            <h5 className="font-weight-normal gredent_text mb-0">$8,782.34</h5>
                        </div>
                    </Col>
                    <Col md={6} className="mb-2 mb-md-4 mt-4">
                        <div className="d-flex justify-content-end align-items-center">
                            <h5 className="font-weight-normal gredent_text mb-0">23%</h5>
                            <h5 className="text-white ml-2 mr-2 mb-0">OF YOUR  PORTFOLIO</h5>
                            <img src={Chart} alt="" />
                        </div>
                    </Col>                    
                </Row>
            </Col>
            <Col md={12}>
                <Table responsive="md" borderless>
                    <thead>
                        <tr className="text-gray-3">
                            <th>ASSETS</th>
                            <th></th>
                            <th>AMOUNT</th>
                            <th>VALUE</th>
                            <th>% OF WALLET</th>
                        </tr>
                    </thead>
                    <tbody>
                        {walletData.map(e => (
                        <>
                            <tr className="text-gray-4 w-20">
                                <td className="table_col_first d-flex align-items-center">
                                    <div className="d-flex mr-3">
                                        <img src={e.assetIcon} alt="" className="mr-2 asset-icon" />
                                    </div>
                                    <div>
                                        <h6 className="mb-0 font-weight-bold">{e.asset}</h6>
                                    </div>
                                </td>
                                <td className="table_col w-20">
                                    <div className="d-flex align-items-center h-30 color-light">{e.protocol}</div>
                                </td>
                                <td className="table_col w-20">
                                    <div className="d-flex align-items-center h-30">{e.amount}</div>
                                </td>
                                <td className="table_col w-20">
                                    <div className="d-flex align-items-center h-30">{e.value}</div>
                                </td>
                                <td className="table_col_last w-fixed-120 pr-4">
                                    <div className="d-flex align-items-center h-30 justify-content-between">
                                        <span className="mr-3">{e.percentage}</span>
                                        <img src={Chart} alt="" />
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
    )
};

export default Wallet;