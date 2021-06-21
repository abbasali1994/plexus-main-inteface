import { Row, Col } from 'react-bootstrap';

import Header from '../../components/header';
import YieldAggregator from '../../components/yield-aggregator';
import Sidebar from '../../components/sidebar';

const YieldAggregatorPage = () => {

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <YieldAggregator/>
            </Col>
            <Col lg={3}>
                <Sidebar  whichSidebar={"yield"}/>
            </Col>
        </Row>
    );
}

export default YieldAggregatorPage;