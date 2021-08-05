import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { constants } from "../../utils";
import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import YieldAggregator from '../../components/yield-aggregator';
import Sidebar from '../../components/sidebar';

const YieldAggregatorPage = () => {
    const dispatch = useDispatch();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        dispatch(changeSidebar('yield-main'));
    });

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    });

    return (
        <>
            {
                width > constants.width.mobile ? (
                    <Row>
                        <Col lg={9}>
                            <Header/>
                            <YieldAggregator/>
                        </Col>
                        <Col lg={3}>
                            <Sidebar/>
                        </Col>
                    </Row>
                ) : (
                    <>
                        <Header/>
                        <YieldAggregator/>
                    </>
                )
            }
            
        </>
    );
}

export default YieldAggregatorPage;