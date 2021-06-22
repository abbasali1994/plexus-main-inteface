import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import DashboardUI from '../../components/dashboard-ui';
import Sidebar from '../../components/sidebar';

const DashboardPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSidebar('dashboard-all'));
    });

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