import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { formatAddress } from "../../utils";
import { userAddress } from "../../redux/walletSlice";
import "./index.scss";

const UserAddress = ({ type }) => {
  const address = useSelector(userAddress);
  return type === "sidebar" ? (
    <SidebarDisplay address={address} />
  ) : (
    <PopupDisplay address={address} />
  );
};

const SidebarDisplay = ({ address }) => {
  return (
    <Col className="p-0">
      <span className="address-text">{formatAddress(address)}</span>
      <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
    </Col>
  );
};

const PopupDisplay = ({ address }) => {
  return (
    <Col className="p-0">
      <span className="address-popup-text ml-3">{formatAddress(address)}</span>
      <FontAwesomeIcon className="caret-down pt-1" icon={faCaretDown} />
    </Col>
  );
};

export default UserAddress;
