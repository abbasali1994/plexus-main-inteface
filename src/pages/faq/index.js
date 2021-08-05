import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

import { constants } from "../../utils";
import Header from '../../components/header';
import Faq from '../../components/faq';
import Sidebar from '../../components/sidebar';

const FaqPage = () => {
    const [width, setWidth] = useState(window.innerWidth);
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
                            <Faq/>
                        </Col>
                        <Col lg={3}>
                            <Sidebar/>
                        </Col>
                    </Row>
                ) : (
                    <>
                        <Header/>
                        <Faq/>
                    </>
                )
            }            
        </>
    );
}

export default FaqPage;