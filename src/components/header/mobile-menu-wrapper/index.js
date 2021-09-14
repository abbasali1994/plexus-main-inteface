import classNames from "classnames";
import { navigate } from "hookrouter";
import { Container, Image } from "react-bootstrap";
import Close from "../../../assets/close_menu.svg";
import { menuItems } from "../menuItems";

const MobileMenuWrapper = ({ setMobileMenu, pathName, setConnectWallet }) => {
  return (
    <div className="mobile-menu-wrapper">
      <Container className="pt-5 pb-3 mobile-nav-container">
        <h6 className="mobile-header-label">MENU</h6>
        <Image
          src={Close}
          className="close"
          onClick={() => setMobileMenu(false)}
        ></Image>
      </Container>
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.path}
          className={classNames("mobile-menu-label", {
            active: pathName === menuItem.path,
            disabled: menuItem.disabled,
          })}
          onClick={() => {
            navigate(menuItem.path);
            setMobileMenu(false);
          }}
        >
          {menuItem.name.toUpperCase()}
        </div>
      ))}
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
  );
};

export default MobileMenuWrapper;
