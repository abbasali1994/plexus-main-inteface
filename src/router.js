/* eslint-disable react/display-name */
import Dashboard from "./pages/dashboard";
import Yield from "./pages/yield";
import LpTools from "./pages/lp";
import Faq from "./pages/faq";
import LendBorrow from "./pages/lendborrow";
import CrossChainTools from "./pages/cross-chain-tools";

const routes = {
  "/": () => <Dashboard />,
  "/yield": () => <Yield />,
  "/lp": () => <LpTools />,
  "/faq": () => <Faq />,
  "/lendborrow": () => <LendBorrow />,
  "/crosschaintools": () => <CrossChainTools />,
};

export default routes;
