import { Row, Col } from 'react-bootstrap';

import Header from '../../components/header';
import Faq from '../../components/faq';
import Sidebar from '../../components/sidebar';

const FaqPage = () => {

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <Faq/>
            </Col>
            <Col lg={3}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default FaqPage;