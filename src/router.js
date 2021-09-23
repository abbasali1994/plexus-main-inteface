/* eslint-disable react/display-name */
import Page from "./pages";

const routes = {
  "/": () => <Page pageValue={"dashboard-all"} />,
  "/yield": () => <Page pageValue={"yield-main"} />,
  "/lp": () => <Page pageValue={"lp-main"} />,
  "/faq": () => <Page pageValue={"faq"} />,
  "/lendborrow": () => <Page pageValue={"lend-borrow"} />,
  "/crosschaintools": () => <Page pageValue={"cross-chain-tools"} />,
};

export default routes;
