import { Row, Col } from 'react-bootstrap';

import Header from '../../components/header';
import LpTools from '../../components/lp-tools';
import Sidebar from '../../components/sidebar';

const LpToolsPage = () => {

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <LpTools/>
            </Col>
            <Col lg={3}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default LpToolsPage;