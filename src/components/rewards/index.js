import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './index.scss';

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Chart from '../../assets/chart.svg';
import Sushi from '../../assets/sushi_small.svg';


const RewardsComponent = (props) => {
    const liquidityData = [
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            protocol: 'Plexus',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '3.245 SUSHI',
            rewardsIcon1: Rat,
            rewardsIcon2: Sushi,
            deposit: '$2,384.58'
        },
        {
            assets1: 'SUSHI/ETH',
            assets2: 'SushiSwap LP',
            asset1Icon: Sushi,
            asset2Icon: ETH,
            protocol: 'SushiSwap',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '3.245 SUSHI',
            rewardsIcon1: Rat,
            rewardsIcon2: Sushi,
            deposit: '$934.56'
        },
        {
            assets1: 'PLX/ETH',
            assets2: '1Inch LP',
            asset1Icon: Rat,
            asset2Icon: ETH,
            protocol: 'Plexus',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '3.245 1inch',
            rewardsIcon1: Rat,
            rewardsIcon2: Sushi,
            deposit: '$356.32'
        },
        {
            assets1: 'Plexus Token',
            assets2: '',
            asset1Icon: Rat,
            asset2Icon: null,
            protocol: 'Plexus',
            rewardsEarned1: '23.456 PLX',
            rewardsEarned2: '',
            rewardsIcon1: Rat,
            rewardsIcon2: null,
            deposit: '$314.56'
        }
    ];
    return (
        <Row>
            <Col md={12} className="mb-3 mb-md-5">
                <Row className="go-back" onClick={() => props.goBack()}>
                    <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
                    <h6 className="text-muted mb-3">BACK TO DASHBOARD</h6>
                </Row>
                <Row className="texte-white">
                    <Col md={6} className="mb-2 mb-md-4 mt-3">
                        <div className="d-flex align-items-center">
                            <h5 className="text-white mr-4 mb-0">REWARDS</h5>
                            <h5 className="font-weight-normal gredent_text mb-0">$2,716.43</h5>
                        </div>
                    </Col>
                    <Col md={6} className="mb-2 mb-md-4 mt-3">
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
                            <th>PROTOCOL</th>
                            <th>REWARDS EARNED</th>
                            <th>REWARDS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {liquidityData.map(e => (
                        <>
                            <tr className="text-gray-4 w-25">
                                <td className="table_col_first d-flex align-items-center">
                                    <div className="d-flex mr-3">
                                        <img src={e.asset1Icon} alt="" className="mr-2" />
                                        <img src={e.asset2Icon} alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-0">{e.assets1}</h6>
                                        <span>{e.assets2}</span>
                                    </div>
                                </td>
                                <td className="table_col ">
                                    <div>{e.protocol}</div>
                                </td>
                                <td className="table_col">{e.rewardsEarned1}&nbsp;&nbsp;&nbsp;&nbsp;{e.rewardsEarned2}</td>
                                <td className="table_col_last">
                                    <div className="d-flex mr-3">
                                        <img src={e.rewardsIcon1} alt="" className="mr-2" />
                                        <img src={e.rewardsIcon2} alt="" />
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

export default RewardsComponent;