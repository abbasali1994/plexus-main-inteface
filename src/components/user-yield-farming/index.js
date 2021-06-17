import React from 'react';
import { Col, Table } from 'react-bootstrap';

import './index.scss';

import Sushi from '../../assets/sushi.svg';
import Rat from '../../assets/rat.svg';
import ETH from '../../assets/eth.svg';

const UserYieldFarming = () => { 
    
    const tableData = [
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        },
        {
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            protocol: 'Plexus',
            deposit: '$8,782.34',
            earning: '$2,384.58'
        }
    ];

    return (
        <>
            <Col md={12} className="mb-md-3">
                <div className="d-flex">
                    <h5 className="text-white mr-2">YOUR YIELD FARMING</h5>
                    <h5 className="font-weight-normal gredent_text">$20,114.82</h5>
                </div>
            </Col>
            <Col md={12}>
                <Table responsive="md" borderless>
                    <thead>
                        <tr className="text-gray-3">
                            <th>ASSETS</th>
                            <th>PROTOCOL</th>
                            <th>YOUR DEPOSITS</th>
                            <th>EARNINGS</th>
                            <th>REWARDS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map(e => (
                        <>
                            <tr className="text-gray-4">
                                <td className="table_col_first d-flex align-items-center">
                                    <div className="d-flex mr-3">
                                        <img src={Rat} alt="" className="mr-2" />
                                        <img src={ETH} alt="" />
                                    </div>
                                    <div>
                                        <h6 className="mb-0">{e.assets1}</h6>
                                        <span>{e.assets2}</span>
                                    </div>
                                </td>
                                <td className="table_col">{e.protocol}</td>
                                <td className="table_col">{e.deposit}</td>
                                <td className="table_col">{e.earning}</td>
                                <td className="table_col_last">
                                    <div className="d-flex mr-3">
                                        <img src={Rat} alt="" className="mr-2" />
                                        <img src={Sushi} alt="" />
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
        </>
    )
};

export default UserYieldFarming;