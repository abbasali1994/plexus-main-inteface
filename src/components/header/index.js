import classNames from "classnames";
import { useState, useEffect } from "react";
import { navigate } from "hookrouter";
import { usePath } from "hookrouter";
import { Container, Image, Navbar, Nav } from "react-bootstrap";

import { constants } from "../../utils";
import ConnectWallet from "../connect-wallet";
import MobileMenuWrapper from "./mobile-menu-wrapper";

import Logo from "../../assets/Logo.png";
import Menu from "../../assets/menu.svg";
import "./index.scss";
import { menuItems } from "./menuItems";

const DesktopHeader = () => {
  const pathName = usePath();

  return (
    <Container className="mt-5 ml-4">
      <Image src={Logo} className="logo"></Image>
      <Navbar bg="plexus-dark" variant="dark">
        <Nav>
          {menuItems.map((menuItem, index) => (
            <Nav.Link
              onClick={() => navigate(menuItem.path)}
              className={classNames({
                "navbar-start": index === 0,
                "navbar-end": index === menuItems.length - 1,
                "navbar-grey": menuItem.disabled,
              })}
              active={pathName === menuItem.path}
            >
              {menuItem.name.toUpperCase()}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
};

const MobileHeader = (props) => {
  const pathName = usePath();

  const pageName = (pathName) => {
    const page = menuItems.find((menuItem) => menuItem.path === pathName);
    return page.name;
  };

  return (
    <Container className="pt-5 pb-3 mobile-nav-container">
      <h6 className="mobile-header-label">{pageName(pathName)}</h6>
      <Image
        src={Menu}
        className="menu"
        onClick={() => props.setMobileMenu(true)}
      ></Image>
    </Container>
  );
};

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
      {mobileMenu && (
        <MobileMenuWrapper
          setMobileMenu={setMobileMenu}
          setConnectWallet={setConnectWallet}
          pathName={pathName}
        />
      )}
      {width > constants.width.mobile ? (
        <DesktopHeader />
      ) : (
        <MobileHeader mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      )}
      <ConnectWallet show={connectWallet} setShow={setConnectWallet} />
    </>
  );
};

export default Header;
