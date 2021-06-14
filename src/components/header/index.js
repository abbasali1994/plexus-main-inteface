import { Container, Image, Navbar, Nav } from 'react-bootstrap';

import Logo from '../../assets/Logo.png';
import './index.scss';

const Header = () => {
    return (
        <Container className="m-5">
            <Image src={Logo} className="logo"></Image>
            <Navbar bg="bg-dark-color" variant="dark">
                <Nav>
                    <Nav.Link href="#dashboard" className="navbar-start">DASHBOARD</Nav.Link>
                    <Nav.Link href="#yield">YIELD AGGREGATOR</Nav.Link>
                    <Nav.Link href="#lp">LP TOOLS</Nav.Link>
                    <Nav.Link href="#lend" disabled>LEND & BORROW</Nav.Link>
                    <Nav.Link href="#cross" disabled>CROSS-CHAIN TOOLS</Nav.Link>
                    <Nav.Link href="#faq" className="navbar-end">FAQ</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header;