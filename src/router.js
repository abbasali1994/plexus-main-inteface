import Dashboard from './pages/dashboard';
import Yield from './pages/yield';

const routes = {
  "/": () => <Dashboard/>,
  "/yield": () => <Yield/>
};

export default routes;