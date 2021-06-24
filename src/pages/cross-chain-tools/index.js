import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import CrossChainToolsUI from '../../components/cross-chain-tools-ui';
import Sidebar from '../../components/sidebar';

const CrossChainToolsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSidebar('cross-chain-tools'));
    });

    return (
        <Row>
            <Col lg={9}>
                <Header/>
                <CrossChainToolsUI/>
            </Col>
            <Col lg={3}>
                <Sidebar/>
            </Col>
        </Row>
    );
}

export default CrossChainToolsPage;