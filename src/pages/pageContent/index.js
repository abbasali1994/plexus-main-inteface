import classNames from "classnames";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CrossChainToolsUI from "../../components/cross-chain-tools-ui";
import DashboardUI from "../../components/dashboard-ui";
import Faq from "../../components/faq";
import Header from "../../components/header";
import LendBorrowUI from "../../components/lend-borrow-ui";
import LpTools from "../../components/lp-tools";
import YieldAggregator from "../../components/yield-aggregator";
import { changeSidebar } from "../../redux/sidebarSlice";
import { constants } from "../../utils";

const PageContent = ({ pageValue }) => {
  const [isDesktopView, setIsDesktopView] = useState(
    window.innerWidth > constants.width.mobile
  );

  useEffect(() => {
    dispatch(changeSidebar(pageValue));
    function handleResize() {
      setIsDesktopView(window.innerWidth > constants.width.mobile);
    }
    window.addEventListener("resize", handleResize);
  });

  const dispatch = useDispatch();

  let children = "";

  switch (pageValue) {
    case "cross-chain-tools":
      children = <CrossChainToolsUI />;
      break;
    case "dashboard-all":
      children = <DashboardUI />;
      break;
    case "lend-borrow":
      children = <LendBorrowUI />;
      break;
    case "lp-main":
      children = <LpTools />;
      break;
    case "yield-main":
      children = <YieldAggregator />;
      break;
    case "faq":
      children = <Faq />;
      break;
    default:
      break;
  }

  return (
    <>
      <Header />
      <Container
        fluid
        className={classNames("py-md-5 pr-md-5", {
          "pl-4": isDesktopView,
          "mt-4": !isDesktopView,
        })}
      >
        {children}
      </Container>
    </>
  );
};

export default PageContent;
