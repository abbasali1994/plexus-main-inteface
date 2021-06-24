import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import StayTuned from '../../assets/stay_tuned.svg';
import './index.scss';
// import {Link} from 'react-router-dom';
import {A} from 'hookrouter';

const LendBorrowUI = () => {

    return (
        <Container fluid className="py-md-5 pr-md-5  ml-4">
            <Row>
                <Col md={12} className="mb-3 mb-md-5">
                    <Row className="go-back" >
                        <FontAwesomeIcon className="arrow-left" icon={faArrowLeft} />
                        <A href="/"><h6 className="text-muted mb-3">BACK TO DASHBOARD</h6></A>
                    </Row>
                </Col>
                <Col md={12} className="staytuned-box">
                    <img src={StayTuned} alt=""/>
                </Col>
            </Row>
        </Container>
       
    )
};

export default LendBorrowUI;