import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import LpTools from '../../components/lp-tools';
import Sidebar from '../../components/sidebar';

const LpToolsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSidebar('lp-main'));
    });

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