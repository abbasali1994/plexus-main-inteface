import { useState, useEffect } from "react";
import { navigate } from 'hookrouter';
import { usePath } from 'hookrouter';
import { Container, Image, Navbar, Nav } from 'react-bootstrap';

import { constants } from "../../utils";
import ConnectWallet from "../connect-wallet";

import Logo from '../../assets/Logo.png';
import Menu from '../../assets/menu.svg';
import Close from '../../assets/close_menu.svg';
import './index.scss';

const DesktopHeader = () => {
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

const MobileHeader = (props) => {
    const pathName = usePath();

    const pageName = (pathName) => {
        switch (pathName) {
            case '/':
                return 'DASHBOARD';
            case '/yield':
                return 'YIELD AGGREGATOR';
            case '/lp':
                return 'LP TOOLS';
            case '/lendborrow':
                return 'LEND & BORROW';
            case '/crosschaintools':
                return 'CROSS-CHAIN TOOLS';
            case '/faq':
                return 'FAQ';
            default:
                return 'DASHBOARD';
        }
    }

    return (
        <Container className="pt-5 pb-3 mobile-nav-container">
            <h6 className="mobile-header-label">{pageName(pathName)}</h6>
            <Image src={Menu} className="menu" onClick={() => props.setMobileMenu(true)}></Image>
        </Container>
    )
}

const Header = () => {
    const pathName = usePath();
    const [width, setWidth] = useState(window.innerWidth);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [connectWallet, setConnectWallet] = useState(false);
    useEffect(() => {
        function handleResize() {
        setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
    });

    return (
        <>
        {
            mobileMenu && (
                <div className="mobile-menu-wrapper">
                    <Container className="pt-5 pb-3 mobile-nav-container">
                        <h6 className="mobile-header-label">MENU</h6>
                        <Image src={Close} className="close" onClick={() => setMobileMenu(false)}></Image>
                    </Container>
                    <div 
                        className={"mobile-menu-label" + (pathName === '/' ? " active" : "")}
                        onClick={() => {
                            navigate('/');
                            setMobileMenu(false);
                        }}
                    >
                        DASHBOARD
                    </div>
                    <div 
                        className={"mobile-menu-label" + (pathName === '/yield' ? " active" : "")}
                        onClick={() => {
                            navigate('/yield');
                            setMobileMenu(false);
                        }}
                    >
                        YIELD AGGREGATOR
                    </div>
                    <div
                        className={"mobile-menu-label" + (pathName === '/lp' ? " active" : "")}
                        onClick={() => {
                            navigate('/lp');
                            setMobileMenu(false);
                        }}
                    >
                        LP TOOLS
                    </div>
                    <div 
                        className="mobile-menu-label disabled"
                        onClick={() => {
                            navigate('/lendborrow');
                            setMobileMenu(false);
                        }}
                    >
                        LEND & BORROW
                    </div>
                    <div 
                        className="mobile-menu-label disabled"
                        onClick={() => {
                            navigate('/crosschaintools');
                            setMobileMenu(false);
                        }}
                    >
                        CROSS-CHAIN TOOLS
                    </div>
                    <div 
                        className={"mobile-menu-label" + (pathName === '/faq' ? " active" : "")}
                        onClick={() => {
                            navigate('/faq');
                            setMobileMenu(false);
                        }}
                    >
                        FAQ
                    </div>
                    <div 
                        className="mobile-menu-label"
                        onClick={() => {
                            setConnectWallet(true);
                            setMobileMenu(false);
                        }}
                    >
                        CONNECT WALLET
                    </div>
                </div>
            )
        }
        {
            width > constants.width.mobile ? (
                <DesktopHeader />
            ) : (
                <MobileHeader
                    mobileMenu={mobileMenu}
                    setMobileMenu={setMobileMenu}
                />
            )
        }
        <ConnectWallet show={connectWallet} setShow={setConnectWallet} />
        </>
    )

}

export default Header;