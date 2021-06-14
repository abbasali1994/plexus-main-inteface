import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import LogoIcon from '../../assets/LogoIcon.png';

import './index.scss';

const Sidebar = () => {    
    return (
        <Container className="mt-5">
            <Container className="title-container">
                <Row>
                    <Col lg="2">
                        <Image src={LogoIcon}></Image>
                    </Col>
                    <Col>
                        <span className="address-text">0X1E....D396</span>
                        <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                    </Col>
                </Row>
            </Container>
            <Container className="info-container">
                <Row className="net-worth-row">
                    <span className="net-worth-label">NET WORTH</span>
                    <div className="balance-text">$34,532.19</div>
                </Row>
                <Row className="description-row">
                    <span className="subtitle-text">ASSETS OVERVIEW</span>
                    <div className="description-text">Click any category to see the breakdown of these assets in your portfolio, and perform related actions.</div>
                </Row>
                <Row className="description-row">
                    <span className="subtitle-text">YIELD FARMING</span>
                    <div className="description-text">Select any farm you are participating in to manage your position and claim any available rewards you’ve earned.</div>
                </Row>
            </Container>
        </Container>
    )
}

export default Sidebar;