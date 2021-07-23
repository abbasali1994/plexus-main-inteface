import { navigate } from 'hookrouter';
import { usePath } from 'hookrouter';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';

import Logo from '../../assets/Logo.png';
import './index.scss';

const Header = () => {
    const pathName = usePath();

    return (
        <Container className="mt-5 ml-4">
            <Image src={Logo} className="logo"></Image>
            <Navbar bg="plexus-dark" variant="dark">
                <Nav>
                    <Nav.Link onClick={()=>navigate('/')} className="navbar-start" active={pathName === '/'}>DASHBOARD</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/yield')} active={pathName === '/yield'}>YIELD AGGREGATOR</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/lp')} active={pathName === '/lp'}>LP TOOLS</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/lendborrow')} className="navbar-grey">LEND & BORROW</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/crosschaintools')} className="navbar-grey">CROSS-CHAIN TOOLS</Nav.Link>
                    <Nav.Link onClick={()=>navigate('/faq')} className="navbar-end" active={pathName === '/faq'}>FAQ</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}

export default Header;