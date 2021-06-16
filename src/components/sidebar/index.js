import { Container, Row, Col, Image, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import LogoIcon from '../../assets/LogoIcon.png';

import './index.scss';

const Sidebar = () => {
    const rows = [1, 2, 3, 4, 5];
    const cols = [1, 2, 3, 4, 5];
    return (
        <Container className="mt-5 pr-5">
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
                <Container className="net-worth-row">
                    <div className="net-worth-label">NET WORTH</div>
                    <div className="balance-text gredent_text">$34,532.19</div>
                </Container>
                <Container className="description-row">
                    <Row>
                        <Col lg="2" className="description-part"></Col>
                        <Col className="ml-4 mr-4">
                            <div className="subtitle-text">ASSETS OVERVIEW</div>
                            <div className="description-text">Click any category to see the breakdown of these assets in your portfolio, and perform related actions.</div>
                        </Col>
                    </Row>
                </Container>
                <Container className="description-yield">
                    <Row>
                        <Col lg="2" className="description-part"></Col>
                        <Col className="ml-4 mr-4">
                            <div className="subtitle-text">YIELD FARMING</div>
                            <div className="description-text">Select any farm you are participating in to manage your position and claim any available rewards you’ve earned.</div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="table-grid">
                {rows.map(row => (
                    <Row key={"row" + row}>
                        <>
                            <Col lg="2" className="grid-col"></Col>
                            {cols.map(col => (
                                <Col lg="2" className="grid-cell" key={"row" + row + "col" + col}>
                                </Col>
                            ))}
                        </>
                    </Row>
                ))}
            </Container>
        </Container>
    )
}

export default Sidebar;