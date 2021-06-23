import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import YieldAggregator from '../../components/yield-aggregator';
import Sidebar from '../../components/sidebar';

const YieldAggregatorPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSidebar('yield-main'));
    });

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <YieldAggregator/>
            </Col>
            <Col lg={3}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default YieldAggregatorPage;