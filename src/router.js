import Dashboard from './pages/dashboard';
import Yield from './pages/yield';
import LpTools from './pages/lp';
import Faq from './pages/faq';

const routes = {
  "/": () => <Dashboard/>,
  "/yield": () => <Yield/>,
  "/lp": () => <LpTools/>,
  "/faq": () => <Faq/>
};

export default routes;