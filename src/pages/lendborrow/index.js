import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import LendBorrowUI from '../../components/lend-borrow-ui';
import Sidebar from '../../components/sidebar';

const LendBorrowPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSidebar('lend-borrow'));
    });

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <LendBorrowUI/>
            </Col>
            <Col lg={3}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default LendBorrowPage;