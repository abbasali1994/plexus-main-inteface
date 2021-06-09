import { Row, Col } from 'react-bootstrap';

import Header from '../../components/header';
import DashboardUI from '../../components/dashboard-ui';
import Sidebar from '../../components/sidebar';

const DashboardPage = () => {

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <DashboardUI/>
            </Col>
            <Col lg={3}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default DashboardPage;