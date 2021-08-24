import React, { useState, useEffect } from 'react';
import './index.scss';
import {Container, Row, Col, Table, Badge, Button} from 'react-bootstrap';
import { constants } from "../../utils";

import ETH from '../../assets/eth.svg';
import Rat from '../../assets/rat.svg';
import Sushi from '../../assets/sushi.svg';
import Uniswap from '../../assets/uniswap.svg';
import Binance from '../../assets/binance.svg';
import Soloana from '../../assets/soloana.svg';

const LpTools = () => { 
    const [selected, setSelected] = useState(1);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    });

    const tableData = [
        {
            id: 1,
            assetsIcon1: Rat,
            assetsIcon2: ETH,
            assets1: 'PLX/ETH',
            assets2: 'SushiSwap LP',
            value: '$10,456.78',
        },
        {
            id: 2,
            assetsIcon1: Sushi,
            assetsIcon2: ETH,
            assets1: 'SUSHI/ETH',
            assets2: 'SushiSwap LP',
            value: '$10,456.78',
        },
        {
            id: 3,
            assetsIcon1: Uniswap,
            assetsIcon2: ETH,
            assets1: 'UNI/ETH',
            assets2: 'SushiSwap LP',
            value: '$10,456.78',
        }
    ];

    const handleClickAsset = (id) => {
        setSelected(id);
    }

    return (
        <Container fluid className={"py-md-5 pr-md-5" + (width > constants.width.mobile ? " pl-4" : " mt-4") }>
            <Row className="pb-md-4 pb-3">
                <Col md={4} className="mb-2">
                    <div className="py-3 px-3 assets_border_div">
                        <div className="d-flex align-items-center"><img data-testid="ethImg" src={ETH} alt="" className="mr-3" /> <span data-testid="ethText" className="font-weight-bold pe-5 asset_text">ETHEREUM</span></div>
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
                            <img data-testid="solanaImg" src={Soloana} alt="" className="mr-3" />
                            <div> 
                                <h6 data-testid="solanaText" className="net-name font-weight-bold pe-5 mb-0">SOLANA</h6>
                                <h6 data-testid="solanaComingSoonText" className="description mb-0 ">COMING SOON</h6>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12} className="mb-3 mb-md-4">
                    <h5 className="text-white-1">PROTOCOLS</h5>
                </Col>
                <Col md={6} className="mb-2 mb-md-4">
                    <div className="asset_div p-3 d-flex justify-content-between align-items-center active">
                        <div className="d-flex align-items-center w-100">
                            <img data-testid="sushiwapImg" src={Sushi} alt="" className="mr-3" />
                            <h5 data-testid="sushiwapText" className="mr-3 mt-2 mb-0">SUSHISWAP</h5>
                            <Badge pill variant="primary" className="pl-3 pr-3 pt-2 pb-2 mt-1 currency-font">3</Badge>
                            
                        </div>
                    </div>
                </Col>
                <Col md={6} className="mb-2 mb-md-4">
                    <div  className="asset_div p-3 d-flex justify-content-between align-items-center ">
                        <div className="d-flex align-items-center w-100" >
                            <img data-testid="uniSwapImg" src={Uniswap} alt="" className="mr-3" />
                            <h5 data-testid="uniSwapText" className="mr-3 mt-2 mb-0">UNISWAP</h5>
                            <Badge pill variant="secondary" className="pl-3 pr-3 pt-2 pb-2 mt-1 currency-font">0</Badge>
                        </div>
                    </div>
                </Col>
                <Col md={12} className="mt-md-4  my-3">
                    <div className="d-flex align-items-center">
                        <h5 className="text-white-1 mr-2 mt-1 mb-0">SUSHISWAP LP POSITIONS</h5>
                        <Badge pill variant="primary" className="pl-3 pr-3 pt-2 pb-2 mt-1 currency-font">
                            3
                        </Badge>
                    </div>
                </Col>
                <Col md={12}>
                    <Table responsive="md" borderless>
                        <thead>
                            <tr className="text-gray-3">
                                <th>ASSETS</th>
                                <th>VALUE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map(e => (
                                <>
                                    <tr data-testid={e.id} className={"text-gray-4 point-cursor" + (selected === e.id ? " tr-active" : "")} onClick={() => handleClickAsset(e.id)}>
                                        <td className={"table_col_first d-flex align-items-center" + (selected === e.id ? " bg-transparent" : "")}>
                                            <div className="d-flex mr-3">
                                                <img src={e.assetsIcon1} alt="" className="mr-2" />
                                                {e.assetsIcon2 && <img src={ETH} alt="" />}
                                            </div>
                                            <div>
                                                <h6 className="mb-0">{e.assets1}</h6>
                                                {!e.assets2 && <br />}<span>{e.assets2}</span>
                                            </div>
                                        </td>
                                        <td className={"table_col currency-font" + (selected === e.id ? " bg-transparent tr-active" : "")}>{e.value}</td>
                                        <td className={"table_col_last" + (selected === e.id ? " bg-transparent" : "")}>
                                            <div className="d-flex align-items-center action-button-container">
                                                <Button className="remix-button px-3 mt-2" disabled={selected === e.id}>
                                                    <span className="h-28">UNWRAP</span>
                                                </Button>
                                                <Button className="remix-button px-3 mt-2 ml-2">
                                                    <span className="h-28">REMIX</span>
                                                </Button>
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
                    <Button className="generate-button px-3 mt-2">
                        <span className="h-28">GENERATE NEW SUSHISWAP LP</span>
                    </Button>
                </Col>
            </Row>
        </Container>
    )
};

export default LpTools;