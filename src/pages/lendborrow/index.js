import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import { constants } from "../../utils";
import { changeSidebar } from '../../redux/sidebarSlice';

import Header from '../../components/header';
import LendBorrowUI from '../../components/lend-borrow-ui';
import Sidebar from '../../components/sidebar';

const LendBorrowPage = () => {
    const dispatch = useDispatch();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        dispatch(changeSidebar('lend-borrow'));
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
                            <LendBorrowUI />
                        </Col>
                        <Col lg={3}>
                            <Sidebar/>
                        </Col>
                    </Row>
                ) : (
                    <>
                        <Header/>
                        <LendBorrowUI />
                    </>
                )
            }
            
        </>
    );
}

export default LendBorrowPage;